import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(
    "http://ddragon.leagueoflegends.com/cdn/11.23.1/data/pt_BR/champion.json"
  );

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
