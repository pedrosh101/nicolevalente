"use client";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { projects } from "../../data/projects";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const ProjetoDetalhes = ({ params }: any) => {
  const proj = projects.find((proj) => proj.slug === params.id);

  if (!proj) {
    const antigo = projects.find((p) => p.id.toString() === params.id);
    if (antigo) redirect(`/projetos/${antigo.slug}`);
    notFound();
  }

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

  const meta = [
    { rotulo: "Local", valor: proj?.local },
    { rotulo: "Ano", valor: proj?.ano },
    { rotulo: "Área", valor: proj?.área },
  ].filter((m) => m.valor);

  return (
    <main className="flex sm:flex-row flex-col text-graphite font-sans">
      <Navbar />
      <div className="flex flex-col sm:w-4/5 w-full sm:p-12 p-4 bg-offwhite min-h-screen">
        {/* voltar */}
        <Link
          href="/projetos"
          className="text-xs uppercase tracking-[0.25em] text-warm hover:text-bronze transition-colors mb-6 self-start"
        >
          ← Projetos
        </Link>

        {/* imagem principal */}
        <div className="relative w-full h-[55vh] sm:h-[70vh] overflow-hidden bg-nude/40">
          <Image
            src={proj?.img as string}
            alt={proj?.title ?? "Projeto"}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* título e informações */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 py-12 sm:py-16 items-start">
          <div className="lg:col-span-7">
            <span className="block h-px w-12 bg-warm/30 mb-6" />
            <h1 className="font-sans font-light text-3xl sm:text-5xl leading-tight tracking-tight">
              {proj?.title}
            </h1>
          </div>

          <dl className="lg:col-span-5 grid grid-cols-3 gap-4 border-t border-warm/30 pt-6">
            {meta.map((m) => (
              <div key={m.rotulo}>
                <dt className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-warm">
                  {m.rotulo}
                </dt>
                <dd className="mt-2 text-sm sm:text-base">{m.valor}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* galeria */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {proj?.fotos.map((foto, index) => (
            <button
              key={index}
              onClick={() => openModal(index)}
              className="group relative aspect-square overflow-hidden bg-nude/40"
              aria-label={`Ampliar imagem ${index + 1}`}
            >
              <Image
                src={foto}
                alt={`Imagem ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-graphite/0 group-hover:bg-graphite/20 transition-colors duration-500" />
            </button>
          ))}
        </div>

        {/* modal, swiper */}
        {modalIsOpen && selectedImageIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center min-h-screen"
            onClick={closeModal}
          >
            <div className="absolute inset-0 bg-graphite/90 backdrop-blur-sm"></div>
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-offwhite text-3xl z-50 hover:text-bronze transition-colors"
                aria-label="Fechar"
              >
                &times;
              </button>

              <div className="overflow-hidden">
                <div className="container">
                  <Swiper
                    navigation
                    pagination={{ type: "fraction" }}
                    modules={[Navigation, Pagination]}
                    className="swiper-nv md:min-h-screen md:w-[70em] h-96 w-96"
                    initialSlide={selectedImageIndex}
                  >
                    {proj?.fotos.map((foto, index) => (
                      <SwiperSlide key={index}>
                        <div className="flex h-full w-full items-center justify-center">
                          <Image
                            src={foto}
                            alt={`Imagem ${index + 1}`}
                            className="block object-contain h-full w-full"
                            fill
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default ProjetoDetalhes;
