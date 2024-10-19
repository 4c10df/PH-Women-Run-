import React from "react";
import { useEffect } from "react";
import roundground from "../../image/homeImg/g12.png";
import imageRun from "../../image/homeImg/9a2ba7fbf62a25c9ca5a55b37526bc19.png";
// import shape1 from "../../image/homeImg/960090c547af153fd56f4347f0a31e30.jpeg";
import shadowbackground from "../../image/homeImg/PH CITY WOMEN RUN.png";
import AOS from "aos";
import "aos/dist/aos.css";

import Button from "../../Button";

function RunLikeNever() {
  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  return (
    <>
      <section className="relative bg-white flex justify-center items-center w-full h-auto overflow-hidden">
        <div className="static flex flex-col justify-center items-center w-full max-w-[1280px] px-[15px] py-[90px] at500:px-[72px] my-0 mx-auto">
          <img
            className="z-10 h-auto sm:h-[825px] w-full sm:w-[825px] object-cover"
            src={roundground}
            alt="textbackground"
          />
          <div className="z-10 absolute">
            <img
              data-aos="fade-left"
              className="w-full  max-w-[1539px]"
              src={imageRun}
              alt="textbackground"
            />
          </div>
          <div className=" absolute z-0">
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

export default RunLikeNever;
