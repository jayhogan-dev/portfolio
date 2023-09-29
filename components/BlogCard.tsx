import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";

interface BlogCardProps {
  title: string;
  subtitle: string;
  headerImage: string;
  slug: string;
}

const BlogCard = ({ title, subtitle, headerImage, slug }: BlogCardProps) => {
  return (
    <Card className="w-full bg-white dark:bg-primary-black-500">
      <CardHeader className="relative h-48 md:h-56">
        <Image
          src={headerImage}
          alt="header image"
          fill
          className="rounded-t-lg"
        />
      </CardHeader>
      <CardContent>
        <h3 className="mt-5 mb-3 text-paragraph-bold md:text-base-bold text-primary-blue-light dark:text-primary-blue-dark">
          {title}
        </h3>
        <p className="text-small-regular md:text-body-regular text-primary-white-500 dark:text-primary-white-800">
          {subtitle}
        </p>
      </CardContent>
      <CardFooter>
        <Link
          href={`${slug}`}
          className="w-full"
        >
          <Button className="w-full">Read Post</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
