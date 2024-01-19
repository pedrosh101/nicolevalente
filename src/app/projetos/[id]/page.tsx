"use client";
import Navbar from "@/app/components/navbar";
import { projects } from "../../data/projects";
import { useState } from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProjetoDetalhes = ({ params }: any) => {
  const proj = projects.find((proj) => proj.id.toString() === params.id);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    setModalIsOpen(false);
  };

  return (
    <>
      <main className="flex sm:flex-row flex-col  text-black min-h-screen">
        <Navbar />
        <div className="flex flex-col items-center sm:w-4/5 w-full sm:p-12 p-2 bg-orange-50">
          <div className="sm:h-4/6 h-96 w-full relative">
            <Image
              src={proj?.img as string}
              alt="Imagem"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="sm:text-5xl text-4xl mb-4 sm:mt-10 mt-4">
            {proj?.title}
          </h1>
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

          <div className="mt-8 self-start flex">
            {proj?.fotos.map((foto, index) => (
              <div key={index} onClick={() => openModal(index)} className="p-2">
                <Image
                  src={foto}
                  alt={`Imagem ${index + 1}`}
                  className="cursor-pointer"
                  width={160}
                  height={160}
                />
              </div>
            ))}

            {/* Modal */}
            {modalIsOpen && selectedImageIndex !== null && (
              <div
                className="fixed inset-0 flex items-center justify-center min-h-screen"
                onClick={closeModal}
              >
                <div className="absolute inset-0 bg-black opacity-75"></div>
                <div className="relative" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-white text-xl z-50"
                  >
                    &times;
                  </button>
                  <div className="relative overflow-hidden h-96 w-96">
                    <Image
                      src={proj?.fotos[selectedImageIndex] ?? ""}
                      alt={`Imagem em Tamanho Maior`}
                      onClick={closeModal}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default ProjetoDetalhes;
