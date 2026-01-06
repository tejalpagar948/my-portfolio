export async function POST(req: Request) {
  try {
    const data = await req.json();
    const googleRes = await fetch(
      "https://script.google.com/macros/s/AKfycbxmO1aAeA73N2rHtP-SrHj4ZJuZMKcOzdncna631qWKtmhIbzn0MRU6222BU5281Fe1mQ/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    const result = await googleRes.json();

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    return new Response(
      JSON.stringify({
        status: "error",
        message: err.message,
      }),
      { status: 500 }
    );
  }
}
