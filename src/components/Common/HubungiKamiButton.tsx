import React from "react";
import clsx from "clsx";

import { ctaDetails } from "@/data/cta";

const HubungiKamiButton = ({
  customClass = "bg-primary-950",
  customWidth = "w-full sm:w-fit",
}) => {
  return (
    <a href={ctaDetails.appStoreUrl} className="w-full md:w-auto">
      <button
        type="button"
        className={clsx(
          `flex items-center justify-center min-w-full lg:min-w-[205px] px-6 py-2.5 rounded-full ${customWidth} ${customClass}`
        )}
      >
        <div className="font-bold text-base">Harga Hari Ini</div>
      </button>
    </a>
  );
};

export default HubungiKamiButton;
