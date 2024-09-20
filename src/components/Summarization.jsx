"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import { ClipLoader } from "react-spinners";

export default function Summarization() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const summarizeText = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/summerizeText", {
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

  const summerizeDocument = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/summerizeDocument", {
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

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("document", file);

    setUploading(true);
    setMessage("");

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const result = await response.json();
      setMessage(`Upload successful: ${result.message}`);
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setUploading(false);
      setFile(null);
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      console.log("Uploaded file:", selectedFile);
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
            onClick={summarizeText}
            disabled={loading}
          >
            {loading ? <ClipLoader color="white" size={24} /> : "Summarize"}
          </button>

          <input onChange={handleFileChange} type="file" />

          {error && <p className="text-red-500 mt-4">{error}</p>}

          {summary && (
            <div className="bg-gray-100 border-2 border-gray-300 rounded-md mt-7 px-4 py-7 w-full">
              <h2 className="text-xl mb-3 font-semibold">Summary:</h2>
              <p>{summary}</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
