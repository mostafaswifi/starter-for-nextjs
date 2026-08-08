"use client";

import { useEffect, useState } from "react";

const Statistics = ({ data }) => {
  // console.log(data[0])
  const [studentsDataItems, setStudentsDataItems] = useState([]);
  const studentsData = async () => {
    const data = await fetch("/api/getAllStudents")
      .then((res) => res.json())
      .then((data) => data.data);
    setStudentsDataItems(data);
  };

  useEffect(() => {
    studentsData();
  }, []);
  // console.log(studentsDataItems);
  // console.log(studentsDataItems?.filter(student => student?.reservasionconfirm == true).length)
  const countAllSubjects = (students) => {
    const subjects = [
  'arabic',
  'english',
  'social',
  'algebra',
  'geometry',
  'sciense',
  'ict',
  'religious',
  'art'
];

const totalTrue = Object.values(students).reduce((count, student) => {
  return count + subjects.filter(subject => student[subject] === true).length;
}, 0);

return totalTrue;
  }


  return (
    <div>
      <div className="flex w-full flex-col">
        {/* Main Content */}
        <main className="mx-auto w-full max-w-7xl flex-grow p-2">
          {/* Greeting */}
          <section className="mb-8">
            <h2 className="mb-1 text-3xl font-bold text-blue-600">
              أهلاً بك، أدمن
            </h2>
            <p className="text-lg text-gray-600">
              تتم مراجعة الطلبات والعمليات الإدارية لليوم.
            </p>
          </section>

          {/* Summary Bento Grid */}
          <section className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="cursor-default rounded-xl border-r-4 border-blue-600 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-600 hover:shadow-lg">
              <div className="mb-4 flex items-start justify-between">
                <span className="material-symbols-outlined rounded-lg bg-blue-50/10 p-2 text-blue-600">
                  description
                </span>
                <span className="text-sm font-bold text-blue-600">+12%</span>
              </div>
              <p className="mb-1 text-sm font-medium text-gray-600">
                إجمالي الطلاب
              </p>
              <h3 className="text-3xl font-bold text-gray-900">
                {studentsDataItems?.length}
              </h3>
            </div>
            <div className="cursor-default rounded-xl border-r-4 border-teal-600 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-600 hover:shadow-lg">
              <div className="mb-4 flex items-start justify-between">
                <span className="material-symbols-outlined rounded-lg bg-teal-50/30 p-2 text-teal-600">
                  pending_actions
                </span>
                <span className="text-sm font-bold text-teal-600">نشط</span>
              </div>
              <p className="mb-1 text-sm font-medium text-gray-600">
                طلبات قيد المراجعة
              </p>
              <h3 className="text-3xl font-bold text-gray-900">
                {
                  studentsDataItems?.filter((student) => student?.nationalid)
                    .length
                }
              </h3>
            </div>
            <div className="cursor-default rounded-xl border-r-4 border-green-600 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-green-600 hover:shadow-lg">
              <div className="mb-4 flex items-start justify-between">
                <span className="material-symbols-outlined rounded-lg bg-green-50 p-2 text-green-600">
                  task_alt
                </span>
                <span className="text-sm font-bold text-green-600">
                  {(
                    (studentsDataItems?.filter(
                      (student) => student?.reservasionconfirm == true,
                    ).length /
                      studentsDataItems?.filter((student) => student).length) *
                    100
                  ).toFixed(2)}
                  %
                </span>
              </div>
              <p className="mb-1 text-sm font-medium text-gray-600">
                عدد المواد الحجوزة
              </p>
              <h3 className="text-3xl font-bold text-gray-900">
                {studentsDataItems
                  ? countAllSubjects(studentsDataItems)
                  : 0}
              </h3>
            </div>
            <div className="cursor-default rounded-xl border-r-4 border-blue-400 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-lg">
              <div className="mb-4 flex items-start justify-between">
                <span className="material-symbols-outlined rounded-lg bg-blue-100 p-2 text-blue-600">
                  event_available
                </span>
              </div>
              <p className="mb-1 text-sm font-medium text-gray-600">
                المبلغ الإجمالي
              </p>
              <h3 className="text-3xl font-bold text-gray-900">
                {studentsDataItems
                  ?.map((student) => student?.totalcost)
                  .reduce((total, price) => total + price, 0)}
              </h3>
            </div>
          </section>

          {/* Main Interactive Area */}
          <div className="grid grid-cols-1 gap-4">
            {/* Group Statistics & Task Assignment */}
            <section className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Group Statistics */}
              <div className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
                  <h4 className="text-xl font-bold text-blue-600">
                    إحصائيات المجموعات
                  </h4>
                </div>
                <div className="space-y-4 p-6">
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm font-medium">
                      <span>المجموعة ١</span>
                      <span>٨٠٪</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div
                        className="h-2 rounded-full bg-blue-600 transition-all duration-500"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm font-medium">
                      <span>المجموعة ٢</span>
                      <span>٤٥٪</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div
                        className="h-2 rounded-full bg-teal-600 transition-all duration-500"
                        style={{ width: "45%" }}
                      ></div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm font-medium">
                      <span>المجموعة ٣</span>
                      <span>٢٠٪</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div
                        className="h-2 rounded-full bg-green-600 transition-all duration-500"
                        style={{ width: "20%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Task Assignment */}
              <div className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
                  <h4 className="text-xl font-bold text-blue-600">
                    توزيع المهام
                  </h4>
                </div>
                <div className="space-y-2 p-6">
                  <div className="flex items-center justify-between rounded-lg border border-gray-200/50 p-3">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-blue-600">
                        edit_document
                      </span>
                      <span className="text-base">مراجعة الأوراق</span>
                    </div>
                    <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-bold text-teal-800">
                      قيد التنفيذ
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-gray-200/50 p-3">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-blue-600">
                        verified
                      </span>
                      <span className="text-base">رصد الدرجات</span>
                    </div>
                    <span className="rounded-full bg-gray-200 px-3 py-1 text-xs font-bold text-gray-600">
                      قيد الانتظار
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-gray-200/50 p-3">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-blue-600">
                        card_membership
                      </span>
                      <span className="text-base">إصدار الشهادات</span>
                    </div>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">
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
  );
};

export default Statistics;
