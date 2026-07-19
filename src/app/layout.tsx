import type { Metadata } from "next";
import { Inter, Syne, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maryam | Full Stack Developer & AI Enthusiast",
  description:
    "Portfolio of Maryam — Computer Science student at FAST-NUCES, Full Stack Web Development intern, and AI builder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "scroll-smooth", "antialiased", syne.variable, inter.variable, "font-sans", geist.variable)}>
      <body className="min-h-full bg-white font-body text-black">{children}</body>
    </html>
  );
}
