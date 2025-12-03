export async function POST(req: Request) {
  try {
    const data = await req.json();
    const googleRes = await fetch(
      "https://script.google.com/macros/s/AKfycbxsuXWBI_TDJcCisAn6oT2QNaoWsDVBpgizPAq5sqoRXXgjksdREeXboUlebUJH1sXNOw/exec",
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
