"use client";

import { useEffect, useState } from "react";
import { AppContext } from "./ContextCreator";
import Cookies from "js-cookie";

type childreact = {
  children: React.ReactNode;
};

type itemProps = {
  id: number;
  quantity: number;
};

const ContextProvider = ({ children }: childreact) => {
  const [allItems, setAllItems] = useState<itemProps[]>([]);

  const getquantity = (id: number) => {
    return allItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increment = (id: number) => {
    setAllItems((prev) => {
      if (prev.find((item) => item.id === id) == null) {
        return [...prev, { id, quantity: 1 }];
      } else {
        return prev.map((item) => {
          if (item.id == id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decrement = (id: number) => {
    setAllItems((prev) => {
      if (prev.find((item) => item.id == id)?.quantity == 1) {
        return prev.filter((item) => item.id !== id);
      } else {
        return prev.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeItem = (id: number) => {
    setAllItems((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const cartquantity = () => {
    return allItems.reduce((quantity, item) => {
      return item.quantity + quantity;
    }, 0);
  };

  return (
    <AppContext.Provider
      value={{
        getquantity,
        increment,
        decrement,
        removeItem,
        allItems,
        cartquantity,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
