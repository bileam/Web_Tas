import { createContext, useState } from "react";

export const MyOrderContext = createContext();
export const MyOrderProvider = ({ children }) => {
  const [myOrder, setMyOrder] = useState([]);

  // jika di refress masi ada
  // const [myOrder, setMyOrder] = useState(() => {
  //   const saved = localStorage.getItem("myOrder");
  //   return saved ? JSON.parse(saved) : [];
  // });

  // simpan otomatis ke localStorage
  //  useEffect(() => {
  //   localStorage.setItem("belanjas", JSON.stringify(belanjas));
  // }, [belanjas]);

  // ini di pake jika datanya saat di refress akan hilang
  const addMyOrder = (data) => {
    setMyOrder((prev) => [...prev, ...data]);
  };


  
  // saat di refress pesanan masi ada
  // const addMyOrder = (data) => {
  //   setMyOrder((prev) => {
  //     const newData = [...prev, ...data];
  //     localStorage.setItem("myOrder", JSON.stringify(newData));
  //     return newData;
  //   });
  // };

  return (
    <MyOrderContext.Provider value={{ myOrder, setMyOrder, addMyOrder }}>
      {children}
    </MyOrderContext.Provider>
  );
};
