import Navbar from "../components/navbar";
import Image from "next/image";
import Sobre from "../../../public/img/Sobre.jpeg";

const SobreNos = () => {
  return (
    <main className="flex sm:flex-row flex-col  text-black min-h-screen font-public">
      {/* Primeira coluna */}
      <Navbar />

      {/* Segunda coluna */}
      <div className="flex items-center justify-center sm:w-4/5 w-full sm:p-12 bg-orange-50">
        <div className="sm:grid grid-cols-2 gap-8 items-center h-screen">
          <div className="relative sm:h-4/5 h-3/5 overflow-hidden ">
            <Image src={Sobre} alt="Imagem" fill className="object-cover px-2 pt-2" />
          </div>
          <div className="bg-orange-50 px-2 pb-6">
            <h2 className="sm:text-5xl text-4xl py-4">Nicole Valente</h2>
            <p className="sm:text-lg text-gray-700  sm:leading-relaxed leading-normal">
              Olá, sou arquiteta e urbanista e estou há mais de 20 anos
              elaborando sonhos e projetando realidades nos segmentos de
              arquitetura e interiores de projetos institucionais, residenciais
              e comerciais na região do Vale do Aço e Minas Gerais. Sou graduada
              pelo Instituto Metodista Izabela Hendrix em Belo Horizonte, e
              especialista em Arquitetura Contemporânea pelo Unileste-Mg. Em
              órgãos públicos fui membro do grupo gestor dos Planos Diretores de
              Ipatinga e Coronel Fabriciano e exerci cargos de gestão de análise
              de projetos arquitetônicos e urbanísticos. Tenho vasta experiência
              comprovada pelo CAU (Conselho de Arquitetos e Urbanistas) e expertise
              em aprovação de projetos em órgãos públicos com largo conhecimento
              em legislações urbanísticas. Meus projetos primam pela
              criatividade arquitetônica aliada às melhores práticas da
              construção civil. Acredito que a arquitetura é um elemento
              importantíssimo na qualidade de vida das pessoas e através dela
              imprimimos a individualidade do cliente que será perpetuada por
              muitos e muitos anos.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SobreNos;
