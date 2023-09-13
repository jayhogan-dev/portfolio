import React from "react";
import LightContainer from "./containers/Light";
import { Button } from "./ui/button";
import Link from "next/link";

const ContactBanner = () => {
  return (
    <LightContainer>
      <div className="flex flex-col py-12">
        <div className="flex flex-col md:flex-row md:justify-between md:py-20 md:px-10 md:items-center rounded-3xl bg-gradient-to-r from-cyan-400 to-yellow-300 py-12 px-5 gap-5">
          <h1 className="text-primary-black-200 text-3xl lg:text-heading2 font-bold md:w-3/4">
            Have a project in mind that requires technical expertise?
          </h1>
          <Link
            href="/contact"
            className="w-full md:w-1/4"
          >
            <Button className="w-full bg-white dark:bg-primary-black-500 text-primary-black-200 dark:text-white">
              Get in Touch with Me
            </Button>
          </Link>
        </div>
      </div>
    </LightContainer>
  );
};

export default ContactBanner;
