"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/navigation";
import Container from "./Container";
import { pricingGold } from "@/data/pricing";
import Image from "next/image";
import CurrentDate from "./Common/CurrentDateTime";
import { JewelryItem, LmCertificate } from "@/types";
import useSWR from "swr";

const Pricing = () => {
  const { jewelryData, lmData } = useParallelData();

  return (
    <section id="pricing" className="relative py-20">
      <div className="absolute left-0 top-0 bottom-0 w-full">
        <Image
          src={pricingGold.backgroundImage}
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
      <Container className="flex flex-col gap-10 lg:gap-12 px-0 z-10 relative">
        <div className="h-full w-full hidden md:block">
          <div className="h-full flex flex-col items-center justify-center text-white text-center">
            <h2 className="text-2xl sm:text:3xl md:text-4xl md:leading-tight font-bold text-primary">
              {pricingGold.heading}
            </h2>

            <CurrentDate />
          </div>
        </div>

        <div className="h-full w-full block md:hidden bg-price rounded-t-lg rounded-b-[32px]">
          <div className="h-full flex flex-col items-center justify-center text-white text-center p-4">
            <h2 className="text-2xl md:leading-tight font-bold text-white">
              {pricingGold.heading}
            </h2>

            <CurrentDate />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 w-full gap-5">
          {/* Table 1: Perhiasan, Batangan, dll */}
          <div className="col-span-2">
            <h2 className="text-2xl font-bold mb-5 text-center md:text-start">
              Harga 1 Gram Emas Perhiasan & Batangan
            </h2>
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-4 font-normal text-xs md:text-sm text-center font-table rounded-l-2xl bg-primary-950">
                    KADAR KARAT
                  </th>
                  <th className="px-4 py-4 font-normal text-xs md:text-sm text-center font-table rounded-r-2xl bg-primary-950">
                    HARGA PER GRAM
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="h-4"></tr>
                {jewelryData.map((item, index) => {
                  const isFirst = index === 0;
                  const isLast = index === jewelryData.length - 1;

                  return (
                    <tr key={index}>
                      <td
                        className={`px-4 py-4 text-center font-table bg-primary-100 text-sm md:text-base font-medium
            ${!isLast ? "border-b border-gray-300" : ""}
            ${isFirst ? "rounded-tl-2xl" : ""}
            ${isLast ? "rounded-bl-2xl" : ""}
          `}
                      >
                        {item.n}
                      </td>
                      <td
                        className={`px-4 py-4 text-center font-table bg-primary-100 text-sm md:text-base font-medium
            ${!isLast ? "border-b border-gray-300" : ""}
            ${isFirst ? "rounded-tr-2xl" : ""}
            ${isLast ? "rounded-br-2xl" : ""}
          `}
                      >
                        {item.harga}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Table 2: LM, Sertifikat, dll */}
          <div className="col-span-2 overflow-scroll md:overflow-auto">
            <h2 className="text-2xl font-bold mb-5 text-primary-950 text-center md:text-start">
              Harga Jual Emas Antam & Bersertifikat
            </h2>
            <table className="table-auto min-w-full border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-3 py-2 md:px-4 md:py-4 font-normal text-xs md:text-sm text-center font-table rounded-l-2xl bg-primary-950">
                    JENIS LOGAM MULIA (S)
                  </th>
                  <th className="px-4 py-4 font-normal text-xs md:text-sm text-center font-table rounded-r-2xl bg-primary-950">
                    HARGA PER GRAM
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="h-4"></tr>
                {lmData.map((item, index) => {
                  const isFirst = index === 0;
                  const isLast = index === pricingGold.data.length - 1;

                  return (
                    <tr key={index}>
                      <td
                        className={`align-middle px-4 py-2 font-table bg-primary-100 text-center ${
                          !isLast ? "border-b border-gray-300" : ""
                        } ${isFirst ? "rounded-tl-2xl" : ""} ${
                          isLast ? "rounded-bl-2xl" : ""
                        }`}
                      >
                        <div className="flex text-base flex-col items-center">
                          <p className="font-bold font-table text-sm md:text-base">
                            {item.jenis}
                          </p>
                          <div className="flex items-center font-table font-medium text-sm md:text-base">
                            {item.kadar && item.karat
                              ? `${item.kadar} - ${item.karat}`
                              : item.kadar || item.karat}
                          </div>
                        </div>
                      </td>

                      <td
                        className={`px-4 py-2 text-center font-table bg-primary-100 border-l-0 text-sm md:text-base ${
                          !isLast ? "border-b border-gray-300" : ""
                        } ${isFirst ? "rounded-tr-2xl" : ""} ${
                          isLast ? "rounded-br-2xl" : ""
                        }`}
                      >
                        {item.harga}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
};

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error(`Failed to fetch ${url}`);
    return res.json();
  });

export function useParallelData() {
  const {
    data: jewelryData,
    error: jewelryError,
    isLoading: isJewelryLoading,
  } = useSWR<JewelryItem[]>(
    "https://opensheet.elk.sh/12xpxRvvGDR5jo8MNrQdwlpu7eN8SA8otv4RAa5KMiRg/perhiasan",
    fetcher
  );

  const {
    data: lmData,
    error: lmError,
    isLoading: isLmLoading,
  } = useSWR<LmCertificate[]>(
    "https://opensheet.elk.sh/12xpxRvvGDR5jo8MNrQdwlpu7eN8SA8otv4RAa5KMiRg/lm",
    fetcher
  );

  return {
    jewelryData: jewelryData || [],
    lmData: lmData || [],
    isLoading: isJewelryLoading || isLmLoading,
    error: jewelryError || lmError,
  };
}

export default Pricing;
