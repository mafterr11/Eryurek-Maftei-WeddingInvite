"use server";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/general/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);
const IMGUR_CLIENT_ID = process.env.IMGUR_CLIENT_ID;

export async function handleSubmit(formData) {
  try {
    let imgurUrl = "";
    const file = formData.get("file") ;

    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const base64 = buffer.toString("base64");

      const res = await fetch("https://api.imgur.com/3/image", {
        method: "POST",
        headers: {
          Authorization: `Client-ID ${IMGUR_CLIENT_ID}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ image: base64, type: "base64" }),
      });

      const json = await res.json();
      if (json.success) imgurUrl = json.data.link;
    }

    const payload = {
      nume: formData.get("nume"),
      prenume: formData.get("prenume"),
      numarPersoane: formData.get("numarPersoane"),
      copii: formData.get("copii"),
      attending: formData.get("attending"),
      imageUrl: imgurUrl,
    };

    const subject = payload.attending === "yes"
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
    return { success: false, error: e.message };
  }
}
