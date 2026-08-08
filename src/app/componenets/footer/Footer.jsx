const Footer = () => {
  return (
    <>
      <footer className="d-block w-full shadow-sm backdrop-blur-md dark:shadow-none">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between px-8 py-10 md:flex-row">
          <div className="mb-6 text-center md:mb-0 md:text-right">
            <div className="mb-2 text-sm font-semibold tracking-widest text-blue-900 uppercase">
              10th of Ramadan city
            </div>
            <p>© 2024 Ministry of Education. All Rights Reserved.</p>
          </div>
          <div className="flex gap-8">
            <a
              className="transition-colors hover:text-slate-900 cursor-pointer"
           
            >
              Privacy Policy
            </a>
            <a
              className="transition-colors hover:text-slate-900 cursor-pointer"
           
            >
              Terms of Service
            </a>
            <a
              className="transition-colors hover:text-slate-900 cursor-pointer"
           
            >
              Contact Support
            </a>
            <a
              className="transition-colors hover:text-slate-900 cursor-pointer"
          
            >
              Technical Office
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
