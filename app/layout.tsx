import "./globals.css";
import type { Metadata } from "next";
import { Lalezar } from "next/font/google";
import Head from "next/head";

const lalezar = Lalezar({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Ali Mohammad",
  description: "Ali Mohammad Esmaeeli cv",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lalezar.className}>{children}</body>
    </html>
  );
}
