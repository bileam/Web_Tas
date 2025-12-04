import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import person1 from "../assets/Person/person1.jpeg";
import person2 from "../assets/Person/person2.jpeg";
import person3 from "../assets/Person/person3.jpeg";
import person4 from "../assets/Person/person4.jpeg";
const Comment = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi (ms)
      easing: "ease-in-out", // efek halus
      //   once: true, // animasi hanya terjadi sekali
      //   mirror: false, // tidak animasi balik saat scroll ke atas
    });
  }, []);
  const Dammy = [
    {
      id: 1,
      nama: "bileam mangalla",
      gambar: person1,
      email: "Ruto@gmail.com",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit illum. Lorem ipsum dolor sit amet consectetur adipisicing elit Laborum, molestias itaque. Ratione excepturi,",
    },
    {
      id: 2,
      nama: "name example",
      gambar: person2,
      email: "example@gmail.com",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit illum. Lorem ipsum dolor sit amet consectetur adipisicing elit Laborum, molestias itaque. Ratione excepturi,",
    },
    {
      id: 3,
      nama: "example name",
      gambar: person3,
      email: "Balmon@gmail.com",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit illum. Lorem ipsum dolor sit amet consectetur adipisicing elit Laborum, molestias itaque. Ratione excepturi,",
    },
    {
      id: 4,
      nama: "bileam mangalla",
      gambar: person4,
      email: "Saber@gmail.com",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit illum. Lorem ipsum dolor sit amet consectetur adipisicing elit Laborum, molestias itaque. Ratione excepturi,",
    },
  ];
  return (
    <div className="flex lg:px-5 md:px-5 flex-col pb-15 font-Roboto">
      <div className="xl:container group  lg:mx-auto w-full flex flex-col gap-5 items-center justify-center px-4 md:px-none">
        <div
          // data-aos="flip-up"
          className="flex flex-col gap-3"
        >
          <h1 className=" text-xl text-green-500">
            Read <span className="text-black font-bold">Review</span>
          </h1>
          <div className="max-w-20  border-b-2 border-green-500 group-hover:translate-x-8 transition-all duration-500 ease-in"></div>
        </div>
        <div>
          <div className="grid  grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4  2xl:grid-cols-6 mx-auto ">
            {Dammy.map((data, index) => (
              <div
                // data-aos="flip-up"
                key={index}
                className="flex flex-col items-center justify-center gap-2 shadow-md hover:scale-110  rounded px-4 py-5   "
              >
                <img
                  src={data.gambar}
                  alt=""
                  className="w-10 h-10 rounded-full rounded-2 scale-110 shadow object-contain"
                />
                <h1 className="font-bold text-sm">{data.email}</h1>
                <p className="text-[11px] text-center">{data.message}</p>
                <h1 className="font-bold text-sm">{data.nama}</h1>
              </div>
            ))}
          </div>
          <div className="border w-full">
            <marquee id="slider" behavior="" direction="left" scrollamount="14">
              {Dammy.map((data, index) => (
                <div
                  // data-aos="flip-up"
                  key={index}
                  className="flex flex-col items-center justify-center gap-2 shadow-md hover:scale-110  rounded px-4 py-5   "
                >
                  <img
                    src={data.gambar}
                    alt=""
                    className="w-10 h-10 rounded-full rounded-2 scale-110 shadow object-contain"
                  />
                  <h1 className="font-bold text-sm">{data.email}</h1>
                  <p className="text-[11px] text-center">{data.message}</p>
                  <h1 className="font-bold text-sm">{data.nama}</h1>
                </div>
              ))}
            </marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
