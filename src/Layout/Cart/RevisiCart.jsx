import { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "../Context/CartContent";
import { CheckoutContext } from "../Context/CheckOutContent";

import { useNavigate } from "react-router-dom";
import ChekOut from "./ChekOut";
const RevisiCart = () => {
  const navigasi = useNavigate();
  const { cart, setCart, removeFromCart, QtyPlus, QtyMinus, clearCart } =
    useContext(CartContext);
  const { checkoutArray, setCheckoutArray, addToCheckout } =
    useContext(CheckoutContext);
  const handleplust = (id) => {
    QtyPlus(id);
  };

  const [open, setOpen] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const KlikCheckout = (e) => {
    e.preventDefault();

   
    setCheckoutArray(
      cart.map((item) => ({
        ...item,

        Total: item.price * item.qty,
      }))
    );


    setOpen(true);
  };

  return (
    <div className="px-10 flex flex-col  font-Roboto">
      <div className=" px-4 py-1 flex flex-col gap-4">
        <div className="flex justify-between  items-center ">
          <h1 className="text-2xl text-[#2E4365] font-bold">My Cart</h1>
        </div>
        <div className=" flex flex-col overflow-y-scroll h-75 scroll-smooth">
          <table className="text-sm text-center">
            <thead className="sticky top-0 bg-white border-b ">
              <tr>
                <th class="px-4 py-3 ">PRODUCT</th>
                <th class="px-4 py-3 ">PRICE</th>
                <th class="px-4 py-3 ">QTY</th>
                <th class="px-4 py-3 ">TOTAL</th>
                <th></th>
              </tr>
            </thead>
            {cart.length === 0 ? (
              <div className="text-[#cdcdcd] fixed bottom-[50%] right-[50%]">
                Add To Cart
              </div>
            ) : (
              <tbody className="">
                {cart.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-gray-100">
                    <td
                      onClick={() => navigasi(`/detailCart/${item.id}`)}
                      class="px-4 py-3 flex justify-center items-center gap-2 cursor-pointer"
                    >
                      <img src={item.gambar} alt="" className="w-17" />
                      {item.nama_tas}
                    </td>
                    <td class="px-4 py-3 ">{item.price.toLocaleString()}</td>
                    <td class="px-4 py-3 ">
                      <ul className="flex  justify-center gap-4 items-center ">
                        <li className="">
                          <button
                            onClick={() => handleplust(item.id)}
                            className="cursor-pointer text-[15px] border font-extrabold rounded-full px-1.5 hover:bg-[#FFBA08] text-white bg-yellow-500 transition duration-200 ease-in-out"
                          >
                            +
                          </button>
                        </li>
                        <li>{item.qty}</li>
                        <li className="">
                          <button
                            onClick={() => QtyMinus(item.id)}
                            className="cursor-pointer font-extrabold text-[15px] border rounded-full px-2 hover:bg-[#FFBA08] text-white bg-yellow-500 transition duration-200 ease-in-out"
                          >
                            -
                          </button>
                        </li>
                      </ul>
                    </td>
                    <td class="px-4 py-3 ">
                   
                      {(item.price * item.qty).toLocaleString()}
                    </td>
                    <td class="px-2  text-start">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="cursor-pointer "
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
  
        <div className="flex fixed bottom-6 right-10 left-10  px-3 py-2 justify-between items-center text-white  bg-[#2E4365] rounded">
          <div className="flex flex-col text-lg">Shipping mode</div>
          <div className="flex flex-col  w-60 gap-2 text-sm">
            <div className="flex justify-between">
              <h1>SUBTOTAL TTC</h1>
              <h1>{subtotal.toLocaleString()}</h1>
            </div>
            <div className="flex justify-between border-b-2 border-[#cdcdcd]">
              <h1>SHIPPING</h1>
              <h1>free</h1>
            </div>
            <div className="flex justify-between">
              <h1>TOTAL</h1>
              <h1>{subtotal.toLocaleString()}</h1>
            </div>
            <button
              disabled={cart.length === 0}
              onClick={KlikCheckout}
              className={`text-md px-2 py-2 ${
                cart.length === 0
                  ? "bg-[#FFBA08]"
                  : "bg-[#FFBA08] hover:bg-yellow-500"
              }   cursor-pointer  rounded`}
            >
              Chekout Now
            </button>
          </div>
        </div>
        <ChekOut isOpen={open} onClose={() => setOpen(false)} from="cart" />
      </div>
    </div>
  );
};

export default RevisiCart;
