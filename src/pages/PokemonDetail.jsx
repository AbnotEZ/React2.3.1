import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MyButton from "../components/MyButton";


const PokemonDetail = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const navitate = useNavigate()

  const getData = async () => {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await result.json();
    setPokemon(data);
  };

  useEffect(() => {
    getData();
  }, [name]);

 const handleBack = () => {
  navitate(-1)
 }

  return (
    <div className="flex flex-col justify-center items-center bg-white h-[calc(100vh-60px)]">
      {pokemon && (
        <>
          <div className="text-black">
            <img src={pokemon.sprites.other.home.front_default} alt="" />
          </div>
          <div className="">
            <h1 className="text-3xl">{pokemon.name.toUpperCase()}</h1>
            <h2>{pokemon.types[0]?.type.name}</h2>
          </div>
          <div className="text-red-500">
            <table className="table-fixed ">
              <thead>
                <tr>
                  <th>Descripcion</th>
                  <th>Number</th>
                </tr>
              </thead>
              <tbody>
                {pokemon.stats?.map((item, i) => (
                  <tr key={i}>
                    <td>{item.stat.name}</td>
                    <td>{item.base_stat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
      <MyButton search={handleBack} text="Volver" />
    </div>

  );
};

export default PokemonDetail;
