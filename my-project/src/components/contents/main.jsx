// import React, { useState } from "react";
import { useEffect } from "react";
import RoundText from "./roundText";
import contents from "../props/round";
import Cards from "../slider/cards";
import AchievementsSection from "./sections/achievement";
import SectionWhereWeAre from "./sections/where-we-are";
import BlogSlide from "../slider/blog_cards";
import FAQ from "./FAQ";
import OurPartners from "../testimonial/partners";
import AOS from "aos";
import "aos/dist/aos.css";
import TestimonialSlider from "../testimonial/testimonial";
import background from "./image/blue-background.webp";
import Button from "./Button";
import Link from "./link";
import SectionPartner from "./sections/partner";



function Main() {
  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center w-full ">
      

    
    </div>
  );
}

export default Main;
