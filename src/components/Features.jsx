import React from "react";
import FeatureCard from "./FeatureCard";
import { Rocket, ChartBar, Layers } from "lucide-react";

const HomePage = () => {
  return (
    <div className="py-12 md:py-16 px-5 md:px-32">
      <h2 className="text-4xl tracking-wider mx-auto text-gray-800 font-semibold text-center mb-8">
        Our <span className="text-yellow-500">Features</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard
          icon={Rocket}
          title="Summarization"
          description="Leverage the power of Gemini LLM to generate accurate and concise summaries. Enhance your understanding with quick insights that streamline decision-making."
        />
        <FeatureCard
          icon={Layers}
          title="Topic Modeling"
          description="Discover hidden topics and trends within your documents using advanced topic modeling techniques. Uncover valuable insights to drive data-informed decisions."
        />
        <FeatureCard
          icon={ChartBar}
          title="Automated Visualization"
          description="Automatically generate insightful visualizations that simplify complex data patterns. Make your data stories more compelling and easier to communicate."
        />
      </div>
    </div>
  );
};

export default HomePage;
