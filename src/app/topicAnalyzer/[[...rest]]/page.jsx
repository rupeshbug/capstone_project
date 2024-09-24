import Head from "next/head";
import TopicAnalyzer from "../../../components/TopicAnalyzer";
import { SignedIn, SignedOut, SignIn } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Topic Analyzer</title>
        <meta name="description" content="Topic analysis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignedIn>
        <main className="p-4">
          <TopicAnalyzer />
        </main>
      </SignedIn>
      <SignedOut>
        <div className="flex items-center justify-center mt-12">
          <SignIn />
        </div>
      </SignedOut>
    </div>
  );
}
