import Barcode from "../barcode/Barcode";
import { QRCodeSVG } from 'qrcode.react';
import logo from "../../../../public/logo.png";
import Image from "next/image";
import { useRef } from 'react';
import html2canvas from 'html2canvas-pro';
import { jsPDF } from 'jspdf';

const Receipt = ({ items }) => {
  const contentRef = useRef(null);

 const handleDownload = async () => {
  const element = contentRef.current;
  if (!element) return;

  // 1. Capture element to canvas using html2canvas-pro
  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    logging: false,
  });

  const imgData = canvas.toDataURL('image/jpeg', 0.98);

  // 2. Create jsPDF document
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();

  pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
  pdf.save(`receipt_${items?.$id || 'download'}.pdf`);
};

  return (
    <main className="bg-white text-on-surface font-main-md min-h-screen">
      <header className="bg-white border-b border-outline-variant no-print">
        <div className="flex justify-between items-center px-container-padding py-4 max-w-[800px] mx-auto w-full">
          <div className="font-headline-lg text-headline-lg font-bold text-primary">
            Academic Review Portal
          </div>
          <div className="flex gap-4">
            <button
              className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg hover:bg-opacity-90 transition-colors cursor-pointer active:opacity-80"
              onClick={handleDownload}
            >
              <span className="material-symbols-outlined">print</span>
              <span className="font-label-bold text-label-bold">طباعة الإيصال</span>
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

      {/* Printable Container */}
      <main
      dir="rtl"
        className="max-w-[800px] mx-auto my-8 bg-white border border-outline-variant rounded-sm print-container relative"
        ref={contentRef}
        style={{ padding: '24px', border: '1px solid #ccc', borderRadius: '8px', background: '#fff' }}
      >
        <div className="p-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-outline-variant pb-8 mb-8">
            <div className="flex items-center gap-4">
              <Image
                className="h-20 w-auto"
                src={logo.src}
                alt="Logo"
                width={400}
                height={400}
                priority
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
            <div className="px-4 py-3 rounded-lg border border-outline-variant text-center">
              <div  className="font-label-bold text-label-bold text-on-surface-variant r mb-1">
                رقم الإيصال
              </div>
              <p className="font-data-mono text-data-mono text-primary bg-white px-2 py-1 border border-outline-variant rounded">
                {items?.$id}
              </p>
              <div className="flex items-center justify-center px-2 py-3">
                <Barcode value={items?.$id || ''} type="pdf417" />
              </div>
            </div>
          </div>

          <div className="font-body-md text-on-surface-variant text-center my-3" dir="rtl">
            برجاء طباعة الإيصال نسختين - أصل و صور - و تسليم الأصل لديوان عام الإدارة و تسديد الرسوم و في حالة عدم تسليم الإيصال أو عدم تسديد الرسوم خلال - 24 - ساعة يعتبر الإيصال لاغياً
          </div>

          <section className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary">person</span>
              <h2 className="font-headline-md text-headline-md text-on-surface">
                بيانات الطالب
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 p-6 border border-outline-variant rounded-sm">
              <div className="flex justify-between items-center border-b border-outline-variant pb-2">
                <span className="font-label-bold text-on-surface-variant">اسم الطالب:</span>
                <span className="flex items-center justify-start gap-2 me-auto ms-auto">{items?.studentname}</span>
              </div>
              <div className="flex justify-between items-center border-b border-outline-variant pb-2">
                <span className="font-label-bold text-on-surface-variant">رقم الجلوس:</span>
                <span className="flex items-center justify-start gap-2 me-auto ms-auto">{items?.seatnum}</span>
              </div>
              <div className="flex justify-between items-center border-b border-outline-variant pb-2">
                <span className="font-label-bold text-on-surface-variant">المدرسة:</span>
                <span className="flex items-center justify-start gap-2 me-auto ms-auto">{items?.school}</span>
              </div>
              <div className="flex justify-between items-center border-b border-outline-variant pb-2">
                <span className="font-label-bold text-on-surface-variant">المرحلة الدراسية:</span>
                <span className="flex items-center justify-start gap-2 me-auto ms-auto">الصف الثالث الإعدادي</span>
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
              {items && Object.keys(items).filter((key) => items[key] === true).map((subject, index) => (
                <div key={index} className=" text-end flex items-center justify-center gap-2 py-2 px-4 border border-outline-variant rounded w-50">
                  <span
                    className="material-symbols-outlined rounded-full bg-blue-700 text-white"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="font-body-lg text-sm text-center">
                    {subject === "arabic" ? "اللغة العربية" :
                     subject === "algebra" ? "جبر" :
                     subject === "geometry" ? "هندسة" :
                     subject === "sciense" ? "العلوم" :
                     subject === "english" ? "اللغة الإنجليزية" :
                     subject === "social" ? "الدراسات الاجتماعية" :
                     subject === "religious" ? "التربية الدينية" :
                     subject === "ict" ? "الحاسب الآلي" :
                     subject === "art" ? "رسم" : ""}
                  </span>
                  
                </div>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-3 space-y-6">
              <div className="p-6 border border-primary-container rounded-sm">
                <div className="flex justify-between items-center">
                  <span className="font-headline-md text-headline-md text-primary">التكلفة الإجمالية:</span>
                  <span className="font-headline-lg text-headline-lg text-primary">{items?.totalcost} جنيه</span>
                </div>
                <div className="mt-2 text-on-surface-variant font-label-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">verified_user</span>
                  يُرجى سداد الرسوم عبر الحضور إلي ديوان عام الإدارة
                </div>
              </div>

              <div className="p-6 border border-outline-variant rounded-sm">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary text-3xl">info</span>
                  <div>
                    <h3 className="font-headline-md text-headline-md text-secondary mb-2">
                      تعليمات يوم المراجعة
                    </h3>
                    <ul className="list-disc space-y-2 font-body-md text-on-surface-variant">
                      <li>ضرورة إحضار أصل بطاقة الرقم القومي أو شهادة الميلاد.</li>
                      <li>الحضور قبل الموعد المحدد بـ 15 دقيقة على الأقل.</li>
                      <li>يسمح بدخول الطالب فقط أو ولي أمره في الحالات الخاصة.</li>
                      <li>الالتزام بكافة الإجراءات الاحترازية المعلنة في المبنى.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 flex flex-col items-center gap-4 p-6 border border-outline-variant rounded-sm">
              <div className="flex flex-col p-1 rounded-sm shadow-sm relative group items-center justify-center">
                <Barcode className="my-4" value={items?.$id || ''} type="code128" />
                <QRCodeSVG className="my-4" value={items?.$id || ''} size={100} level="L" />
                <div className="flex flex-col bg-primary text-on-primary text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">
                  SECURE ID
                </div>
              </div>

              <div className="text-center space-y-3">
                <div>
                  <div className="flex items-center justify-center gap-1 text-primary">
                    <span className="material-symbols-outlined text-sm">calendar_today</span>
                    <span className="font-label-bold">موعد المراجعة</span>
                  </div>
                  <p className="font-body-lg font-bold text-headline-md">15 أكتوبر 2024</p>
                  <p className="font-body-md text-on-surface-variant">09:30 صباحاً</p>
                </div>

                <div className="border-t border-outline-variant pt-3">
                  <div className="flex items-center justify-center gap-1 text-primary">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    <span className="font-label-bold">الموقع</span>
                  </div>
                  <p className="font-body-md leading-tight text-on-surface font-bold text-body-lg">
                    مديرية التربية والتعليم - المبنى الإداري الرئيسي
                  </p>
                  <p className="text-[10px] text-on-surface-variant mt-1" data-location="Cairo">
                    City Center, Cairo
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center border-t border-outline-variant pt-6">
            <p className="font-body-md text-on-surface-variant font-bold text-body-lg">
              يُرجى الاحتفاظ بهذا الإيصال سواء كان مطبوعاً أو رقمياً وإظهاره عند الطلب.
            </p>
            <div className="flex justify-center gap-12 mt-8">
              <div className="flex flex-col items-center">
                <div className="w-32 h-px bg-outline-variant mb-2"></div>
                <span className="text-[10px] text-on-surface-variant ">
                  توقيع الموظف المختص
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-32 h-px bg-outline-variant mb-2"></div>
                <span className="text-[10px] text-on-surface-variant ">
                  ختم الجهة الإدارية
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>


    </main>
  );
};

export default Receipt;