"use server";

import EmailTemplate from "@/components/EmailTemplate";
import { EmailTemplateProps } from "@/types";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({
  name,
  email,
  project,
  contact,
}: EmailTemplateProps) {
  try {
    const data = await resend.emails.send({
      from: email,
      to: ["jayhogan.dev@gmail.com"],
      subject: "Portfolio Contact",
      react: EmailTemplate({ name, email, project, contact }),
    });

    return data;
  } catch (error) {
    return NextResponse.json({ error });
  }
}
