import React from "react";
import clsx from "clsx";

import Image from "next/image";
import { ctaSosmed } from "@/data/ctaSosmed";

const TiktokButton = () => {
  return (
    <a href={ctaSosmed.tiktokUrl} className="w-fit md:w-auto">
      <button
        type="button"
        className={clsx(
          "flex items-center justify-center lg:min-w-[250px] px-4 py-3 rounded-full w-full sm:w-fit bg-gradient-gold gap-2 lg:gap-3"
        )}
      >
        <Image
          src={ctaSosmed.tiktokIcon}
          width={35}
          height={35}
          alt="icons"
          className="w-9 h-9 md:w-10 md:h-10"
        />
        <div className="flex flex-col">
          <Image
            src={ctaSosmed.nameTiktokIcon}
            width={55}
            height={55}
            alt="icons"
          />
          <p className="font-bold text-sm sm:text-base lg:text-lg">@rajaemasindonesia_</p>
        </div>
      </button>
    </a>
  );
};

export default TiktokButton;
