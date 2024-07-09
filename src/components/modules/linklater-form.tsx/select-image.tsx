"use client";
import Image from "next/image";
import React, { useState } from "react";

const images = [
  "/images/select1.png",
  "/images/select2.png",
  "/images/select3.png",
  "/images/select4.png",
  "/images/select5.png",
];

const SelectImage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div className="flex md:gap-7 sm:gap-5 gap-3 flex-wrap justify-center md:px-5 px-2">
      {images.map((src, index) => (
        // <div >
        <Image
          key={index}
          onClick={() => handleImageClick(src)}
          src={src}
          width={263}
          height={232}
          alt={`select${index + 1}`}
          className={`rounded-xl object-cover max-md:w-[200px] max-sm:w-[150px] aspect-[1.1/1] ${
            selectedImage === src ? "border-2 border-primaryBlue" : ""
          }`}
        />
        // </div>
      ))}
    </div>
  );
};

export default SelectImage;
