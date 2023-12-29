import Projeto from "./components/projeto";
import Link from "next/link";
import Navbar from "./components/navbar";
import { projects } from "./data/projects";

const Home = () => {
  return (
    <main className="flex sm:flex-row flex-col  text-black font-public">
      <Navbar />
      <main className="sm:w-4/5 w-full sm:p-12 p-2 bg-orange-50">
        <div className="grid sm:grid-cols-3 sm:gap-8 gap-2">
          {projects.map((proj) => (
            <Link
              key={proj.id}
              href={{
                pathname: `/projetos/${proj.id}`,
              }}
            >
              <Projeto
                title={proj.title}
                path={proj.img}
                altura={96}
              />
            </Link>
          ))}
        </div>
      </main>
    </main>
  );
};

export default Home;
