
import { useState,useEffect } from 'react'
const DevideStudentsToGroups = ({data}) => {
  console.log(data);
  
  const [numberforeachgroup, setNumberForEachGroup] = useState(data[0].numberforeachgroup);
  const [students, setStudents] = useState([]);
  const getAllStudents = async () => {
    try {
      const response = await fetch("/api/getAllStudents");
      const result = await response.json();
      if (result.success) {
        setStudents(result.data);
        console.log("Fetched items:", result.data);
      }
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  }
  useEffect(() => {
    getAllStudents();
  },[])

const devideStudentsToGroups =async()=>{
    for(let i = 1; i <= numberforeachgroup; i++){
      
    }
}
  return (
              <div className="gap-4 flex flex-col">
              <section className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
                  <h4 className="text-xl font-bold text-blue-600">
                    تقسيم الطلاب
                  </h4>
                  <div className="gap-2 mr-4 flex items-center">
                    <label className="text-sm font-medium text-gray-600">
                      السعة القصوى:
                    </label>
                    <input
                    onChange={(e)=>setNumberForEachGroup(Number(e.target.value))}
                      type="number"
                      min="1"
                      max="500"
                      value={numberforeachgroup}
                      className="w-16 p-2 border border-gray-300 rounded-lg bg-white text-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
                    />
                  </div>
                  <button onClick={() => getAllStudents()} className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-md transition-all gap-2 flex items-center">
                    <span className="material-symbols-outlined">group_add</span>
                    توزيع في مجموعات
                  </button>
                </div>
                <div className="p-6 gap-4 grid grid-cols-1 md:grid-cols-2">
                  {/* Group 1 */}
                  <div className="border border-gray-200 rounded-lg p-4 bg-teal-50/30 border-t-4 border-teal-600">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-bold text-blue-600">
                        المجموعة ١ (طالبان)
                      </span>
                      <span className="text-sm text-gray-500">٢٥ أكتوبر</span>
                      <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        نشط
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm p-2 bg-white rounded border border-gray-200/50 flex justify-between">
                        <span>أحمد محمد علي</span>
                        <span className="text-xs text-gray-600">#RQ-8821</span>
                      </div>
                      <div className="text-sm p-2 bg-white rounded border border-gray-200/50 flex justify-between">
                        <span>سارة يوسف إبراهيم</span>
                        <span className="text-xs text-gray-600">#RQ-8819</span>
                      </div>
                    </div>
                  </div>
                  {/* Group 2 */}
                  <div className="border border-gray-200 rounded-lg p-4 bg-red-50/30 border-t-4 border-red-600">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-bold text-blue-600">
                        المجموعة ٢ (طالبان)
                      </span>
                      <span className="text-sm text-gray-500">٢٦ أكتوبر</span>
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        مكتمل
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm p-2 bg-white rounded border border-gray-200/50 flex justify-between">
                        <span>ياسين خالد حسن</span>
                        <span className="text-xs text-gray-600">#RQ-8815</span>
                      </div>
                      <div className="text-sm p-2 bg-white rounded border border-gray-200/50 flex justify-between">
                        <span>مريم محمود السيد</span>
                        <span className="text-xs text-gray-600">#RQ-8812</span>
                      </div>
                    </div>
                  </div>
                  {/* Group 3 */}
                  <div className="border border-gray-200 rounded-lg p-4 bg-teal-50/30 border-t-4 border-teal-600 md:col-span-2">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-bold text-blue-600">
                        المجموعة ٣ (طالب واحد)
                      </span>
                      <span className="text-sm text-gray-500">٢٧ أكتوبر</span>
                      <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        حالي
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm p-2 bg-white rounded border border-gray-200/50 flex justify-between">
                        <span>محمد خالد محمود</span>
                        <span className="text-xs text-gray-600">#RQ-8810</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* System Alert */}
              <section className="bg-blue-900 text-white p-6 rounded-xl shadow-md overflow-hidden relative hover:shadow-lg transition-shadow">
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-2">تنبيه النظام</h4>
                  <p className="text-sm opacity-90 mb-6">
                    هناك 12 طلباً بانتظار التوزيع على المقرات الإدارية المختصة.
                  </p>
                  <button className="bg-white text-blue-600 px-6 py-1 rounded-full text-xs font-bold hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-md transition-all">
                    توزيع الآن
                  </button>
                </div>
                <span className="material-symbols-outlined absolute -bottom-4 -left-4 text-8xl opacity-10">
                  warning
                </span>
              </section>

             
            </div>
  )
}

export default DevideStudentsToGroups
