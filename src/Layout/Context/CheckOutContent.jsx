import { createContext, useState } from "react";
export const CheckoutContext = createContext();
export const CheckoutProvider = ({ children }) => {
  const [checkoutArray, setCheckoutArray] = useState([]);

  //   membuat function untuk manganbil array kemudian di tampung checkoutdata
  const addToCheckout = (checkoutdata) => {
    // memasukan dan mengupdate data kedalam setCheckoutArray
    setCheckoutArray((prev) => [...prev, checkoutdata]);
  };
  const hapusSemua = () => {
    setCheckoutArray([]);
  };
  return (
    <CheckoutContext.Provider
      value={{ checkoutArray, setCheckoutArray, addToCheckout,hapusSemua }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};
