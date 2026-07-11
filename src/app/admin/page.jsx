// app/page.jsx
'use client'

import { useState } from 'react'
import { redirect } from 'next/navigation';
import Statistics from '../componenets/statistics/Statistics';
import RevisionStartDate from '../componenets/revisionstartend/RevisionStartDate';
import DevideStudentsToGroups from '../componenets/devidestudentstogroups/DevideStudentsToGroups';
import LatestApplications from '../componenets/latestapplications/LatestApplications';




export default function Page() {


  const [items, setItems] = useState(null);
  
// localStorage.removeItem('authToken')
let s;
if (typeof window !== 'undefined') {
   s = localStorage ? localStorage?.getItem('authToken'): 'no token';
  
}

return (
  <>
      {
      
      s == process.env.NEXT_PUBLIC_ADMIN_PASSWORD ? 
      
      
      <div className="bg-gray-50 text-gray-900 flex ">
      


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
              <button onClick={() => setItems('revisionstartend')} className="cursor-pointer p-4 border border-gray-300 text-gray-600 hover:bg-gray-100 hover:shadow-md hover:-translate-y-0.5 flex w-full items-center justify-between rounded-lg font-bold transition-all" style={items == 'revisionstartend' ? { color: 'white', backgroundColor: '#3b82f6',transition: 'all 0.3s ease-in-out' } : { color: 'black', backgroundColor: 'white' }}>
                <span className="gap-2 flex items-center">
                  <span className="material-symbols-outlined">calendar_month</span>
                  تقويم المراجعة
                </span>
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button onClick={() => setItems('statistics')} className="cursor-pointer p-4 border border-gray-300 text-gray-600 hover:bg-gray-100 hover:shadow-md hover:-translate-y-0.5 flex w-full items-center justify-between rounded-lg font-bold transition-all" style={items == 'statistics' ? { color: 'white', backgroundColor: '#3b82f6',transition: 'all 0.3s ease-in-out' } : { color: 'black', backgroundColor: 'white' }}>
                <span className="gap-2 flex items-center">
                  <span className="material-symbols-outlined">analytics</span>
                  التقارير الإحصائية
                </span>
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button onClick={() => setItems('devidestudentstogroups')} className="cursor-pointer p-4 border border-gray-300 text-gray-600 hover:bg-gray-100 hover:shadow-md hover:-translate-y-0.5 flex w-full items-center justify-between rounded-lg font-bold transition-all" style={items == 'devidestudentstogroups' ? { color: 'white', backgroundColor: '#3b82f6',transition: 'all 0.3s ease-in-out' } : { color: 'black', backgroundColor: 'white' }}>
                <span className="gap-2 flex items-center">
                  <span className="material-symbols-outlined">groups</span>
                  تقسيم المجموعات
                </span>
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button onClick={() => setItems('latestapplications')}  className="cursor-pointer p-4 border border-gray-300 text-gray-600 hover:bg-gray-100 hover:shadow-md hover:-translate-y-0.5 flex w-full items-center justify-between rounded-lg font-bold transition-all" style={items == 'latestapplications' ? { color: 'white', backgroundColor: '#3b82f6',transition: 'all 0.3s ease-in-out' } : { color: 'black', backgroundColor: 'white' }}>
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
<div className="p-6 flex flex-col flex-grow">
  {items == 'statistics' && <Statistics />}
{items == 'revisionstartend' && <RevisionStartDate />}
{items == 'devidestudentstogroups' && <DevideStudentsToGroups />}
{items == 'latestapplications' && <LatestApplications />}
     
</div>
      
    </div> : redirect('/login')}
    </>
  )
}