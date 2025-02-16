"use client";

import { useState } from "react";
import { ClipLoader } from "react-spinners";

async function fetchTopics(text) {
  const response = await fetch(
    "https://capstone-api-llu2.onrender.com/analyze-text",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data;
}

export default function TopicAnalyzer() {
  const [text, setText] = useState("");
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setError("");
    setLoading(true);
    setTopics([]);

    try {
      const result = await fetchTopics(text);
      console.log("Fetched topics data:", result);

      // Transform API response to match UI expectations
      const formattedTopics = result.top_labels.map((label, index) => ({
        topic: label,
        score: result.top_scores[index],
      }));

      setTopics(formattedTopics);
    } catch (error) {
      setError("An error occurred while analyzing the text.");
      console.error("Error fetching topics:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="max-w-4xl bg-slate-100 mx-auto px-5 py-8 md:p-12 rounded-lg shadow-md mt-10">
        <h1 className="text-3xl mb-4 font-bold text-center text-gray-700">
          <span className="text-yellow-500">Topic </span>Analyzer
        </h1>
        <p className="text-center mb-7 text-lg text-gray-700">
          Uncover the hidden topics within your text. Simply enter your content
          and let our analyzer do the rest.
        </p>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text here..."
          rows="10"
          spellCheck="false"
          className="w-full h-64 p-4 border-2 border-gray-100 rounded-md resize-none outline-none shadow-md"
        />
        <div className="flex justify-center mt-7">
          <button
            onClick={handleAnalyze}
            className="py-2 px-4 bg-teal-500 text-white rounded text-lg hover:bg-teal-600"
            disabled={loading}
          >
            {loading ? <ClipLoader color="white" size={24} /> : "Analyze"}
          </button>
        </div>
        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
        {topics.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-yellow-500 mb-4">
              Analyzed Topics:
            </h2>
            <ul>
              {topics.map(({ topic, score }, index) => (
                <li key={index} className="border-b-2 py-2">
                  <span className="font-semibold text-gray-800">{topic}:</span>{" "}
                  <span className="text-teal-500 text-lg">
                    {score.toFixed(2)}
                  </span>{" "}
                  <span className="text-gray-500 text-sm">(Probability)</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
