import SectionTitle from "@/components/SectionTitle";
import DarkContainer from "@/components/containers/Dark";

const ContactPage = () => {
  return (
    <DarkContainer>
      <section className="flex flex-col py-12 gap-6 md:py-[72px] items-center justify-center">
        <div className="w-[320px] lg:w-full">
          <SectionTitle title="Get In Touch" />
        </div>
        <div className="relative -top-[120px] -left-[68px] bg-gradient-to-r from-cyan-400 to-yellow-300 dark:from-cyan-800 dark:via-cyan-400 dark:to-yellow-300 h-4 w-[126px] lg:w-[170px] lg:-top-[80px] lg:-left-[275px]" />
        <h2>Let&apos;s Collaborate on Your Next Project</h2>
      </section>
    </DarkContainer>
  );
};

export default ContactPage;
