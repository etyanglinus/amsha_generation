"use client";  

import { useState, useEffect } from "react";
import styles from './../styles/Hero.module.css';

const Hero = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const successStories = [
    {
      name: "John Doe",
      caption: "Saved 10% of my income and paid off my student loans in 2 years.",
      image: "/images/john.jpg", // Replace with your image path
    },
    {
      name: "Jane Smith",
      caption: "Achieved financial freedom through strategic savings.",
      image: "/images/jane.jpg",
    },
    {
      name: "Michael Lee",
      caption: "Used Amsha Generation to reduce my debt and plan my future.",
      image: "/images/michael.jpg",
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
    <section className="hero bg-white py-12">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side: Mission Statement */}
        <div className="text-left">
          <h1 className="text-4xl font-bold mb-4 text-royal-blue">
            Empowering Students to Save for a Secure Financial Future
          </h1>
          <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition">
            Get Started
          </button>
        </div>

        {/* Right Side: Success Stories Slideshow */}
        <div className="slideshow w-1/2">
          <div className="success-story text-center">
            <img
              src={successStories[currentStory].image}
              alt={successStories[currentStory].name}
              className="rounded-full w-24 h-24 mx-auto mb-4"
            />
            <p className="text-lg font-semibold">
              {successStories[currentStory].name}
            </p>
            <p className="text-gray-500 italic">
              "{successStories[currentStory].caption}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
