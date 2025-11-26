"use client";

import React, { useState } from "react";
import Image from "next/image";
import Heading from "../ui/Heading";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="hero min-h-[600px] bg-base-200 relative">
      <Image
        src="/images/truck_bishop.webp"
        alt="Service truck background"
        fill
        className={`object-cover transition-opacity duration-1000 ease-out ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        priority
        onLoad={() => setLoaded(true)}
      />

      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="hero-content text-center relative z-10">
        <div className="max-w-4xl">
          <div className="mock-component mb-6 bg-black/25 border-white rounded-b-md">
            <Heading
              variant="black"
              as="h1"
              className="text-5xl font-bold text-white"
            >
              Mississippi's Most Trusted Storm Drain Experts
            </Heading>
          </div>

          <div className="mock-component mb-8 bg-black/25 border-white">
            <p className="text-xl text-white font-medium drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)]">
              Expert storm drain cleaning, repair, and inspection services
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+16019325838" className="btn btn-primary btn-lg">
              CALL NOW
            </a>

            <a href="#contact" className="btn btn-outline btn-lg">
              CONTACT US
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
