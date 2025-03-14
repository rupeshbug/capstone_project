import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req) {
  const apiKey = process.env.GOOGLE_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "API key is missing" }, { status: 500 });
  }

  const genAI = new GoogleGenerativeAI(apiKey);

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-002" });

    const data = await req.json();
    if (!data.text) {
      return NextResponse.json({ error: "Text is required" }, { status: 400 });
    }

    const prompt = data.text + ". Summarize this text.";
    const result = await model.generateContent(prompt);
    const responseText = await result.response.text();

    return NextResponse.json({ summary: responseText });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
