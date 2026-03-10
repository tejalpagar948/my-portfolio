import nodemailer from "nodemailer";

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Gmail email
    pass: process.env.EMAIL_PASS, // Gmail App Password (NOT normal Gmail password)
  },
});

// Define types for webhook payload
interface InvitePayload {
  name: string;
  email: string;
  token: string;
  linkedin?: string;
  used?: boolean;
}

// Extract invite from webhook body
function extractInviteFromBody(body: any): InvitePayload | null {
  if (!body) return null;
  const { name, email, token } = body;
  if (!name || !email || !token) return null;
  return { name, email, token };
}

export async function POST(req: Request) {
  try {
    const rawBody = await req.text();
    const body = rawBody ? JSON.parse(rawBody) : null;

    console.log("Webhook received:", body);

    const invite = extractInviteFromBody(body);
    if (!invite) {
      console.error("Invalid invite payload:", body);
      return new Response("Invalid payload", { status: 400 });
    }

    const { name, email, token } = invite;

    // Use request origin or fallback
    const origin =
      req.headers.get("origin") ||
      `https://${req.headers.get("host") || "yourdomain.com"}`;

    // const origin = "https://unseducibly-hyperemic-krishna.ngrok-free.dev";

    const FRONTEND_URL = `${origin}/review`;
    const inviteLink = `${FRONTEND_URL}?token=${token}`;

    // Send the email
    try {
      const mailRes = await transporter.sendMail({
        from: `"Tejal Pagar" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Your review invite link",
        html: `<p>Hi ${name},</p>
               <p>I hope you’re doing well! I’m collecting reviews from my colleagues and would love to hear your thoughts about working with me.</p>
               <p>Here’s the form link: <a href="${inviteLink}" target="_blank">${inviteLink}</a></p>
               <p>Please take a few minutes to fill it out and share your feedback. Your input means a lot and will be really helpful!</p>
               <p>Thank you so much for your time and support.</p>
               <p>Best regards,<br>Tejal Pagar</p>`,
      });

      console.log("Email sent successfully:", mailRes);
    } catch (emailError) {
      console.error("Failed to send email:", emailError);
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(JSON.stringify({ message: "Server error" }), {
      status: 500,
    });
  }
}