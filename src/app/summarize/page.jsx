"use client";

import Head from "next/head";
import TextSummarization from "../../components/TextSummarization";
import DocumentSummerization from "../../components/DocumentSummerization";
import { useState } from "react";

export default function Home() {
  const [summary, setSummary] = useState("");

  return (
    <div className="">
      <Head>
        <title>Summarization Feature</title>
        <meta
          name="description"
          content="Summarization using Google Gemini Model"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-5 py-8 md:p-12 mt-8 mx-auto">
        <h1 className="text-3xl mb-4 font-bold text-center text-yellow-500">
          Summarization
        </h1>
        <p className="text-center mb-4 text-lg text-gray-700">
          Enter your text or directly upload PDF and generate a concise summary.
          Ideal for getting quick insights and overviews of lengthy content.
        </p>

        <TextSummarization summary={summary} setSummary={setSummary} />
        <div className="flex justify-center items-center">
          <DocumentSummerization summary={summary} setSummary={setSummary} />
        </div>
        <div className="px-5 md:px-36 mt-12">
          {summary && (
            <div className="bg-gray-100 border-2 border-gray-300 rounded-md mt-7 px-4 py-7 w-full text-justify">
              <h2 className="text-xl mb-3 font-semibold">Summary:</h2>
              <p>{summary}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
