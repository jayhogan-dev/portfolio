"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import * as z from "zod";
import { sendEmail } from "@/lib/actions";

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

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      project: "",
      contact: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await sendEmail({
      name: values.name,
      email: values.email,
      project: values.project,
      contact: values.contact,
    });
  }

  return (
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
              <FormControl className="bg-primary-white-800 dark:bg-primary-black-500 h-12 md:h-16">
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
              <FormControl className="bg-primary-white-800 dark:bg-primary-black-500 h-12 md:h-16">
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
              <FormControl className="bg-primary-white-800 dark:bg-primary-black-500 h-24 md:h-40">
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
              <FormControl className="bg-primary-white-800 dark:bg-primary-black-500 h-12 md:h-16">
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
  );
};

export default ContactForm;
