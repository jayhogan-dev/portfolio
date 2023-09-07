import React from "react";

export default function LightContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-6 md:px-10 lg:px-20 bg-white dark:bg-primary-black-200">
      <div className="max-w-[1440px]">{children}</div>
    </div>
  );
}
