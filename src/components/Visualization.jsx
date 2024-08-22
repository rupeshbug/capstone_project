"use client";

import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { ClipLoader } from "react-spinners";

export default function Visualization() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [reportHtml, setReportHtml] = useState("");
  const [loading, setLoading] = useState(false);

  const [currentWord, setCurrentWord] = useState("EDA");

  useEffect(() => {
    const words = ["EDA", "Visualization"];
    let index = 0;

    const intervalId = setInterval(() => {
      index = (index + 1) % words.length;
      setCurrentWord(words[index]);
    }, 2000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    setError("");
    setReportHtml("");
    setLoading(true);

    if (!file) {
      setError("Please upload a CSV file.");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(
        "https://automated-visualization-api.onrender.com/generate-report",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const text = await response.text();
      setReportHtml(text);
    } catch (error) {
      setError("An error occurred while generating the report.");
      console.error("Error fetching report:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-5 py-8 md:p-12 mt-7 max-w-4xl">
        <h1 className="text-4xl mb-8 font-bold text-center text-gray-600">
          Automated <span className="text-yellow-500">{currentWord}</span>
        </h1>
        <p className="text-center mb-7 text-lg text-gray-700">
          Upload your CSV file to automatically generate an insightful
          exploratory data analysis report. The report will visualize the key
          aspects of your data, allowing you to easily identify trends and
          patterns.
        </p>
        <div className="flex flex-col items-center mt-7">
          <input
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            className="mb-4 p-4 border border-gray-300 rounded-md shadow-md cursor-pointer hover:border-teal-500"
          />
          <button
            onClick={handleUpload}
            className="mt-7 py-2 px-4 bg-teal-500 text-white rounded text-lg hover:bg-teal-600"
            disabled={loading}
          >
            {loading ? (
              <ClipLoader color="white" size={24} />
            ) : (
              "Generate Report"
            )}
          </button>
        </div>
        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        {reportHtml && (
          <div className="mt-8">
            <h2 className="text-3xl font-semibold mb-4 text-center text-yellow-500">
              Report
            </h2>
            <iframe
              srcDoc={reportHtml}
              style={{ width: "100%", height: "600px", border: "none" }}
              title="Sweetviz Report"
            />
            <div className="flex justify-center mt-4">
              <a
                href={`data:text/html;charset=utf-8,${encodeURIComponent(
                  reportHtml
                )}`}
                download="sweetviz_report.html"
                className="mt-7 py-2 px-4 bg-teal-500 text-white rounded text-lg hover:bg-teal-600"
              >
                Download Report
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
