"use client";
import React from "react";
import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Sign Up or Log In",
      description:
        "Create an account or log in to access the full features of our platform.",
      imageSrc: "img.png",
      altText: "User signing up or logging in",
    },
    {
      number: "02",
      title: "Go to Features Page",
      description:
        "Navigate to the features page where you can explore all the tools available.",
      imageSrc: "summarizeNoBG.png",
      altText: "Features page overview",
    },
    {
      number: "03",
      title: "Select a Feature",
      description:
        "Choose the feature you want to use, such as summarization, topic modeling, or visualization.",
      imageSrc: "tmNoBg.png",
      altText: "User selecting a feature",
    },
    {
      number: "04",
      title: "Get Results",
      description:
        "Receive your processed document with insights and visualizations ready for use.",
      imageSrc: "autoVizNoBg.png",
      altText: "Displayed results after processing",
    },
  ];

  // Sequential floating animation
  const useFloatingAnimation = (index) => {
    return useSpring({
      loop: true,
      from: { transform: "translateY(0)" },
      to: async (next) => {
        while (true) {
          await next({ transform: "translateY(-25px)" });
          await next({ transform: "translateY(0)" });
        }
      },
      config: { ...config.slow, duration: 3000 },
      reset: true,
      delay: index * 600, // Delay for sequential effect
    });
  };

  return (
    <section className="py-12 md:py-16 px-5 lg:px-32">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-20">
        How It <span className="text-yellow-500">Works</span>
      </h2>
      <div className="relative flex flex-col lg:flex-row items-center justify-between">
        {steps.map((step, index) => {
          const { ref, inView } = useInView({ triggerOnce: true });
          const animationProps = useSpring({
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(50px)",
          });

          const floatingProps = useFloatingAnimation(index);

          return (
            <div
              key={index}
              className="p-2 relative flex flex-col items-center text-center max-w-xs mb-10 lg:mb-0"
            >
              <animated.div
                style={{
                  ...animationProps,
                  ...(index < steps.length ? floatingProps : {}),
                }}
                ref={ref}
              >
                <img
                  className={`w-28 h-28 mb-4`}
                  src={step.imageSrc}
                  alt={step.altText}
                />
                <h3 className="text-3xl font-bold text-teal-600 mb-2">
                  {step.number}
                </h3>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-600">{step.description}</p>
              </animated.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorksSection;
