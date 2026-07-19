"use client";
import * as XLSX from "xlsx";
import { useState } from "react";
import {swalAlert} from "../../../lib/swal";
const UploadFile = () => {
  const [finalData, setFinalData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [password, setPassword] = useState("");

  const handleFile = async (e) => {
    const file = await e.target.files[0];
    
    if (!file) return;
    
    setIsLoading(true);
    setMessage(null);
    
    try {
      const data = await file.arrayBuffer();
      const workbook = XLSX.read(data);
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      
      // Set the data first
      setFinalData(jsonData);
      
      // Then send it to the API
      const response = await fetch("/api/addallstudents", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData), // Use jsonData directly
      });

      const result = await response.json();
      // console.log(result);
      
      if (result.success) {
        setMessage(`تم بنجاح رفع  ${result.count} طالب!`);
        swalAlert("تم رفع الملف بنجاح"," عملية رفع الملف بنجاح","success","موافق");
      } else {
        setMessage(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setMessage(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete =() =>{

    const response = fetch("/api/addallstudents", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response.then((res) => {
      if (res.ok) {
        swalAlert("تم حذف الملف بنجاح"," عملية حذف الملف بنجاح","success","موافق");
      }
    })
  }

  const showDeleteButton = ()=>{
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD){
      
      return (
         <button className="m-4 mt-4 flex items-center justify-center rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 w-full" onClick={handleDelete}> حذف جميع الطلاب</button> 
      )
    }
  }

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <div className=" bg-neutral-secondary-medium border-default-strong rounded-base flex h-90 w-full flex-col items-center justify-center">
        <div className="text-body flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="mb-4 h-8 w-8"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 5v9m-5 0H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2M8 9l4-5 4 5m1 8h.01"
            />
          </svg>
          <p className="mb-2 text-sm">أنقر الزر التالي لرفع الملف</p>
          <p className="mb-4 text-xs">
            أكبر حجم مسموح: <span className="font-semibold">30MB</span>
          </p>
          <div className="flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <label htmlFor="file">اختر ملف بيانات الطلاب</label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                clipRule="evenodd"
              />
            </svg>

            <input
              onChange={(e) => handleFile(e)}
              type="file"
              id="file"
              name="file"
              accept=".xls,.xlsx"
              className="hidden"
              disabled={isLoading}
            />
          </div>
        </div>
      <div className="flex flex-col items-center justify-center">
          <p>لحذف جميع الطلاب ادخل كلمة المرور</p>
        <input type="password" className="my-4 rounded-lg border border-gray-300 bg-gray-50 p-4 pr-12 text-base transition-all outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600" onChange={(e)=>setPassword(e.target.value)}/>
           {showDeleteButton()}
      </div>
      </div>
      
      {isLoading && <p className="text-blue-600">Uploading students...</p>}
      {message && (
        <p className={`${message.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default UploadFile;