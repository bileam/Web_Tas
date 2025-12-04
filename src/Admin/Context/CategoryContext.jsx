import { createContext, useState } from "react";
import { DataKategori } from "../Data/DataKategoriProduct";

export const CategoryProduct = createContext();
export const CategoryProvider = ({ children }) => {
  const [arrCategory, setArrCategory] = useState(DataKategori);

  const addCategory = (datas) => {
    setArrCategory((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...datas,
      },
    ]);
  };

  // const addCategory = (datas) => {
  //   setArrCategory([{ ...arrCategory, id: Date.now(), ...datas }]);
  // };

  const removeCategory = (id) => {
    setArrCategory((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CategoryProduct.Provider
      value={{ arrCategory, addCategory, removeCategory }}
    >
      {children}
    </CategoryProduct.Provider>
  );
};
