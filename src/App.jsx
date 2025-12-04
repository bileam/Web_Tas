import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import DetailCart from "./Layout/Cart/DetailCart";
import Produk from "./Layout/Data/Produk";
import ChekOut from "./Layout/Cart/ChekOut";
import Read from "./Admin/Pages/Read";
import PageAdmin from "./Admin/Pages/PageAdmin";

import TambahProduck from "./Admin/Pages/TambahProduct";
import Create from "./Admin/Pages/CreateDasboard";
import ModalKategori from "./Admin/Pages/ModalKategori";
import Keloladata from "./Admin/Pages/KelolaData";
import ModalUpdateProduk from "./Admin/Pages/ModalUpdateProduk";
import Shooping from "./Pages/Shooping";
import BelanjaModal from "./Layout/Shooping/BelanjaModal";
import Riwayat from "./Pages/Riwayat";
import RiwayatDetail from "./Layout/Riwayat/DetailRiwayat";
import Contact from "./Pages/Contact";
import Login from "./Admin/Pages/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detailCart/:id" element={<DetailCart />} />
        <Route path="/chekout" element={<ChekOut />} />
        <Route path="/homeadmin" element={<PageAdmin />} />
        <Route path="/create" element={<Create />} />
        <Route path="/tambahproduk" element={<TambahProduck />} />
        <Route path="/modalkategori" element={<ModalKategori />} />
        <Route path="/keloladata" element={<Keloladata />} />
        <Route path="updateProduk" element={<ModalUpdateProduk />} />
        <Route path="/shooping" element={<Shooping />} />
        <Route path="/modalbelanja" element={<BelanjaModal />} />
        <Route path="/riwayat" element={<Riwayat />} />
        <Route path="/riwayatdetail" element={<RiwayatDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
