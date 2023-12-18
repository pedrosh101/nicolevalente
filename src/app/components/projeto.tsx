"use client";
import React, { useState, MouseEvent } from "react";
import Image from "next/image";

type ProjetoProps = {
  title: string;
  path: any;
};

const Projeto: React.FC<ProjetoProps> = ({ title, path }) => {
  const [showText, setShowText] = useState(false);

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
    setShowText(false);
  };

  return (
    <div className="relative h-96 overflow-hidden">
      {/* Texto do título com transição */}
      <Image
        src={path}
        alt="Imagem"
        fill
        className="w-full h-full object-cover"
        onMouseEnter={(e) => handleMouseEnter(e)}
        onMouseLeave={handleMouseLeave}
      />
      <div
        className={`absolute bottom-0 right-0 w-full transition-transform duration-500 transform ${
          showText ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="py-1 px-8 bg-orange-50 text-black text-md">
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Projeto;
