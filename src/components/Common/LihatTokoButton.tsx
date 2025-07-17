import React from "react";
import clsx from "clsx";

import { ctaDetails } from "@/data/cta";

const LihatTokoButton = ({
  customClass = "border border-primary-950",
  customWidth = "w-full sm:w-fit",
}) => {
  return (
    <a href={ctaDetails.googlePlayUrl} className="w-full md:w-auto">
      <button
        type="button"
        className={clsx(
          `flex items-center justify-center min-w-full lg:min-w-[205px] px-6 py-2.5 bg-white rounded-full ${customWidth} cursor-pointer ${customClass}`
        )}
      >
        <div className="text-primary-950 font-bold text-base">Outlet Kami</div>
      </button>
    </a>
  );
};

export default LihatTokoButton;
