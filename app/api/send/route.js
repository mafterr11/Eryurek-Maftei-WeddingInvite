import { EmailTemplate } from "@/components/general/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const formData = await req.json(); // Extract the request body correctly

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["mafterr11@gmail.com"],
      subject: "RSVP Confirmation",
      react: EmailTemplate(formData),
    });

    if (error) {
      return Response.json({ success: false, error }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
