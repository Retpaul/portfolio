import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { NavMenu } from "@/components/nav-menu";
import { ScrollToTop } from "@/components/scroll-to-top";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Retyit Paul - Full Stack Engineer",
  description: "Full-Stack Engineer specializing in React, Next.js, and Node.js. Expertise in building scalable web applications with modern technologies.",
  icons: {
    icon: [
      {
        url: "https://img.icons8.com/fluency/48/code.png",
        sizes: "48x48",
        type: "image/png"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`${inter.variable} ${firaCode.variable} min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-200 dark:from-neutral-900 dark:to-black text-neutral-900 dark:text-neutral-50 antialiased`}>
        <ThemeProvider>
          <NavMenu />
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
