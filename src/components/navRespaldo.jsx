import React from "react";
import { NavLink } from "react-router-dom";

const MyNavBar = () => {
  return (
    <nav className="p-5 bg-red-500 shadow text-white md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center">
        <span className="text-2xl md:flex items-center">
          <img
            className="h-10 inline"
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png"
            alt="pokeball"
          />
          <h2 className="mx-4 font-bold ">PokeApi</h2>
        </span>
      </div>
      <ul className="md:flex md:items-center z[-1] md:z-auto ">
        <NavLink
          className={"text-xl text-white hover:text-black duration-500 mx-4 my-6 md:my-0"}
        >
          HOME
        </NavLink>
        <NavLink
          className={"text-xl text-white hover:text-black duration-500 mx-4 my-6 md:my-0"}
        >
          POKEMON
        </NavLink>
        <NavLink
          className={"text-xl text-white hover:text-black duration-500 mx-4 my-6 md:my-0"}
        >
          DETALLE
        </NavLink>
        <NavLink
          className={"text-xl text-white hover:text-black duration-500 mx-4 my-6 md:my-0"}
        >
          API
        </NavLink>
        <NavLink
          className={"text-xl text-white hover:text-black duration-500 mx-4 my-6 md:my-0"}
        >
          CONTACTO
        </NavLink>

       
      </ul>
    </nav>
  );
};

export default MyNavBar;
