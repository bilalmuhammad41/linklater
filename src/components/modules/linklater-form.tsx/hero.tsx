import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    <div className="flex transition-all flex-col py-10 w-full md:h-[320px]  sm:h-[250px] h-[150px] items-center relative bg-primaryPink px-5">
      <div className="max-md:w-[500px] max-sm:w-[300px] max-xs:w-[150px]">
        <Image
          src={"/images/hero-gif.gif"}
          height={180}
          width={790}
          alt="linklater-gif"
          unoptimized
        />
      </div>
      <div className="bg-primaryBlue text-white md:translate-y-[120%] sm:translate-y-[90%] translate-y-[90%] absolute md:w-[750px] sm:w-[450px] max-sm:max-w-[300px] w-[70%]  md:rounded-[40px] rounded-[20px] flex sm:py-8 py-5 md:px-10 px-3 justify-center text-center">
        <h2 className="lg:text-[35px] md:text-[35px] sm:text-[25px] text-[14px] font-[700] font-oswald uppercase max-w-[950px] lg:leading-[2.3rem] md:leading-[2.3rem] sm:leading-[1.8rem] leading-[1rem]">
          Introducing the world’s first Richard Linklater-based way to ask your
          friends to hangout.
        </h2>
      </div>
    </div>
  );
}

export default HeroSection;
