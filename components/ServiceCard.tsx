import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="w-[290px] bg-primary-white-800 dark:bg-primary-black-300 shadow-service-box dark:shadow-service-box-dark hover:translate-y-10">
      <div className="w-16 h-16 my-5 ml-5 rounded-xl bg-primary-blue-light shadow-service-icon flex items-center justify-center">
        <Image
          src={icon}
          alt={title}
          width={24}
          height={24}
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

export default ServiceCard;
