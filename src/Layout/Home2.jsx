import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import PageHome2 from "./PageHome2";
import BastSale from "./BastSale";

import AOS from "aos";
import "aos/dist/aos.css";

const Home2 = () => {
  const [Content, SetContent] = useState("kategori");

  const HandleKategori = (e) => {
    e.preventDefault();
    SetContent("kategori");
  };
  const HandleBastSaller = (e) => {
    e.preventDefault();
    SetContent("baseSaller");
  };

  let display;
  if (Content === "kategori") {
    display = <PageHome2 />;
  } else if (Content === "baseSaller") {
    display = <BastSale />;
  }

  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="flex lg:px-5 md:px-5 py-5  flex-col gap-5  ">
      <div
        // data-aos="zoom-in-up"
        // data-aos-duration="1000"
        className="xl:container  lg:mx-auto  w-full  flex flex-col items-center gap-6"
      >
        <div className="flex gap-12 font-serif">
          <button
            onClick={HandleKategori}
            className={`cursor-pointer transition duration-400 ease-in
          ${
            Content == "kategori"
              ? "text-md border-b-2 border-green-700"
              : " text-[#cdcdcd] border-b-2 border-white  "
          }`}
          >
            Kategori
          </button>

          <button
            onClick={HandleBastSaller}
            className={`cursor-pointer transition duration-700 ease-in
          ${
            Content == "baseSaller"
              ? "text-md border-b-2 border-green-700"
              : " text-[#cdcdcd] border-b-2 border-white  "
          }`}
          >
            BaseSeller
          </button>
        </div>
        {display}
      </div>
    </div>
  );
};

export default Home2;
