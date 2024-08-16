"use client";

import { useState } from "react";
import Navbar from "./Navbar";

async function fetchTopics(text) {
  const response = await fetch("http://127.0.0.1:5000/analyze-text", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

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

  const handleAnalyze = async () => {
    setError("");
    try {
      const result = await fetchTopics(text);
      setTopics(result);
    } catch (error) {
      setError("An error occurred while analyzing the text.");
      console.error("Error fetching topics:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl bg-slate-100 mx-auto px-5 py-8 md:p-12 rounded-lg shadow-md mt-10">
        <h1 className="text-3xl mb-7 font-bold text-center text-yellow-500">
          Topic Analyzer
        </h1>
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
          >
            Analyze
          </button>
        </div>
        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
        {topics.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-yellow-500 mb-4">
              Analyzed Topics:
            </h2>
            <ul>
              {topics.map(([topic, probability], index) => (
                <li key={index} className="border-b-2 py-2">
                  <span className="font-semibold text-gray-800">{topic}:</span>{" "}
                  <span className="text-teal-500 text-lg">
                    {probability.toFixed(2)}
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
