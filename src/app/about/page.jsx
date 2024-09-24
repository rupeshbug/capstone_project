import Head from "next/head";
import { CheckCircle } from "lucide-react";

const AboutPage = () => {
  return (
    <div>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about our platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-5 md:px-32 py-12 md:py-15 bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 md:leading-tight tracking-wider">
            Your <span className="text-teal-500">Journey</span> to Better{" "}
            <span className="text-yellow-500">Document Analysis</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            We are dedicated to transforming the way you interact with data. Our
            platform simplifies the complexities of data analysis by providing
            intuitive tools and features that make the process not only more
            efficient but also more insightful, regardless of your level of
            expertise.
          </p>
        </section>

        {/* How It Works Section */}
        <section className="md:flex md:items-center justify-between mb-24">
          <div className="md:w-2/5 mb-8 md:mb-0">
            <img
              src="/about-image.jpeg"
              alt="Data Analysis in Action"
              className="rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              How Our Platform Works
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Our platform is designed to simplify the analysis of large text
              datasets, whether you need to summarize, explore topics, or
              visualize data. Here's how it works:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span>
                  <CheckCircle className="text-teal-500 w-6 h-6 mr-3 mt-1" />
                </span>
                <span className="text-gray-600 text-lg">
                  <strong>Text Summarization:</strong> Upload your documents or
                  input text to quickly summarize large datasets and gain
                  actionable insights.
                </span>
              </li>
              <li className="flex items-start">
                <span>
                  <CheckCircle className="text-teal-500 w-6 h-6 mr-3 mt-1" />
                </span>
                <span className="text-gray-600 text-lg">
                  <strong>Topic Analyzer:</strong> Discover underlying themes
                  and topics within your text to better understand the content's
                  structure.
                </span>
              </li>
              <li className="flex items-start">
                <span>
                  <CheckCircle className="text-teal-500 w-6 h-6 mr-3 mt-1" />
                </span>
                <span className="text-gray-600 text-lg">
                  <strong>Automated Visualization:</strong> Transform your data
                  into visually appealing charts and graphs that highlight key
                  insights and trends.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Results Section */}
        <section className="bg-slate-200 shadow-lg rounded-lg p-8 text-center transform transition-transform duration-500 hover:scale-105">
          <h2 className="text-4xl font-bold text-gray-700 mb-6">
            See Your <span className="text-yellow-500">Results</span> Statistics
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            We keep track of your progress and provide detailed reports to help
            you stay informed and motivated.
          </p>
          <div className="text-teal-500 text-6xl font-bold animate-pulse">
            +10
          </div>
          <p className="text-gray-600 text-lg mt-4">
            Data insights generated across multiple projects
          </p>
        </section>

        {/* Team Section */}
        <section className="mt-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Behind the Project: Our{" "}
            <span className="text-yellow-500">Capstone</span> Journey
          </h2>
          <div className="text-center text-gray-600 text-lg">
            This project was developed as part of the Capstone project for our
            university, where a team of five members collaborated to bring this
            platform to life. Our diverse backgrounds in data science, software
            development, and UX/UI design enabled us to create a user-centric
            tool that simplifies the complexities of text analysis.
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
