import Head from "next/head";
import TopicAnalyzer from "../../components/TopicAnalyzer";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Summarization Feature</title>
        <meta
          name="description"
          content="Summarization feature using Google GenerativeAI"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-4">
        <TopicAnalyzer />
      </main>
    </div>
  );
}
