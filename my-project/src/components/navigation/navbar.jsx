import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import Button from "../contents/Button";
import logo1 from "./logos/TRADEMARKED PH CITY WOMEN PNG 1 3.png";
import logo2 from "./logos/TRADEMARKED PH CITY WOMEN PNG 2 2.png";
import Link from "../contents/link";
import "@fontsource/geist-sans";

const Navbar = ({ openOverlay }) => {
  const { pathname } = useLocation();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const isHomePage = pathname === "/";

  useEffect(() => {
    // Set the active link based on the current pathname
    const currentPage = pathname === "/" ? "/" : pathname.substring(1); // Handle "/" for home
    setActiveLink(currentPage);
  }, [pathname]);

  function openMenu() {
    setToggle(true);
  }

  function closeMenu() {
    setToggle(false);
  }

  return (
    <nav
      className={`fixed top-0 z-[999] bg-navColor flex justify-center items-center h-[102px] w-full ${
        isHomePage ? "bg-navColor" : "bg-white"
      }`}
    >
      <div className="relative flex justify-center items-center w-full 2xl:w-[1280px] px-[15px] py-[16px] at500:px-[72px] my-0 mx-auto">
        <div className="relative w-full mx-auto flex md:flex-row justify-between items-start md:items-center">
          <div className="relative flex justify-start items-start mb-2 md:mb-0">
            <Link to="/">
              {isHomePage ? (
                <img
                  src={logo1}
                  alt="logo"
                  className="h-auto w-[76.2px] pr-2 border-r-[3px] border-r-[#E2E2E24A] object-contain"
                />
              ) : (
                <img
                  src={logo2}
                  alt="logo"
                  className="h-auto w-[76.2px] pr-2 border-r-[3px] border-r-[#E2E2E24A] object-contain"
                />
              )}
            </Link>
          </div>

          <ul className="hidden silver:flex justify-end items-center space-x-4">
            <Link to="/" onClick={() => setActiveLink("/")}>
              <li
                className={`py-[10px] px-[10px] capitalize ${
                  activeLink === "/" ? "font-bold " : ""
                } ${isHomePage ? "text-white" : "text-[#111E2F]"}`}
              >
                home
              </li>
            </Link>

            <Link to="/about" onClick={() => setActiveLink("about")}>
              <li
                className={`py-[10px] px-[10px] capitalize ${
                  activeLink === "about" ? "font-bold " : ""
                } ${isHomePage ? "text-white" : "text-[#111E2F]"}`}
              >
                about
              </li>
            </Link>

            <Link to="/news" onClick={() => setActiveLink("news")}>
              <li
                className={`py-[10px] px-[10px] capitalize ${
                  activeLink === "news" ? "font-bold " : ""
                } ${isHomePage ? "text-white" : "text-[#111E2F]"}`}
              >
                news
              </li>
            </Link>

            <Link to="/archives" onClick={() => setActiveLink("archives")}>
              <li
                className={`py-[10px] px-[10px] capitalize ${
                  activeLink === "archives" ? "font-bold " : ""
                } ${isHomePage ? "text-white" : "text-[#111E2F]"}`}
              >
                post event
              </li>
            </Link>

            <li className="py-[10px] w-[159px] pl-[18px]">
              <span className="flex">
                <Button
                  size="medium"
                  onClick={openOverlay}
                  className={`border-[1px] font-Galano border-solid capitalize bg-white ${
                    isHomePage
                      ? "bg-white text-[#320101]"
                      : "!bg-[#8D12AB] text-[#FFFFFF]"
                  }`}
                >
                  Register
                </Button>
              </span>
            </li>
          </ul>

          {/* Mobile Menu */}
          <div className="flex gap-[10px] justify-center items-center silver:hidden cursor-pointer z-[999]">
            <div>
              {toggle ? (
                <AiOutlineClose
                  onClick={closeMenu}
                  size={20}
                  className={` ${scrolled ? "text-white" : "text-[#FFFFFF]"}`}
                />
              ) : (
                <HiMenuAlt3
                  onClick={openMenu}
                  size={30}
                  className={` ${scrolled ? "text-white" : "text-[#FFFFFF]"}`}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
