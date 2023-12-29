"use client";
import React, { useState, MouseEvent } from "react";
import Image from "next/image";

type ProjetoProps = {
  title: string;
  path: string;
  altura: number;
};

const Projeto: React.FC<ProjetoProps> = ({ title, path, altura }) => {
  const [showText, setShowText] = useState(false);
  const [hoveringText, setHoveringText] = useState(false);

  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.classList.add(
      "filter",
      "brightness-75",
      "transition-all",
      "duration-500"
    );
    setShowText(true);
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove("filter", "brightness-75");
    if (!hoveringText) {
      setShowText(false);
    }
  };

  return (
    <div className={`relative overflow-hidden h-${altura}`}>
      <Image
        src={path}
        alt="Imagem"
        fill
        onMouseEnter={(e) => handleMouseEnter(e)}
        onMouseLeave={handleMouseLeave}
        className="object-cover"
      />
      <div
        className={`absolute bottom-0 right-0 w-full transition-transform duration-500 transform ${
          showText || hoveringText ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div
          className="py-1 px-8 bg-orange-50 text-black text-md cursor-pointer"
          onMouseEnter={() => setHoveringText(true)}
          onMouseLeave={() => setHoveringText(false)}
        >
          <p className="font-public font-semibold text-sm">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Projeto;
