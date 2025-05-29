import { ctaHero } from "@/data/ctaHero";
import LihatTokoButton from "./Common/LihatTokoButton";
import HubungiKamiButton from "./Common/HubungiKamiButton";
import Image from "next/image";

const CTAHero: React.FC = () => {
  return (
    <section id="cta" className=" relative bg-primary-950">
      <div className="absolute left-0 top-0 bottom-0 z-10 w-full">
        <Image
          src={ctaHero.bgFuturistic}
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
      <div className="relative h-full w-full z-10 mx-auto py-20">
        <div className="h-full w-full">
          <div className="h-full flex flex-col items-center justify-center text-white text-center px-5 max-w-6xl mx-auto">
            <p className="font-bold text-primary-600 text-base">
              {ctaHero.badge}
            </p>
            <h2 className="text-3xl md:text-5xl md:leading-tight font-bold mb-4">
              {ctaHero.heading}
            </h2>

            <p className="mx-auto md:px-5 font-body">{ctaHero.subheading}</p>

            <div className="flex items-center gap-4 flex-col sm:flex-row mt-8 w-full md:w-auto">
              <LihatTokoButton customClass="bg-gradient-gold" />
              <HubungiKamiButton customClass="border border-white text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAHero;
