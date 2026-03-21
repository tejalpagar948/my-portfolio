import { NextResponse } from "next/server";
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

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, message, linkedin, image } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const imageField = await uploadImageFromUrl(image, email);

    const result = await sanityWriteClient.create({
      _type: "review",
      name,
      email,
      message,
      linkedin: linkedin || "",
      image: imageField,
      approved: false,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({
      message: "Review submitted successfully",
      reviewId: result._id,
    });
  } catch (err) {
    console.error("Sanity submission error:", err);
    return NextResponse.json(
      { error: "Failed to submit review." },
      { status: 500 }
    );
  }
}