import { useEffect, useState } from "react";
import { swalAlert } from "../../../lib/swal";
import { v4 as uuid } from "uuid";

const Makeappointment = ({
  seatNumber,
  setSeatNumber,
  fetchItems,
  setItems,
  items,
  nationalid,
  setNationalid,
  studentData,
}) => {
  const [selectedDate, setSelectedDate] = useState([]);
  const [openkey, setOpenkey] = useState(false);
  const checkedsubjects = [];
  const options = {
    node: Uint8Array.of(0x01, 0x23, 0x45, 0x67, 0x89, 0xab),
    clockseq: 0x1234,
    msecs: new Date("2011-11-01").getTime(),
    nsecs: 5678,
  };
  const [allData, setAllData] = useState([]);
  const [userSelectedDate, setUserSelectedDate] = useState(null);
  // console.log(studentData);
  useEffect(() => {
    if (items?.school) {
      //  console.log("Items updated:",items);
      setOpenkey(true);
    }
  }, [items]);

  const caller = (e) => {
    setSeatNumber(e.target.value);
  };

  const handleNationalid = (e) => {
    setNationalid(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const checkedsubjects = Object.keys(items).filter(
      (key) => items[key] === true,
    );
    // console.log("Checked subjects:", checkedsubjects);
    items = {
      ...items,
      subjectnumber: checkedsubjects.length,
      $updatedAt: new Date().toLocaleString(),
      totalcost: checkedsubjects.length * 35 + 5,
      reservationnumber: uuid(options),
      nationalid: nationalid,
    };
    const response = await fetch("/api/put-student", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: items }),
    });
    const result = await response.json();
    if (result.success) {
      // setItems({});
      handleDatePreserveNum(userSelectedDate);
      swalAlert(
        "تم تسجيل الطلب بنجاح",
        "من فضلك اضغط علي 'الخطوة التالية' لتحديد موعد المراجعة",
        "success",
        "موافق",
      );
      // console.log("Submitting items:", items);
    }
    setOpenkey(false);
  };

  const dateGrpper = async () => {
    await fetch(`/api/avaliabledates`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setAllData(data?.data);

        const finalDates = data?.data?.map((item) =>
          item.avaliabledates.slice(0, 10),
        );
        setSelectedDate(finalDates);
      });
    // console.log(selectedDate);
  };
  useEffect(() => {
    dateGrpper();
    // handleDatePreserveNum();
  }, []);

  const handleDatePreserveNum = async (i) => {
    try {
      const response = await fetch(`/api/avaliabledates?id=${i?.$id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          $id: i?.$id,
          numberofaddedstudents: (i?.numberofaddedstudents || 0) + 1,
        }),
      });

      if (response.ok) {
        console.log("Date updated successfully");
        dateGrpper();
      } else {
        console.error("Error updating date");
      }
    } catch (error) {
      console.error("Error updating date:", error);
      swalAlert("خطأ", "حدث خطأ أثناء الاتصال بالخادم", "error", "موافق");
    }
  };
  // const handleHideDates = (e) => {
  //   e.target.parentNode.parentNode.classList.add("hidden");
  //   console.log(e.target.parentNode.parentNode.children)

  // };
  return (
    <section className="flex-1 overflow-y-auto p-8 lg:p-12">
      <div className="mx-auto max-w-3xl space-y-10">
        <div className="relative mb-12 flex items-center justify-between px-4">
          <div className="absolute top-1/2 left-0 -z-10 h-0.5 w-full -translate-y-1/2 bg-gray-200"></div>
          <div className="absolute top-1/2 left-2/3 -z-10 h-0.5 w-1/3 -translate-y-1/2 bg-blue-700"></div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700 text-sm text-white shadow-md">
              <span className="material-symbols-outlined">check</span>
            </div>
            <span className="text-on-surface text-xs font-semibold">
              نظرة عامة
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border-3 border-gray-300 bg-blue-700 text-sm text-white shadow-md">
              <span className="text-sm font-bold">٢</span>
            </div>
            <span className="text-xs font-bold text-blue-700">
              بيانات الطالب
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="text-secondary flex h-10 w-10 items-center justify-center rounded-lg bg-gray-200">
              <span className="text-sm font-bold">٣</span>
            </div>
            <span className="text-secondary text-xs font-medium">الموعد</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="text-secondary flex h-10 w-10 items-center justify-center rounded-lg bg-gray-200">
              <span className="text-sm font-bold">٤</span>
            </div>
            <span className="text-secondary text-xs font-medium">التأكيد</span>
          </div>
        </div>
        <header className="space-y-2">
          <h1 className="text-on-surface text-3xl font-bold tracking-tight">
            طلب مراجعة الأوراق الامتحانية
          </h1>
          <p className="text-secondary text-lg">
            يرجى ملء البيانات التالية بدقة لضمان معالجة طلبك
          </p>
        </header>
        <div className="bg-surface-container-lowest space-y-10 rounded-xl p-8 shadow-sm">
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-r-4 border-blue-700 pr-4">
              <h2 className="text-on-surface text-xl font-bold">
                المعلومات الشخصية
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-secondary block px-1 text-sm font-semibold">
                  أدخل رقم الجلوس
                </label>
                <input
                  className="bg-surface-container-low focus:ring-primary w-full rounded-lg border-1 p-2 transition-all placeholder:text-slate-400 focus:ring-2"
                  placeholder="مثال: 123456"
                  type="text"
                  value={seatNumber}
                  onChange={(e) => caller(e)}
                />
              </div>

              <div className="flex items-end justify-between space-y-2">
                <button
                  className="w-full rounded-lg bg-blue-700 px-4 py-3 text-sm font-semibold text-white transition-all hover:opacity-90"
                  onClick={() => fetchItems(seatNumber)}
                >
                  استعلام
                </button>
              </div>

              {openkey ? (
                <>
                  {" "}
                  <div className="col-span-2 space-y-2">
                    <label className="text-secondary block px-1 text-sm font-semibold">
                      اسم الطالب رباعي / خماسي
                    </label>
                    <input
                      className="focus:ring-primary w-full rounded-lg border-0 bg-gray-200 p-3 transition-all placeholder:text-slate-400 focus:ring-2"
                      placeholder="أدخل اسمك كما هو في البطاقة"
                      type="text"
                      value={items?.studentname}
                      readOnly
                    />
                  </div>
                  <div className="col-span-2 space-y-2">
                    <label className="text-secondary block px-1 text-sm font-semibold">
                      أدخل الرقم القومي للطالب ( من واقع شهادة ميلاد الطالب !!!
                      )
                    </label>
                    <input
                      className="bg-surface-container-low focus:ring-primary w-full rounded-lg border-1 p-2 transition-all placeholder:text-slate-400 focus:ring-2"
                      placeholder="مثال: 123456"
                      type="text"
                      value={nationalid}
                      onChange={(e) => handleNationalid(e)}
                    />
                    <div className="bg-surface-container-lowest flex items-center gap-2 space-y-2 rounded-lg bg-blue-500 p-4 text-white">
                      <span className="text-secondary block px-1 text-sm font-semibold">
                        {" "}
                        رقم البطاقة المسجل هو
                      </span>
                      <span className="text-secondary block px-1 text-sm font-semibold">
                        {studentData?.nationalid
                          ? studentData?.nationalid
                          : "لم يتم تسجيل رقم قومي بعد"}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-secondary block px-1 text-sm font-semibold">
                      الإدارة التعليمية
                    </label>
                    <input
                      className="bg-surface-container-low focus:ring-primary w-full rounded-lg border-0 p-3 transition-all placeholder:text-slate-400 focus:ring-2"
                      placeholder="الإدارة التعليمية التابع لها"
                      type="text"
                      value={items?.adminstration}
                      readOnly
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-secondary block px-1 text-sm font-semibold">
                      اسم المدرسة
                    </label>
                    <input
                      className="bg-surface-container-low focus:ring-primary w-full rounded-lg border-0 p-3 transition-all placeholder:text-slate-400 focus:ring-2"
                      placeholder="المدرسة المقيد بها حالياً"
                      type="text"
                      value={items?.school}
                      readOnly
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-secondary block px-1 text-sm font-semibold">
                      المرحلة التعليمية
                    </label>
                    <input
                      className="bg-surface-container-low focus:ring-primary w-full rounded-lg border-0 p-3 transition-all placeholder:text-slate-400 focus:ring-2"
                      type="text"
                      value="الصف الثالث الإعدادي"
                      readOnly
                    />
                  </div>{" "}
                </>
              ) : (
                <div className="text-sm font-semibold text-red-500">
                  لا توجد بيانات متاحة لرقم الجلوس المدخل
                </div>
              )}
            </div>
          </div>
          {openkey && (
            <div className={`space-y-6 ${studentData?.nationalid ? "hidden" : ""}`}>
              <div className="flex items-center justify-between border-r-4 border-blue-700 pr-4">
                <h2 className="text-on-surface text-xl font-bold">
                  أنقر علي المواد المطلوب إعادة تصحيحها
                </h2>
                <span className="text-on-secondary-fixed-variant rounded-full bg-gray-200 px-3 py-1 text-xs font-medium">
                  اختر مادة واحدة أو أكثر
                </span>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <label className="group relative flex cursor-pointer items-center rounded-xl bg-gray-200 p-4 transition-colors hover:bg-gray-300">
                  <input
                    className="text-primary border-outline-variant focus:ring-primary ml-4 h-5 w-5 rounded"
                    type="checkbox"
                    checked={items?.arabic}
                    onChange={(e) => {
                      setItems({ ...items, arabic: e.target.checked });
                    }}
                  />
                  <div className="flex flex-col">
                    <span className="text-on-surface font-bold">لغة عربية</span>
                    <span className="text-secondary text-xs italic">
                      Arabic Language
                    </span>
                  </div>
                </label>
                <label className="group relative flex cursor-pointer items-center rounded-xl bg-gray-200 p-4 transition-colors hover:bg-gray-300">
                  <input
                    className="text-primary border-outline-variant focus:ring-primary ml-4 h-5 w-5 rounded"
                    type="checkbox"
                    checked={items?.english}
                    onChange={(e) => {
                      setItems({ ...items, english: e.target.checked });
                    }}
                  />
                  <div className="flex flex-col">
                    <span className="text-on-surface font-bold">
                      لغة إنجليزية
                    </span>
                    <span className="text-secondary text-xs italic">
                      English Language
                    </span>
                  </div>
                </label>
                <label className="group relative flex cursor-pointer items-center rounded-xl bg-gray-200 p-4 transition-colors hover:bg-gray-300">
                  <input
                    className="text-primary border-outline-variant focus:ring-primary ml-4 h-5 w-5 rounded"
                    type="checkbox"
                    checked={items?.social}
                    onChange={(e) => {
                      setItems({ ...items, social: e.target.checked });
                    }}
                  />
                  <div className="flex flex-col">
                    <span className="text-on-surface font-bold">
                      دراسات إجتماعية
                    </span>
                    <span className="text-secondary text-xs italic">
                      Social Studies
                    </span>
                  </div>
                </label>

                <label className="group relative flex cursor-pointer items-center rounded-xl bg-gray-200 p-4 transition-colors hover:bg-gray-300">
                  <input
                    className="text-primary border-outline-variant focus:ring-primary ml-4 h-5 w-5 rounded"
                    type="checkbox"
                    checked={items?.algebra}
                    onChange={(e) => {
                      setItems({ ...items, algebra: e.target.checked });
                    }}
                  />
                  <div className="flex flex-col">
                    <span className="text-on-surface font-bold">جبر</span>
                    <span className="text-secondary text-xs italic">
                      Algebra
                    </span>
                  </div>
                </label>

                <label className="group relative flex cursor-pointer items-center rounded-xl bg-gray-200 p-4 transition-colors hover:bg-gray-300">
                  <input
                    className="text-primary border-outline-variant focus:ring-primary ml-4 h-5 w-5 rounded"
                    type="checkbox"
                    checked={items?.geometry}
                    onChange={(e) => {
                      setItems({ ...items, geometry: e.target.checked });
                    }}
                  />
                  <div className="flex flex-col">
                    <span className="text-on-surface font-bold">هندسة</span>
                    <span className="text-secondary text-xs italic">
                      Geometry
                    </span>
                  </div>
                </label>

                <label className="group relative flex cursor-pointer items-center rounded-xl bg-gray-200 p-4 transition-colors hover:bg-gray-300">
                  <input
                    className="text-primary border-outline-variant focus:ring-primary ml-4 h-5 w-5 rounded"
                    type="checkbox"
                    checked={items?.sciense}
                    onChange={(e) => {
                      setItems({ ...items, sciense: e.target.checked });
                    }}
                  />
                  <div className="flex flex-col">
                    <span className="text-on-surface font-bold">علوم</span>
                    <span className="text-secondary text-xs italic">
                      Science
                    </span>
                  </div>
                </label>
                <label className="group relative flex cursor-pointer items-center rounded-xl bg-gray-200 p-4 transition-colors hover:bg-gray-300">
                  <input
                    className="text-primary border-outline-variant focus:ring-primary ml-4 h-5 w-5 rounded"
                    type="checkbox"
                    checked={items?.ict}
                    onChange={(e) => {
                      setItems({ ...items, ict: e.target.checked });
                    }}
                  />
                  <div className="flex flex-col">
                    <span className="text-on-surface font-bold">حاسب آلي</span>
                    <span className="text-secondary text-xs italic">
                      Computer Science
                    </span>
                  </div>
                </label>
                <label className="group relative flex cursor-pointer items-center rounded-xl bg-gray-200 p-4 transition-colors hover:bg-gray-300">
                  <input
                    className="text-primary border-outline-variant focus:ring-primary ml-4 h-5 w-5 rounded"
                    type="checkbox"
                    checked={items?.religious}
                    onChange={(e) => {
                      setItems({ ...items, religious: e.target.checked });
                    }}
                  />
                  <div className="flex flex-col">
                    <span className="text-on-surface font-bold">
                      تربية دينية
                    </span>
                    <span className="text-secondary text-xs italic">
                      Religious Education
                    </span>
                  </div>
                </label>
                <label className="group relative flex cursor-pointer items-center rounded-xl bg-gray-200 p-4 transition-colors hover:bg-gray-300">
                  <input
                    className="text-primary border-outline-variant focus:ring-primary ml-4 h-5 w-5 rounded"
                    type="checkbox"
                    checked={items?.art}
                    onChange={(e) => {
                      setItems({ ...items, art: e.target.checked });
                    }}
                  />
                  <div className="flex flex-col">
                    <span className="text-on-surface font-bold">
                      تربية فنية
                    </span>
                    <span className="text-secondary text-xs italic">
                      Art Education
                    </span>
                  </div>
                </label>
              </div>
              <div className="relative grid grid-cols-3 gap-4">
                <p className="col-span-3 border-r-4 border-blue-700 pr-4 text-lg font-semibold text-slate-900">
                  اختر التاريخ
                </p>
                {userSelectedDate ? (
                  <div className="absolute top-0 right-0 z-10 m-0 flex h-6 h-[200px] w-full items-center justify-center rounded-2xl bg-blue-500 p-0 font-bold text-white">
                    {" "}
                    تم إختيار الموعد{" "}
                  </div>
                ) : null}
                {selectedDate.map((date, index) => (
                  <div
                    className="m-0 p-0"
                    key={index}
                    onClick={() => setUserSelectedDate(allData[index])}
                  >
                    {/* onClick={(e)=>handleDatePreserveNum(e,allData[index]) */}

                    {console.log(userSelectedDate)}
                    <div
                      className="cursor-pointer flex-col items-center rounded-2xl bg-blue-100 p-6 font-semibold shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-gray-300"
                      onClick={() => setItems({ ...items, preservedate: date })}
                    >
                      <div className="relative flex flex-col items-center gap-2">
                        <span className="material-symbols-outlined tranition-all text-2xl text-gray-600 duration-300 group-hover:scale-110 group-hover:rotate-[-8deg]">
                          event
                        </span>
                        <span className="d-block text-sm font-medium text-red-400">
                          {date}
                        </span>
                        <span className="text-xs text-gray-600">
                          {new Date(date).getDay() == 1
                            ? "الاثنين"
                            : new Date(date).getDay() == 2
                              ? "الثلاثاء"
                              : new Date(date).getDay() == 3
                                ? "الأربعاء"
                                : new Date(date).getDay() == 4
                                  ? "الخميس"
                                  : new Date(date).getDay() == 5
                                    ? "الجمعة"
                                    : new Date(date).getDay() == 6
                                      ? "السبت"
                                      : "الأحد"}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {openkey && (
          <div className={`bg-surface-container-lowest space-y-10 rounded-xl p-8 shadow-sm ${studentData?.nationalid ? "hidden" : ""}`}>
            <p className="flex items-center justify-between border-r-4 border-blue-700 pr-4 text-2xl font-bold">
              {" "}
              ملخص الطلب
            </p>
            <div className="flex flex-col items-center gap-4">
              <span className="w-full rounded-lg border-r-4 border-blue-700 bg-gray-200 p-4 pr-4 text-center font-semibold shadow-md transition-colors hover:bg-gray-300">
                {" "}
                عدد المواد المختارة:{" "}
                {
                  Object.keys(items).filter((key) => items[key] === true).length
                }{" "}
                مادة / مواد{" "}
              </span>

              <span className="w-full rounded-lg border-r-4 border-blue-700 bg-gray-200 p-4 pr-4 text-center font-semibold shadow-md transition-colors hover:bg-gray-300">
                {" "}
                التكلفة الإجمالية:{" "}
                {Object.keys(items).filter((key) => items[key] === true)
                  .length *
                  35 +
                  5}{" "}
                جنيه{" "}
              </span>

              <span className="w-full rounded-lg border-r-4 border-blue-700 bg-gray-200 p-4 pr-4 text-center font-semibold shadow-md transition-colors hover:bg-gray-300">
                {" "}
                رقم الحجز: {items.reservationnumber}{" "}
              </span>

              <span className="w-full rounded-lg border-r-4 border-blue-700 bg-gray-200 p-4 pr-4 text-center font-semibold shadow-md transition-colors hover:bg-gray-300">
                {" "}
                تاريخ التحديث: {items.$updatedAt}{" "}
              </span>
              <div className="w-full rounded-lg border-r-4 border-blue-700 bg-gray-200 p-4 pr-4 text-center font-semibold shadow-md transition-colors hover:bg-gray-300">
                <h2>
                  تاريخ الحجز:{" "}
                  {new Date(items.preservedate).toLocaleDateString()}
                </h2>
              </div>
            </div>

            <div>
              <h2 className="text-on-surface text-xl font-bold">
                المواد المختارة:{" "}
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {" "}
                {Object.keys(items)
                  .filter((key) => items[key] === true)
                  .map((subject) => (
                    <div
                      key={subject}
                      className="group text-on-surface relative flex cursor-pointer items-center rounded-xl bg-blue-200 p-3 font-bold transition-colors hover:bg-blue-300"
                    >
                      {subject === "arabic"
                        ? "لغة عربية"
                        : subject === "english"
                          ? "لغة إنجليزية"
                          : subject === "social"
                            ? "دراسات إجتماعية"
                            : subject === "algebra"
                              ? "جبر"
                              : subject === "geometry"
                                ? "هندسة"
                                : subject === "sciense"
                                  ? "علوم"
                                  : subject === "ict"
                                    ? "حاسب آلي"
                                    : subject === "religious"
                                      ? "تربية دينية"
                                      : subject === "art"
                                        ? "تربية فنية"
                                        : ""}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

      
        {openkey && (
            <button
            className={`group mr-auto flex items-center gap-2 rounded-lg bg-red-700 bg-gradient-to-r px-12 py-3 font-bold text-white shadow-lg transition-all hover:opacity-90 active:scale-95 ${studentData?.nationalid ? "hidden" : ""}`}
            onClick={(e) => handleSubmit(e, items)}
          >
            <span>تسجيل الطلب </span>
            <span className="material-symbols-outlined">check_circle</span>
          </button>
        )}
      
      </div>
    </section>
  );
};

export default Makeappointment;
