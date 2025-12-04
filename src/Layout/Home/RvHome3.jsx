import tas from "../../assets/gambar_tas/Tas3.jpg";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RvHome3 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  });
  return (
    <div className="flex pb-15 w-full ">
      <div className="xl:container mx-auto  w-full ">
        
        <div className="flex flex-col items-center w-[95%] lg:w-full py-3">
          <div
            // data-aos="zoom-in"
            className=" justify-center flex-col flex text-center w-80 sm:w-75 md:w-100 lg:w-auto "
          >
            <h1 className="text-[1.9rem] md:text-[2rem]  text-[#fec917] font-extrabold">
              About Us
            </h1>
            <p className="text-[0.9rem] text-wrap font-extralight     lg:w-170">
              Kami percaya bahwa tas bukan hanya pelengkap, tetapi bagian
              penting dari keseharian Anda. Aura & CO hadir untuk menghadirkan
              pilihan tas berkualitas dengan desain modern, fungsional, dan
              nyaman digunakan.
            </p>
          </div>
          <div className="w-full flex flex-col  md:flex-row  items-center justify-center   md:gap-5">
            <div className="">
              <img
                // data-aos="fade-right"
                src={tas}
                alt=""
                className="object-cover     sm:h-60 py-8 w-80 px-2 sm:min-w-70  md:min-w-90  min-h-90"
              />
            </div>
            <div className="px-5 md:w-[80%] lg:w-[50%]  flex flex-col gap-5 ">
              <div className="relative overflow-hidden">
                <h1
                  //   data-aos="fade-left"
                  className="font-extrabold  text-[#00537A] text-[1.5rem]"
                >
                  Selamat Datang di Aura & CO
                </h1>
              </div>

              <p
        
                className="text-[0.9rem] text-wrap  w-90  md:w-90 lg:w-102 xl:w-auto"
              >
                Aura & CO adalah toko tas yang menyediakan berbagai koleksi
                untuk kebutuhan harian, kerja, kuliah, hingga perjalanan. Setiap
                produk kami dirancang dengan bahan berkualitas dan detail yang
                memperhatikan kenyamanan serta gaya Anda. Temukan tas yang tepat
                untuk mendukung aktivitas dan mengekspresikan kepribadian Anda
                semua hanya di Aura & CO.
              </p>
              <div>
                <button
                  onClick={() => navigate("/about")}
        
                  //   data-aos="fade-left"
                  className="bg-[#00537A] font-extralight transition duration-300 ease-in-out hover:bg-[#151d21] py-2 px-3  text-white rounded cursor-pointer"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RvHome3;
