const Confirmation = () => {
  return (
    <main className="bg-surface-container mx-auto mt-8 flex min-h-[calc(100vh-72px)] max-w-7xl rounded-lg shadow-sm">
      <aside className="h-full w-64 flex-col gap-4 border-r border-gray-200 bg-slate-50 p-6 lg:flex">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex items-center justify-center rounded-xl bg-blue-800 p-2 text-white">
            <span className="material-symbols-outlined">school</span>
          </div>
          <div>
            <h4 className="text-lg leading-tight font-bold text-slate-900">
              بوابة إعادة التصحيح
            </h4>
            <p className="text-xs text-slate-500">
              الشهادة الإعدادية - محافظة الشرقية
            </p>
          </div>
        </div>
        <nav className="space-y-1">
          <div className="flex cursor-pointer items-center gap-3 rounded-lg p-3 font-bold text-slate-500 transition-colors transition-transform duration-200 hover:translate-x-1 hover:text-blue-500">
            <span className="material-symbols-outlined" data-icon="info">
              info
            </span>
            <span className="text-body-md">نظرة عامة على العملية</span>
          </div>
          <div className="flex cursor-pointer items-center gap-3 rounded-lg p-3 font-bold text-slate-500 transition-colors transition-transform duration-200 hover:translate-x-1 hover:text-blue-500">
            <span className="material-symbols-outlined" data-icon="person">
              person
            </span>
            <span className="text-body-md">بيانات الطالب</span>
          </div>
          <div className="flex cursor-pointer items-center gap-3 rounded-lg bg-gray-200 p-3 font-bold text-slate-500 transition-colors transition-transform duration-200 hover:translate-x-1 hover:text-blue-500">
            <span
              className="material-symbols-outlined"
              data-icon="calendar_today"
            >
              calendar_today
            </span>
            <span className="text-body-md">جدولة الموعد</span>
          </div>
          <div className="flex cursor-pointer items-center gap-3 rounded-lg p-3 font-bold text-slate-500 transition-colors transition-transform duration-200 hover:translate-x-1 hover:text-blue-500">
            <span
              className="material-symbols-outlined"
              data-icon="check_circle"
            >
              check_circle
            </span>
            <span className="text-body-md">تأكيد الموعد</span>
          </div>
        </nav>
        <div className="mt-auto p-5 rounded-xl shadow-sm border border-slate-100 bg-gray-200">
<h3 className="font-bold text-on-surface mb-3">ملخص المواد المختارة</h3>
<ul className="space-y-2">
<li className="flex items-center justify-between text-sm">
<span className="text-secondary">اللغة العربية</span>
<span className="bg-secondary-fixed text-on-secondary-fixed px-2 py-0.5 rounded text-[10px] font-bold">G9-A</span>
</li>
<li className="flex items-center justify-between text-sm">
<span className="text-secondary">الرياضيات</span>
<span className="bg-secondary-fixed text-on-secondary-fixed px-2 py-0.5 rounded text-[10px] font-bold">G9-B</span>
</li>
<li className="flex items-center justify-between text-sm">
<span className="text-secondary">العلوم العامة</span>
<span className="bg-secondary-fixed text-on-secondary-fixed px-2 py-0.5 rounded text-[10px] font-bold">G9-A</span>
</li>
</ul>
<div className="mt-4 pt-4 border-t border-slate-100">
<div className="flex justify-between text-sm font-bold">
<span>إجمالي الرسوم</span>
<span className="text-primary">150.00 درهم</span>
</div>
</div>
</div>
        <button className="mt-8 rounded-lg bg-blue-700 px-4 py-3 text-sm font-semibold text-white transition-all hover:opacity-90">
          بدء طلب جديد
        </button>
      </aside>

      <section className="flex-1 overflow-y-auto p-8 lg:p-12">
        <div className="relative mb-12 flex items-center justify-between px-4">
          <div className="absolute top-1/2 left-0 -z-10 h-0.5 w-full -translate-y-1/2 bg-gray-200"></div>
          <div className="absolute top-1/2 left-1/3 -z-10 h-0.5 w-2/3 -translate-y-1/2 bg-blue-700"></div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700 text-sm text-white shadow-md">
              <span className="material-symbols-outlined">check</span>
            </div>
            <span className="text-on-surface text-xs font-semibold">نظرة عامة</span>
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
              اختر تاريخ ووقت المراجعة
            </h1>
            <p className="text-secondary">
              يرجى تحديد موعد مناسب للحضور إلى مركز التقويم والقياس لمراجعة
              أوراق إجاباتك.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
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

              <div className="rounded-xl border border-gray-300 bg-gray-200 p-5">
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-primary">
                    location_on
                  </span>
                  <div>
                    <h4 className="text-sm font-bold">مقر المراجعة الرئيسي</h4>
                    <p className="text-secondary text-xs leading-relaxed">
                      شارع الوزارات، منطقة البطين، أبوظبي - الطابق الأرضي،
                      القاعة 4
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-between border-t border-slate-100 py-6">
            <button className="text-secondary hover:text-on-surface flex items-center gap-2 px-6 py-3 font-semibold transition-colors">
              <span className="material-symbols-outlined">arrow_forward</span>
              رجوع
            </button>
            <button className="bg-blue-500 text-white flex items-center gap-2 rounded-lg bg-gradient-to-r px-8 py-3 font-bold shadow-lg transition-all hover:scale-105 active:scale-95">
              تأكيد الموعد
              <span className="material-symbols-outlined text-sm">check</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Confirmation;
