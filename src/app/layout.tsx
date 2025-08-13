import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/components/provider/provider";

export const metadata: Metadata = {
  title: "Ali Mohammad",
  description: "Ali Mohammad Esmaeeli Résumé",
  keywords: ["علی محمد", "اسماعیلی", "علی محمد اسماعیلی", "Ali Mohammad", "Ali Mohammad Esmaeeli"],
  metadataBase: new URL('https://www.ali-mohammad.ir/'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
