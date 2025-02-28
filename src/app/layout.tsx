import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { NavMenu } from "@/components/nav-menu";
import { ScrollToTop } from "@/components/scroll-to-top";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portfolio - Full Stack Engineer",
  description: "Full-Stack Engineer specializing in React, Next.js, and Node.js. Expertise in building scalable web applications with modern technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-200 dark:from-neutral-900 dark:to-black text-neutral-900 dark:text-neutral-50 antialiased`}>
        <ThemeProvider>
          <NavMenu />
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
