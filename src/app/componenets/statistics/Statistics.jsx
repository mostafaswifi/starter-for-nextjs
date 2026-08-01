'use client';


import { useEffect, useState } from "react";


const Statistics = ({data}) => {
  // console.log(data[0])
const [studentsDataItems, setStudentsDataItems] = useState([]);
const studentsData =async ()=>{
  const data =await fetch('/api/getAllStudents').then(res => res.json()).then(data =>data.data);
  setStudentsDataItems(data);
  
}

useEffect(() => {
  studentsData();
  
}, []);
// console.log(studentsDataItems);
// console.log(studentsDataItems?.filter(student => student?.reservasionconfirm == true).length)
  return (
    <div>
      <div className="flex flex-col w-full">
 

        {/* Main Content */}
        <main className="p-2 max-w-7xl mx-auto w-full flex-grow">
            
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
                إجمالي الطلاب
              </p>
              <h3 className="text-3xl font-bold text-gray-900">{studentsDataItems.length}</h3>
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
              <h3 className="text-3xl font-bold text-gray-900">{studentsDataItems?.filter(student => student?.nationalid).length}</h3>
            </div>
            <div className="bg-white p-6 border-r-4 border-green-600 rounded-xl shadow-sm transition-all duration-300 hover:border-green-600 hover:-translate-y-0.5 hover:shadow-lg cursor-default">
              <div className="mb-4 flex items-start justify-between">
                <span className="material-symbols-outlined text-green-600 bg-green-50 p-2 rounded-lg">
                  task_alt
                </span>
                <span className="text-green-600 text-sm font-bold">{(studentsDataItems?.filter(student => student?.reservasionconfirm == true).length / studentsDataItems?.filter(student => student ).length * 100).toFixed(2)}%</span>
              </div>
              <p className="text-gray-600 text-sm font-medium mb-1">
                طلبات مؤكدة
              </p>
              <h3 className="text-3xl font-bold text-gray-900">{studentsDataItems?.filter(student => student?.reservasionconfirm == true).length}</h3>
            </div>
            <div className="bg-white p-6 border-r-4 border-blue-400 rounded-xl shadow-sm transition-all duration-300 hover:border-blue-400 hover:-translate-y-0.5 hover:shadow-lg cursor-default">
         
              <div className="mb-4 flex items-start justify-between">
                <span className="material-symbols-outlined text-blue-600 bg-blue-100 p-2 rounded-lg">
                  event_available
                </span>
             
              </div>
              <p className="text-gray-600 text-sm font-medium mb-1">
               المبلغ الإجمالي
              </p>
              <h3 className="text-3xl font-bold text-gray-900">{studentsDataItems?.map(student => student?.totalcost).reduce((total, price) => total + price, 0)}</h3>
            </div>
          </section>

  
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
  
          </div>
        </main>

     
      </div>
    </div>
  )
}

export default Statistics
