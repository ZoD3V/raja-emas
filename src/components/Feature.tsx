import { featureData } from "@/data/feature";
import Image from "next/image";

const Feature: React.FC = () => {
  return (
    <section id="logos" className="pt-20 pb-6 bg-[#F7F2FA]/50">
      <div className="relative -mt-[140px] z-10 grid-cols-2 xl:grid-cols-4 gap-4 hidden md:grid">
        {featureData.map((feature, index) => (
          <div
            key={index}
            className="border border-slate-200 p-4 lg:p-6 rounded-2xl h-auto sm:h-[260px] lg:h-[300px] bg-white flex flex-col items-start lg:items-center gap-4 shadow-md"
          >
            {/* Image Container */}
            <div className="w-[60px] h-[60px] flex items-start justify-start">
              <Image
                src={feature.image}
                width={60}
                height={60}
                alt={feature.title}
                className="object-contain w-full h-full self-start"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-4 text-start lg:text-center">
              <h3 className="text-xl font-bold text-gray-800 ">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm font-body">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative -mt-[140px] z-10 grid grid-cols-2 xl:grid-cols-4 gap-4 md:hidden">
        {featureData.map((feature, index) => (
          <div
            key={index}
            className="border border-slate-200 p-4 lg:p-6 rounded-2xl h-auto bg-white flex flex-col items-start lg:items-center gap-4 shadow-md"
          >
            {/* Image Container */}
            <div className="w-[40px] h-[40px] flex items-start justify-start">
              <Image
                src={feature.image}
                width={40}
                height={40}
                alt={feature.title}
                className="object-contain w-full h-full self-start"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-2 text-start lg:text-center">
              <h3 className="text-base font-bold text-gray-800 ">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm font-body">
                {feature.descriptionMobile}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
