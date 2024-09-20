import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import fs from "fs/promises";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";

export async function POST(req) {
  const apiKey = process.env.GOOGLE_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "API key is missing" }, { status: 500 });
  }

  const genAI = new GoogleGenerativeAI(apiKey);

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const data = await req.json();

    const loader = new PDFLoader("./public/survey-app.pdf");

    const docs = await loader.load();

    const prompt = docs[0].pageContent + ". Summarize this text.";
    const result = await model.generateContent(prompt);
    const responseText = await result.response.text();

    return NextResponse.json({ summary: responseText });
  } catch (error) {
    console.error("Error generating summary:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
