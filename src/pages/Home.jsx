import React from "react";

const Home = () => {
  const searchPokemonByName = (e) => {
    e.preventDefault();
    navigate(`${nombre}`);
  };
  return (
    <div className="h-[calc(100vh-60px)] w-full bg-slate-400 flex flex-col items-center p-20">
      

      <div className="pt-6">
        <img  src="https://pngimg.com/uploads/pokemon/pokemon_PNG98.png" alt="principal" />
      </div>
    </div>

    
  );
};

export default Home;

