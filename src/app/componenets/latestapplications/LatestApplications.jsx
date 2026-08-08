"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import Pagination from "../pagination/Pagination";

const LatestApplications = () => {
  const [studentsDataItems, setStudentsDataItems] = useState([]);
  const [chunks, setChunks] = useState([]);
  const [chunkNumber, setChunkNumber] = useState(0);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [originalData, setOriginalData] = useState([]); // Store original data for search

  // Fetch students data
  const studentsData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/getAllStudents");
      const data = await response.json();
      // Filter out students without nationalid
      const filteredData = (data.data || []).filter(student => student?.nationalid);
      setStudentsDataItems(filteredData);
      setOriginalData(filteredData); // Store original data
    } catch (error) {
      console.error("Error fetching students:", error);
      setStudentsDataItems([]);
      setOriginalData([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    studentsData();
  }, [studentsData]);

  // Chunk data into pages of 10
  const chunker = useCallback((students) => {
    const chunked = [];
    for (let i = 0; i < students.length; i += 10) {
      chunked.push(students.slice(i, i + 10));
    }
    setChunks(chunked);
    setChunkNumber(0); // Reset to first page when data changes
  }, []);

  useEffect(() => {
    chunker(studentsDataItems);
  }, [studentsDataItems, chunker]);

  // Toggle accordion
  const toggleAccordion = useCallback((index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  }, []);

  // Search functionality - FIXED
  const searcher = useCallback(
    (value) => {
      setInputText(value);

      if (!value || value.trim() === "") {
        // Reset to original data
        setStudentsDataItems(originalData);
        return;
      }

      const trimmedValue = value.trim();
      const isNumeric = /^\d+$/.test(trimmedValue);

      // Filter from original data
      const filteredData = originalData.filter((item) => {
        if (isNumeric) {
          return item.seatnum?.toString().includes(trimmedValue);
        } else {
          return item.studentname
            ?.toLowerCase()
            .includes(trimmedValue.toLowerCase());
        }
      });
      
      setStudentsDataItems(filteredData);
    },
    [originalData], // Use originalData instead of studentsData
  );

  // Get subject display name
  const getSubjectName = useCallback((subject) => {
    const subjectMap = {
      arabic: "لغة عربية",
      english: "لغة إنجليزية",
      social: "دراسات إجتماعية",
      algebra: "جبر",
      geometry: "هندسة",
      sciense: "علوم",
      ict: "حاسب آلي",
      religious: "تربية دينية",
      art: "تربية فنية",
      reservasionconfirm: "مؤكد",
    };
    return subjectMap[subject] || subject;
  }, []);

  // Get subjects from student object - FIXED to include all subjects
  const getStudentSubjects = useCallback(
    (student) => {
      const subjectKeys = [
        'arabic', 'english', 'social', 'algebra', 
        'geometry', 'sciense', 'ict', 'religious', 'art'
      ];
      return subjectKeys
        .filter((key) => student[key] === true)
        .map(getSubjectName);
    },
    [getSubjectName],
  );

  // Current page data
  const currentPageData = useMemo(() => {
    return chunks[chunkNumber] || [];
  }, [chunks, chunkNumber]);

  // Loading skeleton
  const LoadingSkeleton = () => (
    <div className="animate-pulse space-y-4">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="rounded-lg border border-gray-200 bg-gray-50 p-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex-1 space-y-2">
              <div className="h-4 w-32 rounded bg-gray-300"></div>
              <div className="h-3 w-20 rounded bg-gray-300"></div>
            </div>
            <div className="h-6 w-16 rounded bg-gray-300"></div>
          </div>
        </div>
      ))}
    </div>
  );

  // Empty state
  const EmptyState = () => (
    <div className="py-8 text-center">
      <p className="text-gray-500">لا توجد طلبات حالياً</p>
    </div>
  );

  return (
    <section className="flex w-full flex-col rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-6 py-4">
        <h4 className="text-xl font-bold text-blue-600">أحدث الطلبات</h4>
        <div className="mr-4 flex flex-grow items-center justify-end gap-4">
          <span className="text-xs font-bold text-gray-500">
            إجمالي عدد الطلبات : {studentsDataItems.length}
          </span>
          <div className="relative w-full max-w-xs">
            <input
              className="w-full rounded-lg border border-gray-300 bg-white p-2 pr-10 text-sm transition-all outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              type="text"
              placeholder="بحث باسم الطالب أو رقم الطلب..."
              onChange={(e) => searcher(e.target.value)}
              value={inputText}
            />
            <span className="material-symbols-outlined pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-sm text-gray-500">
              search
            </span>
          </div>
          <button className="text-xs font-bold text-blue-600 hover:underline">
            عرض الكل
          </button>
        </div>
      </div>

      {studentsDataItems.length > 0 && (
        <Pagination
          setChunkNumber={setChunkNumber}
          chunkNumber={chunkNumber}
          studentsDataItems={studentsDataItems}
          totalPages={chunks.length}
        />
      )}

      <div className="space-y-2 p-6">
        {isLoading ? (
          <LoadingSkeleton />
        ) : studentsDataItems.length === 0 ? (
          <EmptyState />
        ) : (
          currentPageData.map((student, index) => {
            const isExpanded = expandedIndex === chunkNumber * 10 + index;
            const subjects = getStudentSubjects(student);
            const date = student?.preservedate ? new Date(student.preservedate) : null;

            return (
              <div
                key={student._id || index}
                className={`overflow-hidden rounded-lg border border-gray-200 bg-gray-50 shadow shadow-gray-200 transition-all duration-300 ${
                  isExpanded ? "max-h-[500px]" : "max-h-[60px]"
                }`}
              >
                <button
                  className="flex w-full cursor-pointer items-center justify-between p-4 text-right transition-colors hover:bg-gray-200"
                  onClick={() => toggleAccordion(chunkNumber * 10 + index)}
                >
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-gray-900">
                        {index + 1} -{" "}
                      </span>
                      <span className="text-base font-bold text-gray-900">
                        {student?.studentname || "غير معروف"}
                      </span>
                    </div>
                    <span className="text-xs text-gray-600">
                      #{student?.reservationnumber || "غير معروف"}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-bold text-teal-800">
                      مراجعة
                    </span>
                    <span className="material-symbols-outlined text-gray-500 transition-transform duration-300">
                      expand_more
                    </span>
                  </div>
                </button>

                <div className="border-t border-gray-200/30 bg-white p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="mb-1 text-xs text-gray-600">تاريخ الطلب</p>
                      <p className="text-sm font-bold">
                        {date ? date.toLocaleDateString("ar-EG", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }) : "غير محدد"}
                      </p>
                    </div>
                    <div>
                      <p className="mb-1 text-xs text-gray-600">
                        المواد المطلوبة
                      </p>
                      <p className="flex flex-wrap gap-2 text-sm font-bold">
                        {subjects.length > 0 ? (
                          subjects.map((subject, idx) => (
                            <span
                              key={idx}
                              className={`rounded px-2 py-1 text-xs bg-blue-200 text-teal-800 cursor-pointer transition-colors hover:bg-teal-100 hover:text-teal-800`} 
                            >
                              {subject}
                            </span>
                          ))
                        ) : (
                          <span className="text-gray-400">لا توجد مواد</span>
                        )}
                      </p>
                    </div>
                    <div>
                      <p className="mb-1 text-xs text-gray-600">عدد المواد</p>
                      <p className="text-sm font-bold">
                        {student?.subjectnumber || 0}
                      </p>
                      <div className="mt-2">
                        <p className="mb-1 text-xs text-gray-600">التكلفة</p>
                        <p className="text-sm font-bold">
                          {student?.totalcost || 0} جنيها
                        </p>
                        <p>{student?.$id}</p>
                      </div>
                    </div>
                    <div>
                      <p className="mb-1 text-xs text-gray-600">رقم الجلوس</p>
                      <p className="text-sm font-bold">
                        {student?.seatnum || "N/A"}
                      </p>
                      <div>
                        <p className="mb-1 text-xs text-gray-600">
                          رقم المجموعة
                        </p>
                        <p className="text-sm font-bold">
                          {student?.groupnumber || "لم يتحدد المجموهة بعد"}
                        </p>
                      </div>
                    </div>
                        <button className="mt-2 w-fit self-end rounded bg-blue-500 text-white transition-colors hover:bg-green-600 px-3 py-1 cursor-pointer"> تأكيد الحجز </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
};

export default LatestApplications;