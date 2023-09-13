import Image from "next/image";

interface CaseStudyCardProps {
  title: string;
  color: string;
  subtitle: string;
  imgUrl: string;
}

const CaseStudyCard = ({
  title,
  color,
  subtitle,
  imgUrl,
}: CaseStudyCardProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className={`flex h-52 w-80 relative rounded-2xl ${color}`}>
        <div className="absolute h-40 w-72 bottom-0 left-0 right-0 text-center">
          <Image
            src={imgUrl}
            alt={title}
            fill
          />
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-paragraph-semibold md:text-heading3 text-primary-black-200 dark:text-white">
          {title}
        </h2>
        <h3 className="text-small-regular md:text-paragraph-regular text-primary-white-500 dark:text-primary-white-800">
          {subtitle}
        </h3>
      </div>
    </div>
  );
};

export default CaseStudyCard;
