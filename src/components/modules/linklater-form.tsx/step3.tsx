import React from "react";
import SelectImage from "./select-image";
import Image from "next/image";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

function Step3Section() {
  return (
    <div className="flex w-full flex-col md:gap-20 gap-10 font-oswald items-center uppercase bg-[url(/images/dotted-line-2.svg)]  bg-right-bottom bg-no-repeat bg-contain relative px-5">
      <Image
        className={"left-[-100px] max-w-[400px] top-[-100px]  absolute z-[0]"}
        src={"/images/dotted-line.svg"}
        width={1360}
        height={960}
        alt={"dotted-line"}
      />
      <div className="w-full flex flex-col items-center gap-5 text-center px-5">
        <span className="px-8 py-1 rounded-full bg-primaryPink">
          <h3 className="md:text-[30px] text-[20px] font-[700] text-black">
            Step 3
          </h3>
        </span>
        <p className="md:text-[43px] sm:text-[35px] text-[25px] max-sm:leading-7 font-[Inter] text-primaryBlue font-extrabold">
          Enter your friend&apos;s phone number.
        </p>
      </div>
      <Input
        placeholder="Enter phone number..."
        style={{ color: "#000" }}
        className="placeholder:text-[18px] rounded-none font-[Inter] max-w-[718px] px-5 sm:py-3 py-1 bg-white group-data-[focus-visible=true]:bg-white border-1 border-black"
        classNames={{
          inputWrapper:
            "bg-white group-data-[focus-visible=true]:bg-white shadow-none rounded-full p-0",
          input: "bg-white text-black",
        }}
      />
      <Button className="bg-primaryBlue font-[Inter] font-[700] text-white text-[26px] w-[250px] h-[85px]">
        Send Linklater
      </Button>
      <p className="md:text-[35px] text-center sm:text-[30px] text-[25px] normal-case max-sm:leading-10 font-[Inter] text-black font-extrabold">
        Your Linklater Has Been Sent!
      </p>

      <div className=" md:max-w-[427px] md:h-[780px] sm:h-[680px] h-[450px] sm:max-w-[400px] max-w-[350px] flex items-center justify-center relative ">
        <div className="bg-primaryPink w-[300px] rounded-full h-[300px] blur-[200px] absolute"></div>
        <Image
          src={"/images/phone.png"}
          width={427}
          height={756}
          alt="phone"
          quality={100}
          unoptimized
          className="md:max-w-[427px] sm:max-w-[350px] max-w-[250px] object-contain absolute"
        />
      </div>
    </div>
  );
}

export default Step3Section;
