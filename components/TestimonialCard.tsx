import Stars from "./Stars";

interface TestimonialCardProps {
  name: string;
  quote: string;
  title: string;
  stars: number;
  isActive: boolean;
}

const TestimonialCard = ({
  name,
  quote,
  title,
  stars,
  isActive,
}: TestimonialCardProps) => {
  return (
    <>
      {isActive && (
        <div className="flex flex-col gap-3">
          <div className="flex justify-start gap-2">
            <Stars starCount={stars} />
          </div>
          <blockquote className="flex flex-col gap-5">
            <p className="text-body-regular text-primary-white-500 dark:text-primary-white-800">
              {quote}
            </p>
            <footer>
              <p className="text-body-semibold text-primary-black-300 dark:text-white">
                — {name}
              </p>
              <p className="text-body-regular text-primary-white-500 dark:text-primary-white-800">
                {title}
              </p>
            </footer>
          </blockquote>
        </div>
      )}
    </>
  );
};

export default TestimonialCard;
