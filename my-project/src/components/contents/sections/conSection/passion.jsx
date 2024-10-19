import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import image from "../../image/homeImg/8febc29051bcfc8a9896ced270874b6c.jfif";
import LoadBlurHashImage from "../../../lazy/loadBlurHash";
import Button from "../../Button";
import "swiper/css";
import "../../../slider/swiper/lastest.css";
import "../../../slider/swiper/pagination.css";
import AOS from "aos";
import "aos/dist/aos.css";

const FuelYourPassion = () => {
  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  return (
    <section className="flex flex-col justify-center items-center relative w-full">
      <div className="static flex flex-col justify-center items-center w-full max-w-[1280px] px-[15px] py-[50px] at500:px-[72px] my-0 mx-auto overflow-hidden">
        <div className="blog-container w-full flex flex-col items-start ">
          <div className="relative flex !items-end !justify-end w-full gap-2 pt-[30px] ">
            <div className="next p-2">
              <GoChevronLeft className="swiper-button-prev-blog relative top-0 text-[#05284C] hover:text-[#05284C] w-[20px]" />
            </div>
            <div className="prev p-2">
              <GoChevronRight className="swiper-button-next-blog relative text-[#05284C] top-0 hover:text-[#05284C] w-[20px]" />
            </div>
          </div>

          <Swiper
            className="relative flex flex-col sm:!py-[30px]"
            style={{ width: "100%" }}
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={25}
            slidesPerView={1}
           
            navigation={{
              nextEl: ".swiper-button-next-blog",
              prevEl: ".swiper-button-prev-blog",
            }}
          >
            <SwiperSlide className="!w-full z-[4]">
              <div className="flex justify-center items-center w-full h-auto">
                <div className="flex gap-[30px] flex-col silver:flex-row justify-center items-center w-full">
                  <div
                    data-aos="zoom-in"
                    className="relative flex justify-start items-start h-[420px] w-full rounded-[12px] overflow-hidden"
                  >
                    <LoadBlurHashImage
                      src={image}
                      blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                      className="w-full h-[420px] lg:w-[544px] object-cover rounded-[12px]"
                      alt="Discover Your Potential"
                    />
                  </div>
                  <div className="flex flex-col gap-[40px] justify-center items-start w-full max-w-[456px]">
                    <h2 className="!text-[40px] text-[#111E2F]">
                      Fuel your Passion: Keep moving
                    </h2>
                    <span className="text-[#7E8EA2] txt5 !font-[84]">
                      Just filling in some content till I decide what I want to
                      fill Into this space in THE mean time lets hold on to this
                      text. feeling like I have the masterplan you know
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!w-full z-[4]">
              <div className="flex justify-center items-center w-full h-auto">
                <div className="flex gap-[30px] flex-col silver:flex-row justify-center items-center w-full">
                  <div
                    data-aos="zoom-in"
                    className="relative flex justify-start items-start h-[420px] w-full rounded-[12px] overflow-hidden"
                  >
                    <LoadBlurHashImage
                      src={image}
                      blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                      className="w-full h-[420px] lg:w-[544px] object-cover rounded-[12px]"
                      alt="Discover Your Potential"
                    />
                  </div>
                  <div className="flex flex-col gap-[40px] justify-center items-start w-full max-w-[456px]">
                    <h2 className="!text-[40px] text-[#111E2F]">
                      Fuel your Passion: Keep moving
                    </h2>
                    <span className="text-[#7E8EA2] txt5 !font-[84]">
                      Just filling in some content till I decide what I want to
                      fill Into this space in THE mean time lets hold on to this
                      text. feeling like I have the masterplan you know
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!w-full z-[4]">
              <div className="flex justify-center items-center w-full h-auto">
                <div className="flex gap-[30px] flex-col silver:flex-row justify-center items-center w-full">
                  <div
                    data-aos="zoom-in"
                    className="relative flex justify-start items-start h-[420px] w-full rounded-[12px] overflow-hidden"
                  >
                    <LoadBlurHashImage
                      src={image}
                      blurHash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // Replace with actual blurhash
                      className="w-full h-[420px] lg:w-[544px] object-cover rounded-[12px]"
                      alt="Discover Your Potential"
                    />
                  </div>
                  <div className="flex flex-col gap-[40px] justify-center items-start w-full max-w-[456px]">
                    <h2 className="!text-[40px] text-[#111E2F]">
                      Fuel your Passion: Keep moving
                    </h2>
                    <span className="text-[#7E8EA2] txt5 !font-[84]">
                      Just filling in some content till I decide what I want to
                      fill Into this space in THE mean time lets hold on to this
                      text. feeling like I have the masterplan you know
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default FuelYourPassion;
