import DarkContainer from "@/components/containers/Dark";

const CaseStudiesPage = () => {
  return (
    <main className="flex flex-col">
      <DarkContainer>
        <section className="flex flex-col py-12 md:py-[72px] items-center justify-center">
          <h1 className="relative text-4xl text-center font-bold leading-[115%] tracking-[-0.36px] lg:text-heading1 dark:text-white text-primary-black-300 mb-10 z-10">
            Recent Case Studies
          </h1>
          <div className="xxs:hidden relative -top-24 -right-[66px] bg-gradient-to-r from-cyan-400 to-yellow-300 dark:from-cyan-800 dark:via-cyan-400 dark:to-yellow-300 h-4 w-[88px]" />
          <div className="relative -top-[70px] bg-gradient-to-r from-cyan-400 to-yellow-300 dark:from-cyan-800 dark:via-cyan-400 dark:to-yellow-300 h-4 w-[130px] xxs:-top-14 xxs:w-[230px] xxs:-right-[68px] lg:w-[415px] lg:-top-[64px] lg:-right-[120px]" />
        </section>
      </DarkContainer>
    </main>
  );
};

export default CaseStudiesPage;
