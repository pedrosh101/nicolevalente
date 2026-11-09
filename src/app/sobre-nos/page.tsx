import Navbar from "../components/navbar";
import Image from "next/image";
import Sobre from "../../../public/img/Sobre.jpeg";

const destaques = [
  { valor: "+20", rotulo: "anos de atuação" },
  { valor: "MG", rotulo: "Vale do Aço e região" },
  { valor: "CAU", rotulo: "experiência comprovada" },
];

const SobreNos = () => {
  return (
    <main className="flex sm:flex-row flex-col bg-offwhite text-graphite font-sans">
      <Navbar />
      <div className="sm:w-4/5 w-full px-5 py-10 sm:p-16 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center w-full max-w-7xl mx-auto">
          {/* foto */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-full h-full bg-nude/70" />
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={Sobre}
                alt="Nicole Valente"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 30vw, 100vw"
              />
            </div>
          </div>

          {/* texto */}
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-bronze mb-4">
              Sobre nós
            </p>
            <h2 className="text-4xl sm:text-6xl leading-tight">
              Nicole Valente
            </h2>
            <span className="block h-px w-16 bg-bronze my-6" />

            <p className="font-display italic text-xl sm:text-2xl text-warm mb-8">
              Arquitetura que traduz quem você é.
            </p>

            <div className="space-y-5 text-sm sm:text-base leading-relaxed text-graphite/80 max-w-2xl">
              <p>
                Olá, sou arquiteta e urbanista e estou há mais de 20 anos
                elaborando sonhos e projetando realidades nos segmentos de
                arquitetura e interiores de projetos institucionais,
                residenciais e comerciais na região do Vale do Aço e Minas
                Gerais. Sou graduada pelo Instituto Metodista Izabela Hendrix
                em Belo Horizonte, e especialista em Arquitetura Contemporânea
                pelo Unileste-MG.
              </p>
              <p>
                Em órgãos públicos fui membro do grupo gestor dos Planos
                Diretores de Ipatinga e Coronel Fabriciano e exerci cargos de
                gestão de análise de projetos arquitetônicos e urbanísticos.
                Tenho vasta experiência comprovada pelo CAU (Conselho de
                Arquitetos e Urbanistas) e expertise em aprovação de projetos
                em órgãos públicos com largo conhecimento em legislações
                urbanísticas.
              </p>
              <p>
                Meus projetos primam pela criatividade arquitetônica aliada às
                melhores práticas da construção civil. Acredito que a
                arquitetura é um elemento importantíssimo na qualidade de vida
                das pessoas e, através dela, imprimimos a individualidade do
                cliente que será perpetuada por muitos e muitos anos.
              </p>
            </div>

            <dl className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-warm/30 max-w-2xl">
              {destaques.map((d) => (
                <div key={d.rotulo}>
                  <dt className="font-display text-3xl sm:text-4xl text-bronze">
                    {d.valor}
                  </dt>
                  <dd className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-warm mt-1">
                    {d.rotulo}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SobreNos;
