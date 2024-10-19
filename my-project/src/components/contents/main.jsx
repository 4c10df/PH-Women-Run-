import React from "react";
import { useEffect } from "react";

// import Link from "./link";
import RunLikeNever from "./sections/homeSection/runLike";
import RunFast from "./sections/homeSection/runFast";
import CommunitEvents from "./sections/homeSection/events";
import OurPartners from "./sections/OurPartner";
import YourPotential from "./sections/homeSection/Discover";
import TheLastest from "./sections/homeSection/lastest";



function Main() {
  

  return (
    <div className="relative flex flex-col justify-center items-center w-full ">
      
      <RunLikeNever/>
      <RunFast />
      <CommunitEvents />
      <OurPartners />
      <YourPotential />
      <TheLastest/>
    
    </div>
  );
}

export default Main;
