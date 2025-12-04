import tas1 from "../assets/gambar_tas/tas-kulit.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import tas from "../assets/Bg_gambar/bg_1.jpg";
const HomeAbout = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // durasi animasi (ms)
      easing: "ease-in-out", // efek halus
      //   once: true, // animasi hanya terjadi sekali
      //   mirror: false, // tidak animasi balik saat scroll ke atas
    });
  }, []);
  return (
    <div className="flex lg:px-5 md:px-5  flex-col gap-5">
      <div
        // data-aos="fade-right"
        className="xl:container lg:mx-auto  w-full  flex flex-col  gap-6 pt-26 items-center "
      >
        {/* pe,bungkus */}
        <div className="sm:flex gap-15 justify-center  ">
          <div
            // data-aos="fade-right"
            className="transition flex items-center justify-center duration-500 mb-6 sm:mb-0 ease-in-out p-4 
              rounded-r-full sm:rounded-r-none
              bg-green-800
               sm:rounded-tl-[50%]
               sm:w-70 w-80
              sm:rounded-br-[50%] "
          >
            <img
              src={tas}
              alt=""
              className="sm:w-70 w-80 rounded-r-full sm:rounded-r-none sm:rounded-tl-[50%] sm:rounded-br-[50%] "
            />
          </div>
          <div className="flex flex-col gap-2  items-center    sm:max-w-[50%]">
            <div
              // data-aos="fade-left"
              className="flex flex-col  gap-3 group font-Roboto items-start sm:items-start px-2 sm:px-0"
            >
              <div className="flex flex-col gap-3 ">
                <h1 className="font-bold text-xl">
                  About <span className="text-green-600">Us</span>
                </h1>
                <div className="border-b-3 max-w-[75%] border-green-500 group-hover:translate-x-5 transition duration-700 ease-in-out"></div>
              </div>
              <p className="text-[#939191] text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, exercitationem cum! Minima aperiam expedita modi
                perferendis dignissimos nemo. Placeat reprehenderit excepturi
                qui animi ullam veniam quasi inventore reiciendis esse iusto?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
                saepe repellendus? Facere aspernatur suscipit exercitationem
                ipsa dolorum est excepturi porro nobis provident corrupti
                laboriosam repellat at voluptate, accusamus doloribus beatae.
              </p>
              <button
                className="cursor-pointer border px-4 py-1 shadow-2xl 
              rounded-tl-2xl rounded-br-2xl
              hover:bg-green-700 bg-green-800  text-white"
              >
                About
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
