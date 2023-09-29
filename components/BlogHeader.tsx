import Image from "next/image";
import DarkContainer from "./containers/Dark";
import SectionTitle from "./SectionTitle";

interface BlogHeaderProps {
  title: string;
  subtitle: string;
  headerImage: string;
}

const BlogHeader = ({ title, subtitle, headerImage }: BlogHeaderProps) => {
  return (
    <DarkContainer>
      <section className="flex flex-col py-12 gap-6 md:py-[72px] items-center justify-center">
        <h2 className="text-sm md:text-xl uppercase font-semibold text-primary-blue-light dark:text-primary-blue-dark">
          Blog
        </h2>
        <div className="w-[320px] lg:w-full">
          <SectionTitle title={title} />
        </div>
        <div className="flex flex-row items-end">
          <div className="relative w-[230px] h-32 sm:w-[400px] sm:h-[250px] lg:w-[475px] lg:h-[300px]">
            <Image
              src={headerImage}
              alt="image"
              fill
            />
          </div>
        </div>
      </section>
    </DarkContainer>
  );
};

export default BlogHeader;
