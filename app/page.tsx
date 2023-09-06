import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-start pt-12 gap-4">
      <h2 className="font-semibold text-primary-blue-light dark:text-primary-blue-dark text-sm uppercase leading-5 tracking-[4px]">
        Hi, I am Jay
      </h2>
      <h1 className="text-primary-black-200 dark:text-white text-4xl leading-[130%] font-bold w-[320px]">
        Professional Web Developer based in USA
        <div className="relative -top-16 bg-gradient-to-r from-cyan-800 via-cyan-400 to-yellow-300 h-4 w-[280px] -z-10" />
      </h1>
      <p className="text-xs leading-[155%] text-primary-white-500 dark:text-primary-white-800">
        Elevating the digital landscape through meticulous craftsmanship, I
        program immersive web experiences that blend innovation and artistry
        seamlessly.
      </p>
      <div className="flex flex-col w-full gap-4">
        <Button>My Work</Button>
        <Button variant="default">
          <div className="flex w-full justify-between items-center">
            <span className="text-primary-white-500">
              jayhogan.dev@gmail.com
            </span>
            <Image
              src="/web-icons/frame.svg"
              alt="copy"
              width={20}
              height={20}
            />
          </div>
        </Button>
      </div>
      <div className="relative flex w-full h-64">
        <Image
          src="/hero.png"
          alt="copy"
          fill
        />
      </div>
    </main>
  );
}
