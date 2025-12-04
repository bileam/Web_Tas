import tas1 from "../assets/gambar_tas/tas-kulit.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SplitText from "../Components/components/SplitText";

const Home1 = () => {
  useEffect(() => {
    AOS.init({
      // duration: 500, // durasi animasi (ms)
      easing: "ease-in-out", // efek halus
      //   once: true, // animasi hanya terjadi sekali
      //   mirror: false, // tidak animasi balik saat scroll ke atas
    });
  }, []);

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  // bg-[#e2f5f5]
  return (
    <div className="flex   min-h-screen  bg-[#ffff] mb-10">
      <div
        div
        // data-aos="zoom-in-left"
        className="xl:container  p-15 lg:mx-auto w-full flex bg-[#275f3e]  shadow flex-col justify-center gap-6 sm:gap-10 md:flex-row md:justify-between items-center "
      >
        <div className="md:w-250 order-1  font-sans  flex flex-col gap-2 text-center  md:text-left">
          <h1 data-aos-duration="2500" className="text-left ">
            <SplitText
              className="font-Momo sm:text-5xl text-3xl text-[#4f903d] md:text-left "
              text="Selamat datang di"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              // textAlign="left"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <div className="text-center mt-2">
              <SplitText
                text="Bag Shop"
                className="sm:text-5xl text-3xl font-Momo text-white"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                // textAlign="left"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </div>
          </h1>
          <p data-aos-duration="2000" className="text-md text-[#939191]">
            <SplitText
              text="
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, est
              dignissimos ipsum iste aut temporibus repudiandae vel illo, quaerat
              deserunt delectus totam in fuga corrupti modi dolore praesentium
              voluptates doloremque.
              "
              className="font-sans text-left sm:text-md text-sm"
              delay={50}
              duration={0.2}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </p>
        </div>
        <div className="w-full  flex justify-center items-center md:order-2">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="sm:h-90 sm:w-90 h-50 w-50 rounded-full shadow flex justify-center items-center bg-[#ffff]  rounded-br-full "
          >
            <div
              data-aos="zoom-in"
              data-aos-duration="2500"
              className="animate-pulse sm:h-70 sm:w-70 transition-all duration-1000  hover:scale-105 h-40 w-40 shadow-2xl  rounded-full bg-[#447853] flex items-center justify-center"
            >
              <img
                data-aos="zoom-in"
                data-aos-duration="3000"
                className="w-30 h-30 sm:h-70 sm:w-70 "
                src={tas1}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home1;
