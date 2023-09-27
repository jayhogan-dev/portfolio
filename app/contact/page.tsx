import SectionTitle from "@/components/SectionTitle";
import DarkContainer from "@/components/containers/Dark";
import LightContainer from "@/components/containers/Light";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

// SVGR
import LinkedIn from "@/public/social-icons/linkedin.svg";
import Github from "@/public/social-icons/github.svg";
import Phone from "@/public/web-icons/phone.svg";
import Email from "@/public/web-icons/email.svg";

const ContactPage = () => {
  return (
    <>
      <DarkContainer>
        <section className="flex flex-col py-12 gap-6 md:py-[72px] items-center justify-center">
          <div className="w-[320px] lg:w-full">
            <h1 className="relative text-4xl text-center font-bold leading-[115%] tracking-[-0.36px] lg:text-heading1 dark:text-white text-primary-black-300 mb-10 z-10">
              Get in Touch
            </h1>
          </div>
          <div className="relative -top-[76px] bg-gradient-to-r from-cyan-400 to-yellow-300 dark:from-cyan-800 dark:via-cyan-400 dark:to-yellow-300 h-4 w-[220px] lg:w-[390px] lg:-top-[90px]" />
          <h2 className="-mt-16 text-small-regular md:text-paragraph-regular text-primary-white-500 dark:text-primary-white-800">
            Let&apos;s Collaborate on Your Next Project
          </h2>
        </section>
      </DarkContainer>
      <LightContainer>
        <section className="flex flex-col-reverse py-12 gap-x-32 gap-y-20 md:py-[72px] md:flex-row">
          <aside className="w-full md:w-1/3 flex flex-col gap-9 md:gap-20">
            <div className="flex flex-col gap-2 md:gap-7">
              <h2 className="text-paragraph-regular md:text-base-regular text-primary-black-300 dark:text-white">
                My Socials
              </h2>
              <div className="flex gap-6">
                <Link
                  href="https://www.linkedin.com/in/jay-hogan-66610b90/"
                  target="_blank"
                >
                  <LinkedIn className="fill-primary-black-400 dark:fill-white" />
                </Link>
                <Link
                  href="https://github.com/jayhogan-dev"
                  target="_blank"
                  className="relative w-6 h-6"
                >
                  <Github className="fill-primary-black-400 dark:fill-white" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-2 md:gap-7">
              <h2 className="text-paragraph-regular md:text-base-regular text-primary-black-300 dark:text-white">
                Phone Number
              </h2>
              <div className="flex gap-2 items-center">
                <Phone className="fill-primary-black-400 dark:fill-white" />
                <p className="text-paragraph-bold text-primary-black-400 dark:text-primary-white-800">
                  203.528.7208
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 md:gap-7">
              <h2 className="text-paragraph-regular md:text-base-regular text-primary-black-300 dark:text-white">
                Email Address
              </h2>
              <div className="flex gap-2 items-center">
                <Email className="fill-primary-black-400 dark:fill-white" />
                <p className="text-paragraph-bold text-primary-black-400 dark:text-primary-white-800">
                  jayhogan.dev@gmail.com
                </p>
              </div>
            </div>
          </aside>
          <article className="w-full md:w-2/3 flex flex-col gap-9 md:gap-20">
            <ContactForm />
          </article>
        </section>
      </LightContainer>
    </>
  );
};

export default ContactPage;
