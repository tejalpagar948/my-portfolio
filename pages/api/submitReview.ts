// /pages/api/submitReview.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@sanity/client";

// Create Sanity client server-side (token is safe here)
const sanityWriteClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN, // ✅ Safe on server
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message, linkedin } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "Name, email, and message are required" });
  }

  try {
    const result = await sanityWriteClient.create({
      _type: "review",
      name,
      email,
      message,
      linkedin: linkedin || "",
      approved: false,
      createdAt: new Date().toISOString(),
    });

    return res.status(200).json({
      message: "Review submitted successfully",
      reviewId: result._id,
    });
  } catch (err) {
    console.error("Sanity submission error:", err);
    return res
      .status(500)
      .json({ error: "Failed to submit review. Please try again later." });
  }
}
