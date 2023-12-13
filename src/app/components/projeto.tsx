"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";

const Projeto = ({ title }: any) => {
  const [showText, setShowText] = useState(false);

  const handleMouseEnter = (e: any) => {
    e.currentTarget.classList.add(
      "filter",
      "brightness-75",
      "transition-all",
      "duration-500"
    );
    setShowText(true);
  };

  const handleMouseLeave = (e: any) => {
    e.currentTarget.classList.remove("filter", "brightness-75");
    setShowText(false);
  };

  return (
    <div
      className="relative h-96"
      onMouseEnter={(e) => handleMouseEnter(e)}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src="https://i.imgur.com/j5EbAfl.jpg" //
        alt="Imagem"
        fill
        className="w-full h-full object-cover"
      />
      {showText && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <p>{title}</p>
        </div>
      )}
    </div>
  );
};

export default Projeto;
