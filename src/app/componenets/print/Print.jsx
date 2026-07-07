import { QRCodeSVG } from 'qrcode.react'; // Or import { QRCodeCanvas }

const Print = ({ items,step,setStep }) => {
  {console.log(step)}
  return (
    <section className="mx-auto w-full max-w-5xl flex-1 p-4 md:p-10 lg:p-16">
      <div className="mb-12 text-center">
        <div className="text-primary mb-6 inline-flex h-20 w-20 items-center justify-center rounded-lg bg-blue-100">
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
          نشكرك على استخدام بوابة إعادة تصحيح الأوراق. يرجى مراجعة تفاصيل الحجز
          أدناه والاحتفاظ برقم الطلب للرجوع إليه مستقبلاً.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="bg-surface-container-lowest relative overflow-hidden rounded-xl p-8 shadow-sm md:col-span-2">
          <div className="bg-primary/5 absolute top-0 right-0 -mt-16 -mr-16 h-32 w-32 rounded-full"></div>
          <div className="relative z-10">
            <span className="mb-2 block text-xs font-bold tracking-widest text-blue-500 uppercase">
              رقم الطلب
            </span>
            <div className="flex items-center justify-between">
              <h6 className="text-on-surface text-md font-black tracking-tighter">
                {items?.reservationnumber}
              </h6>
             <QRCodeSVG value={items.reservationnumber} size={100} level="L"  />
              <button className="bg-surface-container hover:bg-surface-container-high rounded-lg p-2 transition-colors">
                <span className="material-symbols-outlined text-on-surface-variant cursor-pointer rounded-lg bg-gray-200 p-2 transition-colors hover:bg-gray-300">
                  content_copy
                </span>
              </button>
            </div>
            <div className="mt-8 flex flex-col gap-8 md:flex-row">
              <div className="flex items-center gap-4">
                <div className="text-on-secondary-fixed flex h-12 w-12 items-center justify-center rounded-xl bg-gray-200">
                  <span className="material-symbols-outlined">
                    calendar_month
                  </span>
                </div>
                <div>
                  <p className="text-secondary text-xs font-medium">التاريخ</p>
                  <p className="text-on-surface font-bold">15 أكتوبر 2024</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-on-secondary-fixed flex h-12 w-12 items-center justify-center rounded-xl bg-gray-200">
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
            <span className="mb-4 block text-xs font-bold tracking-widest text-blue-500 uppercase">
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
            {Object.keys(items).filter((key) => items[key] === true).map((subject, index) => (
              <li
                key={index} className="bg-surface-container-low flex items-center justify-between rounded-lg p-3"
              >
                <span className="text-on-surface font-semibold">
                  {subject === "arabic" ? "اللغة العربية" :
                    subject === "algebra" ? "جبر" :
                      subject === "geometry" ? "هندسة" :
                      subject === "sciense" ? "العلوم" :
                        subject === "english" ? "اللغة الإنجليزية" :
                          subject === "social" ? "الدراسات الاجتماعية" :
                            subject === "religious" ? "التربية الدينية" :
                              subject === "ict" ? "الحاسب الآلي" :
                                  subject === "art" ? "رسم" :""}
                </span>
                <span
                  className="material-symbols-outlined rounded-full bg-blue-700 text-white"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
              </li>
            ))}

        
          
          </ul>
        </div>

        <div className="relative flex flex-col items-center gap-8 overflow-hidden rounded-xl bg-blue-500 text-white p-8 shadow-md md:col-span-2 md:flex-row">
          <div className="absolute top-0 left-0 -mt-32 -ml-32 h-64 w-64 rounded-lg bg-white/5"></div>



          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg bg-blue-400">
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
                <span className="material-symbols-outlined text-sm">badge</span>
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

      <div onClick={()=> setStep( ++step)} className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
        <button  className="to-primary-container flex w-full items-center justify-center gap-3 rounded-lg bg-blue-700 bg-gradient-to-r px-10 py-4 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105 sm:w-auto">
          <span className="material-symbols-outlined" >print</span>
          طباعة الإيصال
        </button>
        <button className="text-on-surface-variant hover:bg-surface-container-highest flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg bg-gray-200 px-10 py-4 text-lg font-bold transition-colors sm:w-auto">
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
      {/* <Receipt /> */}
    </section>
  );
};

export default Print;
