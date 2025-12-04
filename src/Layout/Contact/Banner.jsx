import tas from "../../assets/Bg_gambar/AboutBenner.jpeg";
const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${tas})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="h-70 sm:h-100 lg:h-120 bg-blend-darken bg-black/30"
    >
      <div className="lg:mx-auto xl:container w-full flex  flex-col justify-center items-center     h-full">
        <div className="text-white flex flex-col items-center ">
          <h1 className="font-extrabold text-[#fec917] text-[2rem]">
            CONTACT <span className="text-[#ffffff]">US</span>
          </h1>
          <p className="text-[#fec917] font-extrabold">..............</p>
          <p className="font-extralight w-90 md:w-auto  text-justify text-[0.9rem] sm:max-w-[60%]">
            Kami senang mendengar dari Anda! Jika ada pertanyaan, saran, atau
            ingin konsultasi tentang produk AURA & CO., jangan ragu untuk
            menghubungi kami. Kami di sini untuk membantu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
