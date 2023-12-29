"use client";
import Navbar from "@/app/components/navbar";
import { projects } from "../../data/projects";
import Image from "next/image";

const ProjetoDetalhes = ({ params }: any) => {
  const proj = projects.find((proj) => proj.id.toString() === params.id);

  return (
    <>
      <main className="flex sm:flex-row flex-col  text-black min-h-screen">
        <Navbar />
        <div className="flex flex-col items-center  sm:w-4/5 w-full sm:p-12 p-2 bg-orange-50 min-h-screen">
          <div className="sm:h-4/6 h-96 w-full relative">
            <Image
              src={proj?.img as string}
              alt="Imagem"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="sm:text-5xl text-4xl mb-4 sm:mt-10 mt-4">{proj?.title}</h1>
          <div className="sm:w-2/6 w-full mt-4 sm:mt-10 text-sm">
            <div className="flex justify-between">
              <h2 className="font-semibold">local</h2>
              <h2>{proj?.local}</h2>
            </div>
            <div className="h-0.5 w-full bg-clr1  my-2"></div>
            <div className="flex justify-between">
              <h2 className="font-semibold">ano</h2>
              <h2>{proj?.ano}</h2>
            </div>
            <div className="h-0.5 w-full bg-clr1  my-2"></div>
            <div className="flex justify-between">
              <h2 className="font-semibold">área</h2>
              <h2>{proj?.área}</h2>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProjetoDetalhes;
