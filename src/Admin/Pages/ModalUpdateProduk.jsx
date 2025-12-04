import { useContext, useState } from "react";
import { CategoryProduct } from "../Context/CategoryContext";
import { ProductContext } from "../Context/ProdukContext";
import { GetAllProductwith } from "../utils/productHelpers";
const ModalUpdateProduk = ({ isOpen, onClose }) => {
  const [select, setSelect] = useState("");
  const { arrCategory } = useContext(CategoryProduct);
  const { setArrCategory } = useContext(ProductContext);

  // form
  const [namaproduk, setNamaProduk] = useState("");
  const [jenis, setJenis] = useState("");
  const [berat, setBerat] = useState("");
  const [kategori, setkategori] = useState("");
  const [warna, setWarna] = useState("");
  const [kapasitas, setKapasitas] = useState("");
  const [harga, setHarga] = useState("");
  const [gambar, setGambar] = useState(null);
  const [deskripsi, setDeskripsi] = useState("");

  const [view, Setview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // setArrCategory({
    //   nama_tas: namaproduk,
    //   jenis_tas: jenis,
    //   qty: 0,
    //   berat,
    //   warna,
    //   kapasitas,
    //   price: parseInt(harga),
    //   gambar: view,
    //   desc: deskripsi,
    //   categoryId: parseInt(kategori),
    // });
    // console.log(
    //   namaproduk,
    //   ",",
    //   jenis,
    //   ",",
    //   berat,
    //   ",",
    //   kategori,
    //   ",",
    //   warna,
    //   ",",
    //   kapasitas,
    //   ",",
    //   harga,
    //   ",",
    //   view,
    //   ",",
    //   deskripsi
    // );
    onClose();
  };
  return (
    <div className="fixed inset-0  bg-black/50 flex items-center justify-center z-50">
      <div className="flex relative flex-col py-5 rounded  justify-center font-Roboto bg-white px-6  w-100">
        <h1 className="text-center text-green-600">Add To Product</h1>
        <div className="">
          <button
            onClick={onClose}
            className="absolute top-2 right-4 cursor-pointer "
          >
            X
          </button>
        </div>
        {/* form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto py-4">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-1 group">
              <input
                value={namaproduk}
                onChange={(e) => setNamaProduk(e.target.value)}
                type="text"
                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-b-green-600   border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                placeholder=" "
                required
              />
              <label className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                Nama Produk
              </label>
            </div>
            <div className="relative z-0 w-full mb-1 group">
              <input
                value={jenis}
                onChange={(e) => setJenis(e.target.value)}
                id="floating_company"
                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-b-green-600 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                placeholder=" "
                required
              />
              <label className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                Jenis tas
              </label>
            </div>
            <div className="relative z-0 w-full mb-1 group">
              <input
                value={berat}
                onChange={(e) => setBerat(e.target.value)}
                type="text"
                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-b-green-600 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                placeholder=" "
                required
              />
              <label className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                Berat
              </label>
            </div>
            <div className="relative z-0 w-full mb-1 group">
              <label for="underline_select" class="sr-only">
                Pilih
              </label>
              <select
                value={kategori}
                onChange={(e) => setkategori(e.target.value)}
                id="underline_select"
                class="block py-2.5 ps-0 w-full text-sm text-body bg-transparent border-0 border-b-2 border-b-green-600 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
              >
                <option value="">Pilih Kategori</option>
                {arrCategory.map((item) => (
                  <option value={item.id}>{item.namakategori}</option>
                ))}
              </select>
            </div>
            <div className="relative z-0 w-full mb-1 group">
              <input
                value={warna}
                onChange={(e) => setWarna(e.target.value)}
                type="text"
                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-b-green-600 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                placeholder=" "
                required
              />
              <label className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                Warna
              </label>
            </div>
            <div className="relative z-0 w-full mb-1 group">
              <input
                value={kapasitas}
                onChange={(e) => setKapasitas(e.target.value)}
                type="text"
                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-b-green-600 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                placeholder=" "
                required
              />
              <label className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                Kapasitas
              </label>
            </div>
            <div className="relative z-0 w-full mb-1 group">
              <input
                value={harga}
                onChange={(e) => setHarga(e.target.value)}
                type="Number"
                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-b-green-600 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                placeholder=" "
                required
              />
              <label className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                Harga
              </label>
            </div>
            <div className="relative z-0 w-full mb-1 group">
              <input
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setGambar(file);

                  // buat preview
                  Setview(URL.createObjectURL(file));
                }}
                type="file"
                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-b-green-600 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                placeholder=" "
                required
              />
            </div>
            <div className="relative z-0 w-full mb-3 group">
              <textarea
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
                id="message"
                rows="2"
                className="block py-1 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-b-green-600 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
              ></textarea>
              <label
                for="message"
                className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Deskripsi
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="bg-green-700 cursor-pointer rounded text-white box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
          >
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalUpdateProduk;
