"use client";

import "@appwrite.io/pink-icons";
import Link from "next/link";
import { useEffect } from "react";

import Image from "next/image";

import { swalAlert } from "../lib/swal";

import pen from "../../public/pen.png";

export default function Home() {
  // Fetch all items
// function update () {
//   {swalAlert("تم تحديث التاريخ بنجاح"," عملية تحديث التاريخ بنجاح","success","موافق")}
// }
// update();
useEffect(() => {
  const update = () => {
    swalAlert("تنبيه هام !!! "," البوابة الإلكترونية لطلبات التظلم تعمل علي الكمبيوتر و اللاب توب فقط , و لا تعمل علي الموبايل","success","موافق")
  };
  update();
})
  return (
    
    <main className="checker-background flex flex-col items-center p-5">
      <main className="mx-auto max-w-7xl px-6 py-12">
        <section className="asymmetric-grid mb-24 items-center">
          <div className="space-y-8">
            <div className="text-on-primary-fixed inline-flex items-center gap-2 rounded-xl bg-blue-100 px-4 py-2 text-sm font-semibold">
              <span
                className="material-symbols-outlined text-sm"
                data-icon="verified"
              >
                verified
              </span>
              بوابة تقديم طلبات إعادة التصحيح الرسمية
            </div>
            <div className="text-on-primary-fixed inline-flex items-center gap-2 rounded-xl bg-green-100 px-4 py-2 text-sm font-semibold">
              <span
                className="material-symbols-outlined text-sm"
                data-icon="info"
              >
                info
              </span>
             الموقع يعمل علي اجهزة الكمبيوتر و اللاب توب ( لا يعمل علي الموبايل )
            </div>
            <h1 className="text-on-surface text-5xl leading-[1.1] font-extrabold tracking-tighter lg:text-7xl">
              نظام مواعيد <br />
              <span className="from-primary to-primary-container bg-gradient-to-l bg-clip-text text-blue-700">
                إعادة تصحيح الدرجات
              </span>
            </h1>
            <p className="text-secondary max-w-xl text-lg leading-relaxed">
              بوابة مخصصة لطلاب الصف التاسع لتقديم طلبات مراجعة النتائج
              الأكاديمية للعام الدراسي 2027/ 2028. تضمن البوابة الشفافية الكاملة
              وجدولة المواعيد بشكل منظم لضمان حق الطالب.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/book-appointment"
                className="from-primary to-primary-container group flex items-center gap-3 rounded-xl bg-blue-700 px-8 py-4 text-lg font-bold text-white transition-all hover:shadow-lg"
              >
                <span>بدء طلب إعادة التصحيح</span>
                <span
                  className="material-symbols-outlined transition-transform group-hover:translate-x-[-4px]"
                  data-icon="arrow_back"
                >
                  arrow_back
                </span>
              </Link>

              <button
                onClick={() =>
                  swalAlert(
                    "دليل المستخدم",
                    "هذا هو دليل المستخدم",
                    "info",
                    "موافق",
                  )
                }
                className="from-primary to-primary-container group flex items-center gap-3 rounded-xl bg-gray-200 px-8 py-4 text-lg font-bold transition-all hover:shadow-lg"
              >
                <span> دليل المستخدم</span>
                <span
                  className="material-symbols-outlined transition-transform group-hover:translate-x-[-4px]"
                  data-icon="arrow_back"
                >
                  arrow_back
                </span>
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-primary-fixed absolute -top-12 -right-12 h-64 w-64 rounded-full opacity-20 blur-3xl"></div>
            <div className="bg-surface-container-lowest relative z-10 rotate-2 transform rounded-xl p-4 shadow-xl">
              <Image
                className="h-[450px] w-full rounded-lg object-cover"
                data-alt="close-up of a wooden desk with a neat stack of exam papers and a blue fountain pen in a brightly lit academic office"
                src={pen.src}
                width={450}
                height={450}
                alt="close-up of a wooden desk with a neat stack of exam papers and a blue fountain pen in a brightly lit academic office"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 z-20 max-w-[240px] rounded-xl border border-slate-100 bg-white p-6 shadow-lg">
              <div className="mb-3 flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-tertiary text-4xl"
                  data-icon="event_available"
                >
                  event_available
                </span>
                <div>
                  <div className="text-secondary text-xs">المواعيد المتاحة</div>
                  <div className="text-on-surface font-bold">94% من السعة</div>
                </div>
              </div>
              <div className="bg-surface-container h-2 w-full overflow-hidden rounded-full">
                <div className="bg-primary h-full w-[94%]"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <div className="mb-16 text-center">
            <h2 className="text-on-surface mb-4 text-3xl font-bold">
              آلية تقديم الطلب
            </h2>
            <p className="text-secondary">
              ثلاث خطوات بسيطة لجدولة موعدك الرسمي
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-surface-container-lowest rounded-xl border-t-4 border-blue-800 p-8 shadow-sm transition-all hover:translate-y-[-8px]">
              <div className="bg-primary-fixed mb-6 flex h-12 w-12 items-center justify-center rounded-lg">
                <span
                  className="material-symbols-outlined rounded-lg bg-gray-200 p-4 text-blue-800"
                  data-icon="person_search"
                >
                  person_search
                </span>
              </div>
              <h3 className="text-on-surface mb-3 text-xl font-bold">
                1. إدخال البيانات
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                قم بإدخال رقم الجلوس والرقم القومي للتحقق من هويتك وجلب بياناتك
                الأكاديمية المسجلة في قاعدة بيانات الوزارة.
              </p>
            </div>

            <div className="bg-surface-container-lowest rounded-xl border-t-4 border-blue-800 p-8 shadow-sm transition-all hover:translate-y-[-8px]">
              <div className="bg-primary-fixed mb-6 flex h-12 w-12 items-center justify-center rounded-lg">
                <span
                  className="material-symbols-outlined rounded-lg bg-gray-200 p-4 text-blue-800"
                  data-icon="menu_book"
                >
                  menu_book
                </span>
              </div>
              <h3 className="text-on-surface mb-3 text-xl font-bold">
                2. اختيار المواد
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                حدد المواد الدراسية التي ترغب في إعادة تصحيحها. يمكنك اختيار
                مادة واحدة أو أكثر حسب حاجتك الأكاديمية.
              </p>
            </div>

            <div className="bg-surface-container-lowest rounded-xl border-t-4 border-blue-800 p-8 shadow-sm transition-all hover:translate-y-[-8px]">
              <div className="bg-primary-fixed mb-6 flex h-12 w-12 items-center justify-center rounded-lg">
                <span
                  className="material-symbols-outlined rounded-lg bg-gray-200 p-4 text-blue-800"
                  data-icon="calendar_month"
                >
                  calendar_month
                </span>
              </div>
              <h3 className="text-on-surface mb-3 text-xl font-bold">
                3. جدولة الموعد تلقائياً
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                اختر الموعدالمناسب للمقابلة من خلال التقويم التفاعلي
                المتاح في النظام لتأكيد طلبك.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto mb-24 max-w-4xl rounded-3xl bg-gray-200 p-8 lg:p-12">
          <div className="rounded-3xl p-8 lg:p-12">
            <div className="flex flex-col gap-12 md:flex-row">
              <div className="md:w-1/3">
                <h2 className="text-on-surface mb-4 text-3xl font-bold">
                  الأسئلة الشائعة
                </h2>
                <p className="text-secondary mb-6 text-sm">
                  كل ما تحتاج معرفته عن عملية إعادة التصحيح والجدولة.
                </p>
                <span
                  className="material-symbols-outlined text-[length:xxx-large] text-gray-300"
                  data-icon="quiz"
                >
                  quiz
                </span>
              </div>
              <div className="space-y-4 rounded-xl bg-white p-6 shadow-sm md:w-2/3">
                <details
                  className="group bg-surface-container-lowest rounded-xl p-6 transition-all"
                  open=""
                >
                  <summary className="text-on-surface flex cursor-pointer list-none items-center justify-between font-bold">
                    <span>ما هي الرسوم المقررة لكل مادة؟</span>
                    <span
                      className="material-symbols-outlined transition-transform group-open:rotate-180"
                      data-icon="expand_more"
                    >
                      expand_more
                    </span>
                  </summary>
                  <p className="text-secondary mt-4 text-sm leading-relaxed">
                    تبلغ رسوم إعادة التصحيح 35 جنيه لكل مادة + 5 جنيه مصاريف إدارية (  للطالب )، يتم دفعها من خلال
                       ديوان عام الإدارة  قبل حضور الموعد.
                  </p>
                </details>
                <details className="group bg-surface-container-lowest rounded-xl p-6 transition-all">
                  <summary className="text-on-surface flex cursor-pointer list-none items-center justify-between font-bold">
                    <span>هل يمكنني تغيير موعد المقابلة بعد تأكيده؟</span>
                    <span
                      className="material-symbols-outlined transition-transform group-open:rotate-180"
                      data-icon="expand_more"
                    >
                      expand_more
                    </span>
                  </summary>
                  <p className="text-secondary mt-4 text-sm leading-relaxed">
                لا ، يمكنك تغيير الموعد من خلال التقويم التفاعلي المتاح في النظام. 
                  </p>
                </details>
                <details className="group bg-surface-container-lowest rounded-xl p-6 transition-all">
                  <summary className="text-on-surface flex cursor-pointer list-none items-center justify-between font-bold">
                    <span>متى تظهر نتائج إعادة التصحيح؟</span>
                    <span
                      className="material-symbols-outlined transition-transform group-open:rotate-180"
                      data-icon="expand_more"
                    >
                      expand_more
                    </span>
                  </summary>
                  <p className="text-secondary mt-4 text-sm leading-relaxed">
                    تظهر النتائج عادة خلال 10 إلى 15 يوم عمل من تاريخ المقابلة.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

        <section className="border-surface-container flex flex-col items-center justify-center gap-12 py-12 md:flex-row">
          <div className="flex items-center gap-4 opacity-60 grayscale">
            <span
              className="material-symbols-outlined text-4xl"
              data-icon="verified_user"
            >
              verified_user
            </span>
            <span className="font-bold text-slate-500">
              حماية البيانات المشفرة
            </span>
          </div>
          <div className="flex items-center gap-4 opacity-60 grayscale">
            <span
              className="material-symbols-outlined text-4xl"
              data-icon="cloud_done"
            >
              cloud_done
            </span>
            <span className="font-bold text-slate-500">
              تزامن لحظي مع النظام المركزي
            </span>
          </div>
          <div className="flex items-center gap-4 opacity-60 grayscale">
            <span
              className="material-symbols-outlined text-4xl"
              data-icon="support_agent"
            >
              support_agent
            </span>
            <span className="font-bold text-slate-500">
              دعم فني على مدار الساعة
            </span>
          </div>
        </section>
      </main>
    </main>
  );
}
