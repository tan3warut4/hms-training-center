import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HMS training center",
  description: "HMS HOST | cairns training center",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
