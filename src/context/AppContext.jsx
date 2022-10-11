import React, { createContext } from "react";
import { useFetchData } from "../hooks/useFetch";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=1154";
  const data = useFetchData(BASE_URL);

  return (
    <AppContext.Provider
      value={{
        data,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
