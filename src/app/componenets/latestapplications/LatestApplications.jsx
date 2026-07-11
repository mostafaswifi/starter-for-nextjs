"use client";
import { useState } from "react";
const LatestApplications = ({ data }) => {
  console.log(data[0]);
  const [openAccordion1, setOpenAccordion1] = useState(false);
  const [openAccordion2, setOpenAccordion2] = useState(false);
  return (
    <section className="flex w-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-6 py-4">
        <h4 className="text-xl font-bold text-blue-600">أحدث الطلبات</h4>
        <div className="mr-4 flex flex-grow items-center justify-end gap-4">
          <div className="relative w-full max-w-xs">
            <input
              className="w-full rounded-lg border border-gray-300 bg-white p-2 pr-10 text-sm transition-all outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              type="text"
              placeholder="بحث باسم الطالب أو رقم الطلب..."
            />
            <span className="material-symbols-outlined pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-sm text-gray-500">
              search
            </span>
          </div>
          <button className="text-xs font-bold text-blue-600 hover:underline">
            عرض الكل
          </button>
        </div>
      </div>
      <div className="space-y-2 p-6">
        {/* Accordion Item 1 */}
        <div className="overflow-hidden rounded-lg border border-gray-200/30 bg-gray-50">
          <button
            className="flex w-full items-center justify-between p-4 text-right transition-colors hover:bg-gray-100"
            onClick={() => setOpenAccordion1(!openAccordion1)}
          >
            <div className="flex flex-col">
              <span className="text-base font-bold text-gray-900">
                أحمد محمد علي
              </span>
              <span className="text-xs text-gray-600">#RQ-8821</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-bold text-teal-800">
                مراجعة
              </span>
              <span
                className={`material-symbols-outlined text-gray-500 transition-transform duration-300 ${
                  openAccordion1 ? "rotate-180" : ""
                }`}
              >
                expand_more
              </span>
            </div>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openAccordion1 ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <div className="space-y-2 border-t border-gray-200/30 bg-white p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="mb-1 text-xs text-gray-600">تاريخ الطلب</p>
                  <p className="text-sm font-bold">24 أكتوبر 2023</p>
                </div>
                <div>
                  <p className="mb-1 text-xs text-gray-600">المواد المطلوبة</p>
                  <p className="text-sm font-bold">اللغة العربية، الرياضيات</p>
                </div>
                <div>
                  <p className="mb-1 text-xs text-gray-600">نوع الطلب</p>
                  <p className="text-sm font-bold">إعادة تصحيح يدوي</p>
                </div>
                <div>
                  <p className="mb-1 text-xs text-gray-600">المقر الإداري</p>
                  <p className="text-sm font-bold">إدارة العاشر من رمضان</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accordion Item 2 */}
        <div className="overflow-hidden rounded-lg border border-gray-200/30 bg-gray-50">
          <button
            className="flex w-full items-center justify-between p-4 text-right transition-colors hover:bg-gray-100"
            onClick={() => setOpenAccordion2(!openAccordion2)}
          >
            <div className="flex flex-col">
              <span className="text-base font-bold text-gray-900">
                سارة يوسف إبراهيم
              </span>
              <span className="text-xs text-gray-600">#RQ-8819</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">
                مكتمل
              </span>
              <span
                className={`material-symbols-outlined text-gray-500 transition-transform duration-300 ${
                  openAccordion2 ? "rotate-180" : ""
                }`}
              >
                expand_more
              </span>
            </div>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openAccordion2 ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <div className="space-y-2 border-t border-gray-200/30 bg-white p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="mb-1 text-xs text-gray-600">تاريخ الطلب</p>
                  <p className="text-sm font-bold">23 أكتوبر 2023</p>
                </div>
                <div>
                  <p className="mb-1 text-xs text-gray-600">المواد المطلوبة</p>
                  <p className="text-sm font-bold">اللغة الإنجليزية، العلوم</p>
                </div>
                <div>
                  <p className="mb-1 text-xs text-gray-600">النتيجة النهائية</p>
                  <p className="text-sm font-bold text-blue-600">
                    تم تعديل الدرجة (+2)
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-xs text-gray-600">تاريخ الاعتماد</p>
                  <p className="text-sm font-bold">25 أكتوبر 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestApplications;
