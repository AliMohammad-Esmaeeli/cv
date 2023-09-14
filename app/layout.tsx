import "./globals.css";
import type { Metadata } from "next";
import { Lalezar } from "next/font/google";
import Head from "next/head";

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
      <Head>
        {/* HTML Meta Tags  */}
        <title>Ali Mohammad I علی محمد</title>
        <meta name="description" content="Ali Mohammad Esmaeeli 
Frontend React/Nextjs Developer 👨‍💻🧋" />

        {/* Facebook Meta Tags  */}
        <meta property="og:url" content="https://www.alimohammad.blog/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ali Mohammad I علی محمد" />
        <meta property="og:description" content="Ali Mohammad Esmaeeli 
Frontend React/Nextjs Developer 👨‍💻🧋" />
        <meta property="og:image" content="https://avatars.githubusercontent.com/AliMohammad-Esmaeeli" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="alimohammad.blog" />
        <meta property="twitter:url" content="https://www.alimohammad.blog/" />
        <meta name="twitter:title" content="Ali Mohammad I علی محمد" />
        <meta name="twitter:description" content="Ali Mohammad Esmaeeli 
Frontend React/Nextjs Developer 👨‍💻🧋" />
        <meta name="twitter:image" content="https://avatars.githubusercontent.com/AliMohammad-Esmaeeli" />
        
      </Head>
      <body className={lalezar.className}>{children}</body>
    </html>
  );
}
