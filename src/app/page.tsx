"use client";
import Image from "next/image";
import Projeto from "./components/projeto";
import Link from "next/link";
import Logo from "../../public/img/logo.svg";
import Casa1 from "../../public/img/casa1.jpg"
import Casa2 from "../../public/img/casa2.jpg"
import Casa3 from "../../public/img/casa3.jpg"
import Casa4 from "../../public/img/casa4.jpeg"
import Casa5 from "../../public/img/casa5.jpeg"
import Casa6 from "../../public/img/casa6.jpg"
import Casa7 from "../../public/img/casa7.jpg"
import Casa8 from "../../public/img/casa8.jpg"
import Casa9 from "../../public/img/casa9.jpg"
import { useState, useRef, useEffect } from "react";


const Home = () => {

  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      navRef.current &&
      !(navRef.current as Node).contains(event.target as Node)
    ) {
      setIsOpen(false);
      document.removeEventListener("mousedown", handleClickOutside);
    }
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        navRef.current &&
        !(navRef.current as Node).contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClick);
    } else {
      document.removeEventListener("mousedown", handleClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isOpen]);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="flex sm:flex-row flex-col  text-black">
      {/* Primeira coluna */}
      <div className="sm:w-1/5 flex sm:flex-col items-center bg-orange-100 justify-between p-6 sm:px-0">
        <div className="sm:fixed sm:top-8 relative w-28">
          <Image src={Logo} className="object-cover" alt="logo" />
        </div>

        <div onClick={toggleNav} className="text-2xl cursor-pointer sm:hidden">
        <svg fill="none" viewBox="0 0 24 24" height="1.3em">
          <path
            fill="currentColor"
            d="M8 6a2 2 0 11-4 0 2 2 0 014 0zM8 12a2 2 0 11-4 0 2 2 0 014 0zM6 20a2 2 0 100-4 2 2 0 000 4zM14 6a2 2 0 11-4 0 2 2 0 014 0zM12 14a2 2 0 100-4 2 2 0 000 4zM14 18a2 2 0 11-4 0 2 2 0 014 0zM18 8a2 2 0 100-4 2 2 0 000 4zM20 12a2 2 0 11-4 0 2 2 0 014 0zM18 20a2 2 0 100-4 2 2 0 000 4z"
          />
        </svg>
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-75 z-50 transition-opacity duration-700 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          ref={navRef}
          className={`fixed flex flex-col space-y-2 right-0 top-0 h-full w-72 sm:w-80 p-10 bg-white shadow transition-transform transform duration-700 text-black ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="text-left">
            <li className="my-4 hover:text-orange-900">
              <a href="/contato">Contato</a>
            </li>
            <li className="my-4 hover:text-orange-900">
              <a href="/projetos">Projetos</a>
            </li>
            <li className="my-4 hover:text-orange-900">
              <a href="/sobre-nos">Sobre Nós</a>
            </li>
          </ul>
        </div>
      </div>


        <nav className="sm:fixed top-1/2 sm:transform sm:-translate-y-1/2 sm:text-2xl hidden sm:flex">
          <ul className="text-left">
            <li className="my-4 hover:text-orange-900">
              <a href="/contato">Contato</a>
            </li>
            <li className="my-4 hover:text-orange-900">
              <a href="/projetos">Projetos</a>
            </li>
            <li className="my-4 hover:text-orange-900">
              <a href="/sobre-nos">Sobre Nós</a>
            </li>
          </ul>
        </nav>

        <div className="flex sm:fixed bottom-4 gap-2">
          <Link
            href="https://www.instagram.com/nicolevalentearquiteta/"
            target="_blank"
          >
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1.4em"
              width="1.4em"
              className="hover:fill-orange-950"
            >
              <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
            </svg>
          </Link>
          <Link
            href="https://www.facebook.com/nicole.valente.501/"
            target="_blank"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1.4em"
              width="1.4em"
              className="hover:fill-orange-950"
            >
              <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0014.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
            </svg>
          </Link>
          <Link
            href="https://br.linkedin.com/in/nicole-valente-29a20a4a"
            target="_blank"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1.4em"
              width="1.4em"
              className="hover:fill-orange-950"
            >
              <path d="M7.170999999999999 5.009 A2.188 2.188 0 0 1 4.983 7.197000000000001 A2.188 2.188 0 0 1 2.7949999999999995 5.009 A2.188 2.188 0 0 1 7.170999999999999 5.009 z" />
              <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Segunda coluna */}
      <main className="sm:w-4/5 w-full sm:p-12 p-2 bg-orange-50">
        <div className="grid sm:grid-cols-3 sm:gap-8 gap-2">
          <Link
            href="https://www.instagram.com/nicolevalentearquiteta/"
            target="_blank"
          >
            <Projeto title="Projeto 1" path={Casa1}/>
          </Link>
          <Link
            href="https://www.instagram.com/nicolevalentearquiteta/"
            target="_blank"
          >
            <Projeto title="Projeto 2" path={Casa2}/>
          </Link>
          <Link
            href="https://www.instagram.com/nicolevalentearquiteta/"
            target="_blank"
          >
            <Projeto title="Projeto 3" path={Casa3}/>
          </Link>
          <Link
            href="https://www.instagram.com/nicolevalentearquiteta/"
            target="_blank"
          >
            <Projeto title="Projeto 4"  path={Casa4}/>
          </Link>
          <Link
            href="https://www.instagram.com/nicolevalentearquiteta/"
            target="_blank"
          >
            <Projeto title="Projeto 5"  path={Casa5}/>
          </Link>
          <Link
            href="https://www.instagram.com/nicolevalentearquiteta/"
            target="_blank"
          >
            <Projeto title="Projeto 6"  path={Casa6}/>
          </Link>
          <Link
            href="https://www.instagram.com/nicolevalentearquiteta/"
            target="_blank"
          >
            <Projeto title="Projeto 7"  path={Casa7}/>
          </Link>
          <Link
            href="https://www.instagram.com/nicolevalentearquiteta/"
            target="_blank"
          >
            <Projeto title="Projeto 8"  path={Casa8}/>
          </Link>
          <Link
            href="https://www.instagram.com/nicolevalentearquiteta/"
            target="_blank"
          >
            <Projeto title="Projeto 9"  path={Casa9}/>
          </Link>
        </div>
      </main>
    </main>
  );
};

export default Home;
