"use client";
import { useState, useEffect } from "react";
import Pagination from "../pagination/Pagination";
const LatestApplications = ({ data }) => {
  console.log(data[0]);

  const [studentsDataItems, setStudentsDataItems] = useState([]);
  const [chunks, setChunks] = useState([]);
  const [chunkNumber,setChunkNumber] = useState(0)
  const studentsData = async () => {
    const data = await fetch("/api/getAllStudents")
      .then((res) => res.json())
      .then((data) => data.data);
    setStudentsDataItems(data);
  };

  useEffect(() => {
    studentsData();
  
  }, []);

  const chunker = (students) =>{
    let counter = 0
    let chunked = []
    while (counter < students.length){
        chunked.push(students.slice(counter, counter + 10))
        counter += 10
    }
    setChunks(chunked)
   
}
useEffect(() => {
  chunker(studentsDataItems)
}, [studentsDataItems])


const opener =(e)=>{
  e.stopPropagation()
   const siblings = Array.from(e.target.parentNode.childNodes)
    .filter(node => node.nodeType === 1 && node !== e.target);

    siblings.forEach(node => node.classList.remove("max-h-[500px]"));
 e?.target?.parentElement?.classList.toggle("max-h-[500px]")

}
  return (
  
    <section className="flex w-full flex-col rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-6 py-4">
        <h4 className="text-xl font-bold text-blue-600">أحدث الطلبات</h4>
        <div className="mr-4 flex flex-grow items-center justify-end gap-4">
          <div className="relative w-full max-w-xs">
            <input
              className="w-full rounded-lg border border-gray-300 bg-white p-2 pr-10 text-sm transition-all outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              type="text"
              placeholder="بحث باسم الطالب أو رقم الطلب..."
            />
            <span className="material-symbols-outlined pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-sm text-gray-500">
              search
            </span>
          </div>
          <button className="text-xs font-bold text-blue-600 hover:underline">
            عرض الكل
          </button>
        </div>
      </div>
      {studentsDataItems[0]? <Pagination setChunkNumber={setChunkNumber} chunkNumber={chunkNumber} studentsDataItems={studentsDataItems}/> : ''}
      <div className="space-y-2 p-6">
        {/* Accordion Item 1 */}
        {!studentsDataItems[0] ? 
          <div>
           
<div role="status" className="max-w-sm animate-pulse">
    <div className="h-2.5 my-4 bg-gray-300 rounded-full w-48 "></div>
    <div className="h-2 my-4 bg-gray-300 rounded-full w-100 "></div>
    <div className="h-2 my-4 bg-gray-300 rounded-full w-75 "></div>
    <div className="h-2 my-4 bg-gray-300 rounded-full w-80 "></div>
    <div className="h-2 my-4 bg-gray-300 rounded-full w-90 "></div>
    <div className="h-2 my-4 bg-gray-300 rounded-full w-80"></div>
    <span className="sr-only">Loading...</span>
</div>


</div>
         : (
          chunks[chunkNumber]?.map((student,index) => {
            console.log(student[chunkNumber])
            return (
              <div
                onClick={(e) =>opener(e)}
                key={index}
                className="max-h-[60px] overflow-hidden rounded-lg border border-gray-200/30 bg-gray-50 transition-all duration-300"
              >
                <button
                  className="flex w-full items-center justify-between p-4 text-right transition-colors hover:bg-gray-200 cursor-pointer"
                
                >
                  <div className="flex flex-col">
                    <span className="text-base font-bold text-gray-900">
                      {student?.studentname}
                    </span>
                    <span className="text-xs text-gray-600">
                      #{student?.reservationnumber}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-bold text-teal-800">
                      مراجعة
                    </span>
                    <span
                      className={`material-symbols-outlined rotate-180} text-gray-500 transition-transform duration-300`}
                    >
                      expand_more
                    </span>
                  </div>
                </button>
                <div
                  className={`max-h-[500px]} overflow-hidden transition-all duration-300`}
                >
                  <div className="space-y-2 border-t border-gray-200/30 bg-white p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="mb-1 text-xs text-gray-600">
                          تاريخ الطلب
                        </p>
                        <p className="text-sm font-bold">24 أكتوبر 2023</p>
                      </div>
                      <div>
                        <p className="mb-1 text-xs text-gray-600">
                          المواد المطلوبة
                        </p>
                        <p className="text-sm font-bold">
                          اللغة العربية، الرياضيات
                        </p>
                      </div>
                      <div>
                        <p className="mb-1 text-xs text-gray-600">نوع الطلب</p>
                        <p className="text-sm font-bold">إعادة تصحيح يدوي</p>
                      </div>
                      <div>
                        <p className="mb-1 text-xs text-gray-600">
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
            );
          })
        )}

        {/* Accordion Item 2 */}
        {/* <div className="overflow-hidden rounded-lg border border-gray-200/30 bg-gray-50">
          <button
            className="flex w-full items-center justify-between p-4 text-right transition-colors hover:bg-gray-100"
            
          >
            <div className="flex flex-col">
              <span className="text-base font-bold text-gray-900">
                سارة يوسف إبراهيم
              </span>
              <span className="text-xs text-gray-600">#RQ-8819</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">
                مكتمل
              </span>
              <span
                className={`material-symbols-outlined text-gray-500 transition-transform duration-300  rotate-180}`}
              >
                expand_more
              </span>
            </div>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 max-h-[500px]`}
          >
            <div className="space-y-2 border-t border-gray-200/30 bg-white p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="mb-1 text-xs text-gray-600">تاريخ الطلب</p>
                  <p className="text-sm font-bold">23 أكتوبر 2023</p>
                </div>
                <div>
                  <p className="mb-1 text-xs text-gray-600">المواد المطلوبة</p>
                  <p className="text-sm font-bold">اللغة الإنجليزية، العلوم</p>
                </div>
                <div>
                  <p className="mb-1 text-xs text-gray-600">النتيجة النهائية</p>
                  <p className="text-sm font-bold text-blue-600">
                    تم تعديل الدرجة (+2)
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-xs text-gray-600">تاريخ الاعتماد</p>
                  <p className="text-sm font-bold">25 أكتوبر 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* <nav aria-label="Page navigation example">
  <ul className="flex -space-x-px text-sm">
    <li>
      <a href="#" className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-s-base text-sm w-9 h-9 focus:outline-none">
        <span className="sr-only">Previous</span>
        <svg className="w-4 h-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/></svg>
      </a>
    </li>

    <li>
      <a href="#" className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">1</a>
    </li>
   

    <li>
      <a href="#" className="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-e-base text-sm w-9 h-9 focus:outline-none">
        <span className="sr-only">Next</span>
        <svg className="w-4 h-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/></svg>
      </a>
    </li>
  </ul>
</nav> */}

    </section>
  );
};

export default LatestApplications;
