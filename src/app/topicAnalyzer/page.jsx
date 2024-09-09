import Head from "next/head";
import TopicAnalyzer from "../../components/TopicAnalyzer";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Topic Analyzer</title>
        <meta name="description" content="Topic analysis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-4">
        <TopicAnalyzer />
      </main>
    </div>
  );
}
