import { useContext, useState } from "react";
import tasAnak from "../../assets/gambar_tas/HomeTasAnak.png";
import { CategoryProduct } from "../Context/CategoryContext";
import ModalKategori from "./ModalKategori";
import { ProductContext } from "../Context/ProdukContext";

const Create = () => {
  const { arrCategory, removeCategory } = useContext(CategoryProduct);
  const { delateProdukByCategoriId } = useContext(ProductContext);
  const [open, setOpen] = useState(false);

  const [cari, setCari] = useState("");

  const tampilkandata = arrCategory.filter((item) =>
    item.namakategori.toLowerCase().includes(cari.toLowerCase())
  );

  const handleHapus = (id) => {
    if (confirm("anda ingin menghapus data?")) {
      delateProdukByCategoriId(id);
      removeCategory(id);
    }
  };
  return (
    <div className="flex px-3  flex-col font-Roboto  rounded  gap-2 overflow-y-scroll h-125 scroll-smooth transition ">
      <div className="flex  justify-between text-sm px-2 sticky top-0 bg-white  py-2">
        <input
          value={cari}
          onChange={(e) => setCari(e.target.value)}
          type="search"
          placeholder="cari Nama Kategori Tas"
          className="border px-2 py-1 rounded w-80 "
        />
        <button
          onClick={(e) => setOpen(true)}
          className="cursor-pointer py-2 px-3  rounded bg-green-800 text-white  hover:bg-green-400 transition duration-300 ease-in-out"
        >
          Add Category{" "}
        </button>
      </div>
      {/* start table */}
      <table className="w-full text-sm text-left rtl:text-right text-body">
        <thead className="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium">
          <tr>
            <th scope="col" className="p-4 text-center">
              No
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Nama Kategori
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Gambar
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {tampilkandata.length === 0 && (
            <p className="text-center text-[#cdcdcd] font-semibold mt-10 sticky inset-0 top-100 left-[30%]">
              Data kategori tidak ditemukan
            </p>
          )}
          {tampilkandata.map((item, index = 0) => (
            <tr
              key={index}
              className="bg-neutral-primary-soft border-b hover:bg-[#cdcdcd] transition duration-500 border-default hover:bg-neutral-secondary-medium"
            >
              <td className="w-4 p-4">{index + 1}</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-heading whitespace-nowrap text-center"
              >
                {item.namakategori}
              </th>
              <td className="px-6 py-4 text-center flex justify-center">
                <img src={item.gambar} alt="" className="object-cover w-14" />
              </td>
              <td className="px-6 py-4 ">
                <div className="flex gap-5 justify-center">
                  <button
                    onClick={(e) => handleHapus(item.id)}
                    className="cursor-pointer font-medium text-green-600  hover:underline  "
                  >
                    Hapus
                  </button>
                  <button className="cursor-pointer font-medium text-green-600  hover:underline  ">
                    Edit
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* end table */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
        {tampilkandata.length === 0 && (
          <p className="text-center text-[#cdcdcd] font-semibold mt-10">
            Data kategori tidak ditemukan
          </p>
        )}
        {tampilkandata.map((item, index) => (
          <div
            key={index}
            className=" w-full flex flex-col items-center rounded shadow gap-1 pb-4 bg-white"
          >
            <img
              src={item.gambar}
              alt="tasAnak"
              className="max-w-40 md:max-w-50 object-cover"
            />
            <div className="flex gap-2 px-2">
              <p className="text-[15px] font-Roboto text-start">
                <span className="text-green-500 font-semibold">
                  Nama Kategori{" "}
                </span>{" "}
                : {item.namakategori}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={(e) => handleHapus(item.id)}
                className="cursor-pointer w-20 outline py-1 px-2 rounded bg-green-700 text-white font-semibold"
              >
                Hapus
              </button>
              <button className="cursor-pointer w-20 outline py-1 px-2 rounded bg-green-600 text-white font-semibold">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div> */}
      <ModalKategori isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default Create;
