"use client";

import { useState } from "react";
const RevisionStartDate = ({data,handleAlterDate}) => {
  // console.log(data[0]);
  const [enddate, setEndDate] = useState(data[0]?.enddate.substring(0, 10));
  const [startdate, setStartDate] = useState(data[0]?.startdate.substring(0, 10));
  const [revisestartdate, setRevisionStartDate] = useState(data[0]?.revisestartdate.substring(0, 10));
  const [reviseenddate, setRevisionEndDate] = useState(data[0]?.reviseenddate.substring(0, 10));
  // console.log(enddate?.substring(0, 10));
  return (
    <div className="mb-8 grid grid-cols-2 gap-4">
      <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h4 className="mb-6 flex items-center gap-2 text-xl font-bold text-blue-600">
          <span className="material-symbols-outlined">calendar_month</span>
          فترة المراجعة
        </h4>
        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">
              تاريخ البدء
            </label>
            <div className="relative">
              <input
                className="w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pr-12 text-base transition-all outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                type="date"
                value={startdate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <span className="material-symbols-outlined pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-gray-500">
                event
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">
              تاريخ الانتهاء
            </label>
            <div className="relative">
              <input
                className="w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pr-12 text-base transition-all outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                type="date"
                value={enddate}
                onChange={(e) => setEndDate(e.target.value)}
              />
              <span className="material-symbols-outlined pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-gray-500">
                event
              </span>
            </div>
          </div>
          <button onClick={() => handleAlterDate("1", {...data[0], startdate, enddate})} className="mt-4 w-full rounded-lg bg-blue-600 px-6 py-4 font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md">
            تحديث الفترة
          </button>
        </div>
      </section>
      <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h4 className="mb-6 flex items-center gap-2 text-xl font-bold text-blue-600">
          <span className="material-symbols-outlined">calendar_month</span>
       فترة تلقي الطلبات
        </h4>
        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">
              تاريخ البدء
            </label>
            <div className="relative">
              <input
                className="w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pr-12 text-base transition-all outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                type="date"
                value={revisestartdate}
                onChange={(e) => setRevisionStartDate(e.target.value)}
              />
              <span className="material-symbols-outlined pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-gray-500">
                event
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">
              تاريخ الانتهاء
            </label>
            <div className="relative">
              <input
                className="w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pr-12 text-base transition-all outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                type="date"
                value={reviseenddate}
                onChange={(e) => setRevisionEndDate(e.target.value)}
              />
              <span className="material-symbols-outlined pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-gray-500">
                event
              </span>
            </div>
          </div>
          <button onClick={() => handleAlterDate("1", {...data[0], revisestartdate, reviseenddate})} className="mt-4 w-full rounded-lg bg-blue-600 px-6 py-4 font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md">
            تحديث الفترة
          </button>
        </div>
      </section>
    </div>
  );
};

export default RevisionStartDate;
