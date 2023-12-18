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
        <div className="flex flex-col items-center justify-center sm:w-4/5 w-full sm:p-12 p-2 bg-orange-50 min-h-screen">
          <h1 className="text-5xl font-bold mb-4">{proj?.title}</h1>
          <h2>{proj?.description}</h2>
          <div className="h-96 w-96 relative">
            <Image
              src={proj?.img as string}
              alt="Imagem"
              fill
              className="object-cover mt-6"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default ProjetoDetalhes;
