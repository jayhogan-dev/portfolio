interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return <h1>{title}</h1>;
};

export default SectionTitle;
