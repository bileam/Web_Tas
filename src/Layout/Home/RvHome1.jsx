import { useNavigate } from "react-router-dom";
import Carousel from "../../Components/components/Carousel.jsx";
import gambar1 from "../../assets/Bg_gambar/TasKita1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const RvHome1 = () => {
  const navigasi = useNavigate();
  const [putar, setputar] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
    const timer = setTimeout(() => {
      console.log("Timeout 2 detik");
      setputar(true);
    }, 2000);

    // Cleanup agar tidak memory leak
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex min-h-screen ">
      <div
        // data-aos="zoom-in"
        className="xl:container relative lg:mx-auto w-full flex shadow flex-col  gap-6 sm:gap-10 md:justify-between  px-15 py-5 md:py-15 overflow-hidden"
      >
        {/* Background blur */}
        <div
          className="absolute inset-0 bg-bottom bg-contain "
          style={{
            backgroundImage: `url(${gambar1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
          }}
        ></div>
        {/* Overlay hitam */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Konten */}
        <div className="relative z-10 text-white w-full   h-full flex flex-col  items-center justify-center ">
          <div className="flex flex-col justify-start   ">
            <h1 className="font-extrabold text-[1.5rem] ">
              Lengkapi Gayamu Bersama{" "}
              <span
                className={`text-[2rem] font-black text-[#fec917] inline-block transform 
              
                // putar ? "rotate-180" : ""
                 
                transition-transform duration-500`}
              >
                AURA & CO
              </span>
            </h1>
            <h1 className="text-white text-[1rem] ">
              SERIES BEAUTY & CLASS BAG
            </h1>
            <div className="mt-2">
              <button
                onClick={() => navigasi("/shooping")}
                className="cursor-pointer py-1 px-2 rounded border shadow border-[#fec917] active:bg-[#00537A]   transition duration-50 ease-in"
              >
                Shopping Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RvHome1;
