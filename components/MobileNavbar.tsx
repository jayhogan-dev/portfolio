"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/constants";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";

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
          <Link
            href="/contact"
            className="bg-gradient-to-br from-cyan-800 via-cyan-400 to-yellow-300 relative h-10 w-10 mb-5 hover:scale-110 rounded-lg"
          >
            <Image
              src="/logo.svg"
              alt="logo"
              fill
            />
          </Link>
        </SheetHeader>
        <Separator />
        <div className="flex flex-col items-center mt-10 gap-5">
          {routes.map((route) => (
            <Link
              key={route.label}
              href={route.href}
              className={cn(
                "flex w-full cursor-pointer justify-center rounded-lg p-3 text-sm font-medium transition hover:bg-primary-blue-light hover:text-white",
                pathname === route.href
                  ? "text-white bg-primary-blue-light"
                  : "text-primary-black-400"
              )}
            >
              {route.label}
            </Link>
          ))}
          <Link
            key="resume"
            href="/resume"
            className={cn(
              "flex w-full cursor-pointer justify-center rounded-lg p-3 text-sm font-medium transition hover:bg-primary-blue-light hover:text-white",
              pathname === "/resume"
                ? "text-white bg-primary-blue-light"
                : "text-primary-black-400"
            )}
          >
            Resume
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
