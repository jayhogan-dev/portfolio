"use client";

import SectionTitle from "@/components/SectionTitle";
import DarkContainer from "@/components/containers/Dark";
import LightContainer from "@/components/containers/Light";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

// SVGR
import LinkedIn from "@/public/social-icons/linkedin.svg";
import Github from "@/public/social-icons/github.svg";
import Phone from "@/public/web-icons/phone.svg";
import Email from "@/public/web-icons/email.svg";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters",
  }),
  email: z.string().email({
    message: "Must be a valid email address",
  }),
  project: z
    .string()
    .min(2)
    .max(500, { message: "No more than 500 characters " }),
  contact: z.string().min(2, {
    message: "Name must be at least 2 characters",
  }),
});

const ContactPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      project: "",
      contact: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <>
      <DarkContainer>
        <section className="flex flex-col py-12 gap-6 md:py-[72px] items-center justify-center">
          <div className="w-[320px] lg:w-full">
            <SectionTitle title="Get In Touch" />
          </div>
          <div className="relative -top-[76px] bg-gradient-to-r from-cyan-400 to-yellow-300 dark:from-cyan-800 dark:via-cyan-400 dark:to-yellow-300 h-4 w-[220px] lg:w-[290px] lg:-top-[80px]" />
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
              <div className="flex gap-4 items-center">
                <Phone className="fill-primary-black-400 dark:fill-white" />
                <p className="text-paragraph-bold md:text-base-bold text-primary-black-400 dark:text-primary-white-800">
                  203.528.7208
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 md:gap-7">
              <h2 className="text-paragraph-regular md:text-base-regular text-primary-black-300 dark:text-white">
                Email Address
              </h2>
              <div className="flex gap-4 items-center">
                <Email className="fill-primary-black-400 dark:fill-white" />
                <p className="text-paragraph-bold md:text-base-bold text-primary-black-400 dark:text-primary-white-800">
                  jayhogan.dev@gmail.com
                </p>
              </div>
            </div>
          </aside>
          <article className="w-full md:w-2/3 flex flex-col gap-9 md:gap-20">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-body-regular md:text-paragraph-regular text-primary-black-300 dark:text-primary-white-800">
                        What&apos;s your full name?
                      </FormLabel>
                      <FormControl className="bg-primary-white-800 h-16 md:h-20">
                        <Input
                          {...field}
                          className="text-body-regular md:text-paragraph-regular rounded-lg"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-body-regular md:text-paragraph-regular text-primary-black-300 dark:text-primary-white-800">
                        What&apos;s your email?
                      </FormLabel>
                      <FormControl className="bg-primary-white-800 h-16 md:h-20">
                        <Input
                          {...field}
                          className="text-body-regular md:text-paragraph-regular rounded-lg"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="project"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-body-regular md:text-paragraph-regular text-primary-black-300 dark:text-primary-white-800">
                        Write something about your project goals and timeframe
                      </FormLabel>
                      <FormControl className="bg-primary-white-800 h-24 md:h-40">
                        <Textarea
                          {...field}
                          className="text-body-regular md:text-paragraph-regular rounded-lg"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="contact"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-body-regular md:text-paragraph-regular text-primary-black-300 dark:text-primary-white-800">
                        How can I contact you? ex. phone number or email address
                      </FormLabel>
                      <FormControl className="bg-primary-white-800 h-16 md:h-20">
                        <Input
                          {...field}
                          className="text-body-regular md:text-paragraph-regular rounded-lg"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-center justify-end">
                  <Button
                    type="submit"
                    className="text-body-bold text-white w-full md:w-52"
                  >
                    Send
                  </Button>
                </div>
              </form>
            </Form>
          </article>
        </section>
      </LightContainer>
    </>
  );
};

export default ContactPage;
