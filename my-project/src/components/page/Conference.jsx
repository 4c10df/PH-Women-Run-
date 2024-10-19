import React, { useState } from "react";
import Footer from "../contents/footer";
import Navbar from "../navigation/navbar";
import SaveUrPotForm from "../form/saveUrPot";
import HeroSection from "../contents/sections/conSection/hero";
import FuelYourPassion from "../contents/sections/conSection/passion";

function Conference() {
  const [isOpen, setIsOpen] = useState(false);
  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center relative w-full">
        <Navbar openOverlay={openOverlay} />
        <SaveUrPotForm isOpen={isOpen} closeOverlay={closeOverlay} />
        <HeroSection />
        <FuelYourPassion />
        <Footer />
      </div>
    </>
  );
}

export default Conference;
