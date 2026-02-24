import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  const body = await req.json();
  console.log("SANITY WEBHOOK DATA:", body);

  const { token, email, linkedin, name } = body;

  const { error } = await supabase.from('invites').insert({
    token,
    name,
    email,
    linkedin,
    status: 'pending',
  });

  if (error) {
    console.error(error);
    return Response.json({ error: 'Insert failed' }, { status: 500 });
  }

  return Response.json({ success: true });
}
