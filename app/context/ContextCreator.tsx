"use client";

import { useContext, createContext } from "react";
type itemProps = {
    id: number;
    quantity: number;
  };
type AppContextProps = {
  getquantity: (id: number) => number;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  removeItem: (id: number) => void;
  allItems : itemProps[]
  cartquantity : () => number
};

export const AppContext = createContext({} as AppContextProps);
export const useAppContext = () => useContext(AppContext);
