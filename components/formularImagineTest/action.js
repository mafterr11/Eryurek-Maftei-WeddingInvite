"use server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/general/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function handleSubmit(formData) {
  try {
    const payload = {
      nume: String(formData.get("nume") ?? "").trim(),
      prenume: String(formData.get("prenume") ?? "").trim(),
      numarPersoane: String(formData.get("numarPersoane") ?? "").trim(),
      copii: String(formData.get("copii") ?? "").trim(),
      attending: String(formData.get("attending") ?? "").trim(),
    };

    const subject =
      payload.attending === "yes"
        ? `RSVP Confirmation - ${payload.nume}`
        : `NO ATTENDANCE - ${payload.nume}`;

    const { error } = await resend.emails.send({
      from: "RSVP <onboarding@resend.dev>",
      to: ["alexandrumaftei95@gmail.com"],
      subject,
      react: EmailTemplate(payload),
    });

    if (error) return { success: false, error };
    return { success: true };
  } catch (e) {
    return { success: false, error: e?.message ?? "Unknown error" };
  }
}
