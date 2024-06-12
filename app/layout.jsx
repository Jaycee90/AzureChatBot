import "./globals.css";
import Head from "next/head";
import React, { ReactNode } from "react";


export const metadata = {
  title: "Jayce Turambe | Full Stack Developer",
  description: "Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/jpg" href="./imgs/favicon.png" />
      </Head>
      <body>{children}</body>
    </html>
  );
}





