import { useEffect, useRef, useState } from "react";
import Burger from "../assets/icont/Burger.svg";
import { Link } from "react-scroll";
import cart from "../assets/icont/cart.svg";
import orders from "../assets/icont/yellow_orders.svg";
import logo from "../assets/Logo_Toko.png";
import admin from "../assets/admin.svg";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  // mengambil scroll
  const [isScroll, setScroll] = useState(false);
  const menuRef = useRef(null); // untuk deteksi klik di luar
  const buttonRef = useRef(null); // untuk tombol hamburger

  // Tutup menu saat scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setOpen(false);
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // Tutup menu saat klik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      // jika klik di luar menu dan tombol hamburger
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (isScroll === true) {
    console.log("di scroll");
  }
  return (
    <nav
      className={`sticky top-0 transition-all duration-500 ${
        isScroll ? " shadow-white/40 bg-white shadow-md" : "bg-white"
      } py-2 px-4  shadow  z-100`}
    >
      {/* Desktop Navbar */}
      <div
        className={`hidden md:flex bg-white py-1 rounded lg:flex relative md:items-center xl:container md:container  mx-auto justify-between font-Rubik text-[14px] lg:px-5`}
      >
        <div className="font-extrabold">
          <a href="#" className="  text-[20px] text-[#fec917]  ">
            {/* Bag
            <span className="text-black ">Shop</span> */}
            <img src={logo} alt="" className="object-cover w-20 h-10" />
          </a>
        </div>

        <div className="flex gap-5  text-black">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-[#fec917]  font-medium transition-all duration-500 ease-in-out"
                : "text-gray-600  "
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-[#fec917]  font-medium transition-all duration-500 ease-in-out"
                : "text-gray-600 "
            }
          >
            About
          </NavLink>

          <NavLink
            to="/shooping"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-[#fec917] font-medium transition-all duration-500 ease-in-out"
                : "text-gray-600  "
            }
          >
            Shopping
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-[#fec917]  font-medium transition-all duration-500 ease-in-out"
                : "text-gray-600 "
            }
          >
            Contact
          </NavLink>
        </div>
        <div className="flex gap-2 text-[#5c5151]">
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-[#fec917]  font-medium transition-all duration-500 ease-in-out"
                : "text-gray-600"
            }
            // className="flex gap-2 hover:text-green-500 transition delay-150"
          >
            <img src={cart} alt="" />
          </NavLink>
          <NavLink
            to="/riwayat"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-[#fec917]  font-medium transition-all duration-500 ease-in-out"
                : "text-gray-600 "
            }
            // className="flex gap-2 hover:text-green-500 transition delay-150"
          >
            <img src={orders} alt="" />
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-[#fec917]  font-medium transition-all duration-500 ease-in-out"
                : "text-gray-600 "
            }
            // className="flex gap-2 hover:text-green-500 transition delay-150"
          >
            <img src={admin} alt="" />
          </NavLink>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden lg:hidden flex justify-between items-center relative">
        <button
          ref={buttonRef}
          className="cursor-pointer flex-col flex gap-1"
          onClick={() => setOpen(!isOpen)}
        >
          <div
            className={`border w-5 border-black ${
              isOpen ? "rotate-45 translate-y-1 tras" : ""
            }  transition-all duration-500`}
          ></div>
          <div
            className={`border w-5 border-black overflow-hidden ${
              isOpen ? "-translate-x-20 opacity-0" : "translate-x-1 opacity-100"
            } transition-all duration-700 ease-in-out`}
          ></div>
          <div
            className={`border w-5 border-black ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            } transition-all duration-500 `}
          ></div>
          {/* <img src={Burger} alt="Menu" className="w-6 h-6" /> */}
        </button>
        <div className="flex flex-row gap-3">
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-[#fec917]  font-medium transition-all duration-500 ease-in-out"
                : "text-gray-600"
            }
            // className="flex gap-2 hover:text-green-500 transition delay-150"
          >
            <img src={cart} alt="" />
          </NavLink>
          <NavLink
            to="/riwayat"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-[#fec917]  font-medium transition-all duration-500 ease-in-out"
                : "text-gray-600 "
            }
            // className="flex gap-2 hover:text-green-500 transition delay-150"
          >
            <img src={orders} alt="" />
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-[#fec917]  font-medium transition-all duration-500 ease-in-out"
                : "text-gray-600 "
            }
            // className="flex gap-2 hover:text-green-500 transition delay-150"
          >
            <img src={admin} alt="" />
          </NavLink>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            ref={menuRef}
            className="absolute left-0 top-full mt-3 w-full flex flex-col gap-2 bg-white px-8 py-4 shadow-lg transition-all duration-300"
          >
            <div className="flex flex-col gap-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-[#fec917]  font-medium transition-all duration-500 ease-in-out"
                    : "text-gray-600  "
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-[#fec917]  font-medium transition-all duration-500 ease-in-out"
                    : "text-gray-600 "
                }
              >
                About
              </NavLink>

              <NavLink
                to="/shooping"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-[#fec917] font-medium transition-all duration-500 ease-in-out"
                    : "text-gray-600  "
                }
              >
                Shopping
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-[#fec917]  font-medium transition-all duration-500 ease-in-out"
                    : "text-gray-600 "
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
