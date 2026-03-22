import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ ADD THIS (for browser test)
export async function GET() {
  return new Response('API WORKING 🔥');
}

// ✅ Your existing POST handler
export async function POST(req: Request) {
  try {
    console.log('🔥 WEBHOOK HIT');

    const body = await req.json();
    console.log('BODY:', body);

    const name = body.name;
    const email = body.email;
    const inviteLink =
      body.inviteLink || `https://yourdomain.com/review?token=${body._id}`;

    if (!name || !email || !inviteLink) {
      return new Response('Invalid payload', { status: 400 });
    }

    await transporter.sendMail({
      from: `"Tejal Pagar" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Your review invite link',
      html: `
      <p>Hi ${name},</p>

<p>I hope you're doing well 😊</p>

<p>I would really appreciate your feedback about your experience working with me.</p>

<p>You can share your feedback using the link below:</p>

<p><a href="${inviteLink}">${inviteLink}</a></p>

<p>Thank you so much for your time 🙏</p>

<p>Best regards,<br/>
Tejal Pagar</p>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error('❌ ERROR:', err);
    return new Response('Server error', { status: 500 });
  }
}
