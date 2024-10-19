import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import Button from "../contents/Button";
import logo1 from "./logos/TRADEMARKED PH CITY WOMEN PNG 1 3.png";
import logo2 from "./logos/156a5363dc0856d3728fb5e10c7538f4.png";
import Link from "../contents/link";
import "@fontsource/geist-sans";

const Navbar = ({ openOverlay }) => {
  const { pathname } = useLocation();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const currentPage = pathname === "/" ? "/" : pathname.substring(1);
    setActiveLink(currentPage);
  }, [pathname]);

  const openMenu = () => setToggle(true);
  const closeMenu = () => setToggle(false);

  return (
    <nav
      className={`fixed top-0 z-[999] flex justify-center items-center h-[102px] w-full 
        ${
          isHomePage
            ? scrolled
              ? "bg-white text-white"
              : "bg-navColor text-[#FFFFFF]"
            : "bg-white"
        }
      `}
    >
      <div className="relative flex justify-center items-center w-full 2xl:w-[1280px] px-[15px] py-[16px] at500:px-[72px] mx-auto">
        <div className="relative w-full flex md:flex-row justify-between items-center">
          <div className="flex items-start">
            <Link to="/">
              <img
                src={isHomePage ? (scrolled ? logo2 : logo1) : logo2}
                alt="logo"
                className="h-auto w-[76.2px] pr-2 border-r-[3px] border-r-[#E2E2E24A] object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden silver:flex justify-end items-center space-x-4">
            {["home", "about", "Conference", "news", "post-Events"].map((link) => (
              <Link
                to={`/${link === "home" ? "" : link}`}
                key={link}
                onClick={() => setActiveLink(link === "home" ? "/" : link)}
              >
                <li
                  className={`py-[10px] px-[10px] capitalize ${
                    activeLink === (link === "home" ? "/" : link)
                      ? "font-bold"
                      : ""
                  } ${
                    isHomePage
                      ? scrolled
                        ? "text-[#111E2F]"
                        : "text-[#FFFFFF]"
                      : "text-[#111E2F]"
                  }`}
                >
                  {link}
                </li>
              </Link>
            ))}

            <li className="py-[10px] w-[159px] pl-[18px]">
              <Button
                size="medium"
                onClick={openOverlay}
                className={`border-[1px] font-Galano border-solid capitalize ${
                  isHomePage
                    ? scrolled
                      ? "bg-[#8D12AB] text-[#FFFFFF]"
                      : "bg-white text-[#320101]"
                    : "bg-[#8D12AB] text-[#FFFFFF]"
                }`}
              >
                Register
              </Button>
            </li>
          </ul>

          {/* Mobile Menu */}
          <div className="flex gap-[10px] justify-center items-center silver:hidden cursor-pointer z-[999]">
            <div>
              {toggle ? (
                <AiOutlineClose
                  onClick={closeMenu}
                  size={20}
                  className={`${scrolled ? "text-[#8D12AB]" : "text-white"}`}
                />
              ) : (
                <HiMenuAlt3
                  onClick={openMenu}
                  size={30}
                  className={`${scrolled ? " text-[#8D12AB]" : "text-white"}`}
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
