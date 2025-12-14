import kembali from "../../assets/kembali.svg";
import informasi from "../../assets/icont/informasi.svg";
import tas from "../../assets/gambar_tas/Tas1.png";
import { Link, useNavigate } from "react-router-dom";
import { MyOrderContext } from "../Context/MyOrder";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
const ListRiwayat = () => {
  const { myOrder } = useContext(MyOrderContext);
  const navigasi = useNavigate();
  console.log(myOrder);

  const tanggalPesan = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="md:px-10 flex flex-col md:items-center   w-full">
      <div className="md:px-4 py-1 flex flex-col gap-4 md:w-150  ">
        <div className="flex flex-col md:pb-3  bg-[#fbf7f7] rounded md:max-h-150 md:min-h-100 h-150 ">
          <div className="flex gap-2 items-center bg-[#2E4365] rounded-t px-1 text-white py-2">
            <button
              onClick={() => navigasi("/shooping")}
              className="cursor-pointer ml-2"
            >
              <img src={kembali} alt="" className="w-5" />
            </button>
            <h1 className="font-extralight text-[1rem]">Rincian Orderan</h1>
          </div>
          <div className="flex  bg-[#FFBA08]">
            <div className="flex flex-col px-1 py-2">
              <div className="flex gap-2 font-light text-[1rem] items-center">
                <img src={informasi} alt="" className="" />
                <p>Informasi Pesananan</p>
              </div>
              <p className="px-7 text-[0.7rem] font-extralight text-white">
                Silakan melihat pesanan dan Status Pesanan anda
              </p>
              <p className="px-7 text-[0.7rem] font-extralight text-white">
                {tanggalPesan}
              </p>
            </div>
          </div>

          <div className="max-h-100 min-h-90 overflow-y-scroll scroll-smooth duration-500 transition-all ease-linear">
            {myOrder.length === 0 && (
              <p className="text-center text-[#cdcdcd]">Belum ada orderan</p>
            )}
            {myOrder.map((item) => (
              <div className="flex flex-col py-2 px-2 max-h-50 ">
                <div className="flex justify-between">
                  <p className="text-[0.7rem] font-light">Tanggal pesanan</p>
                  <p className="text-[0.7rem] font-light">{item.tglpesan}</p>
                </div>
                <div className="flex justify-between  ">
                  <div className="flex gap-2 items-center font-light  w-full px-2 py-2  rounded bg-white shadow">
                    <img
                      src={item.gambar}
                      alt=""
                      className="w-15 bg-[#2E4365] py-2 px-2 "
                    />
                    <div className="flex flex-col justify-between text-[0.7rem]  w-full">
                      <p className="font-bold">{item.nama_tas}</p>
                      <p className="font-semibold">
                        Rp.{" "}
                        <span className="text-[#FFBA08]">
                          {item.Total.toLocaleString()}
                        </span>
                      </p>
                      <p className="text-[0.6rem] font-semibold text-[#FFBA08]">
                        {item.qty} Item
                      </p>
                    </div>
                    <div className=" flex flex-col gap-2  h-full w-25">
                      <p className="text-[0.6rem] text-[#2E4365]">
                        Dalam Proses
                      </p>
                      <button
                        onClick={() =>
                          navigasi("/riwayatdetail", { state: { id: item.id } })
                        }
                        className="cursor-pointer text-[0.7rem] bg-[#2E4365] text-white rounded py-2 hover:bg-[#FFBA08] transition duration-500 ease-in"
                      >
                        Detail
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListRiwayat;
