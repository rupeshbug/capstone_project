import Image from "next/image";

// bg-gradient-to-r from-sky-950 to-cyan-700 in the section tag

function Hero() {
  return (
    <section className="flex justify-between items-center px-32 text-slate-800 py-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">Document Analysis Made Easy</h1>
        <p className="text-lg mb-8">
          Summarize, analyze, and visualize your documents effortlessly.
          Summarize, analyze, and visualize your documents effortlessly.
          Summarize, analyze, and visualize your documents effortlessly.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Try It Now
        </button>
      </div>
      <div>
        <Image
          src="/bgImg.jpeg"
          alt="Hero Image"
          width={800}
          height={400}
          className="rounded-lg"
        />
      </div>
    </section>
  );
}

export default Hero;
