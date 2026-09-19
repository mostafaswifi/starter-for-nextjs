import { useState, useEffect } from "react";
import html2pdf from 'html2pdf.js';
const DevideStudentsToGroups = ({ data, handleAlterDate }) => {
  const [numberforeachgroup, setNumberForEachGroup] = useState(
    data[0]?.numberforeachgroup,
  );
  const [students, setStudents] = useState([]);
  const [groupedStudents, setGroupedStudents] = useState([]);

  const getAllStudents = async () => {
    try {
      const response = await fetch("/api/getAllStudents");
      const result = await response.json();
      if (result.success) {
        setStudents(result.data);
        setGroupedStudents(groupStudentsByNumber(result.data));
      }
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };
  const groupStudentsByNumber = (studentArray) => {
    return studentArray.reduce((acc, student) => {
      const groupKey = student.groupnumber || "ungrouped";

      // If the group array doesn't exist yet, initialize it
      if (!acc[groupKey]) {
        acc[groupKey] = [];
      }

      // Push the student into their respective group array
      acc[groupKey].push(student);

      return acc;
    }, {});
  };

  useEffect(() => {
    getAllStudents();
  }, []);
const printGroup = async (students) => {
  try {
    // 1. Create a container element for the PDF content with RTL support
    const element = document.createElement('div');
    element.dir = 'rtl'; // Sets Right-to-Left direction natively for Arabic
    element.style.padding = '0';
    element.style.fontFamily = 'Cairo, sans-serif';
    element.style.color = '#000000';

    // 2. Build the HTML structure (Title, Date, and Table)
    let rowsHTML = students.map((item,idx) => `
      <tr>
        <td className="flex justify-items-center align-items-center" style="border: 1px solid #010101; padding: 6px; text-align: center;font-size: 12px">${idx+1}</td>
        <td className="flex justify-items-center align-items-center" style="border: 1px solid #010101; padding: 6px; text-align: center;font-size: 12px">${item.groupnumber || ''}</td>
        <td className="flex justify-items-center align-items-center" style="border: 1px solid #010101; padding: 6px; text-align: right;font-size: 16px">${item.studentname || ''}</td>
        <td className="flex justify-items-center align-items-center" style="border: 1px solid #010101; padding: 6px; text-align: center;font-size: 12px">${item.seatnum || ''}</td>
        <td className="flex justify-items-center align-items-center" style="border: 1px solid #010101; padding: 6px; text-align: center;font-size: 12px">${item.adminstration || ''}</td>
        <td className="flex justify-items-center align-items-center" style="border: 1px solid #010101; padding: 6px; text-align: center;font-size: 12px">${item.algebra? '✓' : '' || ''}</td>
        <td className="flex justify-items-center align-items-center" style="border: 1px solid #010101; padding: 6px; text-align: center;font-size: 12px">${item.arabic? '✓' : '' || ''}</td>
        <td className="flex justify-items-center align-items-center" style="border: 1px solid #010101; padding: 6px; text-align: center;font-size: 12px">${item.art? '✓' : '' || ''}</td>
        <td className="flex justify-items-center align-items-center" style="border: 1px solid #010101; padding: 6px; text-align: center;font-size: 12px">${item.english? '✓' : '' || ''}</td>
        <td className="flex justify-items-center align-items-center" style="border: 1px solid #010101; padding: 6px; text-align: center;font-size: 12px">${item.geometry? '✓' : '' || ''}</td>
        <td className="flex justify-items-center align-items-center" style="border: 1px solid #010101; padding: 6px; text-align: center;font-size: 12px">${item.ict? '✓' : '' || ''}</td>
        <td className="flex justify-items-center align-items-center" style="border: 1px solid #010101; padding: 6px; text-align: center;font-size: 12px">${item.religious? '✓' : '' || ''}</td>
        <td className="flex justify-items-center align-items-center" style="border: 1px solid #010101; padding: 6px; text-align: center;font-size: 12px">${item.sciense? '✓' : '' || ''}</td>
        <td className="flex justify-items-center align-items-center" style="border: 1px solid #010101; padding: 6px; text-align: center;font-size: 12px">${item.social? '✓' : '' || ''}</td>
        <td className="flex justify-items-center align-items-center" style="border: 1px solid #010101; padding: 6px; text-align: center;font-size: 12px">${item.subjectnumber || ''}</td>
        <td className="flex justify-items-center align-items-center" style="border: 1px solid #010101; padding: 6px; text-align: center;font-size: 12px">${item.totalcost || ''}</td>
      </tr>
    `).join('');

    element.innerHTML = `
      <h2 style="color: #010101; margin-bottom: 5px;">تقرير بيانات الطلاب</h2>
      <p style="font-size: 12px; color: #000000; margin-bottom: 20px;">Generated: ${new Date().toLocaleString()}</p>
      <table style="width: 100%; border-collapse: collapse; font-size: 12px;">
        <thead>
          <tr style="background-color: #2980b9; color: white;border: 1px solid #010101;">
            <th style="border: 1px solid #000000; padding: 8px;">#</th>
            <th style="border: 1px solid #000; padding: 8px;">رقم المجموعة</th>
            <th style="border: 1px solid #000000; padding: 8px;">الاسم</th>
            <th style="border: 1px solid #000; padding: 8px;">الرقم</th>
            <th style="border: 1px solid #000; padding: 8px;">Admin</th>
            <th style="border: 1px solid #000; padding: 8px;">Algebra</th>
            <th style="border: 1px solid #000; padding: 8px;">Arabic</th>
            <th style="border: 1px solid #000; padding: 8px;">Art</th>
            <th style="border: 1px solid #000; padding: 8px;">English</th>
            <th style="border: 1px solid #000; padding: 8px;">Geometry</th>
            <th style="border: 1px solid #000; padding: 8px;">ICT</th>
            <th style="border: 1px solid #000; padding: 8px;">Religious</th>
            <th style="border: 1px solid #000; padding: 8px;">Science</th>
            <th style="border: 1px solid #000; padding: 8px;">Social</th>
            <th style="border: 1px solid #000; padding: 8px;">Sub No.</th>
            <th style="border: 1px solid #000; padding: 8px;">Total Cost</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHTML}
        </tbody>
      </table>
    `;

    // 3. Configure and trigger PDF export
    const options = {
      margin:       20,
      filename:   `${students[0].groupnumber}-تقرير بيانات الطلاب في المجموعة ${new Date().toLocaleString()}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'landscape' }
    };

    await html2pdf().from(element).set(options).save();

  } catch (error) {
    console.error('Failed to download PDF:', error);
  }
};

  const handleGroupNum = (e) => {
    setNumberForEachGroup(Number(e.target.value));
    setTimeout(() => {
      handleAlterDate(data[0].$id, {
        numberforeachgroup: Number(e.target.value),
      });
    }, 1000);
  };

  return (
    <div className="flex flex-col gap-4">
      <section className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-6 py-4">
          <h4 className="text-xl font-bold text-blue-600">تقسيم الطلاب</h4>
          <div className="mr-4 flex items-center gap-2">
            <label
              htmlFor="number"
              className="text-sm font-medium text-gray-600"
            >
              السعة القصوى:
            </label>

            <select
              id="number"
              name="number"
              onChange={(e) => handleGroupNum(e)}
              className="w-20 rounded-lg border border-gray-300 bg-white p-2 text-sm outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            >
              <option value="100" defaultValue={numberforeachgroup}>
                100
              </option>
              <option value="200">200</option>
              <option value="300">300</option>
              <option value="400">400</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-2">
          {Object.entries(groupedStudents).map(([groupKey, students]) =>
            groupKey !== "ungrouped" ? (
              <div
                key={groupKey}
                className="h-100 overflow-y-auto rounded-lg border border-t-4 border-blue-600 border-gray-200 bg-blue-50/30 p-4"
              >
                <div className="mb-2 flex items-center justify-between bg-gray-200 p-4">
                  <span className="font-bold text-blue-600">
                    المجموعة {groupKey}
                  </span>
                  <span className="font-bold text-blue-600">
                    {students[0]?.preservedate?.substring(0, 10)}
                  </span>
                  <span
                    className={`flex items-center gap-2 font-bold ${students?.length < numberforeachgroup ? "text-red-600" : "text-green-600"}`}
                  >
                    {students.length}
                    {students?.length < numberforeachgroup
                      ? " / غير مكتمل"
                      : " / مكتمل"}
                  </span>
                  <button
                    onClick={() => printGroup(students)}
                    className="flex cursor-pointer items-center gap-2 rounded-lg bg-blue-600 px-6 py-2 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md"
                  >
                    <span className="material-symbols-outlined">print</span>
                    طباعة المجموعة
                  </button>
                </div>
                <div className="space-y-1">
                  {students.map((student, idx) => (
                    <div
                      key={student.$id}
                      className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-2"
                    >
                      {idx + 1}
                      <span className="text-sm font-bold text-gray-600">
                        {student.studentname}
                      </span>
                      <span className="text-sm font-bold text-gray-600">
                        {student.arabic ? "عربي" : ""}
                      </span>
                      <span className="text-sm font-bold text-gray-600">
                        {student.english ? "انجليزي" : ""}
                      </span>
                      <span className="text-sm font-bold text-gray-600">
                        {student.social ? "دراسات" : ""}
                      </span>
                      <span className="text-sm font-bold text-gray-600">
                        {student.algebra ? "جبر" : ""}
                      </span>
                      <span className="text-sm font-bold text-gray-600">
                        {student.geometry ? "هندسة" : ""}
                      </span>
                      <span className="text-sm font-bold text-gray-600">
                        {student.sciense ? "علوم" : ""}
                      </span>
                      <span className="text-sm font-bold text-gray-600">
                        {student.ict ? "كمبيوتر " : ""}
                      </span>
                      <span className="text-sm font-bold text-gray-600">
                        {student.religious ? "دين" : ""}
                      </span>
                      <span className="text-sm font-bold text-gray-600">
                        {student.art ? "رسم" : ""}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null,
          )}
        </div>
      </section>

      {/* System Alert */}
      <section className="relative overflow-hidden rounded-xl bg-blue-900 p-6 text-white shadow-md transition-shadow hover:shadow-lg">
        <div className="relative z-10">
          <h4 className="mb-2 text-xl font-bold">تنبيه النظام</h4>
          <p className="mb-6 text-sm opacity-90">
            هناك {Object.entries(groupedStudents).length - 1} مجموعة تم توزيعها
            على المقرات الإدارية المختصة.
          </p>
          <button className="rounded-full bg-white px-6 py-1 text-xs font-bold text-blue-600 transition-all hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-md">
            تم التوزيع
          </button>
        </div>
        <span className="material-symbols-outlined absolute -bottom-4 -left-4 text-8xl opacity-10">
          warning
        </span>
      </section>
    </div>
  );
};

export default DevideStudentsToGroups;
