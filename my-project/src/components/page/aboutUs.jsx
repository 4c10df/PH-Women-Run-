import React, { useState } from "react";
import Footer from "../contents/footer";
import Navbar from "../navigation/navbar";
import SaveUrPotForm from "../form/saveUrPot";
import SpecificGoal from "../contents/sections/aboutSection/goal";
import BecomeApartner from "../contents/sections/aboutSection/become";
import VideoComponent from "../contents/sections/aboutSection/video";
import RunIning from "../contents/sections/aboutSection/runing";
import LatestNews from "../contents/sections/getNews";
import OurPartners from "../contents/sections/OurPartner";

function AboutUs() {
  const [isOpen, setIsOpen] = useState(false);
  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center relative w-full">
        <Navbar openOverlay={openOverlay} />
        <SaveUrPotForm isOpen={isOpen} closeOverlay={closeOverlay} />
        <SpecificGoal />
        <BecomeApartner />
        <OurPartners/>
        <RunIning />
        <LatestNews />
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
