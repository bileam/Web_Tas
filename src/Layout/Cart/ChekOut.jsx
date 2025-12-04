import alamat from "../../assets/icont/alamat.svg";
import order from "../../assets/icont/order.svg";
import pembayaran from "../../assets/icont/pembayaran.svg";
import ceklis from "../../assets/icont/ceklis.svg";

import { CheckoutContext } from "../Context/CheckOutContent";
import { useContext, useState } from "react";
import { MyOrderContext } from "../Context/MyOrder";
import Bca from "../../assets/Person/BCA.png";
import cod from "../../assets/Person/COD.png";
import { CartContext } from "../Context/CartContent";
import { BelanjaContext } from "../Context/BelanjaContext";
import { useNavigate } from "react-router-dom";

const ChekOut = ({ isOpen, onClose, from }) => {
  if (!isOpen) return null;
  const { checkoutArray, hapusSemua } = useContext(CheckoutContext);
  const { ClearAll } = useContext(BelanjaContext);
  const { myOrder, setMyOrder, addMyOrder } = useContext(MyOrderContext);
  const { clearCart, cart } = useContext(CartContext);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigasi = useNavigate();

  const subtotal = checkoutArray.reduce((sum, item) => sum + item.Total, 0);

  const handleClick = (e) => {
    e.preventDefault();

    const tanggalPesan = new Date().toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const Data = checkoutArray.map((item) => ({
      ...item,
      tglpesan: tanggalPesan,
    }));

    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
      addMyOrder(Data);

      if (from === "cart") {
        clearCart();
        hapusSemua();
      } else {
        ClearAll();
        hapusSemua();
      }
      onClose();
      navigasi("/riwayat");
    }, 1000);
  };

  const handleBack = (e) => {
    e.preventDefault();
    hapusSemua();
    onClose();
  };

  const jumlah = checkoutArray.length;

  const handleKlik = () => {
    setShowSuccess(true);
    navigasi("/riwayat");
  };

  return (
    <div className="fixed z-100 inset-0 flex bg-black/40 items-center justify-center scroll-smooth">
      <div className="bg-[#dce1e1] rounded pb-3 flex-col relative">
        <div className="bg-[#2E4365] px-2 py-2 rounded-t  md:min-w-80 flex flex-col">
          <div className="flex justify-between text-white px-3 md:px-2">
            <h1 className="font-bold">ChekOut</h1>
            <button onClick={handleBack} className="font-bold cursor-pointer">
              X
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-2">
          <div className="flex flex-col gap-3">
            <div
              className="flex flex-col mx-auto gap-3  px-2 min-w-75 max-w-80  font-light 
          "
            >
              <div className="flex flex-col gap-1">
                <div className="flex gap-1">
                  <img src={alamat} alt="" />
                  <p className="md:text-[0.9rem] text-[0.8rem] text-black">
                    Alamat
                  </p>
                </div>

                <div className="flex flex-col bg-white rounded px-2 py-1 ">
                  <div className="flex flex-col ">
                    <div className="flex flex-col w-full border-b pb-2">
                      <div className="flex justify-between">
                        <h1 className="font-black md:text-[1rem] text-[0.9rem]">
                          Bileam mangalla
                        </h1>
                        <button className="md:text-[0.9rem] text-[0.8rem] ">
                          ubah
                        </button>
                      </div>
                      <p className="md:text-[0.9rem] text-[0.8rem] text-[#FFBA08]">
                        +628-1242-9225-97
                      </p>
                    </div>
                    <div className=" md:text-[0.9rem] text-[0.8rem]">
                      <p>
                        Jl.Margosari II, sidorejo, salatiga,kota salatiga ,jawa
                        tengah
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex gap-1">
                  <img src={order} alt="" />
                  <p className="md:text-[0.9rem] text-[0.8rem] text-black">
                    Pesanan
                  </p>
                </div>
                <div className="flex flex-col bg-white rounded px-2 py-1 min-h-20 md:min-h-70 md:max-h-80 max-h-50 overflow-y-scroll">
                  <div className="flex flex-col gap-2">
                    <h1 className="font-semibold md:text-[1rem] text-[0.9rem]">
                      Aura
                      <span className="text-black"> & </span>shopp
                    </h1>

                    {checkoutArray.map((item) => (
                      <div className="border-b  flex gap-2 items-center">
                        <img
                          src={item.gambar}
                          alt=""
                          className=" w-10 h-10 object-contain md:w-18 md:h-auto "
                        />
                        <div>
                          <h1 className="font-bold text-[0.9rem] md:text-[1rem]">
                            {item.nama_tas}
                          </h1>
                          <h1 className="text-[0.9rem] text-[#FFBA08]">
                            <span className="text-[#000000] text-[0.8rem] md:text-[0.9rem]">
                              Rp.{" "}
                            </span>
                            {item.Total.toLocaleString()}
                          </h1>
                          <div className="flex text-[0.7rem] justify-between w-full ">
                            <p>jumlah pesanan:</p>
                            <p className="text-[#FFBA08]">
                              {""}
                              {item.qty}{" "}
                              <span className="text-black">item</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col    w-100 gap-1 px-2">
            <div className="flex gap-1">
              <img src={pembayaran} alt="" />
              <p className="md:text-[0.9rem] text-[0.8rem] text-black">
                Pembayaran
              </p>
            </div>
            <div className="bg-white flex flex-col md:gap-2 gap-0 rounded ">
              {/* metode pembayaran */}
              <div className="font-extralight flex-col flex gap-1 px-2 py-1">
                <p className="text-[#1c3865] font-bold md:text-[0.9rem] text-[0.8rem]">
                  Metode pembayaran
                </p>
                <label className="flex items-center gap-2 md:text-[0.9rem] text-[0.8rem]">
                  <input
                    type="radio"
                    name="pembayaran"
                    value="COD"
                    className="h-2 w-2"
                  />
                  <img src={Bca} alt="BCA.png" className="w-4 object-cover  " />
                  BCA (Bank Central Indonesia)
                </label>
                <label className="flex items-center gap-2 md:text-[0.9rem] text-[0.8rem]">
                  <input
                    type="radio"
                    name="pembayaran"
                    value="cod"
                    className="h-2 w-2 "
                    // onChange={(e) => setMetode(e.target.value)}
                  />
                  <img src={cod} alt="BCA.png" className="w-4" />
                  COD (bayar di tempat)
                </label>
              </div>

              {/* rincian pembayaran */}
              <div className="flex flex-col font-extralight px-2 py-1">
                <p className="text-[#1c3865] font-bold md:text-[0.9rem] text-[0.8rem]">
                  Rincin pembayara
                </p>
                <div className="flex md:text-[0.9rem] text-[0.8rem] justify-between">
                  <p>Subtotal Produk</p>
                  <p className="text-[#FFBA08]">
                    Rp. {subtotal.toLocaleString() || 0}
                  </p>
                </div>
                <div className="flex md:text-[0.9rem] text-[0.8rem] justify-between">
                  <p>Jumlah Produk</p>
                  <p className="text-[#FFBA08]">{jumlah || 0} Produk</p>
                </div>
                <div className="flex md:text-[0.9rem] text-[0.8rem] justify-between">
                  <p>Subtotal pengiriman</p>
                  <p className="text-[#FFBA08]">Rp. 0</p>
                </div>
                <div className="flex md:text-[0.9rem] text-[0.8rem] justify-between">
                  <p>Biaya Penanganan</p>
                  <p className="text-[#FFBA08]">Rp. 0</p>
                </div>
              </div>
              <div className="bg-[#1c3865] rounded-b text-white font-extralight flex justify-between items-center">
                <div className="flex flex-col py-2 px-2 max-w-50">
                  <h1 className="font-bold text-[#FFBA08] md:text-[1rem] text-[0.9rem]">
                    Rp. {subtotal.toLocaleString() || 0}
                  </h1>
                  <p className="md:text-[0.7rem] text-[0.6rem]">
                    dengan membayaran saya menyetujui syarat dan ketentuan
                  </p>
                </div>
                <div className="flex flex-col py-1 px-2 ">
                  <button
                    onClick={handleClick}
                    className="bg-[#FFBA08] text-[0.9rem] hover:bg-amber-500 transition ease-in duration-300 cursor-pointer p-2 rounded-md"
                  >
                    Buat pesanan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showSuccess && (
          <div className="text-[#FFFFFF] absolute inset-0 flex items-center justify-center bg-white/10">
            <div className="bg-[#FFBA08]  w-70 flex flex-col items-center py-5 gap-2  rounded ">
              <img
                src={ceklis}
                alt=""
                className="w-15 h-15 rounded-full border "
              />
              <h1 className="text-[1.2rem] font-semibold">Berhasil!</h1>
              <p className="">berhasil melakukan pembelian</p>
              <button
                onClick={() => handleKlik()}
                className="rounded text-white px-2 py-1 bg-[#00537A] hover:bg-[#3c5b6a] cursor-pointer"
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChekOut;
