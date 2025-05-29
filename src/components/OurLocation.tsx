"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/navigation";
import Container from "./Container";
import { locationData } from "@/data/location";
import { TbLocationFilled } from "react-icons/tb";
import Image from "next/image";
import { BsClockFill, BsPhoneFill, BsTelephoneFill } from "react-icons/bs";

const handleWhatsAppRedirect = (linkWhatsapp: string) => {
  window.open(linkWhatsapp, "_blank");
};

const OurLocation: React.FC = () => {
  let globalCounter = 0;
  const regionsWithOffsets = locationData.data.map((region) => {
    const currentOffset = globalCounter;
    globalCounter += region.data.length;
    return {
      ...region,
      offset: currentOffset,
    };
  });

  return (
    <section id="ourlocation" className="py-20 bg-primary-50">
      <div className="h-full w-full z-10 mx-auto pb-20">
        <div className="hidden md:flex h-full flex-col items-center justify-center text-white text-center px-5 max-w-6xl mx-auto">
          <p className="font-bold text-primary-600 text-base">
            {locationData.badge}
          </p>
          <h2 className="text-2xl md:text-4xl md:leading-tight font-bold mb-4 text-primary my-2">
            {locationData.heading}
          </h2>

          <p className="mx-auto md:px-5 text-primary font-body text-sm md:text-base">
            {locationData.subHeading}
          </p>
        </div>

        <Container className="flex flex-col gap-4 md:hidden items-center">
          <p className="font-bold text-primary-600 text-base">
            {locationData.badge}
          </p>

          <div className="h-full w-full bg-price rounded-t-lg rounded-b-[32px]">
            <div className="h-full flex flex-col items-center justify-center text-white text-center p-4">
              <h2 className="text-2xl md:text-4xl md:leading-tight font-bold text-white">
                {locationData.heading}
              </h2>
            </div>
          </div>

          <p className="mx-auto md:px-5 text-primary font-body text-base text-center mt-2">
            {locationData.subHeading}
          </p>
        </Container>
      </div>
      <Container className="relative">
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4">
          {regionsWithOffsets.flatMap((region, regionIndex) => [
            // Title untuk mobile
            <div
              key={`title-${regionIndex}`}
              className="block md:hidden col-span-full"
            >
              <h2
                className={`text-2xl text-center font-bold ${
                  regionIndex === 0 ? "mb-4" : "mt-20 mb-4"
                }`}
              >
                {region.area}
              </h2>
            </div>,

            ...region.data.map((outlet, outletIndex) => {
              const globalIndex = region.offset + outletIndex;

              return (
                <div
                  key={`${regionIndex}-${outletIndex}`}
                  className={
                    region.data.length === 1
                      ? "sm:col-span-1 col-span-2 mx-auto w-[250px] sm:w-full"
                      : ""
                  }
                >
                  <LocationCard
                    location={outlet}
                    globalIndex={globalIndex}
                    localIndex={outletIndex}
                  />
                </div>
              );
            }),
          ])}
        </div>
      </Container>
    </section>
  );
};

export default OurLocation;

const LocationCard = ({
  location,
  globalIndex,
  localIndex,
}: {
  location: {
    title: string;
    mapEmbed: string;
    address: string;
    phone: string;
    whatsapp: string;
    hours: string;
    linkWhatsapp: string;
  };
  globalIndex: number;
  localIndex: number;
}) => {
  return (
    <div className="relative bg-white rounded-lg border border-primary-200 w-full flex flex-col h-full">
      <iframe
        src={location.mapEmbed}
        width="100%"
        height="200"
        style={{ border: 0 }}
        loading="lazy"
        className="rounded-md"
      ></iframe>
      <div className="absolute top-[200px] right-3 transform -translate-y-1/2 text-primary-950 text-xl sm:text-2xl md:text-3xl border-4 md:border-[5px] border-white rounded-full h-[50px] w-[50px] sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary-200 font-bold flex items-center justify-center">
        <span className="hidden md:inline">{globalIndex + 1}</span>
        <span className="md:hidden">{localIndex + 1}</span>
      </div>
      <div className="flex flex-col gap-3 p-3 md:p-4 mt-3 md:mt-5 font-body flex-grow">
        <h3 className="text-base md:text-xl font-bold">{location.title}</h3>
        <p className="font-normal text-secondary text-xs sm:text-sm md:text-base">
          {location.address}
        </p>
        <div className="flex flex-col">
          <p className="font-normal text-secondary text-xs md:text-sm flex items-center gap-2">
            <BsTelephoneFill />
            <span>{location.phone}</span>
          </p>
          <div className="flex items-center justify-between w-full">
            <p className="font-normal text-secondary text-xs md:text-sm flex items-center gap-2">
              <BsPhoneFill />
              <span>{location.whatsapp}</span>
            </p>
            <Image
              src="/images/icons/ic-whatsapp.png"
              alt="icons"
              width={50}
              height={50}
              className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 cursor-pointer"
              onClick={() => handleWhatsAppRedirect(location.linkWhatsapp)}
            />
          </div>
          <p className="font-normal text-secondary text-xs md:text-sm flex items-center gap-2">
            <BsClockFill />
            <span>{location.hours}</span>
          </p>
          <p className="font-bold text-white bg-secondary-800 text-xs md:text-sm px-2 py-1 rounded-lg w-fit my-3">
            <span>Buka Setiap Hari</span>
          </p>
        </div>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
            location.address
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full mt-auto"
        >
          <div className="bg-primary-950 py-2 px-4 rounded-full w-full text-center flex items-center justify-center gap-2">
            <span className="text-xs sm:text-sm text-white">Menuju Lokasi</span>
            <TbLocationFilled className="text-white  text-sm md:text-base" />
          </div>
        </a>
      </div>
    </div>
  );
};
