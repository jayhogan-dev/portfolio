import DarkContainer from "./containers/Dark";
import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <DarkContainer>
      <section className="flex flex-col items-center justify-center py-12 md:py-[72px]">
        <div className="w-72 sm:w-full">
          <SectionTitle title="What services do I provide" />
        </div>
        <div className="relative -top-24 -right-[52px] bg-gradient-to-r from-cyan-400 to-yellow-300 dark:from-cyan-800 dark:via-cyan-400 dark:to-yellow-300 h-4 w-[150px] sm:-top-14 sm:-right-0 sm:-left-14 lg:w-[200px] lg:-top-[56px] lg:-left-[74px]" />
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          <ServiceCard
            icon="/web-icons/cursor.svg"
            title="Front-End Dev"
            description="Front-end dev includes creating the user interface and interactive elements of websites and apps"
          />
          <ServiceCard
            icon="/web-icons/code.svg"
            title="Back-End Dev"
            description="Back-end dev includes creating server logic, databases, and the architecture for web functionality"
          />
          <ServiceCard
            icon="/web-icons/mobile-dev.svg"
            title="Mobile Dev"
            description="Mobile dev includes designing and coding applications for smartphones and tablets"
          />
          <ServiceCard
            icon="/web-icons/optimization.svg"
            title="Web Optimization"
            description="Web optimization focuses on improving website performance for a smoother user experience"
          />
        </div>
      </section>
    </DarkContainer>
  );
};

export default Services;
