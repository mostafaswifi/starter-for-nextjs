import { QRCodeSVG } from 'qrcode.react'; // Or import { QRCodeCanvas }
import { useEffect,useState } from 'react';
const Print = ({ items,step,setStep,setItems }) => {
  const [reviseDate, setReviseDate] = useState(new Date(items?.preservedate));
//  console.log(items)
useEffect(() => {
  setReviseDate(new Date(items?.preservedate));
},[])
  return (
    <section className="mx-auto w-full max-w-5xl flex-1 p-4 md:p-10 lg:p-16" >
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
                  <p className="text-on-surface font-bold">{reviseDate.toLocaleDateString("ar-EG", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            
            })}</p>
                </div>
              </div>
              {/* <div className="flex items-center gap-4">
                <div className="text-on-secondary-fixed flex h-12 w-12 items-center justify-center rounded-xl bg-gray-200">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <p className="text-secondary text-xs font-medium">الوقت</p>
                  <p className="text-on-surface font-bold">09:30 صباحاً</p>
                </div>
              </div> */}
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
             مديرية التربية و التعليم - الزقازيق - بجوار مدرسة الثانوية العسكرية
            </p>
          </div>
          <div className="bg-surface-container relative mt-6 h-24 overflow-hidden rounded-lg">
           
            <iframe className="absolute inset-0"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d340.77683485881016!2d31.493781396104676!3d30.582773481037552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7f0ff3ced8279%3A0x213dbe4d58b92ecc!2sEducation%20Directorate%20-%20El%20Sharqeya!5e0!3m2!1sen!2seg!4v1785515933170!5m2!1sen!2seg" width="600" height="450" style={{marginRight: 10}} allowFullScreen={true} loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
           
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
        <button  className="to-primary-container flex w-full items-center justify-center gap-3 rounded-lg bg-blue-700 bg-gradient-to-r px-10 py-4 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105 sm:w-auto" >
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
