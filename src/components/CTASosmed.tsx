import { ctaSosmed } from "@/data/ctaSosmed";
import Image from "next/image";
import Container from "./Container";
import TiktokButton from "./Common/TiktokButton";
import InstagramButton from "./Common/InstagramButton";

const CTASosmed: React.FC = () => {
  return (
    <section id="ctaSosmed" className=" relative bg-primary-950">
      <div className="absolute left-0 top-0 bottom-0 z-10 w-full">
        <Image
          src={ctaSosmed.bgFuturistic}
          width={1920}
          height={1080}
          quality={100}
          priority={true}
          alt="Background"
          className="w-full h-full"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <Container>
        <div className="relative h-full w-full z-10 mx-auto py-20 grid md:grid-cols-3 gap-8">
          <div className="grid md:grid-cols-2 gap-4 col-span-2">
            <Image
              src={ctaSosmed.image}
              width={500}
              height={500}
              quality={100}
              priority={true}
              alt="Image"
              className="mx-auto w-[500px]"
            />
            <div className="flex flex-col gap-4 justify-center text-center md:text-start">
              <p className="font-bold text-primary-600 text-base">
                {ctaSosmed.badge}
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:leading-tight font-bold mb-4 text-white">
                {ctaSosmed.heading}
              </h2>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-5 col-span-2 md:col-auto">
            <TiktokButton />
            <InstagramButton />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASosmed;
