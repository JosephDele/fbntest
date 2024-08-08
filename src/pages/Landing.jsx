import React from "react";
import SectionOne from "../components/Landing/SectionOne";
import SectionTwo from "../components/Landing/SectionTwo";
import SectionThree from "../components/Landing/SectionThree";
import SectionFour from "../components/Landing/SectionFour";

const Landing = () => {
  return (
    <div className="flex bg-primaryGrey flex-col pb-40">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
};

export default Landing;
