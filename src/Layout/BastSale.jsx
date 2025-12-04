import { CartContext } from "../Layout/Context/CartContent";
import tas1 from "../assets/gambar_tas/tas-kulit.png";
import TasAnak from "../assets/gambar_tas/HomeTasAnak.png";
import TasPria from "../assets/gambar_tas/HomeTasPria.png";
import TasTravel from "../assets/gambar_tas/HomeTasTravel.png";
import tasSekolah from "../assets/gambar_tas/HomeTasSekolah.png";
import tasLaptop from "../assets/gambar_tas/HomeTasLaptop.png";
import cart from "../assets/icont/cart2.svg";
import { useContext, useState } from "react";
import { dammy } from "./Data/Datatasa";

const BastSale = () => {
  const { addToCart } = useContext(CartContext);
  const handadd = (item) => {
    if (addToCart) {
      addToCart(item);
      alert("Menambahkan ke Cart");
    }
  };
  return (
    <div className="grid grid-cols-2 overflow-x-scroll sm:grid-cols-3 lg:grid-cols-6 md:grid-cols-4 transition duration-300 ease-in ">
      {dammy.slice(0, 6).map((item, index) => (
        <div
          key={index}
          className="flex flex-col ease-in-out   bg-[#fffff] font-Roboto  gap-2 p-2  w-50 md:60 lg:w-full"
        >
          <div className="border  py-2 relative group/inner flex flex-col gap-2">
            <img
              src={item.gambar}
              className="w-full object-contain"
              alt="testing"
            />
            <div className="flex justify-center  right-15  absolute  opacity-0 group-hover/inner:opacity-100 group-hover/inner:translate-y-3   transition duration-700 ease-in-out ">
              <button
                onClick={() => handadd(item)}
                className="cursor-pointer  font-Roboto w-full font-Roboto text-sm transition duration-500  text-white bg-green-300/90 hover:bg-green-500   px-4 py-2 rounded-2xl"
              >
                <img src={cart} alt="" />
              </button>
            </div>
          </div>
          <div className="flex justify-center  font-Roboto ">
            <div className="flex flex-col text-center">
              <p className="text-[16px] ">{item.nama_tas}</p>
              <p className="text-[12px] text-[#877e7e]">{item.desc}</p>
              <p className="text-[13px] text-green-500">Rp.{item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BastSale;
