import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const HomeContact = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500, // durasi animasi (ms)
      easing: "ease-in-out", // efek halus
      //   once: true, // animasi hanya terjadi sekali
      //   mirror: false, // tidak animasi balik saat scroll ke atas
    });
  }, []);
  return (
    <div className="flex lg:px-5 md:px-5 flex-col py-20 ">
      <div className=" xl:container lg:mx-auto w-full flex justify-center items-center ">
        <div
          // data-aos="flip-left"
          className="md:flex items-center justify-center border  shadow-2xl  py-7 px-15   gap-5 bg-blue-200/5 rounded-2xl font-Roboto"
        >
          <div className="font-bold  text-2xl">
            Contact <span className="text-green-600">Me</span>
          </div>
          <div className="flex flex-col max-w-60 gap-3">
            <div className="flex flex-col">
              <p className="text-[11px] text-green-500">WE RE TO HALP YOU</p>
              <h1 className="text-3xl">
                <span className="font-black text-green-800">Discuss</span> Your
                Chemical solution needs
              </h1>
            </div>
            <p className="text-sm text-[#cdcdcd]">
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem
              Lorem, ipsum.
            </p>
            <div className="flex gap-4">
              <img src="" alt="" className="border  h-10" />
              <div>
                <p className="text-sm text-[#cdcdcd]">E-Mail</p>
                <h1 className="text-md">BagShop1234@gmail.com</h1>
              </div>
            </div>
            <div className="flex gap-4">
              <img src="" alt="" className="border  h-10" />
              <div>
                <p className="text-sm text-[#cdcdcd]">Phone Number</p>
                <h1 className="text-md">+6281 - 4292 - 2597</h1>
              </div>
            </div>
          </div>
          <form
            action=""
            className="py-4 flex flex-col gap-3 sm:min-w-100 px-10 shadow-2xl bg-linear-to-t from-[#275f3e] to-[#063b17] rounded-xl"
          >
            <ul className="text-sm font-Roboto w-full flex flex-col gap-6 text-[#928f8f]">
              <li className="flex flex-col w-full">
                <label htmlFor="" className="text-white">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border px-2 py-1  text-black rounded-sm w-full text-[12px] bg-[#cdcdcd]"
                />
              </li>
              <li className="flex flex-col w-full">
                <label htmlFor="" className="text-white">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Example@gmail.com"
                  className="border px-2 py-1 text-black rounded-sm w-full text-[12px] bg-[#cdcdcd]"
                />
              </li>
              <li className="flex flex-col w-full">
                <label htmlFor="" className="text-white">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border px-2 py-1 text-black rounded-sm w-full text-[12px] bg-[#cdcdcd]"
                />
              </li>
              <li className="flex flex-col w-full">
                <label htmlFor="" className="text-white">
                  Message
                </label>
                <textarea
                  name=""
                  id=""
                  className="border px-2 py-1 text-black rounded-sm w-full text-[12px] bg-[#cdcdcd]"
                ></textarea>
              </li>
            </ul>
            <div className="flex text-white text-sm">
              <button
                className="flex gap-3  
                hover:bg-green-700
                hover:scale-105 transition duration-300 ease-in
              justify-between items-center px-8 rounded-xl py-2 bg-green-800"
              >
                <img src="" alt="" className="w-5 rounded-full h-5 border" />
                <p>Send</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
