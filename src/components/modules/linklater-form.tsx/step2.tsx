"use client";
import React from "react";
import { Tab, Tabs } from "@nextui-org/tabs";
import Image from "next/image";
import { Input } from "@nextui-org/input";

function Step2Section() {
  return (
    <div className="flex w-full flex-col items-center gap-5 font-oswald uppercase px-5">
      <div className="w-full flex flex-col items-center gap-5 text-center px-5">
        <span className="px-8 py-1 rounded-full bg-primaryPink">
          <h3 className="text-[30px] font-[700] text-black">Step 2</h3>
        </span>
        <p className="md:text-[43px] sm:text-[35px] text-[30px] max-sm:leading-10 font-[Inter] text-primaryBlue font-extrabold">
          what kind of link do you want to have?
        </p>
      </div>
      <Tabs
        variant="light"
        color="default"
        className="w-min flex-wrapfont-[Inter] bg-transparent"
        classNames={{
          // panel: "w-full",
          // base: "w-min",
          cursor:
            "rounded-full display-none group-data-[selected=true]:bg-[transparent] bg-transparent group-data-[selected=true]:shadow-none",
          tab: "w-min",
          tabList:
            "items-center w-full justify-center flex-wrap flex sm:h-[13rem] h-[8rem] md:gap-5 gap-x-5 max-sm:gap-x-2",
          tabContent:
            "flex group-data-[selected=true]:bg-primaryBlue group-data-[selected=true]:text-white group-data-[selected=true]:border-none font-gilroy md:text-[28px] max-sm:text-[12px] text-[16px] text-black font-[500] bg-white md:px-10 px-0 md:py-6 py-3 border border-[black] rounded-full ",
        }}
      >
        <Tab
          className="bg-white px-0 rounded-full"
          key={"1"}
          title={
            <div className="flex md:gap-5 gap-2 items-center w-[180px] max-sm:w-[130px] justify-center">
              <Image
                src={"/images/circle.svg"}
                width={28}
                height={28}
                alt={"circle"}
                className="group-data-[selected=true]:text-white max-sm:w-[16px]"
              />
              <h3>Link for a drink</h3>
            </div>
          }
        ></Tab>
        <Tab
          className="bg-white px-0 rounded-full"
          key={"2"}
          title={
            <div className="flex md:gap-5 gap-2 items-center w-[180px] max-sm:w-[130px] justify-center">
              <Image
                src={"/images/circle.svg"}
                width={28}
                height={28}
                alt={"circle"}
                className="max-sm:w-[16px]"
              />
              <h3>Link in the park</h3>
            </div>
          }
        ></Tab>
        <Tab
          className="bg-white px-0 rounded-full"
          key={"3"}
          title={
            <div className="flex md:gap-5 gap-2 items-center justify-center md:w-[620px] sm:w-[400px] max-sm:w-[300px]">
              <Image
                src={"/images/circle.svg"}
                width={28}
                height={28}
                alt={"circle"}
                className="max-sm:w-[16px]"
              />
              <h3>Link to watch the 2019 film Where’d You Go, Bernadette</h3>
            </div>
          }
        ></Tab>
      </Tabs>
      <Input
        placeholder="Enter your own idea"
        className="placeholder:text-[18px] rounded-full font-[Inter] max-w-[718px] py-3 px-5 bg-white group-data-[focus-visible=true]:bg-white border-1 border-black"
        classNames={{
          inputWrapper:
            "bg-white group-data-[focus-visible=true]:bg-white rounded-full p-0 shadow-none",
          input: "bg-white ",
        }}
      />
    </div>
  );
}

export default Step2Section;
