import { supabase } from "@/lib/supabase";

const FRONTEND_URL = "https://yourwebsite.com/review";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Webhook hit!");
    console.log("Payload:", body);

    const { name, email, linkedin, token, used } = body;

    if (!name || !email || !token) {
      return new Response(JSON.stringify({ message: "Missing required fields" }), { status: 400 });
    }

    const inviteLink = `${FRONTEND_URL}?token=${token}`;

    const { data, error } = await supabase.from("invites").insert([
      {
        name,
        email,
        linkedin,
        token,
        inviteLink,
        used: used || false,
        status: false, // boolean instead of string
      },
    ]);

    console.log("Supabase result:", { data, error });

    if (error) {
      return new Response(JSON.stringify({ message: "Supabase insert error", error }), { status: 500 });
    }

    return new Response(JSON.stringify({ message: "Invite added", data }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Unexpected error", err }), { status: 500 });
  }
}