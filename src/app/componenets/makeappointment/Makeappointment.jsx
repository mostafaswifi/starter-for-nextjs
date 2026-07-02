
import { useEffect, useState } from "react";
const Makeappointment = ({ seatNumber, setSeatNumber, fetchItems, setItems, items }) => {
  const [openkey, setOpenkey] = useState(false);
  useEffect(() => {
    if (items?.school) {
      //  console.log("Items updated:",items);
      setOpenkey(true);
    }
  }, [items]);

  const caller = (e) => {
    setSeatNumber(e.target.value);
  };
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
                  <div className="space-y-2">
                    <label className="text-secondary block px-1 text-sm font-semibold">
                      اسم الطالب رباعي / خماسي
                    </label>
                    <input
                      className="bg-surface-container-low focus:ring-primary w-full rounded-lg border-0 p-3 transition-all placeholder:text-slate-400 focus:ring-2"
                      placeholder="أدخل اسمك كما هو في البطاقة"
                      type="text"
                      value={items?.studentname}
                      readOnly
                    />
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
          <div className="space-y-6">
            <div className="flex items-center justify-between border-r-4 border-blue-700 pr-4">
              <h2 className="text-on-surface text-xl font-bold">
                مواد إعادة التصحيح
              </h2>
              <span className="text-on-secondary-fixed-variant rounded-full bg-gray-200 px-3 py-1 text-xs font-medium">
                اختر مادة واحدة أو أكثر
              </span>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <label className="group relative flex cursor-pointer items-center rounded-xl bg-gray-200 p-4 transition-colors hover:bg-gray-300">
                <input
                  className="text-primary border-outline-variant focus:ring-primary ml-4 h-5 w-5 rounded"
                  type="checkbox" checked={items?.arabic} onChange={(e) => {setItems({ ...items, arabic: e.target.checked });}}
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
                  type="checkbox" checked={items?.english} onChange={(e) => {setItems({ ...items, english: e.target.checked });}}
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
                  type="checkbox" checked={items?.social} onChange={(e) => {setItems({ ...items, social: e.target.checked });}}
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
                  type="checkbox" checked={items?.algebra} onChange={(e) => {setItems({ ...items, algebra: e.target.checked });}}
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
                  type="checkbox" checked={items?.geometry} onChange={(e) => {setItems({ ...items, geometry: e.target.checked })}}
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
                  type="checkbox" checked={items?.sciense} onChange={(e) => {setItems({ ...items, sciense: e.target.checked });}}
                />
                <div className="flex flex-col">
                  <span className="text-on-surface font-bold">علوم</span>
                  <span className="text-secondary text-xs italic">Science</span>
                </div>
              </label>
              <label className="group relative flex cursor-pointer items-center rounded-xl bg-gray-200 p-4 transition-colors hover:bg-gray-300">
                <input
                  className="text-primary border-outline-variant focus:ring-primary ml-4 h-5 w-5 rounded"
                  type="checkbox" checked={items?.ict} onChange={(e) => {setItems({ ...items, ict: e.target.checked });}}
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
                  type="checkbox" checked={items?.religious} onChange={(e) => {setItems({ ...items, religious: e.target.checked });}}
                />
                <div className="flex flex-col">
                  <span className="text-on-surface font-bold">تربية دينية</span>
                  <span className="text-secondary text-xs italic">
                    Religious Education
                  </span>
                </div>
              </label>
              <label className="group relative flex cursor-pointer items-center rounded-xl bg-gray-200 p-4 transition-colors hover:bg-gray-300">
                <input
                  className="text-primary border-outline-variant focus:ring-primary ml-4 h-5 w-5 rounded"
                  type="checkbox" checked={items?.art} onChange={(e) => {setItems({ ...items, art: e.target.checked });}}
                />
                <div className="flex flex-col">
                  <span className="text-on-surface font-bold">تربية فنية</span>
                  <span className="text-secondary text-xs italic">
                    Art Education
                  </span>
                </div>
              </label>
            </div>
          </div>
)}
        </div>

        {/* <div className="flex items-center justify-between py-6">
          <button className="text-secondary rounded-full px-8 py-3 font-bold transition-all hover:bg-gray-300">
            العودة للسابق
          </button>
          <button className="group flex items-center gap-2 rounded-lg bg-blue-700 bg-gradient-to-r px-12 py-3 font-bold text-white shadow-lg transition-all hover:opacity-90 active:scale-95">
            <span>الخطوة التالية</span>
            <span className="material-symbols-outlined rotate-180">
              arrow_forward
            </span>
          </button>
        </div> */}
      {items.studentname &&  <button
          className="group mr-auto flex items-center gap-2 rounded-lg bg-red-700 bg-gradient-to-r px-12 py-3 font-bold text-white shadow-lg transition-all hover:opacity-90 active:scale-95"
          onClick={() => console.log(items)}
        >
          <span>تسجيل الطلب   </span>
          <span className="material-symbols-outlined">
            check_circle
          </span>
        </button>}
      </div>
    </section>
  );
};

export default Makeappointment;
