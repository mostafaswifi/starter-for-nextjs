// app/page.jsx
"use client";
import  appImg from "../../../public/applicaton.jpg";
import { useState, useEffect } from "react";
import { redirect } from "next/navigation";
import Image from "next/image"
import Statistics from "../componenets/statistics/Statistics";
import RevisionStartDate from "../componenets/revisionstartend/RevisionStartDate";
import DevideStudentsToGroups from "../componenets/devidestudentstogroups/DevideStudentsToGroups";
import LatestApplications from "../componenets/latestapplications/LatestApplications";
import {swalAlert} from "../../lib/swal";


export default function Page() {
  const [data, setData] = useState([]);
const fetchItems = async () => {
  try {
    const response = await fetch("/api/info");
    const result = await response.json();
    if (result.success) {
      setData(result.data);
    }
  } catch (error) {
    console.error("Error fetching items:", error);
  }
};
useEffect(() => {
    fetchItems();
  }, []);
  const [items, setItems] = useState("init");

  // localStorage.removeItem('authToken')
  let s;
  if (typeof window !== "undefined") {
    s = localStorage ? localStorage?.getItem("authToken") : "no token";
  }

const handleAlterDate = ((id,data) => {
// console.log(data,id);
 
 
    try {
    const response = fetch(`/api/info?id=${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    response.then((res) =>
      res.json().then((data) => {
       
        swalAlert("تم التعديل بنجاح","تم التعديل بنجاح","success","نعم")
      })
    );
  } catch (error) {
   swalAlert("خطأ في التعديل  ","خطأ في التعديل","fail","نعم")    
  }
  
 
})

const handleLogout = () => {
  localStorage.removeItem("authToken");
  redirect("/");
};


  return (
    <>
      {s == process.env.NEXT_PUBLIC_ADMIN_PASSWORD ? (
        <div className="flex bg-gray-50 text-gray-900">
          <aside className="flex h-full w-100 flex-col border-l border-gray-200 bg-white p-6 text-right shadow-md">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-blue-600">
                بوابة إعادة التصحيح
              </h1>
              <p className="text-sm text-gray-600">
                الشهادة الإعدادية - محافظة الشرقية
              </p>
            </div>
            <nav className="flex-grow space-y-2">
              <div className="flex cursor-pointer items-center gap-4 rounded-lg bg-blue-50 bg-gray-200 p-4 font-bold text-blue-700 transition-all duration-200 ease-in-out hover:bg-blue-100">
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
              <div className="mt-4 border-t border-gray-200/50 pt-4">
                <h4 className="mb-4 flex items-center gap-2 px-4 text-sm font-medium text-blue-600">
                  <span className="material-symbols-outlined text-sm">
                    bolt
                  </span>
                  إجراءات سريعة
                </h4>
                <div className="space-y-2">
                   <button
                    onClick={() => setItems("devidestudentstogroups")}
                    className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-300 p-4 font-bold text-gray-600 transition-all hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-md"
                    style={
                      items == "devidestudentstogroups"
                        ? {
                            color: "white",
                            backgroundColor: "#3b82f6",
                            transition: "all 0.3s ease-in-out",
                          }
                        : { color: "black", backgroundColor: "white" }
                    }
                  >
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined">groups</span>
                      تقسيم المجموعات
                    </span>
                    <span className="material-symbols-outlined">
                      chevron_left
                    </span>
                  </button>
                  <button
                    onClick={() => setItems("revisionstartend")}
                    className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-300 p-4 font-bold text-gray-600 transition-all hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-md"
                    style={
                      items == "revisionstartend"
                        ? {
                            color: "white",
                            backgroundColor: "#3b82f6",
                            transition: "all 0.3s ease-in-out",
                          }
                        : { color: "black", backgroundColor: "white" }
                    }
                  >
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined">
                        calendar_month
                      </span>
                      التقويمات و بيانات الطلاب
                    </span>
                    <span className="material-symbols-outlined">
                      chevron_left
                    </span>
                  </button>

                  <button
                    onClick={() => setItems("statistics")}
                    className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-300 p-4 font-bold text-gray-600 transition-all hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-md"
                    style={
                      items == "statistics"
                        ? {
                            color: "white",
                            backgroundColor: "#3b82f6",
                            transition: "all 0.3s ease-in-out",
                          }
                        : { color: "black", backgroundColor: "white" }
                    }
                  >
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined">
                        analytics
                      </span>
                      التقارير الإحصائية
                    </span>
                    <span className="material-symbols-outlined">
                      chevron_left
                    </span>
                  </button>

                 

                  <button
                    onClick={() => setItems("latestapplications")}
                    className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-300 p-4 font-bold text-gray-600 transition-all hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-md"
                    style={
                      items == "latestapplications"
                        ? {
                            color: "white",
                            backgroundColor: "#3b82f6",
                            transition: "all 0.3s ease-in-out",
                          }
                        : { color: "black", backgroundColor: "white" }
                    }
                  >
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined">history</span>
                      عرض كافةالطلبات
                    </span>
                    <span className="material-symbols-outlined">
                      chevron_left
                    </span>
                  </button>

                  <button className="bg-red-600 p-4 mx-auto rounded-lg text-white my-3 cursor-pointer w-full" onClick={()=>handleLogout()} >تسجيل الخروج</button>
                </div>
              </div>
            </nav>
          </aside>
          <div className="flex  flex-col p-6 h-full w-full px-4 mx-auto">
            {items == "devidestudentstogroups" && (
              <DevideStudentsToGroups data={data} handleAlterDate={handleAlterDate}/>
            )}
            {items == "init" && <Image width={800} height={800} className="mx-auto" alt="app" src={appImg.src} />}
            {items == "statistics" && <Statistics data={data} />}
            {items == "revisionstartend" && <RevisionStartDate data={data} handleAlterDate={handleAlterDate} />}
            {items == "latestapplications" && (
              <LatestApplications data={data} />
            )}
          </div>
        </div>
      ) : (
        redirect("/login")
      )}
    </>
  );
}
