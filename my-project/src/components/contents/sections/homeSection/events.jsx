import React from "react";
import { useEffect } from "react";
import roundground from "../../image/homeImg/g12.png";
import imageRun1 from "../../image/homeImg/1d5d5d58530a43a193941eb68bc83221.jpeg";
import imageRun2 from "../../image/homeImg/blog card thumbnail11.png";
import imageRun3 from "../../image/homeImg/blog card thumbnail.png";
import shape1 from "../../image/shapes/Frame 1686560676.png";
import shadowbackground from "../../image/homeImg/PH CITY WOMEN RUN.png";
import AOS from "aos";
import "aos/dist/aos.css";

import Button from "../../Button";

function CommunitEvents() {
  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  return (
    <>
      <section className="relative bg-white flex justify-center items-center w-full h-auto overflow-hidden">
        <div className="static flex flex-col justify-center items-center w-full max-w-[1280px] px-[15px] py-[90px] at500:px-[72px] my-0 mx-auto">
          <div className="flex flex-col justify-center items-center w-full gap-[24px] ">
            <div className="flex flex-col justify-center items-start w-full">
              <h2
                data-aos="fade-right"
                data-aos-duration="1000"
                className="text-[#0E141E]"
              >
                COMMUNITY EVENTS
              </h2>
              <span
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-[#7E8EA2] text-[16px] leading-[24px] font-[84] md:w-[998px]"
              >
                Just filling in some content till I decide what I want to fill
                Into this space in THE mean time lets hold on to this text.
                feeling like I have the masterplan you know. Just filling in
                some content till I decide what I want to fill Into this space
                in THE mean time lets hold on to this text. feeling like I have
                the masterplan you know
              </span>
            </div>

            <div className="grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-5 w-full">
              <div className="flex gap-[16px] flex-col justify-center items-start w-full">
                <img
                  data-aos="zoom-in"
                  className="h-[220px] w-full rounded-[8px] object-cover"
                  src={imageRun1}
                  alt="run"
                />
                <div className="flex flex-col gap-[8px] silver:w-[357px]">
                  <h6 data-aos="fade-up" className="text-[#353F50]">
                    Women Jumping into conclusions
                  </h6>
                  <span data-aos="fade-up" className="text-[#7E8EA2] txt">
                    It’s a new era for us in PH city as we have now entered a
                    Partnership worth $1.9m with Adidas and Monster Energy. This
                    partnership...
                  </span>
                  <span
                    data-aos="fade-right"
                    data-aos-delay="1000"
                    data-aos-duration="60000"
                    data-aos-easing="ease-in-out"
                    className="text-[#353F50] leading-[18.9px] text-[14px]"
                  >
                    by &nbsp;
                    <strong className="text-[#353F50] txt4">
                      Tonte Davies
                    </strong>
                  </span>
                </div>
              </div>
              <div className="flex gap-[16px] flex-col justify-center items-start w-full">
                <img
                  data-aos="zoom-in"
                  className="h-[220px] w-full rounded-[8px] object-cover"
                  src={imageRun2}
                  alt="run"
                />
                <div className="flex flex-col gap-[8px] silver:w-[357px]">
                  <h6 data-aos="fade-up" className="text-[#353F50]">
                    Don’t run out of ideas run your Race
                  </h6>
                  <span data-aos="fade-up" className="text-[#7E8EA2] txt">
                    It’s a new era for us in PH city as we have now entered a
                    Partnership worth $1.9m with Adidas and Monster Energy. This
                    partnership...
                  </span>
                  <span
                    data-aos="fade-right"
                    data-aos-delay="1000"
                    data-aos-duration="60000"
                    data-aos-easing="ease-in-out"
                    className="text-[#353F50] leading-[18.9px] text-[14px]"
                  >
                    by &nbsp;
                    <strong className="text-[#353F50] txt4">
                      Tonte Davies
                    </strong>
                  </span>
                </div>
              </div>
              <div className="flex gap-[16px] flex-col justify-center items-start w-full">
                <img
                  data-aos="zoom-in"
                  className="h-[220px] w-full rounded-[8px] object-cover"
                  src={imageRun3}
                  alt="run"
                />
                <div className="flex flex-col gap-[8px] silver:w-[357px]">
                  <h6 data-aos="fade-up" className="text-[#353F50]">
                    Women Jumping into conclusions
                  </h6>
                  <span data-aos="fade-up" className="text-[#7E8EA2] txt">
                    It’s a new era for us in PH city as we have now entered a
                    Partnership worth $1.9m with Adidas and Monster Energy. This
                    partnership...
                  </span>
                  <span
                    data-aos="fade-right"
                    data-aos-delay="1000"
                    data-aos-duration="60000"
                    data-aos-easing="ease-in-out"
                    className="text-[#353F50] leading-[18.9px] text-[14px]"
                  >
                    by &nbsp;
                    <strong className="text-[#353F50] txt4">
                      Tonte Davies
                    </strong>
                  </span>
                </div>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              className="flex pt-[20px] justify-start w-[201px] z-40"
            >
              <Button size="buttons" className="">
                Explore all
              </Button>
            </div>
          </div>
          <div className=" absolute top-[234px] flex justify-end items-end w-full">
            <img
              className=" h-[480.07px] w-[150.41px] object-contain"
              src={shape1}
              alt="shape"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default CommunitEvents;
