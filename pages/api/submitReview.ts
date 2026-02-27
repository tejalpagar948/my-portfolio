import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@sanity/client";
import { Buffer } from "buffer";

const sanityWriteClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});

async function uploadImageFromUrl(imageUrl: string, email: string) {
  if (!imageUrl) return undefined;

  const response = await fetch(imageUrl);
  if (!response.ok) {
    throw new Error("Failed to fetch Google image");
  }

  const contentType = response.headers.get("content-type") || "image/jpeg";
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const asset = await sanityWriteClient.assets.upload("image", buffer, {
    contentType,
    filename: `${email}-avatar`,
  });

  return {
    _type: "image",
    asset: {
      _type: "reference",
      _ref: asset._id,
    },
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  console.log("REQ BODY:", req.body);
  
  const { name, email, message, linkedin, image } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "Name, email, and message are required" });
  }

  try {
    const imageField = await uploadImageFromUrl(image, email);

    const result = await sanityWriteClient.create({
      _type: "review",
      name,
      email,
      message,
      linkedin: linkedin || "",
      image: imageField, // ✅ correct field name
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
      .json({ error: "Failed to submit review." });
  }
}