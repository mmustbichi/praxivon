
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-provider";
import { ToastProvider } from "@/contexts/toast-provider";
import { SessionProvider } from "@/contexts/session-provider";
import { AnalyticsProvider } from "@/contexts/analytics-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Praxivon - Practice your tech destiny",
  description: "Modern Learning Management System for tech professionals",
  keywords: ["LMS", "learning", "technology", "courses", "education"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SessionProvider>
            <AnalyticsProvider>
              <ToastProvider>
                {children}
              </ToastProvider>
            </AnalyticsProvider>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
