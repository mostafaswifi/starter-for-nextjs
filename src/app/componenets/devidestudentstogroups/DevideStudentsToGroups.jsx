import { useState, useEffect } from "react";
import html2pdf from 'html2pdf.js';

const DevideStudentsToGroups = ({ data = [], handleAlterDate }) => {
  const [numberforeachgroup, setNumberForEachGroup] = useState(
    data[0]?.numberforeachgroup || 100,
  );
  const [students, setStudents] = useState([]);
  const [groupedStudents, setGroupedStudents] = useState([]);

  const getAllStudents = async () => {
    try {
      const response = await fetch("/api/getAllStudents");
      const result = await response.json();
      if (result.success) {
        setStudents(result.data);
        setGroupedStudents(groupStudentsByNumber(result.data));
      }
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const groupStudentsByNumber = (studentArray) => {
    return studentArray.reduce((acc, student) => {
      const groupKey = student.groupnumber || "ungrouped";

      if (!acc[groupKey]) {
        acc[groupKey] = [];
      }

      acc[groupKey].push(student);

      return acc;
    }, {});
  };

  useEffect(() => {
    getAllStudents();
  }, []);

  const printGroup = async (studentsGroup) => {
    try {
      const element = document.createElement('div');
      element.dir = 'rtl';
      element.style.padding = '0';
      element.style.fontFamily = 'Cairo, sans-serif';
      element.style.color = '#000000';

      let rowsHTML = studentsGroup.map((item, idx) => `
        <tr>
          <td style="border: 1px solid #010101; padding: 6px; padding-bottom:12px; text-align: center; font-size: 12px">${idx + 1}</td>
          <td style="border: 1px solid #010101; padding: 6px; padding-bottom:12px; text-align: center; font-size: 12px">${item.groupnumber || ''}</td>
          <td style="border: 1px solid #010101; padding: 6px; padding-bottom:12px; text-align: right; font-size: 16px">${item.studentname || ''}</td>
          <td style="border: 1px solid #010101; padding: 6px; padding-bottom:12px; text-align: center; font-size: 12px">${item.seatnum || ''}</td>
          <td style="border: 1px solid #010101; padding: 6px; padding-bottom:12px; text-align: center; font-size: 12px">${item.adminstration || ''}</td>
          <td style="border: 1px solid #010101; padding: 6px; padding-bottom:12px; text-align: center; font-size: 12px">${item.arabic ? '✓' : ''}</td>
          <td style="border: 1px solid #010101; padding: 6px; padding-bottom:12px; text-align: center; font-size: 12px">${item.english ? '✓' : ''}</td>
          <td style="border: 1px solid #010101; padding: 6px; padding-bottom:12px; text-align: center; font-size: 12px">${item.social ? '✓' : ''}</td>
          <td style="border: 1px solid #010101; padding: 6px; padding-bottom:12px; text-align: center; font-size: 12px">${item.algebra ? '✓' : ''}</td>
          <td style="border: 1px solid #010101; padding: 6px; padding-bottom:12px; text-align: center; font-size: 12px">${item.geometry ? '✓' : ''}</td>
          <td style="border: 1px solid #010101; padding: 6px; padding-bottom:12px; text-align: center; font-size: 12px">${item.sciense ? '✓' : ''}</td>
          <td style="border: 1px solid #010101; padding: 6px; padding-bottom:12px; text-align: center; font-size: 12px">${item.ict ? '✓' : ''}</td>
          <td style="border: 1px solid #010101; padding: 6px; padding-bottom:12px; text-align: center; font-size: 12px">${item.art ? '✓' : ''}</td>
          <td style="border: 1px solid #010101; padding: 6px; padding-bottom:12px; text-align: center; font-size: 12px">${item.religious ? '✓' : ''}</td>
          <td style="border: 1px solid #010101; padding: 6px; padding-bottom:12px; text-align: center; font-size: 12px">${item.subjectnumber || ''}</td>
          <td style="border: 1px solid #010101; padding: 6px; padding-bottom:12px; text-align: center; font-size: 12px">${item.totalcost || ''}</td>
        </tr>
      `).join('');

      element.innerHTML = `
        <h2 style="color: #010101; margin-bottom: 5px;">تقرير بيانات الطلاب</h2>
        <p style="font-size: 12px; color: #000000; margin-bottom: 20px;">تاريخ الإنشاء: ${new Date().toLocaleString()}</p>
        <table style="width: 100%; border-collapse: collapse; font-size: 12px; padding: 30px">
          <thead>
            <tr style="background-color: #2980b9; color: white; border: 1px solid #010101;">
              <th style="border: 1px solid #000; padding: 8px; padding-bottom:18px; font-size:14px">م</th>
              <th style="border: 1px solid #000; padding: 8px; padding-bottom:18px; font-size:14px">مجموعة</th>
              <th style="border: 1px solid #000; padding: 8px; padding-bottom:18px; font-size:14px">الاســـــــــــــــم</th>
              <th style="border: 1px solid #000; padding: 8px; padding-bottom:18px; font-size:14px">جلوس</th>
              <th style="border: 1px solid #000; padding: 8px; padding-bottom:18px; font-size:14px">الإدارة</th>
              <th style="border: 1px solid #000; padding: 8px; padding-bottom:18px; font-size:14px">العربية</th>
              <th style="border: 1px solid #000; padding: 8px; padding-bottom:18px; font-size:14px">الإنجليزية</th>
              <th style="border: 1px solid #000; padding: 8px; padding-bottom:18px; font-size:14px">دراسات</th>
              <th style="border: 1px solid #000; padding: 8px; padding-bottom:18px; font-size:14px">الجبر</th>
              <th style="border: 1px solid #000; padding: 8px; padding-bottom:18px; font-size:14px">الهندسة</th>
              <th style="border: 1px solid #000; padding: 8px; padding-bottom:18px; font-size:14px">العلوم</th>
              <th style="border: 1px solid #000; padding: 8px; padding-bottom:18px; font-size:14px">ICT</th>
              <th style="border: 1px solid #000; padding: 8px; padding-bottom:18px; font-size:14px">الرسم</th>
              <th style="border: 1px solid #000; padding: 8px; padding-bottom:18px; font-size:14px">دين</th>
              <th style="border: 1px solid #000; padding: 8px; padding-bottom:18px; font-size:14px">عدد المواد</th>
              <th style="border: 1px solid #000; padding: 8px; padding-bottom:18px; font-size:14px">التكلفة</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHTML}
          </tbody>
        </table>
      `;

      const options = {
        margin: 5,
        filename: `${studentsGroup[0]?.groupnumber || 'group'}-تقرير بيانات الطلاب.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
      };

      await html2pdf().from(element).set(options).save();
    } catch (error) {
      console.error('Failed to download PDF:', error);
    }
  };

  const handleGroupNum = (e) => {
    const newValue = Number(e.target.value);
    setNumberForEachGroup(newValue);
    
    setTimeout(() => {
      if (typeof handleAlterDate === "function" && data[0]?.$id) {
        handleAlterDate(data[0].$id, {
          numberforeachgroup: newValue,
        });
      } else {
        console.warn("handleAlterDate prop is missing or invalid.");
      }
    }, 1000);
  };

  return (
    <div className="flex flex-col gap-4">
      <section className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-6 py-4">
          <h4 className="text-xl font-bold text-blue-600">تقسيم الطلاب</h4>
          <div className="mr-4 flex items-center gap-2">
            <label
              htmlFor="number"
              className="text-sm font-medium text-gray-600"
            >
              السعة القصوى:
            </label>

            <select
              id="number"
              name="number"
              value={numberforeachgroup}
              onChange={(e) => handleGroupNum(e)}
              className="w-20 rounded-lg border border-gray-300 bg-white p-2 text-sm outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            >
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="300">300</option>
              <option value="400">400</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-2">
          {Object.entries(groupedStudents).map(([groupKey, groupStudentsList]) =>
            groupKey !== "ungrouped" ? (
              <div
                key={groupKey}
                className="h-100 overflow-y-auto rounded-lg border border-t-4 border-blue-600 border-gray-200 bg-blue-50/30 p-4"
              >
                <div className="mb-2 flex items-center justify-between bg-gray-200 p-4">
                  <span className="font-bold text-blue-600">
                    المجموعة {groupKey}
                  </span>
                  <span className="font-bold text-blue-600">
                    {groupStudentsList[0]?.preservedate?.substring(0, 10)}
                  </span>
                  <span
                    className={`flex items-center gap-2 font-bold ${groupStudentsList?.length < numberforeachgroup ? "text-red-600" : "text-green-600"}`}
                  >
                    {groupStudentsList.length}
                    {groupStudentsList?.length < numberforeachgroup
                      ? " / غير مكتمل"
                      : " / مكتمل"}
                  </span>
                  <button
                    onClick={() => printGroup(groupStudentsList)}
                    className="flex cursor-pointer items-center gap-2 rounded-lg bg-blue-600 px-6 py-2 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md"
                  >
                    <span className="material-symbols-outlined">print</span>
                    طباعة المجموعة
                  </button>
                </div>
                <div className="space-y-1">
                  {groupStudentsList.map((student, idx) => (
                    <div
                      key={student.$id}
                      className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-2"
                    >
                      {idx + 1}
                      <span className="text-sm font-bold text-gray-600">
                        {student.studentname}
                      </span>
                      <span className="text-sm font-bold text-gray-600">
                        {student.arabic ? "عربي" : ""}
                      </span>
                      <span className="text-sm font-bold text-gray-600">
                        {student.english ? "انجليزي" : ""}
                      </span>
                      <span className="text-sm font-bold text-gray-600">
                        {student.social ? "دراسات" : ""}
                      </span>
                      <span className="text-sm font-bold text-gray-600">
                        {student.algebra ? "جبر" : ""}
                      </span>
                      <span className="text-sm font-bold text-gray-600">
                        {student.geometry ? "هندسة" : ""}
                      </span>
                      <span className="text-sm font-bold text-gray-600">
                        {student.sciense ? "علوم" : ""}
                      </span>
                      <span className="text-sm font-bold text-gray-600">
                        {student.ict ? "كمبيوتر " : ""}
                      </span>
                      <span className="text-sm font-bold text-gray-600">
                        {student.religious ? "دين" : ""}
                      </span>
                      <span className="text-sm font-bold text-gray-600">
                        {student.art ? "رسم" : ""}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null,
          )}
        </div>
      </section>

      {/* System Alert */}
      <section className="relative overflow-hidden rounded-xl bg-blue-900 p-6 text-white shadow-md transition-shadow hover:shadow-lg">
        <div className="relative z-10">
          <h4 className="mb-2 text-xl font-bold">تنبيه النظام</h4>
          <p className="mb-6 text-sm opacity-90">
            هناك {Object.entries(groupedStudents).length - 1} مجموعة تم توزيعها
            على المقرات الإدارية المختصة.
          </p>
          <button className="rounded-full bg-white px-6 py-1 text-xs font-bold text-blue-600 transition-all hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-md">
            تم التوزيع
          </button>
        </div>
        <span className="material-symbols-outlined absolute -bottom-4 -left-4 text-8xl opacity-10">
          warning
        </span>
      </section>
    </div>
  );
};

export default DevideStudentsToGroups;