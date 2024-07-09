import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    <div className="flex transition-all flex-col py-10 w-full lg:h-[412px] md:h-[300px] sm:h-[250px] h-[150px] items-center relative bg-primaryPink px-5">
      <div className="max-md:w-[500px] max-sm:w-[300px] max-xs:w-[150px]">
        <Image
          src={"/images/hero-gif.gif"}
          height={180}
          width={790}
          alt="linklater-gif"
          unoptimized
        />
      </div>
      <div className="bg-primaryBlue lg:translate-y-[90%] md:translate-y-[90%] sm:translate-y-[70%] translate-y-[65%] absolute w-[90%] max-w-[1260px] sm:rounded-[57px] rounded-[20px] flex sm:py-10 py-5 md:px-10 px-3 justify-center text-center">
        <h2 className="lg:text-[65px] md:text-[45px] sm:text-[35px] text-[20px] font-[700] font-oswald uppercase max-w-[950px] lg:leading-[4.2rem] md:leading-[3rem] sm:leading-[2.3rem] leading-[1.4rem]">
          Introducing the world’s first Richard Linklater-based way to ask your
          friends to hangout.
        </h2>
      </div>
    </div>
  );
}

export default HeroSection;
