import Barcode from "../barcode/Barcode";
const Receipt = ({ items }) => {
  return (
      <main className="bg-white text-on-surface font-main-md min-h-screen">
    <header className="bg-white border-b border-outline-variant no-print">
      <div
        className="flex justify-between items-center px-container-padding py-4 max-w-[800px] mx-auto w-full"
      >
        <div className="font-headline-lg text-headline-lg font-bold text-primary">
          Academic Review Portal
        </div>
        <div className="flex gap-4">
          <button
            className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg hover:bg-opacity-90 transition-colors cursor-pointer active:opacity-80"
            // onClick="window.print()"
          >
            <span className="material-symbols-outlined">print</span>
            <span className="font-label-bold text-label-bold" >طباعة الإيصال</span>
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 border border-outline text-primary rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer active:opacity-80"
          >
            <span className="material-symbols-outlined">share</span>
            <span className="font-label-bold text-label-bold">مشاركة</span>
          </button>
        </div>
      </div>
    </header>
    <main
      className="max-w-[800px] mx-auto my-8 bg-white border border-outline-variant rounded-sm print-container relative"
    >
      <div className="p-8 relative z-10">
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-outline-variant pb-8 mb-8"
        >
          <div className="flex items-center gap-4">
            <img
              className="h-20 w-auto"
              data-alt="A clean, professional minimalist logo of the Egyptian Ministry of Education"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlTX1T0AAPK8nUeFXFzoJnY280iEhyNRfez6eMLdA-pxhbgzIFmUMquFO_o8mdLFL797IpkwSm81Lzg__-fotWk8mW0XWqz3rD-ebsT-tsSUjZ0NQ3LlAQMYl07YD_AAjyH1p43h5O8myqwKiVSPHVqwVDkZ0_34sBO77RdLJuht3f2LcSumoRP6kPqLqfY4oq83MGcKr2Qa6NFxEfqQI7-S51DgpVkYmYqUWAv_8mtV-m6M6ue5hmVNKoMYR1iP7Z7xL-2AF8ypk"
            />
            <div className="text-right">
              <h1 className="font-headline-lg text-headline-lg text-primary">
                بوابة التظلمات الأكاديمية
              </h1>
              <p className="font-body-md text-on-surface-variant">
                وزارة التربية والتعليم والتعليم الفني
              </p>
            </div>
          </div>
          <div
            className="px-4 py-3 rounded-lg border border-outline-variant text-center"
          >
            <p
              className="font-label-bold text-label-bold text-on-surface-variant uppercase tracking-wider mb-1"
            >
              رقم الإيصال
            </p>
            <p
              className="font-data-mono text-data-mono text-primary bg-white px-2 py-1 border border-outline-variant rounded"
            >
              {items.$id}
            </p>
            <p
              className="flex items-center justify-center px-2 py-3 "
            >
              <Barcode value={items.$id} />
            </p>
          </div>
        </div>
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-primary">person</span>
            <h2 className="font-headline-md text-headline-md text-on-surface">
              بيانات الطالب
            </h2>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 p-6 border border-outline-variant rounded-sm"
          >
            <div
              className="flex justify-between items-center border-b border-outline-variant pb-2"
            >
              <span className="font-label-bold text-on-surface-variant"
                >اسم الطالب:</span>
              <span className="flex items-center justify-start gap-2 me-auto ms-auto" >{items.studentname}</span>
            </div>
            <div
              className="flex justify-between items-center border-b border-outline-variant pb-2"
            >
              <span className="font-label-bold text-on-surface-variant"
                >رقم الجلوس:</span>
              <span className="flex items-center justify-start gap-2 me-auto ms-auto" >{items.seatnum}</span>
            </div>
            <div
              className="flex justify-between items-center border-b border-outline-variant pb-2"
            >
              <span className="font-label-bold text-on-surface-variant"
                >المدرسة:</span
              >
<span className="flex items-center justify-start gap-2 me-auto ms-auto" >{items.school}</span>            </div>
            <div
              className="flex justify-between items-center border-b border-outline-variant pb-2"
            >
              <span className="font-label-bold text-on-surface-variant"
                >المرحلة الدراسية:</span
              >
              <span className="flex items-center justify-start gap-2 me-auto ms-auto" > الصف الثالث الإعدادي</span>
            </div>
          </div>
        </section>
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-primary">book</span>
            <h2 className="font-headline-md text-headline-md text-on-surface">
              المواد المختارة للمراجعة
            </h2>
          </div>
          <div className="flex items-center justify-center gap-2 flex-wrap w-full">
            {Object.keys(items).filter((key) => items[key] === true).map((subject, index) => (
            <div key={index}  className="material-symbols-outlined grow text-end flex items-center justify-center gap-2 py-2 px-4 border border-outline-variant rounded w-50">
                <span   className="font-body-lg text-sm text-center mr-2">
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
              </div>
             
            ))}
        
          </div>



        </section>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-3 space-y-6">
            <div className="p-6 border border-primary-container rounded-sm">
              <div className="flex justify-between items-center">
                <span className="font-headline-md text-headline-md text-primary"
                  >التكلفة الإجمالية:</span
                >
                <span className="font-headline-lg text-headline-lg text-primary"
                  >215 جنيه</span
                >
              </div>
              <div
                className="mt-2 text-on-surface-variant font-label-bold flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-sm"
                  >verified_user</span
                >
                تم سداد المبلغ بنجاح عبر بوابة الدفع الحكومية
              </div>
            </div>
            <div className="p-6 border border-outline-variant rounded-sm">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary text-3xl"
                  >info</span
                >
                <div>
                  <h3
                    className="font-headline-md text-headline-md text-secondary mb-2"
                  >
                    تعليمات يوم المراجعة
                  </h3>
                  <ul
                    className="list-disc list-inside space-y-2 font-body-md text-on-surface-variant"
                  >
                    <li className="">
                      ضرورة إحضار أصل بطاقة الرقم القومي أو شهادة الميلاد.
                    </li>
                    <li className="">
                      الحضور قبل الموعد المحدد بـ 15 دقيقة على الأقل.
                    </li>
                    <li className="">
                      يسمح بدخول الطالب فقط أو ولي أمره في الحالات الخاصة.
                    </li>
                    <li className="">
                      الالتزام بكافة الإجراءات الاحترازية المعلنة في المبنى.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>



          <div
            className="md:col-span-2 flex flex-col items-center gap-4 p-6 border border-outline-variant rounded-sm"
          >
            <div
              className="bg-white flex flex-col p-1 rounded-sm border border-outline shadow-sm relative group flex items-center justify-center"
            >
              <img
                className="w-full"
                data-alt="Appointment confirmation QR code"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFczyoPSAoa_2CRaoC0x6WblwsTqyyk2CxX8nc7jNo0zwCDugQ8g8OEIrlNBXZJp_5LlA6LOY9-9pAg4AV5m2yhG4Y9r0tbSczFY_9FggLPBeXwaRqDinEuV-1TA6iIRw8-JrO4C3O0Gyc0rSsQXOjOTuhF95Bw8EGCixpE3PqU5i9_9eStdaF3xw7JDg0IDbCXVV0qU247QQRYXIPuD8Rxz5Yq5s6l3v7Frov3BAWtmMvfD38wgm6TJCtDgj12nJxU8hQYdVgFG4"
              />
              <div
                className="flex flex-col  bg-primary text-on-primary text-[10px] px-2 py-0.5 rounded-full font-bold uppercase"
              >
                SECURE ID
              </div>
            </div>
            <div className="text-center space-y-3">
              <div>
                <div
                  className="flex items-center justify-center gap-1 text-primary"
                >
                  <span className="material-symbols-outlined text-sm"
                    >calendar_today</span
                  >
                  <span className="font-label-bold">موعد المراجعة</span>
                </div>
                <p className="font-body-lg font-bold text-headline-md">
                  15 أكتوبر 2024
                </p>
                <p className="font-body-md text-on-surface-variant">09:30 صباحاً</p>
              </div>
              <div className="border-t border-outline-variant pt-3">
                <div
                  className="flex items-center justify-center gap-1 text-primary"
                >
                  <span className="material-symbols-outlined text-sm"
                    >location_on</span
                  >
                  <span className="font-label-bold">الموقع</span>
                </div>
                <p
                  className="font-body-md leading-tight text-on-surface font-bold text-body-lg"
                >
                  مديرية التربية والتعليم - المبنى الإداري الرئيسي
                </p>
                <p
                  className="text-[10px] text-on-surface-variant mt-1"
                  data-location="Cairo"
                >
                  City Center, Cairo
                </p>
              </div>
            </div>
          </div>



        </div>
        <div className="mt-12 text-center border-t border-outline-variant pt-6">
          <p
            className="font-body-md text-on-surface-variant font-bold text-body-lg"
          >
            يُرجى الاحتفاظ بهذا الإيصال سواء كان مطبوعاً أو رقمياً وإظهاره عند
            الطلب.
          </p>
          <div className="flex justify-center gap-12 mt-8">
            <div className="flex flex-col items-center">
              <div className="w-32 h-px bg-outline-variant mb-2"></div>
              <span
                className="text-[10px] text-on-surface-variant uppercase tracking-widest"
                >توقيع الموظف المختص</span
              >
            </div>
            <div className="flex flex-col items-center">
              <div className="w-32 h-px bg-outline-variant mb-2"></div>
              <span
                className="text-[10px] text-on-surface-variant uppercase tracking-widest"
                >ختم الجهة الإدارية</span
              >
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer className="no-print bg-white border-t border-outline-variant">
      <div
        className="flex flex-col md:flex-row justify-between items-center px-container-padding py-section-gap max-w-[800px] mx-auto w-full"
      >
        <div className="font-label-bold text-label-bold text-primary mb-4 md:mb-0">
          © 2024 Egyptian Ministry of Education - 10th of Ramadan city
        </div>
        <div className="flex gap-6 text-on-surface-variant font-body-md">
          <a className="hover:text-primary transition-colors" href="#"
            >Contact Support</a
          >
          <a className="hover:text-primary transition-colors" href="#"
            >Privacy Policy</a
          >
          <a className="hover:text-primary transition-colors" href="#"
            >Terms of Service</a
          >
        </div>
      </div>
    </footer>
</main>
  )
}

export default Receipt
