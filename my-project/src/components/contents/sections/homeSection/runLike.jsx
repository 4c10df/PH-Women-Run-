import React from "react";
import { useEffect } from "react";
import imageOne from "../../image/homeImg/1d5d5d58530a43a193941eb68bc83221.jpeg";
import imageTwo from "../../image/homeImg/4d2c5a2a724ee65ec14cfa5861477f16.jpeg";
import imageThree from "../../image/homeImg/960090c547af153fd56f4347f0a31e30.jpeg";
import shadowbackground from "../../image/homeImg/PH CITY WOMEN RUN.png";
import AOS from "aos";
import "aos/dist/aos.css";

// import Link from "./link";

import Button from "../../Button";

function RunFast() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <>
      <section className="relative bg-white flex justify-center items-center w-full h-auto ">
        <div className="static flex flex-col justify-center items-center w-full max-w-[1280px] px-[15px] py-[90px] at500:px-[72px] my-0 mx-auto">
          <div className="z-10 flex flex-col gap-[40px] silver:flex-row justify-between items-start w-full">
            <div className="relative flex gap-[40px] flex-col justify-start items-start w-full md:w-[456px]">
              <h4 className="text-[#111E2F]">RUN LIKE NEVER BEFORE</h4>
              <p className="text-[16px] text-[#7E8EA2] leading-[24px]">
                Just filling in some content till I decide what I want to fill
                Into this space in THE mean time lets hold on to this text.
                feeling like I have the masterplan you know
              </p>
              <div className="flex justify-start w-full at500:w-[201px]">
                <Button size="buttons" className="">
                  Save Your Spot
                </Button>
              </div>
            </div>
            <div className="relative flex justify-end items-end w-full h-auto silver:w-[572px] ">
              <div className="relative grid grid-cols-1 silver:grid-cols-3 gap-3 w-full h-full overflow-hidden">
                <div
                  data-aos="fade-down"
                  className=" relative flex flex-col justify-center items-center bg-cover bg-blend-multiply bg-[#00000033] h-[368px]"
                  style={{
                    backgroundImage: `url(${imageOne})`,
                    backgroundColor: "#00000033",
                    backgroundBlendMode: "multiply",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <span className=" absolute bottom-[92px] md:rotate-[-90deg] z-30 ">
                    <h4 className="text-white w-[200px]">10KM RUN</h4>
                  </span>
                </div>

                <div
                  data-aos="flip-left"
                  className=" relative flex flex-col justify-center items-center bg-cover bg-blend-multiply bg-[#00000033] h-[368px]"
                  style={{
                    backgroundImage: `url(${imageTwo})`,
                    backgroundColor: "#00000033",
                    backgroundBlendMode: "multiply",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <span className=" absolute bottom-[92px] rotate-[-90deg] z-30 ">
                    <h4 className="text-white w-[200px]">5KM RUN</h4>
                  </span>
                </div>

                <div
                  data-aos="fade-up-left"
                  className=" relative flex flex-col justify-center items-center bg-cover md:bg-[494px] bg-blend-multiply bg-[#00000033] h-[368px]"
                  style={{
                    backgroundImage: `url(${imageThree})`,
                    backgroundColor: "#00000033",
                    backgroundBlendMode: "multiply",
                    backgroundSize: "cover",
                    // backgroundPosition: "-146px",
                  }}
                >
                  <span className=" absolute top-0 right-0 bg-[#B01116] h-[26px] w-[107px] py-[4px] px-[10px] rounded-bl-[12px] rounded-tr-[4px]">
                    <p className="text-white leading-[18px] text-[14px] !font-medium">
                      Coming soon
                    </p>
                  </span>
                  <span className=" absolute bottom-[107px] rotate-[-90deg] z-30 ">
                    <h4 className="text-white w-[245px]">FAMILY RUN</h4>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=" absolute bottom-[70px] z-0">
            <img
              className=" w-full object-cover z-0"
              src={shadowbackground}
              alt="background"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default RunFast;
