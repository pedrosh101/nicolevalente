import Link from "next/link";
import Projeto from "../components/projeto";
import Navbar from "../components/navbar";
import { projects } from "../data/projects";

const residenciaProjects = projects.filter((proj) => proj.tipo === "residencia");
const intProjects = projects.filter((proj) => proj.tipo === "interiores");
const outrosProjects = projects.filter((proj) => proj.tipo === "outros");

const Secao = ({ titulo, lista }: { titulo: string; lista: typeof projects }) => (
  <section className="pb-14 last:pb-0">
    <div className="flex items-end justify-between mb-6">
      <div>
        <h1 className="text-3xl sm:text-4xl text-graphite">{titulo}</h1>
        <span className="block h-px w-12 bg-bronze mt-3" />
      </div>
      <span className="text-xs uppercase tracking-[0.25em] text-warm">
        {String(lista.length).padStart(2, "0")} projetos
      </span>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5">
      {lista.map((proj) => (
        <Link key={proj.id} href={{ pathname: `/projetos/${proj.slug}` }}>
          <Projeto title={proj.title} path={proj.img} className="h-56 sm:h-80" />
        </Link>
      ))}
    </div>
  </section>
);

const Projetos = () => {
  return (
    <main className="flex sm:flex-row flex-col  text-graphite min-h-screen">
      <Navbar />
      <main className="sm:w-4/5 w-full sm:p-12 p-4 bg-offwhite">
        <header className="mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-bronze mb-3">
            Portfólio
          </p>
          <h1 className="text-4xl sm:text-5xl max-w-xl leading-tight">
            Espaços que contam histórias
          </h1>
        </header>
        <Secao titulo="Residências" lista={residenciaProjects} />
        <Secao titulo="Interiores" lista={intProjects} />
        <Secao titulo="Institucionais e Comerciais" lista={outrosProjects} />
      </main>
    </main>
  );
};

export default Projetos;
