"use client";

import { useState } from "react";
import UploadFile from "../uploadfile/UploadFile";
import { swalAlert } from "@/lib/swal";
const RevisionStartDate = ({ data, handleAlterDate }) => {
  // console.log(data[0]);
  const [enddate, setEndDate] = useState(data[0]?.enddate.substring(0, 10));
  const [startdate, setStartDate] = useState(
    data[0]?.startdate.substring(0, 10),
  );
  const [revisestartdate, setRevisionStartDate] = useState(
    data[0]?.revisestartdate.substring(0, 10),
  );
  const [reviseenddate, setRevisionEndDate] = useState(
    data[0]?.reviseenddate.substring(0, 10),
  );

  const [avDates, setAvDates] = useState([]);
  // console.log(enddate?.substring(0, 10));
const [returnedDates, setReturnedDates] = useState([]);

  const handleDates = () => {
    const startData = data[0];
    if (!startData?.startdate || !startData?.enddate) {
      console.log("Missing start or end date");
      return [];
    }

    const start = new Date(startData.startdate);
    const end = new Date(startData.enddate);

    if (isNaN(start) || isNaN(end)) {
      console.log("Invalid date format");
      return [];
    }

    let datesArr = [];
    let current = new Date(start);

    while (current <= end) {
      datesArr.push(current.toLocaleDateString());
      current.setDate(current.getDate() + 1);
    }
    datesArr = datesArr.filter((date) => {
      const dayOfWeek = new Date(date).getDay();
      return dayOfWeek !== 5 && dayOfWeek !== 6;
    });

    setAvDates(datesArr);
  };

  const datePicker = async (e, date) => {
    e.target.parentNode.parentNode.classList.add("hidden");
    try {
      const res = await fetch(`/api/avaliabledates`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          avaliabledates: date,
         
        }),
      }).then((res) => res.json()).then((data) =>{
        const localDates =  data.data.avaliabledates.slice(0, 10);
        setReturnedDates([...returnedDates, localDates]);
        // console.log(returnedDates);
    })

      
      swalAlert("تم تحديث التاريخ بنجاح"," عملية تحديث التاريخ بنجاح","success","موافق");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mb-8 grid grid-cols-2 gap-4">
      <section className="col-span-2 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <UploadFile />
      </section>
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
          <button
            onClick={() =>
              handleAlterDate("1", { ...data[0], startdate, enddate })
            }
            className="mt-4 w-full rounded-lg bg-blue-600 px-6 py-4 font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md"
          >
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
          <button
            onClick={() =>
              handleAlterDate("1", {
                ...data[0],
                revisestartdate,
                reviseenddate,
              })
            }
            className="mt-4 w-full rounded-lg bg-blue-600 px-6 py-4 font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md"
          >
            تحديث الفترة
          </button>
        </div>
      </section>

      <section
        className="col-span-2 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
        data-purpose="available-dates-management"
      >
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-primary text-xl">🕒</span>
            <h3 className="text-lg font-bold text-slate-800">
              المواعيد المتاحة
            </h3>
          </div>
          <button
            className="text-primary text-sm font-semibold hover:underline"
            onClick={handleDates}
          >
            عرض الكل
          </button>
        </div>

        <div className="grid grid-cols-9 gap-4 pb-4">
          {avDates.map((date, index) => (
            <div
              key={index}
              className="group flex cursor-pointer flex-col items-center gap-3 rounded-2xl bg-blue-100 p-6 font-semibold shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-gray-300"
             
            >
              <div className="flex flex-col items-center gap-2 relative">
                <span className="material-symbols-outlined tranition-all text-2xl text-gray-600 duration-300 group-hover:scale-110 group-hover:rotate-[-8deg]">
                  event
                </span>
                <span className="text-md font-medium text-sky-900 d-block "  onClick={(e) => {
                datePicker(e, date);
              }}>{date}</span>
                <span className="text-xs text-gray-600">
                  {new Date(date).getDay() == 1
                    ? "الاثنين"
                    : new Date(date).getDay() == 2
                      ? "الثلاثاء"
                      : new Date(date).getDay() == 3
                        ? "الأربعاء"
                        : new Date(date).getDay() == 4
                          ? "الخميس"
                          : new Date(date).getDay() == 5
                            ? "الجمعة"
                            : new Date(date).getDay() == 6
                              ? "السبت"
                              : "الأحد"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RevisionStartDate;
