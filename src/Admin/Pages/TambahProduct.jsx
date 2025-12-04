import { useContext, useEffect, useState } from "react";
import tasAnak from "../../assets/gambar_tas/HomeTasAnak.png";
import { CategoryProduct } from "../Context/CategoryContext";
import { ProductContext } from "../Context/ProdukContext";
import { GetAllProductwith } from "../utils/productHelpers";
import { getProdukByIdkategori } from "../utils/productHelpers";
import ModalTambah from "./ModalTambah";
import { useNavigate } from "react-router-dom";
import { div } from "framer-motion/client";
const TambahProduck = () => {
  const { arrCategory } = useContext(CategoryProduct);
  const { arrProduct, removeData } = useContext(ProductContext);
  const [select, setSelect] = useState("7");
  const [Open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigasi = useNavigate();
  const getAllWithCategori = GetAllProductwith(arrProduct, arrCategory);
  const [kategoribyId, setKategoribyId] = useState(getAllWithCategori);

  // console.log("semuanya", getAllWithCategori);

  // const jumlahProdukBerdasarkanId = getProdukByIdkategori(
  //   getAllWithCategori,
  //   select
  // );

  const handleSelect = (e) => {
    setSelect(e.target.value);
  };

  const handleButtonDelate = (id) => {
    if (confirm("anda yakin ingin menghapus produk?")) {
      removeData(id);
    }
  };

  useEffect(() => {
    const selectedId = parseInt(select);
    setLoading(false);
    if (selectedId === 7) {
      setKategoribyId(getAllWithCategori);
      setLoading(false);
    } else {
      const exist = getAllWithCategori.filter(
        (k) => k.categoryId === parseInt(select)
      );
      setKategoribyId(exist);
      setLoading(false);
    }
  }, [select, arrProduct]);

  // const kategoribyId =
  //   select === "7"
  //     ? getAllWithCategori
  //     : getAllWithCategori.filter((k) => k.categoryId === parseInt(select));

  // const handlenavigasi = () => {
  //   navigasi("/shooping");
  // };

  return (
    <div className="flex px-3  flex-col font-Roboto  rounded  gap-5 overflow-y-scroll h-125 scroll-smooth transition ">
      <div className="flex  justify-between text-sm px-2 sticky top-0 bg-white  py-2">
        <select
          value={select}
          onChange={handleSelect}
          className="flex flex-col  w-40 outline rounded px-1.2 py-1"
          name=""
          id=""
        >
          <option value="7">Semua Product</option>
          {arrCategory.map((item, index) => (
            <option key={index} value={item.id}>
              {item.namakategori}
            </option>
          ))}
        </select>
        <button
          onClick={() => navigasi("/shooping")}
          className="cursor-pointer   text-[12px] text-blue-600 border-b border-blue-500
                  "
        >
          Lihat shoop
        </button>
        {arrCategory.length === 0 ? (
          <button className="cursor-pointer py-1 px-2 outine rounded bg-green-800 text-white font-semibold hover:bg-green-400 transition duration-300 ease-in-out">
            tambahkan kategori terlebih dahulu
          </button>
        ) : (
          <button
            onClick={() => setOpen(true)}
            className="cursor-pointer py-2 px-3 outine rounded bg-green-800 text-white  hover:bg-green-400 transition duration-300 ease-in-out"
          >
            Add Product
          </button>
        )}
      </div>
      {loading ? (
        <div>sedang loading</div>
      ) : (
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-body">
            <thead className="text-[12px] md:text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
              <tr>
                <th scope="col" className="px-6 py-3 font-medium">
                  Gambar
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Nama Produk
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Jenis Tas
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Kapasitas
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Harga
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                  Nama Kategori
                </th>

                <th scope="col" className="px-6 py-3 font-medium">
                  deskripsi
                </th>
                <th scope="col" className="px-6 py-2 font-medium">
                  aksi
                </th>
              </tr>
            </thead>
            <tbody className="text-[#514e4e]  border-b">
              {kategoribyId.map((item, index = 0) => (
                <tr
                  key={index}
                  className="hover:bg-[#cdcdcd] transition duration-500 text-[12px]"
                >
                  <th
                    scope="col"
                    className="px-6 py-3 font-medium  flex items-center gap-2"
                  >
                    {index + 1}
                    <img
                      src={item.gambar}
                      alt=""
                      className="object-cover w-20"
                    />
                  </th>
                  <th scope="col" className="px-6 py-3 font-medium ">
                    {item.nama_tas}
                  </th>
                  <th scope="col" className="px-6 py-3 font-medium">
                    {item.jenis_tas}
                  </th>
                  <th scope="col" className="px-6 py-3 font-medium">
                    {item.kapasitas}
                  </th>
                  <th scope="col" className="px-6 py-3 font-medium">
                    {item.price.toLocaleString()}
                  </th>
                  <th scope="col" className="px-6 py-3 font-medium">
                    {item.namaKategori}
                  </th>
                  <th scope="col" className="px-6 py-3 font-medium">
                    {item.desc}
                  </th>
                  <th className=" px-6 py-3 font-medium  ">
                    <div className="flex gap-2 ">
                      <button
                        onClick={(e) => handleButtonDelate(item.id)}
                        className="cursor-pointer font-medium text-green-600  hover:underline"
                      >
                        Hapus
                      </button>
                      <button className="cursor-pointer font-medium text-green-600  hover:underline">
                        Edit
                      </button>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {/* <div className="grid gap-4  grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-2">
        
          {kategoribyId.map((item, index) => (
            <div
              key={index}
              className="flex mx-auto   items-center text-[14px]  border w-full   py-2"
            >
              <img
                src={item.gambar}
                alt=""
                className="w-40 xl:w-20 xl:h-20 object-cover "
              />
              <div className="px-2 flex flex-col  w-full ">
                <div className="flex justify-between ">
                  <p className="text-green-500 font-semibold">Nama</p>

                  <p className="text-[#585555]">{item.nama_tas}</p>
                </div>
                <div className="flex justify-between  ">
                  <p className="text-green-500 font-semibold">Jenis Tas</p>

                  <p className="text-[#585555]">{item.jenis_tas}</p>
                </div>
                <div className="flex justify-between   ">
                  <p className="text-green-500 font-semibold">Berat Tas</p>

                  <p className="text-[#585555]">{item.berat}</p>
                </div>
                <div className="flex justify-between   ">
                  <p className="text-green-500 font-semibold">Warna Tas</p>

                  <p className="text-[#585555]">{item.warna}</p>
                </div>
                <div className="flex justify-between  ">
                  <p className="text-green-500 font-semibold">Harga Tas</p>
                  <p className="text-[#585555]">
                    Rp. {item.price.toLocaleString()}
                  </p>
                </div>
                <div className="flex justify-between   ">
                  <p className="text-green-500 font-semibold">kategori Tas</p>

                  <p className="text-[#585555]">{item.namaKategori}</p>
                </div>
                <div className="flex gap-4 justify-end mt-4">
                  <button
                    onClick={(e) => handleButtonDelate(item.id)}
                    className="cursor-pointer outline py-1 px-2 rounded bg-green-700 text-white font-semibold"
                  >
                    Hapus
                  </button>
                  <button className="cursor-pointer outline py-1 px-2 rounded bg-green-600 text-white font-semibold">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div> */}

      <ModalTambah isOpen={Open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default TambahProduck;
