import Navbar from "../Components/Navbar";
import Home1 from "../Layout/Home1";
import Home2 from "../Layout/Home2";
import { Element } from "react-scroll";
import HomeAbout from "../Layout/HomeAbout";
import Footer from "../Components/Footer";
import HomeContact from "../Layout/HomeContact";
import Comment from "../Layout/Comment";
import RvHome1 from "../Layout/Home/RvHome1";
import RvHome2 from "../Layout/Home/RVHome2";
import RvHome3 from "../Layout/Home/RvHome3";

const Home = () => {
  return (
    <Element id="beranda">
      <Navbar />
      <RvHome1 />
      <RvHome2 />
      <RvHome3 />
      <Footer />
    </Element>
  );
};

export default Home;
