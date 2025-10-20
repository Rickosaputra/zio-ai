import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import dotenv from "dotenv";

dotenv.config();

// Interface untuk request body
interface ChatRequest {
  message: string;
}

export async function POST(req: Request) {
  try {
    const body = await req.json() as ChatRequest;
    const { message } = body;

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

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
  } catch (error) {
    // Safer error handling
    if (error instanceof Error) {
      console.error("Error in Gemini API:", error);
      return NextResponse.json(
        { error: error.message, status: 500 },
        { status: 500 }
      );
    }
    
    console.error("Unknown error:", error);
    return NextResponse.json(
      { error: "An unknown error occurred", status: 500 },
      { status: 500 }
    );
  }
}