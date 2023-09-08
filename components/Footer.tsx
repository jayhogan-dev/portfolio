import Link from "next/link";
import LightContainer from "./containers/Light";

// SVGR
import LinkedIn from "@/public/social-icons/linkedin.svg";
import Github from "@/public/social-icons/github.svg";

const Footer = () => {
  return (
    <LightContainer>
      <div className="flex flex-col px-6 py-12 items-center justify-center md:flex-row md:justify-between md:items-start">
        <p className="text-body-regular mb-4 text-primary-black-400 dark:text-primary-white-800">
          &copy; 2023 Jay. All rights reserved
        </p>
        <div className="flex items-center justify-center gap-5">
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
    </LightContainer>
  );
};

export default Footer;
