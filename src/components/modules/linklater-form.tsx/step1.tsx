import React from "react";
import SelectImage from "./select-image";
import Image from "next/image";

function Step1Section() {
  return (
    <div className="flex flex-col w-full lg:gap-20 gap-10 font-oswald uppercase bg-[url(/images/dotted-line-2.svg)]  bg-right-top bg-no-repeat bg-contain">
      <div className="w-full flex flex-col items-center gap-5 text-center px-5">
        <span className="px-8 py-1 rounded-full bg-primaryPink">
          <h3 className="md:text-[30px] text-[20px] font-[700] text-black">
            Step 1
          </h3>
        </span>
        <p className="md:text-[43px] sm:text-[35px] text-[30px] max-sm:leading-10 font-[Inter] text-primaryBlue font-extrabold">
          Select a photo of Richard Linklater.
        </p>
      </div>
      <SelectImage />
    </div>
  );
}

export default Step1Section;
