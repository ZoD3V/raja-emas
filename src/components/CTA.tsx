import { ctaDetails } from "@/data/cta";
import Image from "next/image";

const CTA: React.FC = () => {
  return (
    <section
      id="cta"
      className="relative bg-primary-950 rounded-2xl"
    >
      <div className="absolute left-0 top-0 bottom-0 z-10 w-full">
        <Image
          src={ctaDetails.bgFuturistic}
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
      <div className="relative h-full w-full z-10 mx-auto px-5 lg:px-12 py-10 lg:py-12">
        <div className="h-full w-full flex flex-col md:flex-row items-center gap-4">
          <Image
            src={ctaDetails.certificateGold}
            alt="cert"
            width={45}
            height={45}
            className="w-[235px] h-[197px]"
          ></Image>

          <div className="h-full flex flex-col items-center md:items-start text-sm md:text-base justify-center text-white text-center max-w-6xl mx-auto">
            <p className="font-bold mt-8 text-base">{ctaDetails.badge}</p>
            <h2 className="text-3xl lg:text-4xl md:leading-tight font-bold mb-4 text-gradient-gold mt-2 text-center md:text-start">
              {ctaDetails.heading}
            </h2>

            <p className="font-body text-center md:text-start">{ctaDetails.subheading}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
