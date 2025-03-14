import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import * as fs from "fs";

export async function POST(req) {
  const apiKey = process.env.GOOGLE_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "API key is missing" }, { status: 500 });
  }
  const genAI = new GoogleGenerativeAI(apiKey);

  try {
    const formData = await req.formData();

    const file = formData.get("file");
    const loader = new PDFLoader(file);
    const data = await loader.load();

    let content = "";
    data.forEach((item) => {
      content = content + "" + item.pageContent;
    });

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-002" });

    const prompt = content + "\n. Summarize this text.";
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
