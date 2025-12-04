import tas1 from "../assets/gambar_tas/tas-kulit.png";
import tas2 from "../assets/gambar_tas/Tas1.png";
import TasAnak from "../assets/gambar_tas/HomeTasAnak.png";
import TasPria from "../assets/gambar_tas/HomeTasPria.png";
import TasTravel from "../assets/gambar_tas/HomeTasTravel.png";
import tasSekolah from "../assets/gambar_tas/HomeTasSekolah.png";
import tasLaptop from "../assets/gambar_tas/HomeTasLaptop.png";

const PageHome2 = () => {
  const dammy = [
    {
      id: 1,
      nama_tas: "women's bags",
      jenis_tas: "tas tangan",
      berat: "4kg",
      warna: "merah",
      kapasitas: "25 liter",
      harga: 500000,
      gambar: tas1,
      desc: "tas ransel cewek Koleksi Tas Wanita",
    },
    {
      id: 2,
      nama_tas: "men's bags",
      jenis_tas: "tas tangan",
      berat: "4kg",
      warna: "merah",
      kapasitas: "25 liter",
      harga: 100000,
      gambar: TasPria,
      desc: "tas keren terpercaya",
    },
    {
      id: 2,
      nama_tas: "children's bags",
      jenis_tas: "tas tangan",
      berat: "4kg",
      warna: "merah",
      kapasitas: "25 liter",
      harga: 500000,
      gambar: TasAnak,
      desc: "tas ransel cewek Koleksi Tas Wanita",
    },
    {
      id: 4,
      nama_tas: "travel bag",
      jenis_tas: "tas tangan",
      berat: "4kg",
      warna: "merah",
      kapasitas: "25 liter",
      harga: 500000,
      gambar: TasTravel,
      desc: "tas ransel cewek Koleksi Tas Wanita",
    },
    {
      id: 5,
      nama_tas: "School Bag",
      jenis_tas: "tas tangan",
      berat: "4kg",
      warna: "merah",
      kapasitas: "25 liter",
      harga: 500000,
      gambar: tasSekolah,
      desc: "tas ransel cewek Koleksi Tas Wanita",
    },
    {
      id: 5,
      nama_tas: "Laptop Bag",
      jenis_tas: "tas tangan",
      berat: "4kg",
      warna: "merah",
      kapasitas: "25 liter",
      harga: 500000,
      gambar: tasLaptop,
      desc: "tas ransel cewek Koleksi Tas Wanita",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 md:grid-cols-4 transition duration-300 ease-in ">
      {/* awal */}
      {dammy.slice(0, 6).map((item, index) => (
        <div
          key={index}
          className="flex flex-col ease-in-out   bg-[#fffff] font-Roboto  gap-2 p-2  w-50 md:60 lg:w-full"
        >
          <div className="border  py-2 relative group/inner flex flex-col gap-2">
            <img
              src={item.gambar}
              className="w-full object-contain"
              alt="testing"
            />
            <div className="flex justify-center  right-9  absolute  opacity-0 group-hover/inner:opacity-100 group-hover/inner:translate-y-3   transition duration-700 ease-in-out ">
              <button className="cursor-pointer  font-Roboto w-full font-Roboto text-sm transition duration-500  text-white  bg-green-800 hover:bg-green-500   px-4 py-2 rounded-2xl">
                view all
              </button>
            </div>
          </div>
          <div className="flex justify-center  font-Roboto ">
            <div className="flex flex-col text-center">
              <p className="text-[16px] ">{item.nama_tas}</p>
              <p className="text-[12px] text-[#877e7e]">{item.desc}</p>
              {/* <p className="text-[13px] text-green-500">Rp.{item.harga}</p> */}
            </div>
          </div>
        </div>
      ))}
      {/* akhir */}
    </div>
  );
};

export default PageHome2;
