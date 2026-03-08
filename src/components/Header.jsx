import { useState } from "react";
import "@fontsource/inter";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linkStyle = {
    fontFamily: '"Inter Variable", sans-serif',
    fontWeight: [900, 500]
  };

  return (
    <nav className="bg-white border-gray-200 border-b-14 rounded-3xl w-11/12 mx-auto mt-4">
      <div className="max-w-7xl flex tb:flex-nowrap flex-wrap items-center justify-between mx-auto p-4">
        <p
          className="text-2xl space-x-reverse text-azul font-black"
          style={linkStyle}
        >
          DaniDev
        </p>

        <button
          id="menu-toggle"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg tb:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            ></path>
          </svg>
        </button>
        <div
          className={`w-full tb:block tb:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul
            className="font-medium flex tb:justify-center tb:items-center flex-col p-4 tb:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 tb:flex-row tb:space-x-8 rtl:space-x-reverse tb:mt-0 tb:border-0 tb:bg-white text-base"
            style={linkStyle}
          >
            <li className="mt-4 tb:mt-0">
              <a
                href="/"
                className="block py-2 px-3 text-primary rounded hover:bg-gray-100 tb:hover:bg-transparent tb:border-0 tb:hover:text-secondary tb:p-0"
                aria-current="page"
              >
                Inicio
              </a>
            </li>

            <li>
              <a
                href="/aptisinfo/"
                className="block py-2 px-3 text-primary rounded hover:bg-gray-100 tb:hover:bg-transparent tb:border-0 tb:hover:text-secondary tb:p-0"
              >
                Acerca de mí
              </a>
            </li>
            <li>
              <a
                href="/fetinfo/"
                className="block py-2 px-3 text-primary rounded hover:bg-gray-100 tb:hover:bg-transparent tb:border-0 tb:hover:text-secondary tb:p-0"
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                href="/contact/"
                className="block py-2 px-3 text-primary rounded hover:bg-gray-100 tb:hover:bg-transparent tb:border-0 tb:hover:text-secondary tb:p-0"
              >
                Experiencia
              </a>
            </li>
            <li>
              <a
                href="/contact/"
                className="block py-2 px-3 text-primary rounded hover:bg-gray-100 tb:hover:bg-transparent tb:border-0 tb:hover:text-secondary tb:p-0"
              >
                Portafolio
              </a>
            </li>
            <li>
              <a
                href="/contact/"
                className="block py-2 px-3 text-primary rounded hover:bg-gray-100 tb:hover:bg-transparent tb:border-0 tb:hover:text-secondary tb:p-0"
              >
                Contactame
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
