import Projeto from "./components/projeto";
import Link from "next/link";
import Navbar from "./components/navbar";
import { projects } from "./data/projects";

const Home = () => {
  const novePrimeiros = projects.slice(0, 9);

  return (
    <main className="flex sm:flex-row flex-col text-graphite font-sans">
      <Navbar />
      <main className="sm:w-4/5 w-full sm:p-12 p-4 bg-offwhite">
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          {novePrimeiros.map((proj) => (
            <Link
              key={proj.id}
              href={{
                pathname: `/projetos/${proj.slug}`,
              }}
            >
              <Projeto title={proj.title} path={proj.img} className="h-96" />
            </Link>
          ))}
        </div>
      </main>
    </main>
  );
};

export default Home;
