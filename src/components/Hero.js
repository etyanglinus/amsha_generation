"use client";

import Image from 'next/image'; // Import Image component from Next.js
import Link from 'next/link'; // Import Link component
import { useEffect, useState } from "react";
import styles from './../styles/Hero.module.css'; // Make sure you import the styles

const Hero = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const successStories = [
    {
      name: "John Doe",
      caption: "Saved 10% of my income and paid off my student loans in 2 years.",
      image: "https://vanwinefest.ca/wp-content/uploads/bfi_thumb/profile-default-male-nyg4vc4i3m1d5pote7rfsv4o4c7p5ka5an0pselxcc-nyhjt6b1oifa23xq2ehfxoh9vink6vuxyns1y35vkc.png",
    },
    {
      name: "Jane Smith",
      caption: "Achieved financial freedom through strategic savings.",
      image: "https://vanwinefest.ca/wp-content/uploads/bfi_thumb/profile-default-male-nyg4vc4i3m1d5pote7rfsv4o4c7p5ka5an0pselxcc-nyhjt6b1oifa23xq2ehfxoh9vink6vuxyns1y35vkc.png",
    },
    {
      name: "Michael Lee",
      caption: "Used Amsha Generation to reduce my debt and plan my future.",
      image: "https://vanwinefest.ca/wp-content/uploads/bfi_thumb/profile-default-male-nyg4vc4i3m1d5pote7rfsv4o4c7p5ka5an0pselxcc-nyhjt6b1oifa23xq2ehfxoh9vink6vuxyns1y35vkc.png",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStory((prevStory) =>
        prevStory === successStories.length - 1 ? 0 : prevStory + 1
      );
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval); // Clean up the interval
  }, [successStories.length]);

  return (
    <section className={`${styles.hero} hero py-12`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side: Mission Statement */}
        <div className="text-left">
          <h1 className="text-4xl font-bold mb-4 text-royal-blue">
            Empowering Students to Save for a Secure Financial Future
          </h1>
          <Link href="/get-started">
            <a className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition">
              Get Started
            </a>
          </Link>
        </div>

        {/* Right Side: Success Stories Slideshow */}
        <div className="slideshow w-1/2">
          <div className="success-story text-center">
            <Image
              src={successStories[currentStory].image}
              alt={successStories[currentStory].name}
              className="rounded-full w-24 h-24 mx-auto mb-4"
              width={96}
              height={96}
            />
            <p className="text-lg font-semibold">
              {successStories[currentStory].name}
            </p>
            <p className="text-gray-500 italic">
              &quot;{successStories[currentStory].caption}&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
