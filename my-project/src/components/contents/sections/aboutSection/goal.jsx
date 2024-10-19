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

function SpecificGoal() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <>
      <section className="relative bg-white flex flex-col justify-center items-center w-full h-auto ">
        <div className="static flex flex-col justify-center items-center w-full max-w-[1280px] px-[15px] py-[110px] at500:px-[72px] my-0 mx-auto">
          <div
            data-aos="fade-down"
            className=" relative flex flex-col justify-center items-center bg-cover px-[20px] sm:px-[50px] py-[200px] h-auto w-full rounded-[40px] "
            style={{
              backgroundImage: `url(${imageOne})`,
              backgroundColor: "#000000BF",
              backgroundBlendMode: "multiply",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative flex  justify-start items-start w-full  ">
              <div className="relative flex gap-[40px] flex-col justify-start items-start w-full md:w-[456px]">
                <h4 className="text-white ">
                  Creative Community with Specific Goals
                </h4>
                <p className="text-[16px] text-[#7E8EA2] leading-[24px]">
                  Just filling in some content till I decide what I want to fill
                  Into this space in the mean time lets hold on to this text.
                  feeling like I have the masterplan you know
                </p>
                <div className="flex justify-start w-full at500:w-[201px]">
                  <Button size="buttons" className="">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex justify-center absolute bottom-[-233px] px-[20px] sm:px-[50px]  md:px-[40px] w-full max-w-[1121px] ">
              <div className=" custom-border custom-blur-shadow flex gap-[20px] flex-col silver:flex-row justify-between items-start silver:items-center w-full  py-[100px] px-[20px] sm:px-[50px] md:pl-[70px] md:pr-[40px] overflow-hidden">
                <div className="flex flex-col silver:w-[600px]">
                  <span className="text-[#111E2F] txt8">Become A Partner</span>
                  <p className="text-[16px] text-[#7E8EA2] leading-[24px]">
                    Learn what it takes to be come one of our Partners and
                    provide eco friendly solutions
                  </p>
                </div>
                <div className="flex justify-start w-full sm:max-w-[201px]">
                  <Button size="buttons" className="">
                    Become a Partner
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="static flex flex-col justify-center items-center w-full max-w-[1121px] px-[15px] py-[190px] at500:px-[40px] my-0 mx-auto">
          <div className="flex flex-col silver:flex-row justify-between items-center w-full">
            <div className="flex gap-[8px] flex-col justify-center items-start w-full  ">
              <h4 className="text-[#111E2F] ">
                Creative Community with Specific Goals
              </h4>
              <p className="text-[16px] text-[#7E8EA2] leading-[24px] md:w-[453px]">
                Just filling in some content till I decide what I want to fill
                Into this space in the mean time lets hold on to this text.
                feeling like I have the masterplan you know
              </p>
            </div>
            <div className="flex gap-[8px] flex-col justify-center items-end w-full ">
              <div className="grid grid-cols-1 at500:grid-cols-2 gap-x-3 gap-y-5 h-auto w-full">
                <div className="flex gap-[8px] rounded-[12px] p-[20px] flex-col justify-center items-start bg-[#121F30] w-full h-[224px] overflow-hidden">
                  <img className="h-auto w-[26.91px]" src={logo} alt="" />
                  <span className="text-white ">PH City Goal 1</span>
                  <p className="text-[16px] text-[#7E8EA2] leading-[24px]">
                    Just filling in some content till I decide what I want to
                    fill Into this space
                  </p>
                  <img
                    className=" absolute right-[100px] h-[200px] w-[200px] object-cover"
                    src={shape}
                    alt=""
                  />
                </div>
                <div className="flex gap-[8px] rounded-[12px] p-[20px] flex-col justify-center items-start bg-[#121F30] w-full h-[224px] overflow-hidden">
                  <img className="h-auto w-[26.91px]" src={logo} alt="" />
                  <span className="text-white ">PH City Goal 1</span>
                  <p className="text-[16px] text-[#7E8EA2] leading-[24px]">
                    Just filling in some content till I decide what I want to
                    fill Into this space
                  </p>
                  <img
                    className=" absolute right-[411px] h-auto w-[91px] rotate-[50deg]"
                    src={shape}
                    alt=""
                  />
                </div>
                <div className="flex gap-[8px] rounded-[12px] p-[20px] flex-col justify-center items-start bg-[#121F30] w-full h-[224px] overflow-hidden">
                  <img className="h-auto w-[26.91px]" src={logo} alt="" />
                  <span className="text-white ">PH City Goal 1</span>
                  <p className="text-[16px] text-[#7E8EA2] leading-[24px]">
                    Just filling in some content till I decide what I want to
                    fill Into this space
                  </p>
                  <img
                    className=" absolute right-[411px] h-auto w-[91px] rotate-[50deg]"
                    src={shape}
                    alt=""
                  />
                </div>
                <div className="flex gap-[8px] rounded-[12px] p-[20px] flex-col justify-center items-start bg-[#121F30] w-full h-[224px] overflow-hidden">
                  <img className="h-auto w-[26.91px]" src={logo} alt="" />
                  <span className="text-white ">PH City Goal 1</span>
                  <p className="text-[16px] text-[#7E8EA2] leading-[24px]">
                    Just filling in some content till I decide what I want to
                    fill Into this space
                  </p>
                  <img
                    className=" absolute right-[118px] h-auto w-[91px] rotate-[50deg]"
                    src={shape}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SpecificGoal;
