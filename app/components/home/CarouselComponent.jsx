"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Heading from "../ui/Heading";

export default function CarouselComponent() {
  const carouselRef = useRef(null);

  const images = [
    {
      src: "/images/carousel_image_1.webp",
      alt: "Storm drain project 1",
    },
    {
      src: "/images/carousel_image_2.webp",
      alt: "Storm drain project 2",
    },
    {
      src: "/images/carousel_image_3.webp",
      alt: "Storm drain project 3",
    },
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollAmount = 0;
    const scrollStep = 1; // Pixels to scroll each frame
    const scrollDelay = 30; // Milliseconds between scrolls

    const autoScroll = setInterval(() => {
      scrollAmount += scrollStep;
      carousel.scrollLeft = scrollAmount;

      // Reset to beginning when reaching the end
      if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
        scrollAmount = 0;
      }
    }, scrollDelay);

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Heading as="h2" className="text-3xl sm:text-5xl font-bold mb-4">
            Our Work
          </Heading>
          <p className="text-lg sm:text-2xl">
            See Our Recent Storm Drain Projects
          </p>
        </div>

        {/* Centered Horizontal Scroll Carousel */}
        <div className="flex justify-center">
          <div 
            ref={carouselRef}
            className="carousel rounded-box max-w-6xl w-full gap-4 p-4 bg-base-300"
          >
            {images.map((image, index) => (
              <div key={index} className="carousel-item">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="rounded-box h-96 w-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}