import { aboutDetails } from "@/data/about";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section id="stats" className="py-20 hidden lg:block">
      <div className="grid lg:grid-cols-2 gap-10">
        <Image
          src={aboutDetails.image}
          alt=""
          className="w-full mx-auto lg:order-1 order-2 hidden md:block"
          width={500}
          height={500}
          quality={100}
        />
        <div className="flex flex-col justify-center order-1 lg:order-2">
          <h6 className="text-primary-500 font-bold">Tentang Kami</h6>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            {aboutDetails.heading}
          </h1>
          <div className="flex items-start gap-5 mt-4">
            <Image
              src={aboutDetails.commaImage}
              alt=""
              className="w-9"
              width={32}
              height={32}
              quality={100}
            />
            <p className="font-semibold">{aboutDetails.quote}</p>
          </div>
          <p className="font-normal mt-4 font-body">{aboutDetails.description}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
