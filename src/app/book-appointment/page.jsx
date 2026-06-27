'use client'
import Confirmation from "../componenets/confirmation/Confirmation";
import Makeappointment from "../componenets/makeappointment/Makeappointment";
import Print from "../componenets/print/Print";
import {useState} from "react";
const Appointment = () => {
  const [step, setStep] = useState(1);
  return (
    <>
    <main className="bg-surface-container mx-auto mt-8 flex min-h-[calc(100vh-72px)] max-w-7xl rounded-lg shadow-sm">
      <aside className="h-full w-64 flex-col gap-4 border-r border-gray-200 bg-slate-50 p-6 lg:flex">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex items-center justify-center rounded-xl bg-blue-800 p-2 text-white">
            <span className="material-symbols-outlined">school</span>
          </div>
          <div>
            <h4 className="text-lg leading-tight font-bold text-slate-900">
              بوابة إعادة التصحيح
            </h4>
            <p className="text-xs text-slate-500">
              الشهادة الإعدادية - محافظة الشرقية
            </p>
          </div>
        </div>
        <nav className="space-y-1">
          <div className="flex cursor-pointer items-center gap-3 rounded-lg p-3 font-bold text-slate-500 transition-colors transition-transform duration-200 hover:translate-x-1 hover:text-blue-500">
            <span className="material-symbols-outlined" data-icon="info">
              info
            </span>
            <span className="text-body-md">نظرة عامة على العملية</span>
          </div>
          <div className={`flex cursor-pointer items-center gap-3 rounded-lg ${step === 1 ? 'bg-gray-200' : ''} p-3 font-bold text-slate-500 transition-colors transition-transform duration-200 hover:translate-x-1 hover:text-blue-500`}>
            <span className="material-symbols-outlined" data-icon="person">
              person
            </span>
            <span className="text-body-md">بيانات الطالب</span>
          </div>
          <div className={`flex cursor-pointer items-center gap-3 rounded-lg ${step === 2 ? 'bg-gray-200' : ''} p-3 font-bold text-slate-500 transition-colors transition-transform duration-200 hover:translate-x-1 hover:text-blue-500`}>
            <span
              className="material-symbols-outlined"
              data-icon="calendar_today"
            >
              calendar_today
            </span>
            <span className="text-body-md">جدولة الموعد</span>
          </div>
          <div className={`flex cursor-pointer items-center gap-3 rounded-lg ${step === 3 ? 'bg-gray-200' : ''} p-3 font-bold text-slate-500 transition-colors transition-transform duration-200 hover:translate-x-1 hover:text-blue-500`}>
            <span
              className="material-symbols-outlined"
              data-icon="check_circle"
            >
              check_circle
            </span>
            <span className="text-body-md">تأكيد الموعد</span>
          </div>
        </nav>
        <button className="mt-8 rounded-lg bg-blue-700 px-4 py-3 text-sm font-semibold text-white transition-all hover:opacity-90" onClick={() => setStep(1)}>
          بدء طلب جديد
        </button>
      </aside>
{step === 1 && <Makeappointment />}
{step === 2 && <Confirmation />}
{step === 3 && <Print />}
{step === 4 ? setStep(1) : null}
{/* <Makeappointment /> */}
{/* <Confirmation /> */}
{/* <Print /> */}
     
    </main>
       <div className="flex items-center justify-between py-6 mx-auto max-w-5xl rounded-lg shadow-sm">
          {step !== 1 && <button className="text-secondary rounded-xl bg-gray-200 px-8 py-3 font-bold transition-all hover:bg-gray-300" onClick={() => setStep(step - 1)}>
            العودة للسابق
          </button>}
          {step !== 3 && (
            <button className="group mr-auto flex items-center gap-2 rounded-lg bg-blue-700 bg-gradient-to-r px-12 py-3 font-bold text-white shadow-lg transition-all hover:opacity-90 active:scale-95" onClick={() => setStep(step + 1)}>
              <span>الخطوة التالية</span>
              <span className="material-symbols-outlined rotate-180">
                arrow_forward
              </span>
            </button>
          )}
        </div>
    </>
  );
};

export default Appointment;
