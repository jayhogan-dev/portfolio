import { ReactNode } from "react";

export default function LightContainer({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center px-6 md:px-10 lg:px-20 bg-white dark:bg-primary-black-200">
      <div className="max-w-[1440px] w-full">{children}</div>
    </div>
  );
}
