import React from "react";
import { useEffect } from "react";
import image from "../../image/homeImg/960090c547af153fd56f4347f0a31e30.jpeg";
import shape1 from "../../image/shapes/Frame 1686560676.png";
import shadowbackground from "../../image/homeImg/PH CITY WOMEN RUN.png";
import LoadBlurHashImage from "../../../lazy/loadBlurHash";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../../Button";

function YourPotential() {
  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  return (
    <>
      <section className="relative bg-white flex justify-center items-center w-full h-auto ">
        <div className="static gap-[24px] flex flex-col justify-center items-center w-full max-w-[1280px] px-[15px] py-[90px] at500:px-[72px] my-0 mx-auto">
          <div className="z-10 grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-5 w-full h-auto  ">
            <div
              data-aos="zoom-in"
              className="relative flex justify-start items-start h-[516px] w-full rounded-[12px] overflow-hidden"
            >
              <LoadBlurHashImage
                src={image}
                blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                className="w-full h-[516px] lg:w-[540px] object-cover rounded-[12px]"
                alt="Discover Your Potential"
              />
              <div className="absolute bottom-0 flex flex-col gap-[10px] sm:gap-[22px] p-[30px]">
                <h5 className="text-white">Discover Your Potential</h5>
                <span className="text-white">
                  Enhance your runs with great playlists
                </span>
                <div className="flex justify-center w-[140px]">
                  <Button size="small" className="">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              className="bg-slate-500 h-[516px] w-full rounded-[12px] overflow-hidden"
            >
              <iframe
                className="flex h-full w-full object-cover"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254446.33274412103!2d6.839630557814114!3d4.81739052810569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cea39f2c48e3%3A0x53562bdd7d8832db!2sPort%20Harcourt%2C%20Rivers!5e0!3m2!1sen!2sng!4v1728454405121!5m2!1sen!2sng"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="h-[320px] absolute bottom-[-138px] z-0">
            <img
              className=" w-full object-cover z-0"
              src={shadowbackground}
              alt="background"
            />
          </div>
          <img
            className=" z-30 absolute left-[-56px] top-[626px] h-[480.07px] w-[150.41px] object-contain"
            src={shape1}
            alt="shape"
          />
        </div>
      </section>
    </>
  );
}

export default YourPotential;
