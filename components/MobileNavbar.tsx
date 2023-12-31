"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetTrigger,
} from "./ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/constants";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";

import Download from "@/public/web-icons/download.svg";

const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <Sheet>
      <SheetTrigger>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
        >
          <Image
            src={
              localStorage.theme === "dark"
                ? "/web-icons/mobile-menu-dark.svg"
                : "/web-icons/mobile-menu.svg"
            }
            alt="menu"
            height={24}
            width={24}
          />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="p-10"
      >
        <SheetHeader>
          <SheetClose asChild>
            <Link
              href="/"
              className="bg-gradient-to-br from-cyan-800 via-cyan-400 to-yellow-300 relative h-10 w-10 mb-5 hover:scale-110 rounded-lg"
            >
              <Image
                src="/logo.svg"
                alt="logo"
                fill
              />
            </Link>
          </SheetClose>
        </SheetHeader>
        <Separator />
        <div className="flex flex-col items-center mt-10 gap-5">
          {routes.map((route) => (
            <SheetClose
              key={route.label}
              asChild
            >
              <Link
                href={route.href}
                className={cn(
                  "flex w-full cursor-pointer justify-center rounded-lg p-3 text-md font-medium transition hover:bg-primary-blue-light hover:text-white",
                  pathname === route.href
                    ? "text-white bg-primary-blue-light"
                    : "text-primary-black-400 dark:text-primary-white-800"
                )}
              >
                {route.label}
              </Link>
            </SheetClose>
          ))}
          <Link
            href="/files/resume.pdf"
            target="_blank"
            className="text-primary-white-400 dark:text-primary-white-800 cursor-pointer hover:text-primary-black-300 flex justify-center gap-1"
            download
          >
            <Download className="fill-primary-black-300 dark:fill-white" />
            Resume
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
