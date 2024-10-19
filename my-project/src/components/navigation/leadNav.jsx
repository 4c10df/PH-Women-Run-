import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import Button from "../contents/Button";
import logo1 from "./logos/TRADEMARKED PH CITY WOMEN PNG 1 3.png";
import logo2 from "./logos/156a5363dc0856d3728fb5e10c7538f4.png";
import Link from "../contents/link";
import "@fontsource/geist-sans";

const LeaderNav = ({ openOverlay }) => {
  const { pathname } = useLocation();
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

  return (
    <nav className="fixed top-[86px] z-[999] bg-[#F9FBFC] flex justify-center items-center h-[64px] w-full">
      <div className="relative flex justify-center items-center w-full 2xl:w-[1280px] px-[15px] py-[16px] at500:px-[72px] mx-auto">
        <div className="relative w-full flex md:flex-row justify-between items-center">
          {/* Desktop Menu */}
          <ul className=" flex justify-end items-center space-x-4">
            <Link className="flex w-full " to="/post-Events">
              <li
                className={`relative flex gap-[10px] capitalize items-center text-[#05284C] py-[10px] pr-[10px] ${
                  activeLink === "post-Events"
                    ? "border-b-[4px] border-b-[#8D12AB]"
                    : ""
                }`}
              >
                <span>Leader Boards</span>
              </li>
            </Link>
            <Link className="flex w-full " to="/gallery">
              <li
                className={`relative flex gap-[10px] capitalize items-center text-[#05284C] py-[10px] pr-[10px] ${
                  activeLink === "gallery"
                    ? "border-b-[4px] border-b-[#8D12AB]"
                    : ""
                } ${isHomePage ? "hidden" : "hidden"}`}
              >
                <span>Gallery</span>
              </li>
            </Link>
            <Link className="flex w-full " to="/gallery">
              <li
                className={`relative flex gap-[10px] capitalize items-center text-[#05284C] py-[10px] pr-[10px] ${
                  activeLink === "gallery"
                    ? "border-b-[4px] border-b-[#8D12AB]"
                    : ""
                }`}
              >
                <span>Gallery</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default LeaderNav;
