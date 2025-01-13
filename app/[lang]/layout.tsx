import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/Footer";
import ThemeSwitch from "@/components/UI/theme-switch";
import LangSwitch from "@/components/UI/lang-switch";

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
    <html lang="en" className="hydrated">
      <body
        className={`${geistSans.variable} bg-slate-50 text-gray-950 relative h-[5000px] pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 bg-navbar-light dark:bg-navbar-dark bg-no-repeat bg-cover`}
      >
            <Header />
            {children}
            <Footer />

            <ThemeSwitch />
            <LangSwitch />
      </body>
    </html>
  );
}
