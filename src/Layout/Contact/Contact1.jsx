import home from "../../assets/icont/home_.svg";
import call from "../../assets/icont/call.svg";
import email from "../../assets/icont/email.svg";
const Contact1 = () => {
  return (
    <div className="my-10 ">
      <div>
        <div className="flex flex-col items-center sm:flex-row md:flex-row md:flex-wrap px-2 gap-2 justify-center">
          <div className="rounded border py-4 px-2 flex flex-col gap-2 items-center justify-center sm:w-[40%]">
            <img
              src={home}
              alt=""
              className="w-15 h-15 py-2 bg-[#fec917] rounded-full"
            />
            <h1 className="text-[1.2rem] text-[#00537A] font-bold">VISIT US</h1>
            <p className="text-center text-[0.9rem] font-extralight">
              Kunjungi toko resmi kami untuk melihat koleksi terbaru secara
              langsung
            </p>
            <p className="text-[#00537A]">jl.margosari II salatiga</p>
          </div>
          <div className="rounded border py-4 px-2 flex flex-col gap-2 items-center justify-center sm:w-[40%]">
            <img
              src={call}
              alt=""
              className="w-15 h-15 py-2 bg-[#fec917] rounded-full"
            />
            <h1 className="text-[1.2rem] text-[#00537A] font-bold">CALL US</h1>
            <p className="text-center text-[0.9rem] font-extralight">
              Hubungi kami untuk informasi produk, ketersediaan stok, atau
              bantuan lainnya.
            </p>
            <p className="text-[#00537A]">+62 8123 9435 988</p>
          </div>
          <div className="rounded border py-4 px-2 flex flex-col gap-2 items-center justify-center sm:w-[40%]">
            <img
              src={email}
              alt=""
              className="w-15 h-15 py-2 bg-[#fec917] rounded-full"
            />
            <h1 className="text-[1.2rem] text-[#00537A] font-bold">
              CONTACT US
            </h1>
            <p className="text-center text-[0.9rem] font-extralight">
              Kami siap menerima pertanyaan, kritik, dan saran melalui email.
            </p>
            <p className="text-[#00537A]">tokoAura&co@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact1;
