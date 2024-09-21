"use client";

import { useState } from "react";

export default function DocumentSummerization({ summary, setSummary }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSummarizeDocument = async (e) => {
    setLoading(true);

    const file = e.target.files?.[0];
    if (!file) {
      setError("Please select a file.");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/summerizeDoc", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to summarize document");
      }

      const data = await response.json();
      setSummary(data.summary);
      // Process the response data as needed, e.g., set summaries
    } catch (error) {
      setError("An error occurred while fetching the summary.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <input
          className="ml-24"
          type="file"
          onChange={handleSummarizeDocument}
        />
      </div>
    </>
  );
}
