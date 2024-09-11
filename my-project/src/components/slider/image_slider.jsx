import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { GoArrowDown } from "react-icons/go";
import slideImage from "../slider/closeup-on-black-bottle-water-260nw-2418895541.webp";
import slideImage1 from "../slider/closeup-on-black-bottle-water-260nw-2418895541.webp";
import slideImage2 from "../slider/closeup-on-black-bottle-water-260nw-2418895541.webp";
import shape1 from "../slider/shapes/shape1.png";
import shape2 from "../slider/shapes/shape2.png";
import logo from "../slider/TRADEMARKED PH CITY WOMEN PNG 1 3.png";
import Countdown from "../contents/sections/coutDown";


const ImageSlider = () => {
  const slides = [
    {
      image: slideImage,
      title: (
        <>
          Turning <br />
          Business dreams <br />
          into reality
        </>
      ),
      subTitle:
        "The leading travel consolidator, connecting travellers with the world for over 18 years.",
    },
    {
      image: slideImage1,
      title: "Another Slide Title",
      subTitle: "Another Slide Subtitle",
    },
    {
      image: slideImage2,
      title1: "Yet Another Slide Title",
      subTitle1: "Yet Another Slide Subtitle",
    },
  ];
  const targetDate = "2026-10-03T00:00:00";

  return (
    <div id="top" className="slider-container">
      <Fade>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="each-fade flex flex-col justify-center items-center"
          >
            <div
              className="image-container"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundColor: "#000000BF",
                backgroundBlendMode: "multiply",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh", // Adjust the height as needed
                width: "100%",
              }}
            >
              <div className="relative flex justify-between items-center w-full ">
                <div className="flex relative top-[89px] justify-start items-end h-[480.07px] w-full">
                  <img src={shape2} alt="shapes" className="h-auto w-[130px]" />
                </div>
                <div className="flex relative top-[-6px] justify-end items-end h-[480.07px] w-full">
                  <img src={shape1} alt="shapes" className="h-auto w-[130px]" />
                </div>
              </div>
            </div>

            <div className=" relative flex flex-col  justify-center items-center w-full 2xl:w-[1280px] px-[15px] at500:px-[40px] my-0 mx-auto h-full">
              {slide.title && slide.subTitle && (
                <div className="content">
                  <div className="text-container absolute bottom-[129px] flex flex-col justify-center items-center w-full">
                    <div className="flex flex-col justify-center items-center">
                      <img
                        src={logo}
                        alt="logo"
                        className="h-auto w-[76.2px] object-contain"
                      />
                      <h2 className="text-center">
                        <span className="port_txt">
                          Port Harcourt’s Greatest
                        </span>
                        <br /> RUNNING EVENT
                      </h2>
                    </div>
                    <div>
                      <Countdown targetDate={targetDate} />
                    </div>
                  </div>
                </div>
              )}
              {slide.title1 && slide.subTitle1 && (
                <div className="content ">
                  <div className="text-container absolute bottom-[190px] flex justify-center items-center flex-col text-center w-full">
                    <h1
                      className=" font-metropolis  uppercase text-[#E6EAED] text-[29px] leading-[38px] at500:text-[39px] at500:leading-[48px] md:text-[55px] md:leading-[60px]"
                      style={{ fontWeight: "900" }}
                    >
                      {slide.title1}
                    </h1>
                    <p
                      className=" font-metropolis  text-[#E6EAED] text-[14px] leading-[18px] at500:text-[20px] at500:leading-[24px] sm:w-[521px]"
                      style={{ fontWeight: "600" }}
                    >
                      {slide.subTitle1}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </Fade>
      <div className="relative flex flex-col justify-center items-center w-full 2xl:w-[1280px] px-[15px] at500:px-[40px] my-0 mx-auto z-[8]">
        <div className="relative w-full  z-[555] cursor-pointer ">
          <a href="#middle">
            <GoArrowDown className="text-[#FFFFFF] hover:text-[#3580F1] absolute right-0 bottom-[50px]  w-[57.82px] h-[57.82px] object-cover cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
