"use client";

import DarkContainer from "./containers/Dark";
import SectionTitle from "./SectionTitle";
import TestimonialCard from "./TestimonialCard";
import { Button } from "./ui/button";
import Image from "next/image";

import { useState } from "react";
import IconButton from "./IconButton";
import { Testimonial } from "@/types";

const Testimonials = ({ testimonials }: { testimonials: Testimonial[] }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const handlePrev = () => {
    setActiveTestimonial((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : testimonials.length - 1
    );
  };

  const handleNext = () => {
    setActiveTestimonial((prevIndex) =>
      prevIndex < testimonials.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <DarkContainer>
      <section className="flex flex-col items-center justify-center py-12 md:py-[72px]">
        <div className="w-72 sm:w-full">
          <SectionTitle title="What they say about me" />
        </div>
        <div className="relative -top-24 -right-[52px] bg-gradient-to-r from-cyan-400 to-yellow-300 dark:from-cyan-800 dark:via-cyan-400 dark:to-yellow-300 h-4 w-[150px] sm:-top-14 sm:-right-0 sm:-left-10 lg:w-[200px] lg:-top-[56px] lg:-left-[50px]" />
        {/* Testimonials */}
        <article className="flex flex-col md:flex-row md:w-full gap-5">
          <div className="flex gap-5 justify-between items-start md:justify-center md:items-center">
            <div className="hidden md:flex">
              <IconButton
                handleClick={handlePrev}
                iconUrl="/web-icons/carousel-left-arrow.svg"
              />
            </div>
            <div className="flex items-center justify-center h-48 w-48 bg-primary-blue-light dark:bg-primary-blue-dark rounded-xl">
              <h1 className="text-[100px] font-black text-white">
                {testimonials[activeTestimonial].name[0]}
              </h1>
            </div>
            {/* Arrows controlled by state */}
            <div className="flex md:hidden items-center gap-3">
              {/* Left circle */}
              <IconButton
                handleClick={handlePrev}
                iconUrl="/web-icons/carousel-left-arrow.svg"
              />
              <IconButton
                handleClick={handleNext}
                iconUrl="/web-icons/carousel-right-arrow.svg"
              />
            </div>
          </div>
          <div className="md:flex md:justify-center md:ml-5 md:items-center md:w-full">
            <div className="md:w-4/5">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial._id}
                  name={testimonial.name}
                  review={testimonial.review}
                  title={testimonial.title}
                  company={testimonial.company}
                  stars={testimonial.stars}
                  isActive={index === activeTestimonial}
                />
              ))}
            </div>
            <div className="hidden md:flex md:w-1/5 md:justify-end">
              <IconButton
                handleClick={handleNext}
                iconUrl="/web-icons/carousel-right-arrow.svg"
              />
            </div>
          </div>
        </article>
      </section>
    </DarkContainer>
  );
};

export default Testimonials;
