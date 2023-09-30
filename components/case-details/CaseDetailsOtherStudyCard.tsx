import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

interface CaseDetailsOtherStudyCardProps {
  title: string;
  image: string;
  description: string;
  link: string;
}

const CaseDetailsOtherStudyCard = ({
  title,
  image,
  description,
  link,
}: CaseDetailsOtherStudyCardProps) => {
  return (
    <Card className="w-full bg-white dark:bg-primary-black-500">
      <CardHeader className="relative h-48 md:h-56">
        <Image
          src={image}
          alt="figma"
          fill
          className="rounded-t-lg"
        />
      </CardHeader>
      <CardContent>
        <h3 className="mt-5 mb-3 text-paragraph-bold md:text-base-bold text-primary-blue-light dark:text-primary-blue-dark">
          {title}
        </h3>
        <p className="text-small-regular md:text-body-regular text-primary-white-500 dark:text-primary-white-800">
          {description}
        </p>
      </CardContent>
      <CardFooter>
        <Link
          href={`/case-studies/${link}`}
          className="w-full"
        >
          <Button className="w-full">See Case Study</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CaseDetailsOtherStudyCard;
