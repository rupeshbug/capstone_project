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
      <main className="p-4">
        <TextSummarization summary={summary} setSummary={setSummary} />
        <DocumentSummerization summary={summary} setSummary={setSummary} />
      </main>
      <div className="px-36 mb-10">
        {summary && (
          <div className="bg-gray-100 border-2 border-gray-300 rounded-md mt-7 px-4 py-7 w-full">
            <h2 className="text-xl mb-3 font-semibold">Summary:</h2>
            <p>{summary}</p>
          </div>
        )}
      </div>
    </div>
  );
}
