import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({ weight: ["400", "600", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jay Hogan",
  description: "Professional US Based Web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`w-full h-full bg-white ${poppins.className}`}>
        <div className="flex flex-col items-center justify-center bg-primary-white-800 dark:bg-primary-black-300">
          <Navbar />
        </div>
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
