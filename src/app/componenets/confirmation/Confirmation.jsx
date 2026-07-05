import { DateTimeField } from "modern-rdp-pro";

const Confirmation = ({ items }) => {
  const myVariableDate = new Date();
  myVariableDate.setDate(myVariableDate.getDate()); // Set to 7 days from now
  myVariableDate.setHours(myVariableDate.getHours()); // Set to 3:00 PM
  return (
    <section className="h-min flex-1 overflow-y-auto p-8 lg:p-12">
      <div className="relative mb-12 flex items-center justify-between px-4">
        <div className="absolute top-1/2 left-0 -z-10 h-0.5 w-full -translate-y-1/2 bg-gray-200"></div>
        <div className="absolute top-1/2 left-1/3 -z-10 h-0.5 w-2/3 -translate-y-1/2 bg-blue-700"></div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700 text-sm text-white shadow-md">
            <span className="material-symbols-outlined">check</span>
          </div>
          <span className="text-on-surface text-xs font-semibold">
            نظرة عامة
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700 text-sm text-white shadow-md">
            <span className="text-sm font-bold">٢</span>
          </div>
          <span className="text-xs font-bold text-blue-700">بيانات الطالب</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border-3 border-gray-300 bg-blue-700 text-sm text-white shadow-md">
            <span className="text-sm font-bold">٣</span>
          </div>
          <span className="text-xs font-bold text-blue-700">الموعد</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="text-secondary flex h-10 w-10 items-center justify-center rounded-lg bg-gray-200">
            <span className="text-sm font-bold">٤</span>
          </div>
          <span className="text-secondary text-xs font-medium">التأكيد</span>
        </div>
      </div>
      <div className="mx-auto max-w-4xl">
        <div className="mb-10">
          <h1 className="text-on-surface mb-2 text-3xl font-extrabold tracking-tight">
            تم تحديد تاريخ ووقت المراجعة طبقاً للتاريخ التالي
          </h1>
          <p className="text-secondary">
            يرجى مراجعة تفاصيل الحجز أدناه والاحتفاظ برقم الطلب للرجوع إليه
            مستقبلاً.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="bg-surface-container-lowest rounded-xl border border-transparent p-6 shadow-sm md:col-span-7">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-lg font-bold">
                <span className="material-symbols-outlined text-primary">
                  event
                </span>
                مايو 2024
              </h2>
              <div className="flex gap-2">
                <button className="hover:bg-surface-container rounded-full p-2">
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </button>
                <button className="hover:bg-surface-container rounded-full p-2">
                  <span className="material-symbols-outlined">
                    chevron_left
                  </span>
                </button>
              </div>
            </div>

            <div className="mb-4 grid grid-cols-7 gap-2">
              <div className="text-secondary py-2 text-center text-xs font-bold uppercase">
                أحد
              </div>
              <div className="text-secondary py-2 text-center text-xs font-bold uppercase">
                اثنين
              </div>
              <div className="text-secondary py-2 text-center text-xs font-bold uppercase">
                ثلاثاء
              </div>
              <div className="text-secondary py-2 text-center text-xs font-bold uppercase">
                أربعاء
              </div>
              <div className="text-secondary py-2 text-center text-xs font-bold uppercase">
                خميس
              </div>
              <div className="text-secondary py-2 text-center text-xs font-bold uppercase">
                جمعة
              </div>
              <div className="text-secondary py-2 text-center text-xs font-bold uppercase">
                سبت
              </div>

              <div className="h-12"></div>
              <div className="h-12"></div>
              <div className="h-12"></div>
              <div className="flex h-12 items-center justify-center rounded-lg text-slate-300">
                1
              </div>
              <div className="flex h-12 items-center justify-center rounded-lg text-slate-300">
                2
              </div>
              <div className="flex h-12 items-center justify-center rounded-lg text-slate-300">
                3
              </div>
              <div className="flex h-12 items-center justify-center rounded-lg text-slate-300">
                4
              </div>

              <div className="hover:bg-primary-fixed-dim flex h-12 cursor-pointer items-center justify-center rounded-lg transition-colors">
                5
              </div>
              <div className="hover:bg-primary-fixed-dim flex h-12 cursor-pointer items-center justify-center rounded-lg transition-colors">
                6
              </div>
              <div className="flex h-12 cursor-pointer items-center justify-center rounded-lg bg-blue-500 font-bold text-white shadow-md">
                7
              </div>
              <div className="hover:bg-primary-fixed-dim flex h-12 cursor-pointer items-center justify-center rounded-lg transition-colors">
                8
              </div>
              <div className="hover:bg-primary-fixed-dim flex h-12 cursor-pointer items-center justify-center rounded-lg transition-colors">
                9
              </div>
              <div className="bg-error-container/20 flex h-12 cursor-pointer items-center justify-center rounded-lg text-slate-300">
                10
              </div>
              <div className="bg-error-container/20 flex h-12 cursor-pointer items-center justify-center rounded-lg text-slate-300">
                11
              </div>
              <div className="hover:bg-primary-fixed-dim flex h-12 cursor-pointer items-center justify-center rounded-lg transition-colors">
                12
              </div>
              <div className="hover:bg-primary-fixed-dim flex h-12 cursor-pointer items-center justify-center rounded-lg transition-colors">
                13
              </div>
              <div className="hover:bg-primary-fixed-dim flex h-12 cursor-pointer items-center justify-center rounded-lg transition-colors">
                14
              </div>
              <div className="hover:bg-primary-fixed-dim flex h-12 cursor-pointer items-center justify-center rounded-lg transition-colors">
                15
              </div>
              <div className="hover:bg-primary-fixed-dim flex h-12 cursor-pointer items-center justify-center rounded-lg transition-colors">
                16
              </div>
              <div className="flex h-12 items-center justify-center rounded-lg text-slate-300">
                17
              </div>
              <div className="flex h-12 items-center justify-center rounded-lg text-slate-300">
                18
              </div>
            </div>
            <div className="text-secondary mt-6 flex gap-4 text-xs">
              <div className="flex items-center gap-2">
                <span className="bg-primary h-3 w-3 rounded-full"></span>
                <span>اليوم المختار</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-slate-100"></span>
                <span>متاح</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-error-container/40 h-3 w-3 rounded-full"></span>
                <span>غير متاح</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:col-span-5">
            <div className="bg-surface-container-low flex-1 rounded-xl p-6">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
                <span className="material-symbols-outlined text-primary">
                  schedule
                </span>
                الفترات المتاحة
              </h2>
              <p className="text-secondary mb-6 text-xs">
                الثلاثاء، 7 مايو 2024
              </p>
              <div className="grid grid-cols-2 gap-3">
                <button className="hover:border-primary hover:text-primary rounded-lg border border-transparent bg-white p-3 text-center text-sm font-medium transition-all">
                  08:00 ص
                </button>
                <button className="hover:border-primary hover:text-primary rounded-lg border border-transparent bg-white p-3 text-center text-sm font-medium transition-all">
                  09:30 ص
                </button>
                <button className="rounded-lg border-2 border-blue-500 bg-blue-500 p-3 text-center text-sm font-bold text-white">
                  11:00 ص
                </button>
                <button className="hover:border-primary hover:text-primary rounded-lg border border-transparent bg-white p-3 text-center text-sm font-medium transition-all">
                  12:30 م
                </button>
                <button className="hover:border-primary hover:text-primary rounded-lg border border-transparent bg-white p-3 text-center text-sm font-medium transition-all">
                  02:00 م
                </button>
                <button className="hover:border-primary hover:text-primary rounded-lg border border-transparent bg-white p-3 text-center text-sm font-medium transition-all">
                  03:30 م
                </button>
              </div>
            </div>

         
          </div>
        </div> */}

        <div className="bg-surface-container-lowest rounded-xl border border-transparent p-6 shadow-sm">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <span className="material-symbols-outlined text-primary">
              schedule
            </span>
            تم تحديد موعد المراجعة
          </h2>
          {/* <DateTimeField
       
        name="appointment"
        mode="datetime"
        // 2. Pass the variable to the 'initialValue' prop
        initialValue={myVariableDate}
        locale="en-US"
        closeOnSelect={false}
        required
      /> */}
          <p className="mb-6 rounded-lg bg-gray-200 p-4 text-center text-xl font-bold text-blue-700">
            {myVariableDate.toLocaleString("ar-EG", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            })}
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-slate-100 py-6 px-6">
          <div className="me-auto mb-1 flex gap-2 text-lg font-bold">
            {" "}
            <span className="material-symbols-outlined text-primary">list</span>
            بيانات الطالب
          </div>
          {items?.studentname && (
            <ul className="mt-1 flex w-full flex-col items-start justify-between border-t border-slate-100 py-2">
              <li className="gap-2 rounded-lg px-8 py-3 font-bold my-3 border-b border-color-slate-200 w-100">
                الإسم / {items?.studentname}
              </li>

              <li className="gap-2 rounded-lg px-8 py-3 font-bold my-3 border-b border-color-slate-200 w-100">
                رقم الجلوس / {items?.seatnum}
              </li>

              <li className="gap-2 rounded-lg px-8 py-3 font-bold my-3 border-b border-color-slate-200 w-100">
                المدرسة / {items?.school}
              </li>
            </ul>
          )}
        </div>

        <div className="rounded-xl bg-gray-200 p-5">
          <div className="flex gap-3">
            <span className="material-symbols-outlined text-primary">
              location_on
            </span>
            <div>
              <h4 className="text-sm font-bold">مقر المراجعة الرئيسي</h4>
              <p className="text-secondary text-xs leading-relaxed">
                شارع الوزارات، منطقة البطين، أبوظبي - الطابق الأرضي، القاعة 4
              </p>
            </div>
          </div>
        </div>

        {/* <div className="mt-12 flex items-center justify-between border-t border-slate-100 py-6">
          <button className="text-secondary hover:text-on-surface flex items-center gap-2 px-6 py-3 font-semibold transition-colors">
            <span className="material-symbols-outlined">arrow_forward</span>
            رجوع
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-blue-700 bg-gradient-to-r px-8 py-3 font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95">
            تأكيد الموعد
            <span className="material-symbols-outlined text-sm">check</span>
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Confirmation;
