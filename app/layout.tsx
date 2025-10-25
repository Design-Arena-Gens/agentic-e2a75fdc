import type { Metadata } from "next";
import "./globals.css";
import { Manrope, Raleway } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });

export const metadata: Metadata = {
  title: "Dream Finds Company | Digital Marketing Studio",
  description:
    "Dream Finds Company crafts data-driven digital marketing campaigns that accelerate growth for visionary brands.",
  metadataBase: new URL("https://agentic-e2a75fdc.vercel.app"),
  openGraph: {
    title: "Dream Finds Company",
    description:
      "Data-driven digital marketing studio specializing in growth campaigns for visionary brands.",
    url: "https://agentic-e2a75fdc.vercel.app",
    siteName: "Dream Finds Company",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Dream Finds Company",
    description:
      "Data-driven digital marketing studio specializing in growth campaigns for visionary brands.",
    creator: "@dreamfinds"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${raleway.variable}`}>
      <body className="bg-slate-950 text-slate-50 antialiased">
        <div className="relative min-h-screen overflow-hidden">
          <div className="noise" />
          {children}
        </div>
      </body>
    </html>
  );
}
