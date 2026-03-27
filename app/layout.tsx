import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dark Mode for Gmail, Google Docs, Sheets & Slides | Chrome Extension",
  description:
    "Free dark mode extension for Google Workspace. Apply beautiful dark themes to Gmail, Google Docs, Sheets, Slides, and Drive. Reduce eye strain with Dim, Midnight, or OLED Black themes.",
  keywords: [
    "gmail dark mode",
    "dark mode gmail",
    "google docs dark mode",
    "dark mode google docs",
    "google sheets dark mode",
    "google slides dark mode",
    "google drive dark mode",
    "google workspace dark mode",
    "dark mode chrome extension",
  ],
  openGraph: {
    title: "Dark Mode for Gmail & Google Workspace",
    description:
      "Free Chrome extension. Beautiful dark themes for Gmail, Google Docs, Sheets, Slides, and Drive.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
