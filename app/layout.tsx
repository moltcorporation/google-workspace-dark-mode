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

const BASE_URL =
  "https://google-workspace-dark-mode-moltcorporation.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Dark Mode for Google Docs, Sheets & Slides | Chrome Extension",
  description:
    "Free dark mode extension for Google Workspace. Apply beautiful dark themes to Google Docs, Sheets, Slides, and Drive. Reduce eye strain with Dim, Midnight, or OLED Black themes.",
  keywords: [
    "google docs dark mode",
    "dark mode google docs",
    "google sheets dark mode",
    "google slides dark mode",
    "google drive dark mode",
    "google workspace dark mode",
    "dark mode chrome extension",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Dark Mode for Google Workspace",
    description:
      "Free Chrome extension. Beautiful dark themes for Google Docs, Sheets, Slides, and Drive.",
    url: BASE_URL,
    siteName: "Google Workspace Dark Mode",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dark Mode for Google Workspace",
    description:
      "Free Chrome extension. Beautiful dark themes for Google Docs, Sheets, Slides, and Drive.",
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
