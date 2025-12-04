import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import logo from "../assets/Logo_Toko.png";
const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // durasi animasi (ms)
      easing: "ease-in-out", // efek halus
      //   once: true, // animasi hanya terjadi sekali
      //   mirror: false, // tidak animasi balik saat scroll ke atas
    });
  }, []);
  return (
    <div
      // data-aos="zoom-in-up"
      className="bg-[#2E4365] h-50 text-[#FFFFFF] font-medium p-2 "
    >
      <div className=" h-full flex flex-col justify-center items-center gap-5 ">
        <h1 className=" text-2xl text-[#FFBA08] font-extrabold">
          Aura <span className="text-white">&</span>{" "}
          <span className="text-[#FFBA08] text-md">Co.</span>
        </h1>
        <img src={logo} alt="" className="object-cover w-40 bg-white/20" />
        {/* <ul className="flex gap-5 text-sm text-white">
          <li>Home</li>
          <li>Produk</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul className="flex gap-5">
          <li className="border h-8 w-8 rounded-full">
            <img src="" alt="" />
          </li>
          <li className="border h-8 w-8 rounded-full">
            <img src="" alt="" />
          </li>
          <li className="border h-8 w-8 rounded-full">
            <img src="" alt="" />
          </li>
        </ul> */}
        <p className="text-sm text-white">
          @2025 all right reserved.
          <span className="text-[#FFBA08]"> bagShop Produk tas terpercaya</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
