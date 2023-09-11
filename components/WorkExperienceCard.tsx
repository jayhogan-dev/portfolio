import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

interface WorkExperienceCardProps {
  icon: string;
  title: string;
  description: string;
}

const WorkExperienceCard = ({
  icon,
  title,
  description,
}: WorkExperienceCardProps) => {
  return (
    <Card className="w-full flex flex-col md:flex-row md:items-center bg-white dark:bg-primary-black-300 hover:translate-x-10 border-none shadow-2xl">
      <div className="w-16 h-16 mt-5 ml-5 md:mt-0 rounded-xl flex items-center justify-center">
        <Image
          src={icon}
          alt={title}
          width={60}
          height={60}
        />
      </div>
      <CardHeader>
        <CardTitle className="text-base-bold text-primary-black-200 dark:text-white">
          {title}
        </CardTitle>
        <CardDescription className="text-small-regular text-primary-white-500 dark:text-white">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default WorkExperienceCard;
