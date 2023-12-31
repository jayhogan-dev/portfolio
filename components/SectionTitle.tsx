interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <h1 className="relative text-4xl text-center font-bold leading-[115%] tracking-[-0.36px] lg:text-heading2 dark:text-white text-primary-black-300 mb-10 z-10">
      {title}
    </h1>
  );
};

export default SectionTitle;
