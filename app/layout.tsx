import "./globals.css";
import type { Metadata } from "next";
import { Lalezar } from "next/font/google";

const lalezar = Lalezar({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Ali Mohammad I علی محمد",
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
