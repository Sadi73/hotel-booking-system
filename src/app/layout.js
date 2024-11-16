"use client"

import Banner from "@/components/LandingPageLayout/BannerSection/Banner";
import "./globals.css";
import AuthProvider from "@/Providers/AuthProvider";
import CheckAvailability from "@/components/LandingPageLayout/BannerSection/CheckAvailability";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <AuthProvider>
          {!(pathname.split('/')?.includes('login') || pathname.split('/')?.includes('register') || pathname.split('/')?.includes('admin')) &&
            <div className='relative'>
              <Banner />
              {pathname === '/' && <CheckAvailability />}
            </div>}
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
