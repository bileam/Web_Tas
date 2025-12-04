import back from "../../assets/icont/back.svg";
import alamat from "../../assets/icont/alamat.svg";
import express from "../../assets/icont/express.svg";
import detail from "../../assets/icont/detail.svg";
import informasi from "../../assets/icont/informasi.svg";
import tas from "../../assets/gambar_tas/Tas1.png";
import { useLocation, useNavigate } from "react-router-dom";
import { MyOrderContext } from "../Context/MyOrder";
import { useContext } from "react";
const RiwayatDetail = () => {
  const { state } = useLocation();
  const { myOrder } = useContext(MyOrderContext);
  const data = myOrder.find((item) => item.id === state.id);
  const navigasi = useNavigate();
  if (!data) {
    return <p className="text-center">tidak ada data</p>;
  }
  console.log(data);

  return (
    <div className="px-10 flex flex-col md:items-center w-full">
      <div className="px-4 py-1 flex flex-col gap-4 md:w-150">
        <div className="flex flex-col pb-3 border bg-[#fbf7f7] rounded max-h-150 min-h-100 ">
          <div className="flex gap-2 items-center bg-[#2E4365] rounded-t px-1 text-white py-2">
            <button
              onClick={() => navigasi(-1)}
              className="cursor-pointer"
            >
              <img src={back} alt="" className="w-5" />
            </button>
            <h1 className="font-extralight text-[1rem]">Rincian Pengiriman</h1>
          </div>
          <div className="flex flex-col  px-2 py-2">
            <div className="bg-white rounded px-5 py-3">
              <div className="flex flex-col text-[0.8rem]">
                <div className="flex gap-2">
                  <img src={informasi} alt="" />
                  <p>tanggal Pembelian</p>
                </div>
                <p className="px-6 font-extralight">{data.tglpesan}</p>
              </div>
              <div className="flex pl-8 justify-between items-center">
                <p className="text-[0.9rem] font-extralight">
                  yang dapat dilakukan selanjutnya
                </p>
                <div className="flex gap-2 text-[0.9rem] ">
                  <button className=" px-2 py-1 hover:bg-[#2E4365] text-white rounded cursor-pointer bg-[#FFBA08] transition duration-500 ease-in-out">
                    Batalkan pesanan
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col  px-2 py-2">
            <div className="bg-white rounded px-5 py-3 flex flex-col gap-2 ">
              <div className="flex flex-col text-[0.8rem]">
                <div className="flex gap-2">
                  <img src={informasi} alt="" />
                  <p>No. Pesanan</p>
                </div>
                <p className="px-6 font-extralight">00077700077</p>
              </div>
              <div className="flex flex-col text-[0.8rem]">
                <div className="flex gap-2">
                  <img src={alamat} alt="" />
                  <p>Alamat pengiriman</p>
                </div>
                <p className="px-6 font-extralight text-[0.7rem]">
                  Margosari II
                </p>
                <p className="px-6 font-extralight">
                  kota salatiga, sidorejo, salatiga, Jawa tengah
                </p>
              </div>
              <div className="flex flex-col text-[0.8rem] gap-1">
                <div className="flex gap-2">
                  <img src={express} alt="" />
                  <p>Informasi jasa Kirim</p>
                </div>
                <div className="px-6 font-extralight flex gap-2">
                  <p className="font-semibold">paket 1 : </p>
                  <p>Jne Reguler LPS</p>
                </div>
                <div className="px-6 flex gap-2 items-center font-extralight">
                  <img
                    src={data.gambar}
                    alt=""
                    className=" bg-[#FFBA08] w-12 h-12 p-2"
                  />
                  <p>Total {data.qty} item</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col  px-2 py-1">
            <div className="bg-white rounded px-5 py-3 flex flex-col gap-1 ">
              <div className="flex justify-between">
                <div className="flex flex-col text-[0.8rem]">
                  <div className="flex gap-2">
                    <img src={detail} alt="" />
                    <p>Detail Produk</p>
                  </div>
                  <div className="flex gap-2 items-start">
                    <img
                      src={data.gambar || null}
                      alt=""
                      className="w-30 border h-20 object-contain p-3 bg-[#2E4365]"
                    />
                    <div className="flex-col flex text-[0.8rem] font-extralight">
                      <p>{data.nama_tas}</p>
                      <p>Rp. {data.Total.toLocaleString()}</p>
                      <p>{data.qty} item</p>
                      <p>{data.warna}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RiwayatDetail;
