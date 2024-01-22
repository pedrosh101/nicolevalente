import Link from "next/link";
import Projeto from "../components/projeto";
import Navbar from "../components/navbar";
import { projects } from "../data/projects";

const residenciaProjects = projects.filter((proj) => proj.tipo === "residencia");
const intProjects = projects.filter((proj) => proj.tipo === "interiores");
const outrosProjects = projects.filter((proj) => proj.tipo === "outros");

const Projetos = () => {

  return (
    <main className="flex sm:flex-row flex-col text-black min-h-screen font-public">
      {/* Primeira coluna */}
      <Navbar />

      {/* Segunda coluna */}
      <main className="sm:w-4/5 w-full sm:p-12 p-2 bg-orange-50">
        <h1 className="pb-3 text-xl">Residências</h1>
        <div className="grid sm:grid-cols-4 sm:gap-8 gap-2 pb-8">
          {residenciaProjects.map((proj) => (
            <Link
              key={proj.id}
              href={{
                pathname: `/projetos/${proj.id}`,
              }}
            >
              <Projeto title={proj.title} path={proj.img}  />
            </Link>
          ))}
        </div>
        <h1 className="pb-3 text-xl">Interiores</h1>
        <div className="grid sm:grid-cols-4 sm:gap-8 gap-2 pb-8">
          {intProjects.map((proj) => (
            <Link
              key={proj.id}
              href={{
                pathname: `/projetos/${proj.id}`,
              }}
            >
              <Projeto title={proj.title} path={proj.img}  />
            </Link>
          ))}
        </div>
        <h1 className="pb-3 text-xl">Outros</h1>
        <div className="grid sm:grid-cols-4 sm:gap-8 gap-2">
          {outrosProjects.map((proj) => (
            <Link
              key={proj.id}
              href={{
                pathname: `/projetos/${proj.id}`,
              }}
            >
              <Projeto title={proj.title} path={proj.img}  />
            </Link>
          ))}
        </div>
      </main>
    </main>
  );
};

export default Projetos;
