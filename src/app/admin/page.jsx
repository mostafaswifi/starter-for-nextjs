// app/page.jsx
'use client'

import { useState } from 'react'

export default function Page() {
  const [openAccordion1, setOpenAccordion1] = useState(false)
  const [openAccordion2, setOpenAccordion2] = useState(false)

  return (
    <div className="bg-gray-50 text-gray-900 flex">
      {/* SideNavBar */}
      


      <aside className="bg-white border-l border-gray-200 p-6  flex h-full w-100 flex-col text-right shadow-md">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-blue-600">
            بوابة إعادة التصحيح
          </h1>
          <p className="text-sm text-gray-600">
            الشهادة الإعدادية - محافظة الشرقية
          </p>
        </div>
        <nav className="space-y-2 flex-grow">
          <div
            className="gap-4 p-4 bg-blue-50 text-blue-700 flex items-center rounded-lg font-bold transition-all duration-200 ease-in-out bg-gray-200 cursor-pointer hover:bg-blue-100"
            href="#"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              info
            </span>
            <span className="text-body-md font-large">
              نظرة عامة على العملية
            </span>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200/50">
            <h4 className="text-sm font-medium text-blue-600 mb-4 gap-2 px-4 flex items-center">
              <span className="material-symbols-outlined text-sm">bolt</span>
              إجراءات سريعة
            </h4>
            <div className="space-y-2">
              <button className="p-4 border border-blue-600 text-blue-600 hover:bg-blue-50 hover:shadow-md hover:-translate-y-0.5 flex w-full items-center justify-between rounded-lg font-bold transition-all">
                <span className="gap-2 flex items-center">
                  <span className="material-symbols-outlined">calendar_month</span>
                  تقويم المراجعة
                </span>
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="p-4 border border-gray-300 text-gray-600 hover:bg-gray-100 hover:shadow-md hover:-translate-y-0.5 flex w-full items-center justify-between rounded-lg font-bold transition-all">
                <span className="gap-2 flex items-center">
                  <span className="material-symbols-outlined">analytics</span>
                  التقارير الإحصائية
                </span>
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="p-4 border border-gray-300 text-gray-600 hover:bg-gray-100 hover:shadow-md hover:-translate-y-0.5 flex w-full items-center justify-between rounded-lg font-bold transition-all">
                <span className="gap-2 flex items-center">
                  <span className="material-symbols-outlined">groups</span>
                  تقسيم المجموعات
                </span>
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="p-4 border border-gray-300 text-gray-600 hover:bg-gray-100 hover:shadow-md hover:-translate-y-0.5 flex w-full items-center justify-between rounded-lg font-bold transition-all">
                <span className="gap-2 flex items-center">
                  <span className="material-symbols-outlined">history</span>
                  أحدث الطلبات
                </span>
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex min-h-screen flex-col w-full">
 

        {/* Main Content */}
        <main className="p-6 max-w-7xl mx-auto w-full flex-grow">
            
          {/* Greeting */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-1">
              أهلاً بك، أدمن
            </h2>
            <p className="text-lg text-gray-600">
              تتم مراجعة الطلبات والعمليات الإدارية لليوم.
            </p>
          </section>

          {/* Summary Bento Grid */}
          <section className="gap-4 mb-8 grid grid-cols-1 md:grid-cols-4">
            <div className="bg-white p-6 border-r-4 border-blue-600 rounded-xl shadow-sm transition-all duration-300 hover:border-blue-600 hover:-translate-y-0.5 hover:shadow-lg cursor-default">
              <div className="mb-4 flex items-start justify-between">
                <span className="material-symbols-outlined text-blue-600 bg-blue-50/10 p-2 rounded-lg">
                  description
                </span>
                <span className="text-blue-600 text-sm font-bold">+12%</span>
              </div>
              <p className="text-gray-600 text-sm font-medium mb-1">
                إجمالي الطلبات
              </p>
              <h3 className="text-3xl font-bold text-gray-900">1,284</h3>
            </div>
            <div className="bg-white p-6 border-r-4 border-teal-600 rounded-xl shadow-sm transition-all duration-300 hover:border-teal-600 hover:-translate-y-0.5 hover:shadow-lg cursor-default">
              <div className="mb-4 flex items-start justify-between">
                <span className="material-symbols-outlined text-teal-600 bg-teal-50/30 p-2 rounded-lg">
                  pending_actions
                </span>
                <span className="text-teal-600 text-sm font-bold">نشط</span>
              </div>
              <p className="text-gray-600 text-sm font-medium mb-1">
                طلبات قيد المراجعة
              </p>
              <h3 className="text-3xl font-bold text-gray-900">432</h3>
            </div>
            <div className="bg-white p-6 border-r-4 border-green-600 rounded-xl shadow-sm transition-all duration-300 hover:border-green-600 hover:-translate-y-0.5 hover:shadow-lg cursor-default">
              <div className="mb-4 flex items-start justify-between">
                <span className="material-symbols-outlined text-green-600 bg-green-50 p-2 rounded-lg">
                  task_alt
                </span>
                <span className="text-green-600 text-sm font-bold">85%</span>
              </div>
              <p className="text-gray-600 text-sm font-medium mb-1">
                طلبات مكتملة
              </p>
              <h3 className="text-3xl font-bold text-gray-900">812</h3>
            </div>
            <div className="bg-white p-6 border-r-4 border-blue-400 rounded-xl shadow-sm transition-all duration-300 hover:border-blue-400 hover:-translate-y-0.5 hover:shadow-lg cursor-default">
              <div className="-mt-2 -mr-2 mb-2 flex justify-end">
                <button
                  className="gap-1 text-blue-600 hover:bg-blue-50 px-3 py-1 text-sm font-medium flex items-center rounded transition-colors"
                  title="عرض جميع المواعيد"
                >
                  <span>عرض الكل</span>
                  <span className="material-symbols-outlined text-sm">
                    chevron_left
                  </span>
                </button>
              </div>
              <div className="mb-4 flex items-start justify-between">
                <span className="material-symbols-outlined text-blue-600 bg-blue-100 p-2 rounded-lg">
                  event_available
                </span>
                <span className="text-blue-600 text-sm font-bold">اليوم</span>
              </div>
              <p className="text-gray-600 text-sm font-medium mb-1">
                مواعيد اليوم
              </p>
              <h3 className="text-3xl font-bold text-gray-900">45</h3>
            </div>
          </section>

          {/* Review Period */}
          <div className="gap-4 mb-8 grid grid-cols-1">
            <section className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm">
              <h4 className="text-xl font-bold text-blue-600 mb-6 gap-2 flex items-center">
                <span className="material-symbols-outlined">calendar_month</span>
                فترة المراجعة
              </h4>
              <div className="space-y-4">
                <div className="gap-1 flex flex-col">
                  <label className="text-sm font-medium text-gray-600">
                    تاريخ البدء
                  </label>
                  <div className="relative">
                    <input
                      className="w-full p-4 pr-12 border border-gray-300 rounded-lg bg-gray-50 text-base focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
                      type="date"
                    />
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                      event
                    </span>
                  </div>
                </div>
                <div className="gap-1 flex flex-col">
                  <label className="text-sm font-medium text-gray-600">
                    تاريخ الانتهاء
                  </label>
                  <div className="relative">
                    <input
                      className="w-full p-4 pr-12 border border-gray-300 rounded-lg bg-gray-50 text-base focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
                      type="date"
                    />
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                      event
                    </span>
                  </div>
                </div>
                <button className="w-full mt-4 bg-blue-600 text-white font-bold py-4 px-6 rounded-lg shadow-sm hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-md transition-all">
                  تحديث الفترة
                </button>
              </div>
            </section>
          </div>

          {/* Main Interactive Area */}
          <div className="gap-4 grid grid-cols-1">
            {/* Group Statistics & Task Assignment */}
            <section className="gap-4 mt-4 grid grid-cols-1 md:grid-cols-2">
              {/* Group Statistics */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                  <h4 className="text-xl font-bold text-blue-600">
                    إحصائيات المجموعات
                  </h4>
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <div className="text-sm font-medium flex justify-between">
                      <span>المجموعة ١</span>
                      <span>٨٠٪</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: '80%' }}
                      ></div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-medium flex justify-between">
                      <span>المجموعة ٢</span>
                      <span>٤٥٪</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-teal-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: '45%' }}
                      ></div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-medium flex justify-between">
                      <span>المجموعة ٣</span>
                      <span>٢٠٪</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: '20%' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Task Assignment */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                  <h4 className="text-xl font-bold text-blue-600">
                    توزيع المهام
                  </h4>
                </div>
                <div className="p-6 space-y-2">
                  <div className="flex items-center justify-between p-3 border border-gray-200/50 rounded-lg">
                    <div className="gap-2 flex items-center">
                      <span className="material-symbols-outlined text-blue-600">
                        edit_document
                      </span>
                      <span className="text-base">مراجعة الأوراق</span>
                    </div>
                    <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-bold">
                      قيد التنفيذ
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-gray-200/50 rounded-lg">
                    <div className="gap-2 flex items-center">
                      <span className="material-symbols-outlined text-blue-600">
                        verified
                      </span>
                      <span className="text-base">رصد الدرجات</span>
                    </div>
                    <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-xs font-bold">
                      قيد الانتظار
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-gray-200/50 rounded-lg">
                    <div className="gap-2 flex items-center">
                      <span className="material-symbols-outlined text-blue-600">
                        card_membership
                      </span>
                      <span className="text-base">إصدار الشهادات</span>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold">
                      مكتمل
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Actions & Stats */}
            <aside className="gap-4 flex flex-col">
              {/* Student Division */}
              <section className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
                  <h4 className="text-xl font-bold text-blue-600">
                    تقسيم الطلاب
                  </h4>
                  <div className="gap-2 mr-4 flex items-center">
                    <label className="text-sm font-medium text-gray-600">
                      السعة القصوى:
                    </label>
                    <input
                      type="number"
                      defaultValue="2"
                      className="w-16 p-2 border border-gray-300 rounded-lg bg-white text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
                    />
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-md transition-all gap-2 flex items-center">
                    <span className="material-symbols-outlined">group_add</span>
                    توزيع في مجموعات
                  </button>
                </div>
                <div className="p-6 gap-4 grid grid-cols-1 md:grid-cols-2">
                  {/* Group 1 */}
                  <div className="border border-gray-200 rounded-lg p-4 bg-teal-50/30 border-t-4 border-teal-600">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-bold text-blue-600">
                        المجموعة ١ (طالبان)
                      </span>
                      <span className="text-sm text-gray-500">٢٥ أكتوبر</span>
                      <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        نشط
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm p-2 bg-white rounded border border-gray-200/50 flex justify-between">
                        <span>أحمد محمد علي</span>
                        <span className="text-xs text-gray-600">#RQ-8821</span>
                      </div>
                      <div className="text-sm p-2 bg-white rounded border border-gray-200/50 flex justify-between">
                        <span>سارة يوسف إبراهيم</span>
                        <span className="text-xs text-gray-600">#RQ-8819</span>
                      </div>
                    </div>
                  </div>
                  {/* Group 2 */}
                  <div className="border border-gray-200 rounded-lg p-4 bg-red-50/30 border-t-4 border-red-600">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-bold text-blue-600">
                        المجموعة ٢ (طالبان)
                      </span>
                      <span className="text-sm text-gray-500">٢٦ أكتوبر</span>
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        مكتمل
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm p-2 bg-white rounded border border-gray-200/50 flex justify-between">
                        <span>ياسين خالد حسن</span>
                        <span className="text-xs text-gray-600">#RQ-8815</span>
                      </div>
                      <div className="text-sm p-2 bg-white rounded border border-gray-200/50 flex justify-between">
                        <span>مريم محمود السيد</span>
                        <span className="text-xs text-gray-600">#RQ-8812</span>
                      </div>
                    </div>
                  </div>
                  {/* Group 3 */}
                  <div className="border border-gray-200 rounded-lg p-4 bg-teal-50/30 border-t-4 border-teal-600 md:col-span-2">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-bold text-blue-600">
                        المجموعة ٣ (طالب واحد)
                      </span>
                      <span className="text-sm text-gray-500">٢٧ أكتوبر</span>
                      <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        حالي
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm p-2 bg-white rounded border border-gray-200/50 flex justify-between">
                        <span>محمد خالد محمود</span>
                        <span className="text-xs text-gray-600">#RQ-8810</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* System Alert */}
              <section className="bg-blue-900 text-white p-6 rounded-xl shadow-md overflow-hidden relative hover:shadow-lg transition-shadow">
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-2">تنبيه النظام</h4>
                  <p className="text-sm opacity-90 mb-6">
                    هناك 12 طلباً بانتظار التوزيع على المقرات الإدارية المختصة.
                  </p>
                  <button className="bg-white text-blue-600 px-6 py-1 rounded-full text-xs font-bold hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-md transition-all">
                    توزيع الآن
                  </button>
                </div>
                <span className="material-symbols-outlined absolute -bottom-4 -left-4 text-8xl opacity-10">
                  warning
                </span>
              </section>

              {/* Latest Requests */}
              <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col w-full">
                <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
                  <h4 className="text-xl font-bold text-blue-600">
                    أحدث الطلبات
                  </h4>
                  <div className="gap-4 mr-4 flex flex-grow items-center justify-end">
                    <div className="relative w-full max-w-xs">
                      <input
                        className="w-full p-2 pr-10 border border-gray-300 rounded-lg bg-white text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
                        type="text"
                        placeholder="بحث باسم الطالب أو رقم الطلب..."
                      />
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none text-sm">
                        search
                      </span>
                    </div>
                    <button className="text-blue-600 font-bold text-xs hover:underline">
                      عرض الكل
                    </button>
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  {/* Accordion Item 1 */}
                  <div className="border border-gray-200/30 rounded-lg overflow-hidden bg-gray-50">
                    <button
                      className="w-full flex items-center justify-between p-4 hover:bg-gray-100 transition-colors text-right"
                      onClick={() => setOpenAccordion1(!openAccordion1)}
                    >
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-900 text-base">
                          أحمد محمد علي
                        </span>
                        <span className="text-xs text-gray-600">#RQ-8821</span>
                      </div>
                      <div className="gap-4 flex items-center">
                        <span className="text-xs bg-teal-100 text-teal-800 px-3 py-1 rounded-full font-bold">
                          مراجعة
                        </span>
                        <span
                          className={`material-symbols-outlined text-gray-500 transition-transform duration-300 ${
                            openAccordion1 ? 'rotate-180' : ''
                          }`}
                        >
                          expand_more
                        </span>
                      </div>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openAccordion1 ? 'max-h-[500px]' : 'max-h-0'
                      }`}
                    >
                      <div className="p-4 border-t border-gray-200/30 bg-white space-y-2">
                        <div className="gap-4 grid grid-cols-2">
                          <div>
                            <p className="text-xs text-gray-600 mb-1">
                              تاريخ الطلب
                            </p>
                            <p className="text-sm font-bold">
                              24 أكتوبر 2023
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600 mb-1">
                              المواد المطلوبة
                            </p>
                            <p className="text-sm font-bold">
                              اللغة العربية، الرياضيات
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600 mb-1">
                              نوع الطلب
                            </p>
                            <p className="text-sm font-bold">
                              إعادة تصحيح يدوي
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600 mb-1">
                              المقر الإداري
                            </p>
                            <p className="text-sm font-bold">
                              إدارة العاشر من رمضان
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Accordion Item 2 */}
                  <div className="border border-gray-200/30 rounded-lg overflow-hidden bg-gray-50">
                    <button
                      className="w-full flex items-center justify-between p-4 hover:bg-gray-100 transition-colors text-right"
                      onClick={() => setOpenAccordion2(!openAccordion2)}
                    >
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-900 text-base">
                          سارة يوسف إبراهيم
                        </span>
                        <span className="text-xs text-gray-600">#RQ-8819</span>
                      </div>
                      <div className="gap-4 flex items-center">
                        <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-bold">
                          مكتمل
                        </span>
                        <span
                          className={`material-symbols-outlined text-gray-500 transition-transform duration-300 ${
                            openAccordion2 ? 'rotate-180' : ''
                          }`}
                        >
                          expand_more
                        </span>
                      </div>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openAccordion2 ? 'max-h-[500px]' : 'max-h-0'
                      }`}
                    >
                      <div className="p-4 border-t border-gray-200/30 bg-white space-y-2">
                        <div className="gap-4 grid grid-cols-2">
                          <div>
                            <p className="text-xs text-gray-600 mb-1">
                              تاريخ الطلب
                            </p>
                            <p className="text-sm font-bold">
                              23 أكتوبر 2023
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600 mb-1">
                              المواد المطلوبة
                            </p>
                            <p className="text-sm font-bold">
                              اللغة الإنجليزية، العلوم
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600 mb-1">
                              النتيجة النهائية
                            </p>
                            <p className="text-sm font-bold text-blue-600">
                              تم تعديل الدرجة (+2)
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600 mb-1">
                              تاريخ الاعتماد
                            </p>
                            <p className="text-sm font-bold">
                              25 أكتوبر 2023
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </aside>
          </div>
        </main>

     
      </div>
    </div>
  )
}