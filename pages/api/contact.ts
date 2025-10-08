// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const webAppUrl = "https://script.google.com/macros/s/AKfycbyn6Bgd3AzUtrhOWMNQiiU3ORYlnKlq00BUOFgGL4Poj6gc4CoChtR2t340XHBS4wIGJg/exec";

    try {
      const response = await fetch(webAppUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      });

      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ status: "error", message: error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
