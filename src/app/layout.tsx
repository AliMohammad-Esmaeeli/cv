import "./globals.css";
import type { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/react";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Ali Mohammad",
  description: "Ali Mohammad Esmaeeli cv",
  keywords: ["علی محمد", "اسماعیلی", "علی محمد اسماعیلی", "Ali Mohammad", "Ali Mohammad Esmaeeli"],
  metadataBase: new URL('https://www.ali-mohammad.ir/'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
