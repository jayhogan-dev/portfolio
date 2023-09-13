import Image from "next/image";
import { MouseEventHandler } from "react";

interface IconButtonProps {
  iconUrl: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

const IconButton = ({ iconUrl, handleClick }: IconButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className="bg-primary-white-800 rounded-full p-3 hover:bg-primary-white-800/75"
    >
      <Image
        src={iconUrl}
        alt="arrow"
        height={20}
        width={20}
      />
    </button>
  );
};

export default IconButton;
