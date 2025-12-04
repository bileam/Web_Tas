import { useNavigate } from "react-router-dom";
import bgTas from "../../assets/Bg_gambar/TampaBG1.png";
const Shooping1 = () => {
  const navigasi = useNavigate();
  return (
    <div className="flex  bg-[#ffff]">
      <div
        style={{
          backgroundImage: `url(${bgTas})`,
          backgroundSize: "contain", 
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        // data-aos="zoom-in-left"
        className="xl:container px-10 h-90  lg:mx-auto w-full flex bg-cover bg-center      bg-[#fec917]   gap-6 sm:gap-10  "
      >
        <div className="flex     items-center justify-center w-full  py-4 px-2">
          <div className="font-normal relative flex flex-col gap-4 items-start  ">
            <div className="flex flex-col ">
              <p className="font-medium text-sm text-white">
                Tas Cantik untuk Segala Kesempatan
              </p>
              <h1 className="font-extrabold  text-4xl  text-[#14213d]">
                EDISI
                <span className="text-white"> AURA & CO</span>
              </h1>
            </div>
            <button
              onClick={() => navigasi("/")}
              className=" px-5 py-2 shadow   text-[#fec917] bg-[#14213d] hover:bg-[#00537A]   text-[13px] font-semibold rounded-sm cursor-pointer   transition duration-300  ease-in-out "
            >
              Home Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shooping1;
