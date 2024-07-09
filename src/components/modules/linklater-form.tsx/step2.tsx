"use client";
import React, { useState } from "react";
import { Tab, Tabs } from "@nextui-org/tabs";
import Image from "next/image";
import { Input } from "@nextui-org/input";

const tabsContent = [
  {
    title: "Link for a drink",
    titleClassname:
      "flex md:gap-5 gap-2 items-center w-[180px] max-sm:w-[130px] justify-center",
  },
  {
    title: "Link in the park",
    titleClassname:
      "flex md:gap-5 gap-2 items-center w-[180px] max-sm:w-[130px] justify-center",
  },
  {
    title: "Link to watch the 2019 film Where'd You Go, Bernadette",
    titleClassname:
      "flex md:gap-5 gap-2 items-center justify-center md:w-[620px] sm:w-[400px] max-sm:w-[315px]",
  },
];

function Step2Section() {
  const [selected, setSelected] = useState<string | null>("Link for a drink");
  console.log(selected);
  return (
    <div className="flex w-full flex-col items-center gap-5 font-oswald uppercase px-5">
      <div className="w-full flex flex-col items-center gap-5 text-center px-5">
        <span className="px-8 py-1 rounded-full bg-primaryPink">
          <h3 className="md:text-[30px] text-[20px] font-[700] text-black">
            Step 2
          </h3>
        </span>
        <p className="md:text-[43px] sm:text-[35px] text-[25px] max-sm:leading-7 font-[Inter] text-primaryBlue font-extrabold">
          what kind of link do you want to have?
        </p>
      </div>
      <Tabs
        variant="light"
        color="default"
        className="w-min flex-wrapfont-[Inter] bg-transparent"
        classNames={{
          cursor:
            "rounded-full display-none group-data-[selected=true]:bg-[transparent] bg-transparent group-data-[selected=true]:shadow-none",
          tab: "w-min",
          tabList:
            "items-center w-full justify-center flex-wrap flex sm:h-[13rem] h-[8rem] md:gap-5 gap-x-5 max-sm:gap-x-2",
          tabContent:
            "flex group-data-[selected=true]:bg-primaryBlue group-data-[selected=true]:text-white group-data-[selected=true]:border-none font-gilroy md:text-[28px] max-sm:text-[12px] text-[16px] text-black font-[500] bg-white md:px-10 px-0 md:py-6 py-3 border border-[black] rounded-full ",
        }}
      >
        {tabsContent.map((tab, index) => (
          <Tab
            className="bg-white px-0 rounded-full test"
            key={index}
            title={
              <div
                role="button"
                tabIndex={0}
                className={`${tab.titleClassname}`}
                onClick={() => setSelected(tab.title)}
              >
                {tab.title !== selected ? (
                  <Image
                    src={"/images/circle.svg"}
                    width={28}
                    height={28}
                    alt={"circle"}
                    className="group-data-[selected=true]:text-white w-[28px] h-[28px] max-sm:w-[20px] max-sm:h-[20px]"
                  />
                ) : (
                  <div className="flex min-w-[28px] min-h-[28px] max-sm:min-w-[20px] max-sm:min-h-[20px] items-center justify-center relative">
                    <Image
                      src={"/images/circle-outer.svg"}
                      width={28}
                      height={28}
                      alt={"circle"}
                      className="group-data-[selected=true]:text-white  absolute"
                    />
                    <Image
                      src={"/images/circle-inner.svg"}
                      width={20}
                      height={20}
                      alt={"circle"}
                      className="group-data-[selected=true]:text-white max-md:max-w-[12px] max-md:max-h-[12px]  absolute"
                    />
                  </div>
                )}
                <h3>{tab.title}</h3>
              </div>
            }
          ></Tab>
        ))}
      </Tabs>
      <Input
        placeholder="Enter your own idea"
        style={{ color: "#000" }}
        className="placeholder:text-[18px] rounded-full font-[Inter] max-w-[718px] sm:py-3 py-1 px-5 bg-white group-data-[focus-visible=true]:bg-white border-1 border-black "
        classNames={{
          inputWrapper:
            "bg-white group-data-[focus-visible=true]:bg-white rounded-full p-0 shadow-none",
          input: "bg-white",
        }}
      />
    </div>
  );
}

export default Step2Section;
