import "./app.css";
import 'modern-rdp-pro/theme.css';
import Footer from "../app/componenets/footer/Footer";
import Nav from "../app/componenets/navBar/Nav";
export const metadata = {
  title: "نظام مواعيد إعادة تصحيح الدرجات - وزارة التربية والتعليم",
  description:
    "نظام مواعيد إعادة تصحيح الدرجات هو نظام إلكتروني يتيح للطلاب تقديم طلبات لإعادة تصحيح درجاتهم في الامتحانات. يهدف النظام إلى تسهيل عملية تقديم الطلبات ومتابعتها بشكل فعال، مما يساعد الطلاب على الحصول على نتائج دقيقة وعادلة. يوفر النظام واجهة سهلة الاستخدام تمكن الطلاب من تقديم طلباتهم بسهولة، بالإضافة إلى إمكانية متابعة حالة الطلبات والتواصل مع الجهات المختصة عند الحاجة.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/appwrite.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:opsz,wght@14..32,100..900&family=Poppins:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/svg+xml" href="/appwrite.svg" />
        <title>نظام مواعيد إعادة تصحيح الدرجات - وزارة التربية والتعليم</title>

        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700;800&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
          rel="stylesheet"
        />
      </head>
      <body
   
        dir="rtl"
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
