const Print = () => {
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
          <div className="flex cursor-pointer items-center gap-3 rounded-lg bg-gray-200 p-3 font-bold text-slate-500 transition-colors transition-transform duration-200 hover:translate-x-1 hover:text-blue-500">
            <span className="material-symbols-outlined" data-icon="person">
              person
            </span>
            <span className="text-body-md">بيانات الطالب</span>
          </div>
          <div className="flex cursor-pointer items-center gap-3 rounded-lg p-3 font-bold text-slate-500 transition-colors transition-transform duration-200 hover:translate-x-1 hover:text-blue-500">
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
        <button className="mt-8 rounded-lg bg-blue-700 px-4 py-3 text-sm font-semibold text-white transition-all hover:opacity-90">
          بدء طلب جديد
        </button>
      </aside>

      <section className="mx-auto w-full max-w-5xl flex-1 p-4 md:p-10 lg:p-16">
        <div className="mb-12 text-center">
          <div className="bg-blue-100 text-primary mb-6 inline-flex h-20 w-20 items-center justify-center rounded-lg">
            <span
              className="material-symbols-outlined text-xl text-blue-800"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
          </div>
          <h1 className="text-on-surface mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            تم تأكيد حجز الموعد بنجاح
          </h1>
          <p className="text-secondary mx-auto max-w-2xl text-lg">
            نشكرك على استخدام بوابة إعادة تصحيح الأوراق. يرجى مراجعة تفاصيل
            الحجز أدناه والاحتفاظ برقم الطلب للرجوع إليه مستقبلاً.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="bg-surface-container-lowest relative overflow-hidden rounded-xl p-8 shadow-sm md:col-span-2">
            <div className="bg-primary/5 absolute top-0 right-0 -mt-16 -mr-16 h-32 w-32 rounded-full"></div>
            <div className="relative z-10">
              <span className="text-blue-500 mb-2 block text-xs font-bold tracking-widest uppercase">
                رقم الطلب 
              </span>
              <div className="flex items-center justify-between">
                <h2 className="text-on-surface text-4xl font-black tracking-tighter">
                  #REQ-2024-8891
                </h2>
                <button className="bg-surface-container hover:bg-surface-container-high rounded-lg p-2 transition-colors">
                  <span className="material-symbols-outlined text-on-surface-variant bg-gray-200 p-2 rounded-lg cursor-pointer transition-colors hover:bg-gray-300">
                    content_copy
                  </span>
                </button>
              </div>
              <div className="mt-8 flex flex-col gap-8 md:flex-row">
                <div className="flex items-center gap-4">
                  <div className="bg-gray-200 text-on-secondary-fixed flex h-12 w-12 items-center justify-center rounded-xl">
                    <span className="material-symbols-outlined">
                      calendar_month
                    </span>
                  </div>
                  <div>
                    <p className="text-secondary text-xs font-medium">
                      التاريخ
                    </p>
                    <p className="text-on-surface font-bold">15 أكتوبر 2024</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-gray-200 text-on-secondary-fixed flex h-12 w-12 items-center justify-center rounded-xl">
                    <span className="material-symbols-outlined">schedule</span>
                  </div>
                  <div>
                    <p className="text-secondary text-xs font-medium">الوقت</p>
                    <p className="text-on-surface font-bold">09:30 صباحاً</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest flex flex-col justify-between rounded-xl p-8 shadow-sm">
            <div>
              <span className="text-blue-500 mb-4 block text-xs font-bold tracking-widest uppercase">
                موقع المراجعة
              </span>
              <h3 className="text-on-surface mb-2 text-xl leading-tight font-bold">
                مديرية التربية والتعليم
              </h3>
              <p className="text-on-surface-variant flex items-start gap-2 text-sm">
                <span className="material-symbols-outlined text-primary mt-1 text-sm">
                  location_on
                </span>
                المبنى الإداري الرئيسي، الطابق الثالث، قاعة المراجعة الأكاديمية
              </p>
            </div>
            <div className="bg-surface-container relative mt-6 h-24 overflow-hidden rounded-lg">
              <img
                alt="Map Location"
                className="h-full w-full object-cover opacity-50 grayscale"
                data-alt="minimalist architectural map representation with clean lines and soft blue tones"
                data-location="Cairo"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa1ylsuosQbp356UgNEzWz-T2CQ06-H1NloOM04kqgb5-gIoLoRXKmFAMK8BD_xouxonpwMWBls2xdUzx6vNJF87IMLBlikgoqKtsHN5Vj_IEoCGVNuRvvAi_MgV5JhdZqHWcqS4Jl-KYJz_nn4ZgBwvYNibWlvLiWbVTP5ts5WiuquGV2tDolTca6O1QSeknGa2R4Q0sbuyUdHaoOb_iK3r9uCKq9nXaamOVW9NAD7pJcavt0K_xuaMrjTWfZMyBKQtP6IlG8Qpk"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-primary rounded-full bg-white px-3 py-1 text-xs font-bold shadow-sm">
                  عرض الخريطة
                </span>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm md:col-span-1">
            <span className="text-secondary mb-6 block text-xs font-bold tracking-widest uppercase">
              المواد المختارة
            </span>
            <ul className="space-y-4">
              <li className="bg-surface-container-low flex items-center justify-between rounded-lg p-3">
                <span className="text-on-surface font-semibold">
                  اللغة العربية
                </span>
                <span
                  className="material-symbols-outlined text-white bg-blue-700 rounded-full"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
              </li>
              <li className="bg-surface-container-low flex items-center justify-between rounded-lg p-3">
                <span className="text-on-surface font-semibold">الرياضيات</span>
                <span
                  className="material-symbols-outlined text-white bg-blue-700 rounded-full"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
              </li>
              <li className="bg-surface-container-low flex items-center justify-between rounded-lg p-3">
                <span className="text-on-surface font-semibold">
                  اللغة الإنجليزية
                </span>
                <span
                  className="material-symbols-outlined text-white bg-blue-700 rounded-full"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-700 text-white relative flex flex-col items-center gap-8 overflow-hidden rounded-xl p-8 shadow-md md:col-span-2 md:flex-row">
            <div className="absolute top-0 left-0 -mt-32 -ml-32 h-64 w-64 rounded-lg bg-white/5"></div>
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg bg-white/10">
              <span className="material-symbols-outlined text-4xl">
                assignment_late
              </span>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-bold">
                تعليمات هامة ليوم المراجعة
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-blue-100">
                يرجى الحضور قبل الموعد بـ 15 دقيقة على الأقل لإنهاء الإجراءات
                الإدارية. التأخير قد يؤدي إلى إلغاء الطلب.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2">
                  <span className="material-symbols-outlined text-sm">
                    badge
                  </span>
                  <span className="text-xs font-bold">
                    الهوية الشخصية / جواز السفر
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2">
                  <span className="material-symbols-outlined text-sm">
                    receipt_long
                  </span>
                  <span className="text-xs font-bold">إيصال الحجز المطبوع</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <button className="bg-blue-700 to-primary-container text-white flex w-full items-center justify-center gap-3 rounded-lg bg-gradient-to-r px-10 py-4 text-lg font-bold shadow-lg transition-transform hover:scale-105 sm:w-auto">
            <span className="material-symbols-outlined">print</span>
            طباعة الإيصال
          </button>
          <button className="bg-gray-200 text-on-surface-variant hover:bg-surface-container-highest flex w-full items-center justify-center gap-3 rounded-lg px-10 py-4 text-lg font-bold transition-colors sm:w-auto cursor-pointer">
            <span className="material-symbols-outlined">mail</span>
            إرسال إلى البريد الإلكتروني
          </button>
        </div>

        <div className="mt-16 border-t border-slate-200 pt-8 text-center">
          <p className="text-secondary text-sm">
            هل تواجه مشكلة؟ تواصل مع الدعم الفني على{" "}
            <span className="text-primary font-bold">800-EDUCATION</span>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Print;
