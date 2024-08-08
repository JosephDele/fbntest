import React from "react";
import Flag from "../Flag";

const SectionThree = () => {
  return (
    <div className="bg-primaryGrey pt-10">
      <div className="relative px-4 lg:px-0 max-w-maxWidth mx-auto flex flex-wrap gap-14 justify-center">
        <Flag
          image="firstmonie"
          heading="Firstmonie"
          text={` Stay one step ahead of your finances with Firstmonie, our
          mobile and e-banking service designed with #YouFirst in mind.`}
        />
        <Flag image="corporate" heading={"Youfirst"} text="" />
        <div className="zr:hidden md:flex absolute top-0">
          <img src="ngn.png" className="w-[450px]" alt="ngn" />
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
