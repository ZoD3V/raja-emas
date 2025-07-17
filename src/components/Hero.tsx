import React from "react";
import Image from "next/image";
import { heroDetails } from "@/data/hero";
import Container from "./Container";
import HubungiKamiButton from "./Common/HubungiKamiButton";
import LihatTokoButton from "./Common/LihatTokoButton";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center pb-24 lg:pt-32 h-auto lg:h-[1080px] xl:h-[1280px] px-4"
    >
      <div className="absolute left-0 top-0 bottom-0 w-full">
        <Image
          src={heroDetails.bgFuturistic}
          width={1920}
          height={1080}
          quality={100}
          priority
          alt="Background"
          className="w-full h-full"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <Container className="h-full pt-24 md:pt-36 lg:pt-0 !px-0 relative">
        <div className="text-start flex flex-col items-center h-full w-full gap-10 xl:gap-16">
          <Image
            src={heroDetails.centerImageSrc}
            width={630}
            height={630}
            quality={100}
            priority={true}
            unoptimized={true}
            alt="app mockup"
            className="relative lg:mx-auto z-10 self-center max-w-7xl w-full rounded-3xl h-auto lg:mt-4"
          />
          <div className="flex flex-col items-center md:items-start w-full text-white">
            <p className="text-center md:text-start max-w-lg text-xs md:text-sm font-medium px-2.5 py-1.5 bg-gradient-gold uppercase rounded-md text-primary-950 font-body hidden md:block">
              {heroDetails.subheading}
            </p>
            <h1 className="text-center md:text-start text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mt-2 text-primary-950">
              {heroDetails.heading}
            </h1>
            <p className="text-center md:text-start mt-6 text-base md:text-lg font-body text-secondary">
              {heroDetails.description}
            </p>

            <div className="flex items-center gap-4 mt-5 w-full justify-center px-5">
              <div className="w-1/2">
                <HubungiKamiButton customWidth="w-full" />
              </div>
              <div className="w-1/2">
                <LihatTokoButton customWidth="w-full" />
              </div>
            </div>

            <p className="mt-20 text-center md:text-start max-w-lg text-2xl font-bold px-2.5 py-1.5 rounded-md text-primary-950 block md:hidden">
              {heroDetails.headline}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
