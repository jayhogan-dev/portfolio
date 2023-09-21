import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface CaseStudyCardProps {
  title: string;
  color: string;
  subtitle: string;
  image: string;
  linkUrl: string;
}

const CaseStudyCard = ({
  title,
  color,
  subtitle,
  image,
  linkUrl,
}: CaseStudyCardProps) => {
  return (
    <div className="flex flex-col gap-5">
      <Link
        href={linkUrl}
        className={cn(
          "flex h-52 w-80 sm:h-56 sm:w-[350px] lg:h-64 lg:w-[420px] xl:h-72 xl:w-[550px] relative rounded-2xl hover:animate-pulse",
          color
        )}
      >
        <div className="absolute h-40 w-60 sm:h-44 sm:w-72 md:h-48 md:w-80 lg:h-56 lg:w-[380px] xl:h-64 xl:w-[450px] bottom-0 left-0 right-0 mx-auto text-center">
          <Image
            src={image}
            alt={title}
            fill
          />
        </div>
      </Link>
      <div className="flex flex-col ml-5 xl:ml-10 gap-2">
        <Link href={linkUrl}>
          <h2 className="text-paragraph-bold lg:text-heading3 text-primary-black-200 dark:text-white">
            {title}
          </h2>
        </Link>
        <h3 className="text-small-regular lg:text-paragraph-regular text-primary-white-500 dark:text-primary-white-800">
          {subtitle}
        </h3>
      </div>
    </div>
  );
};

export default CaseStudyCard;
