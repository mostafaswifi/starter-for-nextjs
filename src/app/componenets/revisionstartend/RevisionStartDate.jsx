'use client'
const RevisionStartDate = () => {
  return (
            
          <div className="gap-4 mb-8 grid grid-cols-1">
            <section className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm">
              <h4 className="text-xl font-bold text-blue-600 mb-6 gap-2 flex items-center">
                <span className="material-symbols-outlined">calendar_month</span>
                فترة المراجعة
              </h4>
              <div className="space-y-4">
                <div className="gap-1 flex flex-col">
                  <label className="text-sm font-medium text-gray-600">
                    تاريخ البدء
                  </label>
                  <div className="relative">
                    <input
                      className="w-full p-4 pr-12 border border-gray-300 rounded-lg bg-gray-50 text-base focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
                      type="date"
                    />
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                      event
                    </span>
                  </div>
                </div>
                <div className="gap-1 flex flex-col">
                  <label className="text-sm font-medium text-gray-600">
                    تاريخ الانتهاء
                  </label>
                  <div className="relative">
                    <input
                      className="w-full p-4 pr-12 border border-gray-300 rounded-lg bg-gray-50 text-base focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
                      type="date"
                    />
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                      event
                    </span>
                  </div>
                </div>
                <button className="w-full mt-4 bg-blue-600 text-white font-bold py-4 px-6 rounded-lg shadow-sm hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-md transition-all">
                  تحديث الفترة
                </button>
              </div>
            </section>
          </div>

  )
}

export default RevisionStartDate
