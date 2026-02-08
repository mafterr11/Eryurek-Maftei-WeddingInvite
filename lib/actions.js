"use server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/general/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function handleSubmit(formData) {
  try {
    // console.log("Received RSVP data:", formData);

    const subject =
      formData.attending === "yes"
        ? `RSVP Confirmation - ${formData.nume} ${formData.prenume}`
        : `NO ATTENDANCE - ${formData.nume}`;

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["alexandrumaftei95@gmail.com"],
      subject,
      react: EmailTemplate(formData),
    });

    if (error) {
      // console.error("Resend API Error:", error);
      
      return { success: false, error };
    }
    
    return { success: true, data };
  } catch (error) {
    // console.error("Server Error:", error);
    return { success: false, error: error.message };
  }
}
