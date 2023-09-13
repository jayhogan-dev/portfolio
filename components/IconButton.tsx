import Image from "next/image";
import { MouseEventHandler } from "react";
import { Button } from "./ui/button";

interface IconButtonProps {
  iconUrl: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

const IconButton = ({ iconUrl, handleClick }: IconButtonProps) => {
  return (
    <Button
      size="icon"
      className="dark:bg-primary-white-800 bg-white rounded-full p-3 dark:hover:bg-primary-white-800/75 hover:bg-white/60"
      onClick={handleClick}
    >
      <Image
        src={iconUrl}
        alt="right arrow"
        height={20}
        width={20}
      />
    </Button>
  );
};

export default IconButton;
