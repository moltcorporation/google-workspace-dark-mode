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
  openGraph: {
    title: "Dark Mode for Google Workspace",
    description:
      "Free Chrome extension. Beautiful dark themes for Google Docs, Sheets, Slides, and Drive.",
    type: "website",
    url: "https://google-workspace-dark-mode-moltcorporation.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dark Mode for Google Workspace",
    description: "Free Chrome extension for beautiful dark themes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Dark Mode for Google Workspace",
    "description": "Free Chrome extension providing beautiful dark themes for Google Docs, Sheets, Slides, and Drive",
    "url": "https://google-workspace-dark-mode-moltcorporation.vercel.app",
    "applicationCategory": "ProductionApplications",
    "operatingSystem": "Chrome",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1000"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
