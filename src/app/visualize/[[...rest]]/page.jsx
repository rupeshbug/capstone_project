import Head from "next/head";
import Visualization from "../../../components/Visualization";
import { SignedIn, SignedOut, SignIn } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Automated Visualization</title>
        <meta
          name="description"
          content="Automated EDA and visualization using Sweetviz library"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignedIn>
        <main className="p-4">
          <Visualization />
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
