import React from "react";
import { useEffect } from "react";
import imageOne from "../../image/homeImg/a011595e6083594c8f66c18651dfd68d.gif";
import shape from "../../image/shapes/Frame 11686560754.png";
import logo from "../../image/logo/8e1d23d6755ed3efab7ae67d16b117c0.png";
import shadowbackground from "../../image/homeImg/PH CITY WOMEN RUN.png";
import AOS from "aos";
import "aos/dist/aos.css";

// import Link from "./link";

import Button from "../../Button";

function RunIning() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <>
      <section
        className=" relative flex flex-col justify-center items-center bg-fixed bg-cover px-[20px] sm:px-[50px] py-[200px] h-auto w-full"
        style={{
          backgroundImage: `url(${imageOne})`,
          backgroundColor: "#000000BF",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="static flex flex-col justify-center items-center w-full max-w-[1280px] px-[15px] py-[30px] at500:px-[72px] my-0 mx-auto">
          <div className="relative flex  justify-center items-center w-full h-[314px] ">
            <ul>
              <li>
                <span className="txt4 !text-[48px] !leading-[72px] text-[#848F9F] hover:text-white">
                  Playing the game
                </span>
              </li>
              <li>
                <span className="txt4 !text-[48px] !leading-[72px] hover:text-[#848F9F] text-white">
                  Running for Freedom
                </span>
              </li>
              <li>
                <span className="txt4 !text-[48px] !leading-[72px] hover:text-[#848F9F] text-white">
                  Flipping the Script
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default RunIning;
