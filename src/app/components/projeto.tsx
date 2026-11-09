import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

type ProjetoProps = {
  title: string;
  path: string;
  className?: any;
};

const Projeto: React.FC<ProjetoProps> = ({ title, path, className }) => {
  return (
    <div
      className={twMerge(
        "group relative overflow-hidden h-96 bg-nude/40",
        className
      )}
    >
      <Image
        src={path}
        alt={title}
        fill
        className="object-cover transition-all duration-500 group-hover:brightness-75"
      />

      <div className="absolute bottom-0 right-0 w-full translate-y-full transition-transform duration-500 group-hover:translate-y-0">
        <div className="py-2 px-6 bg-offwhite text-graphite">
          <p className="font-sans font-medium text-sm">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Projeto;
