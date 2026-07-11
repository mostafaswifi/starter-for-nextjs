  'use client'
  import { useState } from 'react'
  const LatestApplications = () => {
    const [openAccordion1, setOpenAccordion1] = useState(false)
    const [openAccordion2, setOpenAccordion2] = useState(false)
  return (
   
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
  )
}

export default LatestApplications
