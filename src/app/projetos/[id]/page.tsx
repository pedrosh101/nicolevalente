"use client";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import { projects } from "../../data/projects";
import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

const ProjetoDetalhes = ({ params }: any) => {
  const proj = projects.find((proj) => proj.id.toString() === params.id);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

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
      <main className="flex sm:flex-row flex-col text-black">
        <Navbar />
        <div className="flex flex-col sm:w-4/5 w-full sm:p-12 p-2 bg-orange-50">
          <div className="flex flex-col min-h-screen items-center w-full">
            {/* primeiro elemento */}
            <div className="sm:h-4/6 h-96 w-full relative">
              <Image
                src={proj?.img as string}
                alt="Imagem"
                fill
                className="object-cover"
              />
            </div>

            {/* segundo elemento, textos */}
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
          </div>

          {/* terceiro elemento, miniaturas */}

          <div className="flex gap-4 mt-8 self-start w-full">
            {proj?.fotos.map((foto, index) => (
              <div
                key={index}
                onClick={() => openModal(index)}
                className="grid grid-cols-2 h-44 w-44 relative"
              >
                <Image
                  src={foto}
                  alt={`Imagem ${index + 1}`}
                  fill
                  className="cursor-pointer object-cover"
                />
              </div>
            ))}

            {/* modal, embla carousel */}
            {modalIsOpen && selectedImageIndex !== null && (
              <div
                className="fixed inset-0 flex items-center justify-center min-h-screen"
                onClick={closeModal}
              >
                <div className="absolute inset-0 bg-black opacity-75"></div>
                <div className="relative" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-white text-3xl z-50"
                  >
                    &times;
                  </button>

                  <div
                    className="overflow-hidden"
                    ref={emblaRef}
                  >
                    <div className="flex">
                      {proj?.fotos.map((foto, index) => (
                        <Image
                          key={index}
                          src={foto}
                          alt={`Imagem ${index + 1}`}
                          className="object-cover flex-grow-0 flex-shrink-0 w-full"
                          height={200}
                          width={200}
                          sizes="25vh"
                        />
                      ))}
                    </div>
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
