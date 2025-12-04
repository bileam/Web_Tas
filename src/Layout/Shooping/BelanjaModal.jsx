import { useContext, useState } from "react";
import { BelanjaContext } from "../Context/BelanjaContext";
import { CartContext } from "../Context/CartContent";
import { CheckoutContext } from "../Context/CheckOutContent";
import logocart from "../../assets/icont/CartShooping.svg";
import { Navigate, useNavigate } from "react-router-dom";
import ChekOut from "../Cart/ChekOut";

const BelanjaModal = ({ isOpen, onClose, datas }) => {
  if (!isOpen) return null;
  const navigasi = useNavigate();
  const { belanjas, ClearAll, PlusQty, MinusQty } = useContext(BelanjaContext);
  const { addToCart, QtyPlus, QtyMinus } = useContext(CartContext);
  const { setCheckoutArray } = useContext(CheckoutContext);
  const [open, setOpen] = useState();


  const handleClose = () => {
    onClose();
    ClearAll();
  };

  const handleCart = (item) => {
    if (confirm("menambahkan ke keranjang")) {
      addToCart(item);
      onClose();
      ClearAll();
    }
  };

  const handleBelanjan = (e) => {
    e.preventDefault();

    setCheckoutArray(
      belanjas.map((item) => ({
        ...item,
        Total: item.price * item.qty,
      }))
    );

    setOpen(true);

  };
  return (
    <div className="fixed z-100 inset-0 flex bg-black/20 items-center justify-center ">
      <div className="flex border bg-white px-5 py-4 rounded-md md:h-115 mt-10 overflow-y-scroll">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <h1 className="font-semibold text-[1.4rem] text-[#F5A201]">
              Belanja
            </h1>
            <button onClick={() => handleClose()} className="cursor-pointer ">
              X
            </button>
          </div>
          {belanjas.map((item, index) => (
            <div key={index} className="flex flex-col  gap-2 ">
              <div className="flex flex-col md:flex-row gap-5">
                <div className="bg-[#014C58] w-50 md:w-auto py-2 flex justify-center  rounded">
                  <img
                    src={item.gambar}
                    alt=""
                    className="   md:max-w-50 md:max-h-50"
                  />
                </div>
                <div className="flex-col flex gap-2 justify-between">
                  <h1 className="text-[#F5A201] font-semibold">Beli</h1>
                  <table className="font-extralight text-[1rem]">
                    <tr className="">
                      <td className="">Nama Tas</td>
                      <td className="px-2">: {item.nama_tas}</td>
                    </tr>
                    <tr className="">
                      <td className="">Jenis tas</td>
                      <td className="px-2">: {item.jenis_tas}</td>
                    </tr>
                    <tr className="">
                      <td className="">Harga</td>
                      <td className="px-2">: {item.price.toLocaleString()}</td>
                    </tr>
                  </table>
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between">
                      <div>
                        <p>Qty</p>
                      </div>
                      <div className="flex gap-3 items-center">
                        <button
                          onClick={() => MinusQty(item.id)}
                          className="cursor-pointer border rounded-md  px-2 text-[#FFBA08] hover:bg-[#014C58] transition duration-200 ease-in-out"
                        >
                          -
                        </button>
                        <p>{item.qty}</p>
                        <button
                          onClick={() => PlusQty(item.id)}
                          className="cursor-pointer border px-1 rounded-md  text-[#FFBA08] hover:bg-[#014C58] transition duration-200 ease-in-out"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => handleCart(item)}
                        className="px-2 py-1  bg-[#00537A] hover:bg-[#FFBA08] transition-colors duration-300 ease-in rounded cursor-pointer"
                      >
                        <img src={logocart} alt="cart.svg" />
                      </button>
                      <button
                        onClick={handleBelanjan}
                        className="px-2 py-1 bg-[#00537A] hover:bg-[#FFBA08] transition-colors duration-300 ease-in rounded cursor-pointer text-[#FFFFFF] "
                      >
                        Belanja Sekarang
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="font-extralight flex flex-col">
                <h1 className="text-[#F5A201]">Spesifikasi</h1>
                <table className="text-[0.9rem]">
                  <tr className="">
                    <td className="">Kategori Tas</td>
                    <td className="px-2">: {item.namaKategori}</td>
                  </tr>
                  <tr className="">
                    <td className="">Warna</td>
                    <td className="px-2">: {item.warna}</td>
                  </tr>
                  <tr className="">
                    <td className="">Berat</td>
                    <td className="px-2">: {item.berat}</td>
                  </tr>
                  <tr className="">
                    <td className="">Kapasitas</td>
                    <td className="px-2">: {item.kapasitas}</td>
                  </tr>
                  <tr className="">
                    <td className="">Deskripsi</td>
                    <td className="px-2">: {item.desc}</td>
                  </tr>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ChekOut isOpen={open} onClose={() => setOpen(false)} from="belanja" />
    </div>
  );
};

export default BelanjaModal;
