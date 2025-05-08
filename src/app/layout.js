"use client";
import ScrollToTop from "@/components/common/ScrollTop";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../public/scss/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

import { DM_Sans, Poppins } from "next/font/google";

// DM_Sans font
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--body-font-family",
});

// Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--title-font-family",
});

export default function RootLayout({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only initialize AOS and Bootstrap on client side
    import("bootstrap").then(() => {
      Aos.init({
        duration: 1200,
        once: true,
      });
      setMounted(true);
    });
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`body ${poppins.variable} ${dmSans.variable}`}
        suppressHydrationWarning
        cz-shortcut-listen="false"
      >
        <div className="wrapper ovh">
          {mounted ? children : <div style={{ visibility: 'hidden' }}>{children}</div>}
        </div>
        {mounted && <ScrollToTop />}
      </body>
    </html>
  );
}