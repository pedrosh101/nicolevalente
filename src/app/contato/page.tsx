import Navbar from "../components/navbar";
import dynamic from 'next/dynamic'

const Contato = () => {

  const Map = dynamic(() => import("../components/map"), { ssr: false });

  return (
    <main className="flex sm:flex-row flex-col  text-black min-h-screen">
      {/* Primeira coluna */}
      <Navbar />

      {/* Segunda coluna */}
      <main className="sm:w-4/5 w-full sm:p-12 bg-orange-50 min-h-screen">
        <div className="bg-orange-100 flex sm:justify-end sm:pr-40 justify-center">
          <div className="sm:bg-orange-200 bg-orange-50 p-8 space-y-8 w-full sm:w-auto font-light sm:font-normal">
            <div className="flex space-x-4">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1.3em"
                width="1.3em"
                className="mt-1"
              >
                <path d="M12 11.5A2.5 2.5 0 019.5 9 2.5 2.5 0 0112 6.5 2.5 2.5 0 0114.5 9a2.5 2.5 0 01-2.5 2.5M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7z" />
              </svg>
              <a
                href="https://maps.app.goo.gl/NmrJ94THPRrwAUwp7"
                target="_blank"
              >
                <p>
                  R. José Cornélio, 104 - A<br />
                  Centro, Cel. Fabriciano - MG
                  <br />
                  35170-008
                </p>
              </a>
            </div>
            <div className="flex space-x-4">
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1.1em"
                width="1.1em"
                className="mt-1"
              >
                <path d="M13.601 2.326A7.854 7.854 0 007.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 003.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0013.6 2.326zM7.994 14.521a6.573 6.573 0 01-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 01-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 014.66 1.931 6.557 6.557 0 011.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 00-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
              <a href="https://wa.me/5531991245581" target="_blank">
                <p>(31) 99124-5581</p>
              </a>
            </div>
            <div className="flex space-x-4">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1.2em"
                width="1.2em"
                className="mt-1"
              >
                <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z" />
              </svg>
              <a href="mailto:nicolevalente@gmail.com">
                <p>nicolevalente@gmail.com</p>
              </a>
            </div>
          </div>
        </div>
          <Map />
      </main>
    </main>
  );
};

export default Contato;
