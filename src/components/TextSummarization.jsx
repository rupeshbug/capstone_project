"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import { ClipLoader } from "react-spinners";

export default function TextSummarization({ summary, setSummary }) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTextSummary = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/summarizeText", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();

      if (response.ok) {
        setSummary(data.summary);
      } else {
        setError(data.error || "An error occurred");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred while fetching the summary.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center p-5 md:p-12">
        <div className="max-w-4xl w-full flex-col items-center justify-center text-sm lg:flex">
          <h1 className="text-3xl mb-4 font-bold text-center text-yellow-500">
            Summarization
          </h1>
          <p className="text-center mb-7 text-lg text-gray-700">
            Enter your text and generate a concise summary. Ideal for getting
            quick insights and overviews of lengthy content.
          </p>
          <textarea
            className="w-full h-64 p-4 border-2 border-gray-100 rounded-md resize-none outline-none shadow-md"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text to summarize..."
            spellCheck="false"
            style={{ fontSize: "15px", lineHeight: 1.5 }}
          />
          <button
            className="bg-teal-500 text-white text-lg px-5 py-3 mt-7 hover:bg-teal-600 rounded"
            onClick={handleTextSummary}
            disabled={loading}
          >
            {loading ? <ClipLoader color="white" size={24} /> : "Summarize"}
          </button>

          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </main>
    </>
  );
}
