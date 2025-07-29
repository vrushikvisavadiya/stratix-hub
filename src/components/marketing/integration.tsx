"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Container from "../global/container";
import Icons from "../global/icons";
import { Button } from "../ui/button";
import { useState } from "react";
import { cn } from "@/lib";
import Ripple from "../ui/ripple";

const SOCIAL_PLATFORMS = [
  {
    icon: Icons.linkedin,
    name: "LinkedIn",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    icon: Icons.tiktok,
    name: "TikTok",
    gradient: "from-black to-gray-800",
  },
  {
    icon: Icons.insta,
    name: "Instagram",
    gradient: "from-pink-500 to-yellow-500",
  },
  {
    icon: Icons.youtube,
    name: "YouTube",
    gradient: "from-red-500 to-red-700",
  },
  {
    icon: Icons.x,
    name: "X",
    gradient: "from-gray-500 to-black",
  },
];

// const DESKTOP_POSITIONS = [
//   "-translate-x-[300px] translate-y-0", // far left
//   "-translate-x-[150px] translate-y-[-20px]", // left
//   "translate-x-0 translate-y-0", // center
//   "translate-x-[150px] translate-y-[-20px]", // right
//   "translate-x-[300px] translate-y-0", // far right
// ];
const DESKTOP_POSITIONS = [
  "translate-x-0 translate-y-0", // center
  "-translate-x-[300px] -translate-y-[0px]", // far left
  "-translate-x-[150px] -translate-y-[0px]", // left
  "translate-x-[150px] -translate-y-[0px]", // right
  "translate-x-[300px] -translate-y-[0px]", // far right
];

const Integration = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mobile slider instance
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 1,
      spacing: 16,
    },
    mode: "snap",
  });

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    if (window.innerWidth < 1024) {
      instanceRef.current?.moveToIdx(index);
    }
  };

  const prevSlide = () => {
    const newIndex =
      (currentSlide - 1 + SOCIAL_PLATFORMS.length) % SOCIAL_PLATFORMS.length;
    goToSlide(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % SOCIAL_PLATFORMS.length;
    goToSlide(newIndex);
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full py-20">
      <Container className="relative">
        {/* Mobile View */}
        <div className="relative flex flex-col lg:hidden items-center justify-center">
          <div className="absolute top-1/2 -translate-y-1/2 right-1/4 w-3/5 h-14 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full -rotate-12 blur-[6.5rem] -z-10" />

          {/* Mobile Carousel */}
          <div className="relative w-full max-w-sm mx-auto mb-8">
            <div ref={sliderRef} className="keen-slider">
              {SOCIAL_PLATFORMS.map((platform, index) => (
                <div key={index} className="keen-slider__slide">
                  <div className="flex flex-col items-center justify-center p-8 h-64">
                    <div className="w-20 h-20 p-6 rounded-full flex items-center justify-center bg-gradient-to-b from-foreground/5 to-transparent shadow-xl shadow-black/10 backdrop-blur-lg mb-4 transition-transform duration-300 hover:scale-110">
                      <platform.icon className="w-10 h-10 text-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-center text-foreground">
                      {platform.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors z-10"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors z-10"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {SOCIAL_PLATFORMS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors",
                    index === currentSlide ? "bg-white" : "bg-white/30"
                  )}
                />
              ))}
            </div>
          </div>

          <div className="max-w-sm w-full h-auto mx-auto hidden">
            <Image
              src="/images/integration.svg"
              alt="Integration"
              width={1000}
              height={1000}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </Container>

      {/* Title */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto lg:absolute lg:top-1/4 inset-x-0 mt-12 lg:mt-0 px-4">
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-heading font-semibold leading-tight text-foreground">
          Social Media Integration
        </h2>
      </div>

      {/* CTA Button */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto lg:absolute lg:bottom-1/4 inset-x-0 z-20 mt-8 lg:mt-0">
        <Link href="#" passHref>
          <Button size="lg" asChild>
            <a className="flex items-center space-x-2">
              <span>See all Integrations</span>
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </Button>
        </Link>
      </div>

      {/* Desktop View */}
      <Container delay={0.3}>
        <div className="relative hidden lg:flex flex-col items-center justify-center overflow-visible">
          {/* Dynamic Background Glow */}
          <div
            className={cn(
              "absolute top-1/2 -translate-y-1/2 right-1/4 w-3/5 h-14 rounded-full -rotate-12 blur-[6.5rem] -z-10 transition-all duration-500 bg-gradient-to-r",
              SOCIAL_PLATFORMS[currentSlide]?.gradient ??
                "from-purple-400 to-indigo-600"
            )}
          />

          {/* Ripple Effect */}
          <div className="relative flex h-[80vh] w-full flex-col items-center justify-center">
            <Ripple />

            {/* Icons positioned relative to ripple container */}
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              {SOCIAL_PLATFORMS.map((platform, index) => {
                const relativeIndex =
                  (index - currentSlide + SOCIAL_PLATFORMS.length) %
                  SOCIAL_PLATFORMS.length;
                const isCenter = relativeIndex === 0;
                const positionClass =
                  DESKTOP_POSITIONS[relativeIndex] ?? DESKTOP_POSITIONS[0];

                return (
                  <div
                    key={index}
                    className={cn(
                      "absolute top-[43%] left-[46%]   cursor-pointer transition-all duration-700",
                      positionClass
                    )}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to ${platform.name}`}
                  >
                    <div
                      className={cn(
                        "rounded-full flex items-center justify-center bg-gradient-to-b from-foreground/5 to-transparent shadow-xl backdrop-blur-lg transition-transform duration-500 hover:scale-110",
                        isCenter
                          ? "size-24 p-6 from-foreground/10 shadow-2xl shadow-black/20"
                          : "size-16 p-3 opacity-60 hover:opacity-100"
                      )}
                    >
                      <platform.icon
                        className={cn(
                          "text-foreground transition-all duration-700",
                          isCenter ? "size-12" : "size-6"
                        )}
                      />
                    </div>

                    {isCenter && (
                      <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none">
                        <span className="text-lg font-semibold text-white select-none">
                          {platform.name}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Desktop Navigation Controls */}
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="absolute left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors z-30"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="absolute right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors z-30"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>

            {/* Desktop Dots Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
              {SOCIAL_PLATFORMS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    index === currentSlide
                      ? "bg-white scale-125"
                      : "bg-white/30 hover:bg-white/50"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Integration;
