"use client";
import * as XLSX from "xlsx";
import { useState } from "react";
import {swalAlert} from "../../../lib/swal";
import Swal from "sweetalert2";
const UploadFile = () => {
  const [finalData, setFinalData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [password, setPassword] = useState("");
  const [progress, setProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState([]);
  

  const handleFile = async (e) => {
    const file = await e.target.files[0];
    
    if (!file) return;
    
    setIsLoading(true);
    setMessage(null);
    setProgress(0);
    setUploadStatus([]); // For detailed status tracking
    
    try {
      // Step 1: Read file (0-10%)
      setProgress(5);
      setMessage('📖 جاري قراءة الملف...');
      
      const data = await file.arrayBuffer();
      const workbook = XLSX.read(data);
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      
      setProgress(10);
      setMessage(`📊 تم قراءة ${jsonData.length} طالب. جاري الرفع...`);
      
      // Set the data first
      setFinalData(jsonData);
      
      // Step 2: Upload with progress (10-90%)
      // Use XMLHttpRequest for progress tracking
      const xhr = new XMLHttpRequest();
      
      // Create a promise for the upload
      const uploadPromise = new Promise((resolve, reject) => {
        xhr.open("POST", "/api/addallstudents");
        xhr.setRequestHeader("Content-Type", "application/json");
        
        // Track upload progress
        xhr.upload.addEventListener("progress", (event) => {
          if (event.lengthComputable) {
            const percentComplete = Math.round((event.loaded / event.total) * 80) + 10;
            setProgress(Math.min(percentComplete, 90));
            setMessage(`⏫ جاري الرفع... ${Math.round((event.loaded / event.total) * 100)}%`);
          }
        });
        
        xhr.onload = () => {
          if (xhr.status === 200) {
            try {
              const result = JSON.parse(xhr.responseText);
              resolve(result);
            } catch (e) {
              reject(new Error("Failed to parse response"));
            }
          } else {
            reject(new Error(`HTTP ${xhr.status}: ${xhr.statusText}`));
          }
        };
        
        xhr.onerror = () => reject(new Error("Network error"));
        xhr.ontimeout = () => reject(new Error("Request timeout"));
        xhr.timeout = 300000; // 5 minutes timeout
        
        xhr.send(JSON.stringify(jsonData));
      });
      
      const result = await uploadPromise;
      
      // Step 3: Process result (90-100%)
      setProgress(95);
      setMessage('📋 جاري معالجة النتيجة...');
      
      if (result.success) {
        const successCount = result.successfullyUploaded || result.count || jsonData.length;
        const failedCount = result.failedCount || 0;
        const totalStudents = result.totalStudents || jsonData.length;
        
        // Show detailed results
        if (result.hasErrors || failedCount > 0) {
          // Show detailed error information
          let errorDetails = '';
          if (result.errors && result.errors.length > 0) {
            errorDetails = result.errors.map(err => 
              `المجموعة ${err.batch}: فشل ${err.failed || err.students || err.documents || 0} عنصر`
            ).join('\n');
          }
          
          setMessage(`⚠️ تم رفع ${successCount} من ${totalStudents} طالب. فشل ${failedCount} طالب.`);
          setUploadStatus(result.errors || []);
          
          swalAlert(
            "تم رفع الملف مع بعض الأخطاء", 
            `تم رفع ${successCount} طالب بنجاح، فشل ${failedCount} طالب\n\n${errorDetails}`,
            "warning", 
            "موافق"
          );
        } else {
          setMessage(`✅ تم بنجاح رفع ${successCount} طالب!`);
          swalAlert(
            "تم رفع الملف بنجاح",
            `تم رفع ${successCount} طالب بنجاح`,
            "success",
            "موافق"
          );
        }
        
        setProgress(100);
      } else {
        setMessage(`❌ خطأ: ${result.error}`);
        swalAlert("خطأ في الرفع", result.error || "حدث خطأ غير معروف", "error", "موافق");
        setProgress(0);
      }
      
    } catch (error) {
      console.error("Error uploading file:", error);
      setMessage(`❌ خطأ: ${error.message}`);
      swalAlert("خطأ", error.message || "حدث خطأ أثناء رفع الملف", "error", "موافق");
      setProgress(0);
    } finally {
      setIsLoading(false);
    }
  };

const handleDelete = async () => {
    // Confirm before deleting
    const confirmDelete = await Swal.fire({
        title: 'هل أنت متأكد؟',
        text: 'سيتم حذف جميع الطلاب. هذا الإجراء لا يمكن التراجع عنه!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'نعم، حذف الكل',
        cancelButtonText: 'إلغاء'
    });

    if (!confirmDelete.isConfirmed) {
        return;
    }

    // Define updateProgress function outside SweetAlert
    let updateProgressFn = null;

    // Show animated progress in SweetAlert
    Swal.fire({
        title: 'جاري حذف الطلاب...',
        html: `
            <div class="w-full max-w-md mx-auto">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-medium text-blue-700" id="progress-text">جاري الحذف...</span>
                    <span class="text-sm font-medium text-blue-700" id="progress-percentage">0%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div 
                        id="progress-bar"
                        class="h-4 rounded-full transition-all duration-500 ease-in-out"
                        style="width: 0%; background: linear-gradient(90deg, #3b82f6, #8b5cf6, #10b981);"
                    ></div>
                </div>
                <div class="mt-3 flex items-center justify-between text-sm">
                    <span class="text-gray-600" id="status-message">بدء عملية الحذف...</span>
                    <span class="text-gray-500" id="detail-message">0 / 0</span>
                </div>
                <div class="mt-3 w-full bg-gray-100 rounded-lg p-2 text-xs text-gray-500 text-center">
                    <span id="total-progress-text">جاري تحميل البيانات...</span>
                </div>
            </div>
        `,
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false,
        width: 500,
        didOpen: () => {
            // Create updateProgress function
            updateProgressFn = (percent, message, current = 0, total = 0, detail = '') => {
                const progressBar = document.getElementById('progress-bar');
                const progressText = document.getElementById('progress-text');
                const progressPercentage = document.getElementById('progress-percentage');
                const statusMessage = document.getElementById('status-message');
                const detailMessage = document.getElementById('detail-message');
                const totalProgressText = document.getElementById('total-progress-text');
                
                if (progressBar) {
                    const p = Math.min(percent, 100);
                    progressBar.style.width = `${p}%`;
                    
                    // Change gradient based on progress
                    if (p < 30) {
                        progressBar.style.background = 'linear-gradient(90deg, #3b82f6, #60a5fa)';
                    } else if (p < 60) {
                        progressBar.style.background = 'linear-gradient(90deg, #8b5cf6, #a78bfa)';
                    } else if (p < 90) {
                        progressBar.style.background = 'linear-gradient(90deg, #10b981, #34d399)';
                    } else {
                        progressBar.style.background = 'linear-gradient(90deg, #10b981, #6ee7b7)';
                    }
                }
                if (progressPercentage) {
                    progressPercentage.textContent = `${Math.min(percent, 100)}%`;
                }
                if (progressText && message) {
                    progressText.textContent = message;
                }
                if (statusMessage && message) {
                    statusMessage.textContent = message;
                }
                if (detailMessage) {
                    if (total > 0) {
                        detailMessage.textContent = `${current} / ${total}`;
                    } else {
                        detailMessage.textContent = detail || '';
                    }
                }
                if (totalProgressText) {
                    if (total > 0) {
                        const percentage = Math.round((current / total) * 100);
                        totalProgressText.textContent = `تم حذف ${current} من ${total} طالب (${percentage}%)`;
                    } else if (current > 0) {
                        totalProgressText.textContent = `تم حذف ${current} طالب...`;
                    } else {
                        totalProgressText.textContent = 'جاري تحميل البيانات...';
                    }
                }
            };

            // Initialize progress
            updateProgressFn(0, 'بدء عملية الحذف...', 0, 0);
        }
    });

    // Wait for SweetAlert to open and define the function
    await new Promise(resolve => setTimeout(resolve, 300));

    try {
        // Use the stored function or create a fallback
        const updateProgress = (percent, message, current = 0, total = 0) => {
            if (updateProgressFn) {
                updateProgressFn(percent, message, current, total);
            } else {
                // Fallback: try to get elements directly
                const progressBar = document.getElementById('progress-bar');
                const progressPercentage = document.getElementById('progress-percentage');
                const statusMessage = document.getElementById('status-message');
                const detailMessage = document.getElementById('detail-message');
                const totalProgressText = document.getElementById('total-progress-text');
                
                if (progressBar) {
                    const p = Math.min(percent, 100);
                    progressBar.style.width = `${p}%`;
                }
                if (progressPercentage) {
                    progressPercentage.textContent = `${Math.min(percent, 100)}%`;
                }
                if (statusMessage && message) {
                    statusMessage.textContent = message;
                }
                if (detailMessage && total > 0) {
                    detailMessage.textContent = `${current} / ${total}`;
                }
                if (totalProgressText && total > 0) {
                    totalProgressText.textContent = `تم حذف ${current} من ${total} طالب (${Math.round((current/total)*100)}%)`;
                }
            }
        };

        // Update progress with different stages
        updateProgress(5, 'جاري تهيئة عملية الحذف...');
        await sleep(300);

        updateProgress(10, 'جاري الاتصال بالخادم...');
        await sleep(300);

        updateProgress(15, 'جاري تحضير الطلاب للحذف...');
        await sleep(300);

        // Make the delete request
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 300000);

        // Simulate progress while waiting for response
        let progress = 15;
        let simulatedDeleted = 0;
        const progressInterval = setInterval(() => {
            if (progress < 80) {
                progress += Math.random() * 3 + 1;
                simulatedDeleted += Math.floor(Math.random() * 5) + 1;
                const stage = progress < 30 ? 'جاري حذف الطلاب...' : 
                             progress < 50 ? 'جاري حذف دفعات الطلاب...' : 
                             progress < 70 ? 'جاري إكمال الحذف...' : 'جاري إنهاء العملية...';
                updateProgress(progress, stage, simulatedDeleted, 0);
            }
        }, 300);

        const response = await fetch("/api/addallstudents", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            signal: controller.signal
        });

        clearTimeout(timeoutId);
        clearInterval(progressInterval);

        updateProgress(90, 'جاري معالجة النتيجة...');
        await sleep(300);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const result = await response.json();

        // Get actual progress from result
        const totalDocuments = result.totalDocuments || 0;
        const deletedCount = result.deletedCount || result.count || 0;
        const failedCount = result.failedCount || 0;
        const processedCount = deletedCount + failedCount;

        // Update progress with actual data
        if (totalDocuments > 0) {
            const actualProgress = Math.round((processedCount / totalDocuments) * 100);
            updateProgress(
                Math.min(actualProgress, 95),
                'جاري إنهاء العملية...',
                processedCount,
                totalDocuments
            );
        } else {
            updateProgress(95, 'جاري إنهاء العملية...', deletedCount, totalDocuments);
        }
        await sleep(300);

        // Close the progress dialog
        Swal.close();

        // Show result
        if (result.success) {
            if (result.hasErrors || failedCount > 0) {
                let errorDetails = '';
                if (result.errors && result.errors.length > 0) {
                    errorDetails = result.errors.map(err => 
                        `• المجموعة ${err.batch}: فشل ${err.failed || err.documents || 0} عنصر`
                    ).join('\n');
                }
                
                await Swal.fire({
                    icon: 'warning',
                    title: '⚠️ تم الحذف مع بعض الأخطاء',
                    html: `
                        <div class="text-center">
                            <p class="text-lg">تم حذف <strong class="text-green-600">${deletedCount}</strong> من <strong>${totalDocuments}</strong> طالب</p>
                            <p class="text-red-500">فشل <strong>${failedCount}</strong> طالب</p>
                            <div class="mt-2 w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-yellow-500 h-2 rounded-full" style="width: ${Math.round((deletedCount / totalDocuments) * 100)}%"></div>
                            </div>
                            <p class="text-xs text-gray-500 mt-1">${Math.round((deletedCount / totalDocuments) * 100)}% مكتمل</p>
                            ${errorDetails ? `
                                <div class="mt-3 p-3 bg-red-50 rounded-lg text-left">
                                    <p class="text-sm font-semibold text-red-700">تفاصيل الأخطاء:</p>
                                    <pre class="text-xs text-red-600 whitespace-pre-wrap">${errorDetails}</pre>
                                </div>
                            ` : ''}
                        </div>
                    `,
                    confirmButtonText: 'موافق',
                    confirmButtonColor: '#f59e0b'
                });
            } else {
                await Swal.fire({
                    icon: 'success',
                    title: '✅ تم حذف جميع الطلاب بنجاح',
                    html: `
                        <div class="text-center">
                            <div class="text-6xl mb-3">🎉</div>
                            <p class="text-lg">تم حذف <strong class="text-green-600">${deletedCount}</strong> طالب بنجاح</p>
                            <div class="mt-2 w-full bg-gray-200 rounded-full h-2">
                                <div class="bg-green-500 h-2 rounded-full" style="width: 100%"></div>
                            </div>
                            <p class="text-sm text-gray-500 mt-1">اكتملت عملية الحذف بدون أخطاء</p>
                        </div>
                    `,
                    confirmButtonText: 'موافق',
                    confirmButtonColor: '#10b981',
                    timer: 3000,
                    timerProgressBar: true
                });
                setFinalData([]);
            }
        } else {
            await Swal.fire({
                icon: 'error',
                title: '❌ خطأ في الحذف',
                text: result.error || 'فشل في حذف الطلاب',
                confirmButtonText: 'موافق',
                confirmButtonColor: '#ef4444'
            });
        }

    } catch (error) {
        console.error("Error deleting students:", error);
        Swal.close();
        
        let errorMessage = error.message;
        if (error.name === 'AbortError') {
            errorMessage = 'انتهت مدة العملية. يرجى المحاولة مرة أخرى.';
        }
        
        await Swal.fire({
            icon: 'error',
            title: '❌ خطأ',
            text: errorMessage || 'حدث خطأ أثناء حذف الطلاب',
            confirmButtonText: 'موافق',
            confirmButtonColor: '#ef4444'
        });
    }
};

// Helper function
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
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