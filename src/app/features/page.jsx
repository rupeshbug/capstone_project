import Head from "next/head";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import { FileCheck2, ChartNoAxesCombined, ScanEye } from "lucide-react";

const features = [
  {
    title: "Summarization",
    description:
      "Generate concise summaries of your text with our powerful summarization tool. Perfect for quickly understanding large amounts of content.",
    link: "/summarize",
    imageSrc: "/summarization.jpeg",
    altText: "Summarization feature",
    icon: <FileCheck2 className="text-yellow-500" size={40} />,
  },
  {
    title: "Topic Analyzer",
    description:
      "Identify and explore the main topics in your text with our topic analysis tool. Gain insights into the key themes and trends.",
    link: "/topicAnalyzer",
    imageSrc: "/topic.jpeg",
    altText: "Topic Analyzer feature",
    icon: <ScanEye className="text-yellow-500" size={40} />,
  },
  {
    title: "Automated EDA",
    description:
      "Upload your data to automatically generate insightful exploratory data analysis reports. Visualize key aspects of your data effortlessly.",
    link: "/visualize",
    imageSrc: "/eda.jpeg",
    altText: "Automated Visualization feature",
    icon: <ChartNoAxesCombined className="text-yellow-500" size={40} />,
  },
];

const FeaturesPage = () => {
  return (
    <div>
      <Head>
        <title>Features</title>
        <meta
          name="description"
          content="Explore the features of our platform"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="px-5 md:px-32 py-12 md:py-20">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Explore Our <span className="text-yellow-500">Features</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover the powerful tools we offer to enhance your data analysis
            experience.
          </p>
        </section>
        <section className="flex flex-col lg:flex-row lg:justify-center md:space-x-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-200 shadow-lg rounded-lg mb-12 lg:mb-0 lg:w-1/3 flex flex-col items-center"
            >
              <img
                src={feature.imageSrc}
                alt={feature.altText}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <div className="flex items-center justify-center space-x-1 mb-4">
                  {feature.icon}
                  <h2 className="text-2xl font-bold text-gray-600">
                    {feature.title}
                  </h2>
                </div>
                <p className="text-gray-600 text-lg mb-6">
                  {feature.description}
                </p>
                <Link href={feature.link}>
                  <div className="inline-block py-2 px-4 bg-teal-500 text-white rounded hover:bg-teal-600 transition cursor-pointer mb-4">
                    Try it Now
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default FeaturesPage;
