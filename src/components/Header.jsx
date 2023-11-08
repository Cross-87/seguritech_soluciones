import React from "react";

function Header() {
  return (
    <header className="flex h-[70px] w-full justify-between items-center gap-x-8 fixed top-0 bg-blue-700 text-white px-4">
      <h2 className="font-bold text-2xl italic underline decoration-orange-500">
        Seguritech Soluciones
      </h2>
      <p>Protegiendo tu negocio en el mundo digital</p>
      <nav>
        <ul className="flex gap-x-4">
          <li className="cursor-pointer px-2 py-1 rounded-full hover:bg-blue-200 hover:text-black duration-300">
            <a href="#home">Inicio</a>
          </li>
          <li className="cursor-pointer px-2 py-1 rounded-full hover:bg-blue-200 hover:text-black duration-300">
            <a href="#services">Servicios</a>
          </li>
          <li className="cursor-pointer px-2 py-1 rounded-full hover:bg-blue-200 hover:text-black duration-300">
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
