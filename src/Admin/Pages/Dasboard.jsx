import Read from "./Read";
import { ProductContext } from "../Context/ProdukContext";
import { CategoryProduct } from "../Context/CategoryContext";
import { useContext, useState } from "react";

import person from "../../assets/Person/person3.jpeg";
import iconKategori from "../../assets/icont/kategori.svg";
import iconproduk from "../../assets/icont/produk.svg";
import iconselect from "../../assets/icont/select.svg";

const Dasboard = () => {
  const { arrCategory } = useContext(CategoryProduct);
  const { arrProduct } = useContext(ProductContext);
  const [selectCategory, setSelectCategori] = useState("1");
  //   const {arrProduct} = useContext()

  const sisaProduk = arrProduct.length;
  const sisaCategori = arrCategory.length;
  // console.log(selectCategory);

  const sisaKategori = arrProduct.map((item) => {
    const kategori = arrCategory.find((k) => k.id === item.categoryId);
    return {
      ...item,
      Namakategori: kategori ? kategori.namakategori : "tidak ada kategori",
    };
  });

  const sisaProdukKategori = sisaKategori.filter(
    (k) => k.categoryId === parseInt(selectCategory)
  ).length;

  // console.log("sisa produk berdasarkan kategori", sisaProdukKategori);

  const handleSelect = (e) => {
    setSelectCategori(e.target.value);
  };

  // console.log(selectCategory);
  return (
    <div className="flex py-2 px-3  md:items-start items-center rounded flex-col gap-5 overflow-y-scroll h-125 scroll-smooth transition ">
      <div className="md:flex gap-2 ">
        <div
          className=" 
          mb-4 md:mb-0
        flex flex-col bg-[#1c3865] text-[#fec917] border rounded-md gap-2  justify-center  shadow w-70 items-center py-2 font-Roboto text-[14px]"
        >
          <div className="flex flex-col items-center">
            <h1 className=" font-light text-[0.9rem]">Good Morning</h1>
            <p className="font-extralight text-[0.8rem] text-white">
              <span className="">Bag</span>Shopp
            </p>
          </div>
          <img
            src={person}
            alt="Profil"
            className="w-25 h-23 outline  rounded-full object-cover"
          />
          <p className="text-[#FFFFFF] font-extralight">Mr. Admin</p>
          <p className="text-sm text-[#FFFFFF] font-extralight">
            pengelola toko
          </p>
        </div>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 items-center ">
          <div className="bg-[#1c3865]  mx-auto  flex  rounded    w-60 h-auto  py-2 font-extrabold text-[14px] px-2 justify-between">
            <div className="flex flex-col gap-2 ">
              <div className="flex-col flex">
                <h1 className="text-3xl  text-[#FFBA08]">{sisaProduk}</h1>
                <p className="font-extralight text-white">Product</p>
              </div>
              <p className="text-[13px] text-white font-extralight">
                Get All Product
              </p>
            </div>
            <div>
              <img src={iconproduk} alt="" className=" rounded-full" />
            </div>
          </div>
          <div className="bg-[#1c3865]  mx-auto  flex  rounded    w-60 h-auto  py-2 font-extrabold text-[14px] px-2 justify-between">
            <div className="flex flex-col gap-2 ">
              <div className="flex-col flex">
                <h1 className="text-3xl  text-[#FFBA08]">{sisaCategori}</h1>
                <p className="font-extralight text-[#FFFFFF]">Category</p>
              </div>
              <p className="text-[13px] font-extralight text-[#FFFFFF]">
                jumlah semua Category
              </p>
            </div>
            <div>
              <img src={iconKategori} alt="" className=" rounded-full " />
            </div>
          </div>
          <div className="bg-[#1c3865]  mx-auto  flex  rounded    w-60 h-auto  py-2 font-extralight text-[14px] px-2 justify-between">
            <div className="flex flex-col gap-2 ">
              <div className="flex-col flex">
                <h1 className="text-3xl font-bold text-[#FFBA08]">
                  {sisaProdukKategori}
                </h1>
                <select
                  value={selectCategory}
                  onChange={handleSelect}
                  name=""
                  id=""
                  className="border-none outline-none text-white "
                >
                  {arrCategory.map((item) => (
                    <option
                      className=" bg-[#1c3865]"
                      key={item.id}
                      value={item.id}
                    >
                      {item.namakategori}
                    </option>
                  ))}
                </select>
              </div>
              <p className="text-[13px] text-[#FFFFFF]">
                jumlah produk by kategori
              </p>
            </div>
            <div>
              <img src={iconselect} alt="" className="rounded-full " />
            </div>
          </div>
        </div>
      </div>
      <Read />
    </div>
  );
};

export default Dasboard;
