import RotatingText from "../../Components/components/RotatingText";
import tasbg from "../../assets/Bg_gambar/AboutBenner.jpeg";

const About1 = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${tasbg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-100 sm:h-110  bg-blend-darken bg-black/40"
    >
      <div className="py-15   px-4 lg:mx-auto xl:container w-full flex rounded-br-full flex-col justify-center gap-6 sm:gap-10  ">
        <div className="flex  items-center sm:justify-center gap-6 h-full sm:gap-18 font-Roboto ">
          <div className="transition duration-300 ease-in gap-4 md:gap-6  flex  sm:w-80 md:w-150 lg:w-150 xl:w-180 2xl:w-300 flex-col   ">
            <h1 className="font-bold text-[#fec917] text-3xl sm:text-5xl  transition-all duration-200 ease-in-out">
              About <span className="text-black">Us</span>
            </h1>
            <div className="flex ">
              <h2 className="flex items-center gap-2 font-extrabold   text-[1rem] text-white ">
                Menyediakan tas yang{" "}
                <span className="text-[1rem]">
                  <RotatingText
                    texts={["Baru", "Elegan", "Menawan"]}
                    mainClassName="px-2 w-20  sm:px-2  font-bold md:px-3 bg-[#fec917] text-[#00537A] overflow-hidden py-1.3 sm:py-1.4 md:py-1.6 flex  justify-center rounded-lg"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
                </span>
              </h2>
            </div>

            <h1 className="text-white text-wrap text-[0.9rem] font-extralight">
              Di Aura & CO, kami menghadirkan berbagai pilihan tas yang
              dirancang untuk memenuhi kebutuhan sehari-hari Anda—mulai dari
              aktivitas kerja, kuliah, hingga perjalanan. Setiap produk dibuat
              dengan bahan berkualitas, desain modern, serta detail yang
              memperhatikan kenyamanan dan gaya.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About1;
