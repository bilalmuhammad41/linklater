import Image from "next/image";
import React from "react";

function SelectImage() {
  return (
    <div className="flex md:gap-7 sm:gap-5 gap-3 flex-wrap justify-center">
      <div className="max-md:w-[200px] max-sm:w-[150px]">
        <Image
          src={"/images/select1.png"}
          width={263}
          height={232}
          alt="select1"
          className="rounded-xl"
        />
      </div>
      <div className="max-md:w-[200px] max-sm:w-[150px]">
        <Image
          src={"/images/select2.png"}
          width={263}
          height={232}
          alt="select1"
          className="rounded-xl"
        />
      </div>
      <div className="max-md:w-[200px] max-sm:w-[150px]">
        <Image
          src={"/images/select3.png"}
          width={263}
          height={232}
          alt="select1"
          className="rounded-xl"
        />
      </div>
      <div className="max-md:w-[200px] max-sm:w-[150px]">
        <Image
          src={"/images/select4.png"}
          width={263}
          height={232}
          alt="select1"
          className="rounded-xl"
        />
      </div>
      <div className="max-md:w-[200px] max-sm:w-[150px]">
        <Image
          src={"/images/select5.png"}
          width={263}
          height={232}
          alt="select1"
          className="rounded-xl"
        />
      </div>
    </div>
  );
}

export default SelectImage;
