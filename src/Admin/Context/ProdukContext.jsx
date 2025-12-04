import { createContext, useEffect, useState } from "react";
import { DataProduct } from "../Data/DataProduct";
// import { json } from "stream/consumers";

export const ProductContext = createContext();
export const ProductPorvider = ({ children }) => {
  //  menyimpan data kedalam array
  const [arrProduct, setArrProduct] = useState(DataProduct);

  // menyimpan data kedalam localStorage
  // load data saat pertama kali di buka
  // const [arrProduct, setArrProduct] = useState(() => {
  //   const stored = localStorage.getItem("arrProduct");
  //   return stored ? JSON.parse(stored) : DataProduct;
  // });

  // const setArrCategory = (datas) => {
  //   setArrProduct([{ ...arrProduct, id: Date.now(), ...datas }]);
  // };

  // setiap kali arrProduck berubah -> simpan ke localStorage
  // useEffect(() => {
  //   localStorage.setItem("arrProduct", JSON.stringify(arrProduct));
  // }, [arrProduct]);

  const setArrCategory = (datas) => {
    setArrProduct((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...datas,
      },
    ]);
  };

  // Add & Update produk
  const AddUpdate = (datas) => {
    setArrProduct((prev) => {
      const exist = prev.find((item) => item.id === datas.id);

      if (exist) {
        return prev.map((item) =>
          item.id === datas.id ? { ...item, ...datas } : item
        );
      }

      return [...prev, datas];
    });
  };

  const removeData = (id) => {
    setArrProduct((prev) => prev.filter((item) => item.id !== id));
  };

  const delateProdukByCategoriId = (category_id) => {
    setArrProduct((prev) =>
      prev.filter((item) => item.categoryId !== category_id)
    );
  };

  return (
    <ProductContext.Provider
      value={{
        arrProduct,
        setArrCategory,
        removeData,
        delateProdukByCategoriId,
        AddUpdate,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
