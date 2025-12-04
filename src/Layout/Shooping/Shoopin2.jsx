import bgTas from "../../assets/gambar_tas/HomeTasLaptop.png";
import logocart from "../../assets/icont/CartShooping.svg";
import { CategoryProduct } from "../../Admin/Context/CategoryContext";
import { ProductContext } from "../../Admin/Context/ProdukContext";
import { useContext, useEffect, useState } from "react";
import { GetAllProductwith } from "../../Admin/utils/productHelpers";
import { CartContext } from "../Context/CartContent";
import BelanjaModal from "./BelanjaModal";
import { BelanjaContext } from "../Context/BelanjaContext";

const Shooping2 = () => {
  const { arrCategory } = useContext(CategoryProduct);
  const { arrProduct } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const { addBelanja } = useContext(BelanjaContext);
  const [select, setSelect] = useState("7");
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [belanja, setBelanja] = useState([]);
  const [modalOK, setModalOk] = useState(false);
  const [prov, setProv] = useState();
  const [showModal, setShowModal] = useState(false);

  //   console.log(arrCategory);

  const semuaProduck = GetAllProductwith(arrProduct, arrCategory);
  const [dataSelect, setDataSelect] = useState(semuaProduck);

  useEffect(() => {
    const angkaSelect = parseInt(select);

    let hasil = semuaProduck;

    // filter kategori
    if (angkaSelect !== 7) {
      hasil = hasil.filter((item) => item.categoryId === angkaSelect);
    }

    // filter searching (case insensitive)
    if (search.trim() !== "") {
      hasil = hasil.filter(
        (item) =>
          item.nama_tas.toLowerCase().includes(search.toLowerCase()) ||
          item.namakategori?.toLowerCase().includes(search.toLowerCase())
      );
    }

    setDataSelect(hasil);
  }, [select, search]);

  const handleCert = (produk) => {
    addToCart(produk);
    if (addToCart) {
      setShowModal(true);
      setModalOk(true);
    }
  };

  const ClickOk = () => {
    setModalOk(false);
  };

  const handleBelanja = (produk) => {
    setOpen(true);
    addBelanja(produk);
  };
  useEffect(() => {
    if (modalOK) {
      const timer = setTimeout(() => {
        setModalOk(false);

        setTimeout(() => {
          setShowModal(false);
        }, 300);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [modalOK]);

  return (
    <div className="flex ">
      <div
        div
        // data-aos="zoom-in-left"
        className="xl:container min-h-screen   xl:mx-auto w-full flex       gap-6 sm:gap-10  "
      >
        <div className="flex flex-col border w-full px-5 ">
          {/* ini adalah untuk kategori dan search */}
          <div className="flex gap-2  py-12 sticky top-8 w-full  px-7 bg-white z-50">
            <select
              value={select}
              onChange={(e) => setSelect(e.target.value)}
              name=""
              id=""
              className="py-1.4 px-1 w-40 border rounded-sm text-sm "
            >
              <option value="7" className="">
                Semua Produk
              </option>
              {arrCategory.map((item, index) => (
                <option key={index} value={item.id}>
                  {item.namakategori}
                </option>
              ))}
            </select>
            <input
              type="text"
              id="simple-search"
              class="px-3 py-1.5 md:w-90 w-36    border  border-default-medium rounded-md  text-heading text-sm focus:ring-brand focus:border-brand   placeholder:text-body"
              placeholder="Cari Produk"
              required
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {/* untuk menampilkan produk */}
          <div className="px-7  flex gap-4 flex-col justify-center sm:flex-row md:flex-row  md:flex-wrap md:justify-start">
            {dataSelect.map((produk, index) => (
              <div key={index} className="  pb-5 flex flex-col gap-2">
                <div className="md:w-50  relative group min-h-40 max-h-50   bg-[#014C58] flex flex-col justify-center items-center">
                  <img
                    src={produk.gambar}
                    alt=""
                    className="object-cover max-w-30 md:max-h-30"
                  />
                  <div className=" flex items-end justify-center  bg-black/30 text-white absolute inset-0    group-hover:opacity-100  duration-500 ease-in-out md:opacity-0 ">
                    <div className="flex text-white font-semibold md:group-hover:-translate-y-6 -translate-y-2 -translate-x-15 md:translate-x-0 md:translate-y-0  duration-500 ease-in-out  bg-[#00537A] rounded-lg">
                      <button
                        onClick={() => handleCert(produk)}
                        className="cursor-pointer px-3 hover:bg-[#F5A201] active:bg-[#F5A201]  rounded-l-md transition duration-500 ease-in"
                      >
                        <img src={logocart} alt="" />
                      </button>
                      <button
                        onClick={() => handleBelanja(produk)}
                        className="cursor-pointer px-2 py-2  border-l-2 hover:bg-[#F5A201] active:bg-[#F5A201] rounded-r-md transition duration-500 ease-in "
                      >
                        Beli Sekarang
                      </button>
                      {/* <button className="cursor-pointer px-2">-</button> */}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col text-sm  ">
                  <p className=" font-medium ">{produk.nama_tas}</p>
                  <p className="font-extralight">{produk.namaKategori}</p>
                  <p className="font-medium text-[#F5A201]">
                    Rp. {produk.price.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* modal ok tambah ke keranjang */}
          {showModal && (
            <div
              className={`
             fixed top-[50%] left-0 z-100 transform -translate-y-1/2 
             transition-all duration-700 ease-[cubic-bezier(0.25, 1, 0.5, 1)]
              ${
                modalOK
                  ? "translate-x-0 opacity-100 "
                  : "-translate-x-[400px] opacity-70"
              }
              `}
            >
              <div
                className={`bg-yellow-500 px-4 py-2 rounded-r shadow-xl animate-scale  text-white font-semibold`}
              >
                <p className=" font-extralight">
                  Berhasil di tembahkan ke keranjang
                </p>
                <div className="w-full flex justify-center gap-2 ">
                  <button
                    onClick={ClickOk}
                    className=" bg-white text-yellow-500 px-3 py-1 rounded cursor-pointer"
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <BelanjaModal
          isOpen={open}
          onClose={() => setOpen(false)}
          datas={belanja}
        />
      </div>
    </div>
  );
};

export default Shooping2;
