import { ReactNode } from "react";

export default function DarkContainer({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center px-6 md:px-10 lg:px-20 bg-primary-white-800 dark:bg-primary-black-300">
      <div className="max-w-[1440px] w-full">{children}</div>
    </div>
  );
}
