import tas from "../../assets/gambar_tas/HomeTasTravel.png";
import { CategoryProduct } from "../../Admin/Context/CategoryContext";
import { useContext } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const RvHome2 = () => {
  const { arrCategory } = useContext(CategoryProduct);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="flex pt-25 pb-10 w-full ">
      <div className="xl:container mx-auto  w-full px-3">
        <div className="flex flex-col items-center py-3">
          <div
            // data-aos="zoom-in-down"
            className=" justify-center flex-col flex text-center sm:w-75 md:w-80 lg:w-auto "
          >
            <h1 className="text-[1.9rem] md:text-[2rem]  text-[#fec917] font-extrabold">
              OUR KATEGORY
            </h1>
            <p className="text-[0.9rem] font-extralight">
              Jelajahi Kategori Tas Aura & CO—pilihan Terbaik Untuk Setiap
              Aktivitas Dan Gaya Hidup.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center mt-13">
          <div className="flex flex-wrap  w-full justify-center gap-2  ">
            {arrCategory.map((item, index) => (
              <div
                // data-aos="zoom-in-up"
                key={index}
                className=" group   bg-[#F5A201] relative   items-center rounded justify-center w-50  sm:w-60   group-hover:bg-black/20 flex flex-col"
              >
                <div className="md:group-hover:bg-black/70 bg-black/70 md:bg-[#F5A201]  w-full  flex justify-center p-2 transition duration-500 ease-in-out rounded">
                  <img
                    src={item.gambar}
                    alt=""
                    className=" object-cover group-hover:shadow-2xl group-hover:shadow-white  group-hover:scale-110 transition duration-700 ease-in-out"
                  />
                </div>
                <div className="absolute flex items-end justify-center  duration-500 ease-in-out rounded inset-0 opacity-100 group-hover:opacity-100 text-white ">
                  <p className="md:translate-y-0 -translate-y-20  md:group-hover:opacity-100 font-extrabold opacity-100 md:opacity-0 lg:group-hover:-translate-y-30 md:group-hover:-translate-y-30  group-hover:-translate-y-20 group-hover:opacity-100  duration-500 ease-in-out transition">
                    {item.namakategori}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RvHome2;
