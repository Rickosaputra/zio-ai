import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import dotenv from "dotenv";

dotenv.config();

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      throw new Error("Missing Gemini API key");
    }

    console.log("Loaded key:", process.env.GEMINI_API_KEY ? "✅ Ada" : "❌ Kosong");

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    // Gunakan versi terbaru API v1 dengan model stabil
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent(message);
    const text = result.response.text();

    return NextResponse.json({ reply: text });
  } catch (error: unknown) {
  const err = error as Error;
  console.error("Error in Gemini API:", err);
  return NextResponse.json(
    { error: err.message || "Unknown error", status: 500 },
    { status: 500 }
    );
  }
}
