import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["400", "600", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jay Hogan",
  description: "US Based Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`w-full h-full max-w-[1440px] bg-primary-white-800 dark:bg-primary-black-200 py-5 px-6 md:px-10 lg:px-20 ${poppins.className}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
