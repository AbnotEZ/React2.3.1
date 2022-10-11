import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "../components/MyButton";
import { AppContext } from "../context/AppContext";


const SearchPokemon = () => {
  const [nombre, setNombre] = useState("");
  const { data } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const pokeName = e.target.value;
    if (pokeName && pokeName != "") {
      setNombre(pokeName);
    } else {
      alert("No existe");
    }
  };

  const searchPokemonByName = (e) => {
    e.preventDefault();
    navigate(`${nombre}`);
  };

  return (
    <>
      <div className="flex flex-col items-center align-middle justify-center h-[calc(100vh-60px)] w-full bg-slate-100">
        
        <div className="ok pb-5">
          <img className="w-56" src="https://www.downloadclipart.net/large/pokemon-ash-png-clipart.png" alt="" />
        </div>

        <div className="pb-5 text-red-500">
          <select
            className="h-10 text-xl text-center"
            onChange={handleSearch}
            name=""
            id=""
          >
            <option value="">Selecciona un Pokemon</option>
            {data.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="">
          <MyButton search={searchPokemonByName} text="Buscar Pokemon" />
        </div>
      </div>
    </>
  );
};

export default SearchPokemon;
