import { useState } from "react";
import Dasboard from "./Dasboard";
// import Create from "./Create";
import TambahProduck from "./TambahProduct";
import person from "../../assets/Person/person3.jpeg";
import Create from "./CreateDasboard";
import { useNavigate } from "react-router-dom";

const PageAdmin = () => {
  const navigasi = useNavigate();
  const [pilih, setPilih] = useState("dasboard");
  const [nama, setNama] = useState("Home");
  // text-[#f0fff0]
  //   3f704d

  const ClickDasboard = (e) => {
    e.preventDefault();
    setPilih("dasboard");
    setNama("Home");
  };
  const TambahData = (e) => {
    e.preventDefault();
    setPilih("tambahproduct");
    setNama("Add Product");
  };
  const TambahKategori = (e) => {
    e.preventDefault();
    setPilih("tambahkategori");
    setNama("Add Categorry");
  };

  let display;
  if (pilih === "dasboard") {
    display = <Dasboard />;
  } else if (pilih === "tambahkategori") {
    display = <Create />;
  } else if (pilih === "tambahproduct") {
    display = <TambahProduck />;
  }

  // const handlenavigasi = () => {
  //   navigasi("/about");
  // };

  return (
    <div className=" mx-auto  bg-blue-200/10 transition-opacity duration-500 ease-in-out">
      <div className="border flex min-h-screen ">
        <div className="min-w-60 bg-[#0A2472]    shadow  font-Roboto py-2">
          <h1 className="p-2  text-lg font-extrabold  text-[#FFBA08]">
            Bag<span className="text-white">Shop</span>
          </h1>
          <div className="flex flex-col w-full  items-start px-2 py-2 gap-2 text-sm ">
            <button
              onClick={ClickDasboard}
              className={`cursor-pointer transition duration-500 ease-in-out ${
                pilih === "dasboard"
                  ? " bg-[#FFBA08] text-[#0A2472] "
                  : "hover:text-[#053f5c] text-[#FFFFFF] hover:bg-[#FFBA08] hover:outline  "
              }    w-full text-start py-1 px-2 rounded`}
            >
              Home
            </button>

            <button
              onClick={TambahData}
              className={`cursor-pointer transition duration-500 ease-in-out ${
                pilih === "tambahproduct"
                  ? " bg-[#FFBA08] text-[#0A2472] "
                  : "hover:text-[#053f5c] text-[#FFFFFF] hover:bg-[#FFBA08] hover:outline  "
              }    w-full text-start py-1 px-2 rounded`}
            >
              Kelola Product
            </button>
            <button
              onClick={TambahKategori}
              className={`cursor-pointer transition duration-500 ease-in-out ${
                pilih === "tambahkategori"
                  ? " bg-[#FFBA08] text-[#0A2472] "
                  : "hover:text-[#053f5c] text-[#FFFFFF] hover:bg-[#FFBA08] hover:outline  "
              }    w-full text-start py-1 px-2 rounded`}
            >
              Kelola Kategori
            </button>
          </div>
        </div>
        <div className="w-full  px-2 flex flex-col gap-2 font-Roboto">
          <div className="border-b py-1.5 border-[#cdcdcd] px-2 flex justify-between items-center text-[15px]">
            <h1 className="translate-x-3 text-[#0A2472] transition-all duration-500 ease-in font-semibold">
              Dasboard {">"} <span className="text-black">{nama} </span>
            </h1>
            {/* {pilih === "tambahproduct" ? (
              <button
                onClick={handlenavigasi}
                className="cursor-pointer   text-[12px] text-blue-600 border-b border-blue-500
                  "
              >
                Lihat shoop
              </button>
            ) : (
              ""
            )} */}

            <div className="flex justify-center items-center gap-2 text-sm">
              <img
                src={person}
                alt=""
                className="w-8 h-8 rounded-full outline object-cover"
              />
              <p className="text-[#0A2472] ">BroAdmin</p>
              {/* <button>{"->"}</button> */}
            </div>
          </div>
          <div className="px-2">{display}</div>
        </div>
      </div>
    </div>
  );
};

export default PageAdmin;
