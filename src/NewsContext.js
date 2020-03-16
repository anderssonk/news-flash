import React, { createContext } from "react";
import model from "./NewsModel";

export const ModelContext = createContext();

const ModelContextProvider = ({ children }) => {
  return (
    <ModelContext.Provider value={{ model }}>{children}</ModelContext.Provider>
  );
};

export default ModelContextProvider;
