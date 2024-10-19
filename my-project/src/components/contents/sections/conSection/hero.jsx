import React from "react";
import { useEffect } from "react";
import imageOne from "../../image/homeImg/1d5d5d58530a43a193941eb68bc83221.jpeg";
import shape from "../../image/shapes/Frame 11686560754.png";
import logo from "../../image/logo/8e1d23d6755ed3efab7ae67d16b117c0.png";
import shadowbackground from "../../image/homeImg/PH CITY WOMEN RUN.png";
import AOS from "aos";
import "aos/dist/aos.css";

// import Link from "./link";

import Button from "../../Button";

function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <>
      <section
        className=" relative flex flex-col justify-center items-start bg-cover px-[20px] sm:px-[50px] py-[200px] h-auto w-full "
        style={{
          backgroundImage: `url(${imageOne})`,
          backgroundColor: "#000000BF",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="static flex flex-col justify-center items-center w-full max-w-[1280px] px-[15px] py-[110px] at500:px-[72px] my-0 mx-auto">
          <div className="relative flex  justify-start items-start w-full  ">
            <div className="relative flex gap-[40px] flex-col justify-start items-start w-full md:w-[456px]">
              <h4 className="text-white ">
                Creative Community with Specific Goals
              </h4>
              <p className="text-[16px] text-[#E1E6ED] leading-[24px]">
                Just filling in some content till I decide what I want to fill
                Into this space in the mean time lets hold on to this text.
                feeling like I have the masterplan you know
              </p>
              <div className="flex justify-start w-full at500:w-[201px]">
                <Button size="buttons" className="">
                  Register
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
