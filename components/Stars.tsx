import Image from "next/image";

interface StarsProps {
  stars: number;
}

const Stars = ({ stars }: StarsProps) => {
  return (
    <div className="flex justify-start gap-2">
      {Array.from({ length: stars }, (_, index) => (
        <Image
          key={index}
          src="/web-icons/filled-star.svg"
          alt="star"
          height={20}
          width={20}
        />
      ))}
    </div>
  );
};

export default Stars;
