import Head from "next/head";
import Visualization from "../../components/Visualization";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Automated Visualization</title>
        <meta
          name="description"
          content="Summarization feature using Google GenerativeAI"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-4">
        <Visualization />
      </main>
    </div>
  );
}
