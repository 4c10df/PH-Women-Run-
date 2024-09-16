import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { GoArrowDown } from "react-icons/go";
// import slideImage from "../slider/closeup-on-black-bottle-water-260nw-2418895541.webp";
// import slideImage1 from "../slider/closeup-on-black-bottle-water-260nw-2418895541.webp";
// import slideImage2 from "../slider/closeup-on-black-bottle-water-260nw-2418895541.webp";
import shape1 from "../slider/shapes/shape1.png";
import shape2 from "../slider/shapes/shape2.png";
import logo from "../slider/TRADEMARKED PH CITY WOMEN PNG 1 3.png";
import Countdown from "../contents/sections/coutDown";
import { useState, useEffect } from "react";
import axios from "axios";

const ImageSlider = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const hygraphEndpoint =
    "https://ca-central-1.cdn.hygraph.com/content/cm10t9se900kk07v1y9anmeel/master";

  const query = `{
    heroSection(where: {id: "cm13cwqil4e1q07u37bk6k4yi"}) {
      
    id
    logo {
      url
    }
    schedule
    slideTitle1
    description1
    slideImage1 {
      url
    }
    slideTitle2
    description2
    slideImage2 {
      url
    }
    slideTitle3
    description3
    slideImage3 {
      url
    }
    slideTitle4
    description4
    slideImage4 {
      url
    }
  
      
    }
  }`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(hygraphEndpoint, {
          query: query,
        });
        setData(response.data.data.heroSection);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  const slides = data
    ? [
        {
          image: data.slideImage1.url,
          title: data.slideTitle1,
          subTitle: data.description3,
          schedule: data.schedule,
        },
        {
          image: data.slideImage2.url, // Correct syntax for the image
          title1: data.slideTitle2,
          subTitle1: data.description2,
        },
        {
          image: data.slideImage3.url,
          title1: data.slideTitle3,
          subTitle1: data.description3,
        },
        {
          image: data.slideImage4.url,
          title1: data.slideTitle4,
          subTitle1: data.description4,
        },
      ]
    : [];

  return (
    <div id="top" className="slider-container !w-full">
      <Fade>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="each-fade flex flex-col justify-center items-center !w-full"
          >
            <div
              className="image-container w-full"
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
                        src={data.logo.url}
                        alt="logo"
                        className="h-auto w-[76.2px] object-contain"
                      />

                      <h2 className="text-center">
                        <span className="port_txt">{slide.title}</span>
                        <br /> {slide.subTitle}
                      </h2>
                    </div>
                    <div>
                      <Countdown targetDate={slide.schedule} />
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
              {/* {slide.title2 && slide.subTitle2 && (
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
              )} */}
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
