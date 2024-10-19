import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import shadowbackground from "../../image/homeImg/PH CITY WOMEN RUN.png";
import LastSlide from "../../../slider/lastestSlide";

// import Link from "./link";

function TheLastest() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <>
      <section className="relative bg-white flex justify-center items-center w-full h-auto overflow-hidden">
        <div className="static flex flex-col justify-center items-start w-full max-w-[1280px] px-[15px] py-[10px] at500:px-[72px] my-0 mx-auto">
          <div className="flex flex-col justify-center items-start gap-[8px] h-auto w-full">
            <h4 className="text-[#111e2f]">GET A LOAD OF THE LATEST</h4>
            <p className="text-[16px] leading-[24px]">
              Enhance your runs with great playlists, coaching, and photos from
              iconic locations around the world.
            </p>
          </div>
         
          <LastSlide />
          
        </div>
      </section>
    </>
  );
}

export default TheLastest;
