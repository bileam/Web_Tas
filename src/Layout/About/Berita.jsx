import tas from "../../assets/gambar_tas/Tas3.jpg";

const Berita = () => {
  return (
    <div className="flex mt-20 w-full ">
      <div className="xl:container mx-auto  w-full ">
        {/* heading */}
        <div className="flex flex-col items-center w-full py-3 ">
          <div
            // data-aos="zoom-in"
            className=" justify-center flex-col flex text-center sm:w-75 md:w-100 lg:w-auto "
          >
            <h1 className="text-[1.9rem] md:text-[2rem]   text-[#00537A] font-extrabold">
              About Us
            </h1>
            <p className="text-[0.9rem] text-wrap font-extralight w-90  lg:w-170">
              Kami percaya bahwa tas bukan hanya pelengkap, tetapi bagian
              penting dari keseharian Anda. Aura & CO hadir untuk menghadirkan
              pilihan tas berkualitas dengan desain modern, fungsional, dan
              nyaman digunakan.
            </p>
          </div>
          <div className="w-full flex flex-col  md:flex-row  md:items-center items-center justify-center  md:gap-5 ">
            <div className="">
              <img
                // data-aos="fade-right"
                src={tas}
                alt=""
                className="object-cover  w-90    sm:h-60 py-8 sm:min-w-70  lg:min-w-90  min-h-90"
              />
            </div>
            <div className="px-5 md:w-100  lg:w-[50%]  flex flex-col gap-1 md:gap-5  ">
              <div className="">
                <h1
                  // data-aos="fade-left"
                  className="font-extrabold   text-[1.5rem]"
                >
                  Selamat Datang di Aura & CO
                </h1>
              </div>
              <div className=" "></div>
              <p
                // data-aos="fade-left"

                className="text-[0.9rem] text-wrap  w-80 sm:80 md:w-90 lg:w-102 xl:w-auto font-extralight"
              >
                Aura & CO adalah toko tas yang menyediakan berbagai koleksi
                untuk kebutuhan harian, kerja, kuliah, hingga perjalanan. Setiap
                produk kami dirancang dengan bahan berkualitas dan detail yang
                memperhatikan kenyamanan serta gaya Anda. Temukan tas yang tepat
                untuk mendukung aktivitas dan mengekspresikan kepribadian Anda
                semua hanya di Aura & CO.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Berita;
