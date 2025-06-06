import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "С Днем Рождения, Настя!",
  description: "Поздравительный сайт с квестами для Насти",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="HandheldFriendly" content="true" />
      </head>
      <body
        className={`${geist.variable} min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
