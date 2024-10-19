import React from "react";
import { useEffect } from "react";
import imageOne from "../../image/homeImg/14cc31d6d892a17ec5aba43ef18df6ed.jpeg";
import shadowbackground from "../../image/homeImg/PH CITY WOMEN RUN.png";
import AOS from "aos";
import "aos/dist/aos.css";
import LoadBlurHashImage from "../../../lazy/loadBlurHash";
// import Link from "./link";

import Button from "../../Button";

function BecomeApartner() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <>
      <section className="relative bg-[#FEEBFD] flex justify-center items-center w-full h-auto ">
        <div className="static flex flex-col justify-center items-center w-full max-w-[1280px] px-[15px] py-[90px] at500:px-[72px] my-0 mx-auto">
          <div className="flex gap-[30px] flex-col silver:flex-row justify-between items-start silver:items-center w-full">
            <div className="flex justify-start w-full h-auto lg:w-[544px]">
              <LoadBlurHashImage
                src={imageOne}
                blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                className=" bg-blend-multiply bg-[#00000066] w-full h-[420px] lg:w-[544px] rounded-[12px] object-cover overflow-hidden"
                alt="Discover Your Potential"
              />
            </div>
            <div className="flex gap-[20px] flex-col justify-center items-start w-full md:w-[453px]">
              <h4 className="text-[#111E2F]">Partner with us</h4>
              <p className="text-[16px] text-[#7E8EA2] leading-[24px]">
                Just filling in some content till I decide what I want to fill
                Into this space in the mean time lets hold on to this text.
                feeling like I have the masterplan you know
              </p>
              <div className="flex justify-start w-full at500:w-[201px]">
                <Button size="buttons" className="">
                  Become a Partner
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BecomeApartner;
