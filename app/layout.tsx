import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/Footer";
import ThemeSwitch from "@/components/UI/theme-switch";
import { CSPostHogProvider } from "./providers/ph-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jordi Sanchez personal Portfolio",
  description: "Full-stack developer with cybersecurity knowledge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${geistSans.variable} bg-slate-50 text-gray-950 relative h-[5000px] pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <CSPostHogProvider>
          <div className="bg-indigo-200 absolute top-[-6rem] -z-10 right-[2rem] h-[31.25rem] w-[14rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-indigo-500"></div>
          <div className="bg-blue-200 absolute top-[-1rem] -z-10 left-[11rem] h-[50rem] w-[14rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

          <Header />
          {children}
          <Footer />

          <ThemeSwitch />
        </CSPostHogProvider>
      </body>
    </html>
  );
}
