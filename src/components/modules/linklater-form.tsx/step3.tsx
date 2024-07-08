import React from "react";
import SelectImage from "./select-image";
import Image from "next/image";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

function Step3Section() {
  return (
    <div className="flex w-full flex-col gap-20 font-oswald items-center uppercase bg-[url(/images/dotted-line-2.svg)]  bg-right-bottom bg-no-repeat bg-contain relative px-5">
      <Image
        className={"left-[-100px] max-w-[400px] top-[-100px]  absolute z-[0]"}
        src={"/images/dotted-line.svg"}
        width={1360}
        height={960}
        alt={"dotted-line"}
      />
      <div className="w-full flex flex-col items-center gap-5 text-center px-5">
        <span className="px-8 py-1 rounded-full bg-primaryPink">
          <h3 className="text-[30px] font-[700] text-black">Step 3</h3>
        </span>
        <p className="md:text-[43px] smtext-[35px] text-[30px] max-sm:leading-10 font-[Inter] text-primaryBlue font-extrabold">
          Enter your friend phone number.
        </p>
      </div>
      <Input
        placeholder="Enter phone number..."
        style={{ color: "#000" }}
        className="placeholder:text-[18px] rounded-none font-[Inter] max-w-[718px] px-5 py-3 bg-white group-data-[focus-visible=true]:bg-white border-1 border-black"
        classNames={{
          inputWrapper:
            "bg-white group-data-[focus-visible=true]:bg-white shadow-none rounded-full p-0",
          input: "bg-white text-black",
        }}
      />
      <Button className="bg-primaryBlue font-[Inter] font-[700] text-white text-[26px] w-[250px] h-[85px]">
        Send Linklater
      </Button>

      <Image
        src={"/images/phone.png"}
        width={427}
        height={756}
        alt="phone"
        quality={100}
      />
    </div>
  );
}

export default Step3Section;
