"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";
import MobileNavbar from "./MobileNavbar";
import { routes } from "@/constants";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState("");
  const pathname = usePathname();

  return (
    <nav className="flex w-full items-center justify-between">
      <Link
        href="/contact"
        className="bg-gradient-to-br from-cyan-800 via-cyan-400 to-yellow-300 relative h-10 w-10 hover:scale-110 rounded-lg"
      >
        <Image
          src="/logo.svg"
          alt="logo"
          fill
        />
      </Link>
      <article className="hidden md:flex md:items-center md:justify-between md:gap-5">
        <ul className="flex items-center justify-between gap-8 text-small-regular">
          {routes.map((route) => (
            <li key={route.label}>
              <Link
                href={route.href}
                className={cn(
                  "cursor-pointer hover:text-primary-black-300",
                  pathname === route.href
                    ? "text-primary-blue-light dark:text-primary-blue-dark"
                    : "text-primary-white-500 dark:text-primary-white-800"
                )}
              >
                {route.label}
              </Link>
            </li>
          ))}
          <li>Resume</li>
        </ul>
        <Image
          src="/web-icons/line.svg"
          alt="divider"
          height={2}
          width={2}
        />
        <ThemeSwitcher setDarkMode={setDarkMode} />
      </article>
      <div className="flex md:hidden">
        <MobileNavbar />
      </div>
    </nav>
  );
};

export default Navbar;
