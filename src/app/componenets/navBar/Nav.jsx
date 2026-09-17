import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/grader.jpg";
const Nav = () => {
  return (
    <>
      <header className="docked sticky top-0 z-50 w-full shadow-[0_2px_0_-1px_rgba(0,0,0,0.1)] backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-xl font-bold tracking-tighter text-slate-900 dark:text-white">
              <span
                className="material-symbols-outlined text-3xl text-black"
                data-icon="account_balance"
              >
                account_balance
              </span>
              <span className="text-black">10th of Ramadan city</span>
            </div>
            <div className="font-be-vietnam-pro hidden items-center justify-center gap-6 text-sm font-medium tracking-tight md:flex">
              <Link
                className="font-mediu font-bold text-slate-600 transition-colors hover:text-blue-600 focus:text-blue-600 dark:text-slate-400 dark:hover:text-blue-300 dark:focus:text-blue-300"
                href="/"
              >
                الرئيسية
              </Link>
              <Link
                className="font-mediu font-bold text-slate-600 transition-colors hover:text-blue-600 focus:text-blue-600 dark:text-slate-400 dark:hover:text-blue-300 dark:focus:text-blue-300"
                href="/book-appointment"
              >
                حجز موعد
              </Link>
              <Link
                className="font-mediu font-bold text-slate-600 transition-colors hover:text-blue-600 focus:text-blue-600 dark:text-slate-400 dark:hover:text-blue-300 dark:focus:text-blue-300"
                href="/admin"
              >
               مسئول
              </Link>
              {/* <Link
                className="font-mediu font-bold text-slate-600 transition-colors hover:text-blue-600 focus:text-blue-600 dark:text-slate-400 dark:hover:text-blue-300 dark:focus:text-blue-300"
                href="/confirmation"
              >
                تأكيد الحجز
              </Link>
              <Link
                className="font-mediu font-bold text-slate-600 transition-colors hover:text-blue-600 focus:text-blue-600 dark:text-slate-400 dark:hover:text-blue-300 dark:focus:text-blue-300"
                href="/print"
              >
               طباعة الإيصال
              </Link> */}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="rounded-full p-2 text-slate-600 transition-all hover:bg-slate-50">
              <span
                className="material-symbols-outlined"
                data-icon="notifications"
              >
                notifications
              </span>
            </button>
            <button className="rounded-full p-2 text-slate-600 transition-all hover:bg-slate-50">
              <span className="material-symbols-outlined" data-icon="help">
                help
              </span>
            </button>
            <div className="border-surface-container h-30 w-30 overflow-hidden rounded-full">
              <Image
                alt="Logo"
                data-alt="close-up portrait of a young student smiling in a library setting with soft natural window light"
                src={logo}
                width={150}
                height={150}
              />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
