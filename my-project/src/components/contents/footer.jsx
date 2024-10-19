import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa";
import logo from "../navigation/logos/156a5363dc0856d3728fb5e10c7538f4.png";
import Link from "./link";

import "../contents/styles/_footer.css";

const currentYear = new Date().getFullYear();

function footer() {
  return (
    <footer
      id="down"
      className="relative flex flex-col justify-center items-center w-full h-auto "
    >
      <section className="bg-white relative flex flex-col justify-center items-center w-full ">
        <div className="static  w-full flex flex-col justify-center items-center max-w-[1280px] py-[50px] px-[15px] at500:px-[64px] my-0 mx-auto ">
          <div className="flex flex-col justify-center items-center w-full ">
            <div className="flex flex-col justify-center items-center  w-full pb-[30px] ">
              <div className="flex flex-col justify-center items-center  w-full  cursor-pointer ">
                <a href="#">
                  <img
                    className="h-[64px] w-[110.84px] object-cover transition-all duration-300 ease-in-out"
                    src={logo}
                  />
                </a>
              </div>
            </div>
            <div className="w-full flex flex-col silver:flex-row gap-[48px] justify-between items-start  mb-[30px]">
              <div className="flex flex-col sm:flex-row items-start justify-between pt-[40px] w-full  gap-[32px]">
                <div className="flex justify-end items-end w-full">
                  <ul className=" flex  justify-start items-start w-full gap-[12px]">
                    <li data-aos="fade-up">
                      <Link to="/">
                        <span className="font-[106] text-[16px] leading-[19.84px] text-[#111E2F] hover:text-[#ED3237]">
                          About
                        </span>
                      </Link>
                    </li>
                    <li data-aos="fade-up">
                      <Link to="/">
                        <span className="font-[106] text-[16px] leading-[19.84px] text-[#111E2F] hover:text-[#ED3237]">
                          Support
                        </span>
                      </Link>
                    </li>
                    <li data-aos="fade-up">
                      <Link to="/contact-us">
                        <span className="font-[106] text-[16px] leading-[19.84px] text-[#111E2F] hover:text-[#ED3237]">
                          Contact
                        </span>
                      </Link>
                    </li>
                    <li data-aos="fade-up">
                      <Link to="/">
                        <span className="font-[106] text-[16px] leading-[19.84px] text-[#111E2F] hover:text-[#ED3237]">
                          FAQs
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="flex sm:justify-end items-end w-full">
                  <ul className="flex gap-4">
                    <li data-aos="fade-up">
                      <a href="https://www.instagram.com/finchglow/">
                        <FaInstagram
                          size={20}
                          className=" text-[#111E2F] hover:text-[#ED3237] transition-all duration-300 ease-in-out"
                        />
                      </a>
                    </li>
                    <li data-aos="fade-up">
                      <a href="https://x.com/finchglow?mx=2">
                        <FaTwitter
                          size={20}
                          className=" text-[#111E2F] hover:text-[#ED3237] transition-all duration-300 ease-in-out"
                        />
                      </a>
                    </li>
                    <li data-aos="fade-up">
                      <a href="https://www.facebook.com/finchglowtravelsng">
                        <FaFacebook
                          size={20}
                          className=" text-[#111E2F] hover:text-[#ED3237] transition-all duration-300 ease-in-out"
                        />
                      </a>
                    </li>
                    <li data-aos="fade-up">
                      <a href="https://www.facebook.com/finchglowtravelsng">
                        <FaLinkedin
                          size={20}
                          className=" text-[#111E2F] hover:text-[#ED3237] transition-all duration-300 ease-in-out"
                        />
                      </a>
                    </li>
                    <li data-aos="fade-up">
                      <a href="https://www.youtube.com/@finchglow_travels">
                        <FaYoutube
                          size={20}
                          className=" text-[#111E2F] hover:text-[#ED3237] transition-all duration-300 ease-in-out"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!--hr line--> */}
            <hr className="h-[2px] w-full bg-[#111E2F]" />
            {/* <!--copyright--> */}
            <div
              data-aos="fade-up"
              className="flex flex-col sm:flex-row justify-between items-center w-full h-auto my-[30px] md:h-[24px]"
            >
              <div className="flex w-full my-[20px]">
                <p className="text-[#111E2F] leading-[17.36px] text-left text-[14px] !font-[106]">
                  © copyrights {currentYear} PH City Women Run
                </p>
              </div>
              <div className="flex sm:justify-end sm:items-end w-full ">
                <ul className=" md:flex  justify-center items-start text-left gap-[12px]">
                  <li>
                    <Link to="/">
                      <span className="font-medium font-Metropolis text-[14px] leading-[17.36px] text-[#111E2F] hover:text-[#ED3237]">
                        Privacy Policy
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span className="font-medium font-Metropolis text-[14px] leading-[17.36px] text-[#111E2F] hover:text-[#ED3237]">
                        Legal Terms
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default footer;
