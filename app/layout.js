import { Caveat } from "next/font/google";
import { Bitter } from "next/font/google";
import { Roboto_Slab } from "next/font/google";

import "./globals.css";
import Navbar from "./(components)/navbar";

const f1 = Caveat({
  subsets: ["latin"],
  variable: "--f1",
  weight: "700",
});

const f2 = Bitter({
  subsets: ["latin"],
  variable: "--f2",
  weight: "600",
});

const f3 = Roboto_Slab({
  subsets: ["latin"],
  variable: "--f3",
  weight: "600",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${f1.variable} ${f2.variable} ${f3.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
