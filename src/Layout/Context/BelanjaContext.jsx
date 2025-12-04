import { createContext, useState } from "react";
export const BelanjaContext = createContext();
export const BelanjaProvider = ({ children }) => {
  const [belanjas, setBelanjas] = useState([]);

  const addBelanja = (datas) => {
    setBelanjas((prev) => [...prev, { ...datas, qty: 1 }]);
  };

  const PlusQty = (id) => {
    setBelanjas((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const MinusQty = (id) => {
    setBelanjas((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
          : item
      )
    );
  };

  const ClearAll = () => {
    setBelanjas([]);
  };
  return (
    <BelanjaContext.Provider
      value={{ addBelanja, belanjas, ClearAll, PlusQty, MinusQty }}
    >
      {children}
    </BelanjaContext.Provider>
  );
};
