import React from "react";
import { IoIosPlay } from "react-icons/io";

const Flag = ({ image, text, heading }) => {
  return (
    <div className=" relative z-10 flex justify-center flex-col items-center w-fit ">
      <div className="relative z-10 translate-y-[40%]">
        <img src={`/${image}.png`} className="w-[400px]" alt="firstmonie" />
        <div className="w-full h-full flex justify-center items-center absolute top-0 left-0">
          <div className="bg-[#0000005f] rounded-full p-4 w-fit ">
            <IoIosPlay size={40} color="white" />
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-between max-w-[540px] h-[520px] bg-white pb-4 lg:pb-10 pt-[120px] w-fit px-5 lg:px-14 rounded-lg shadow-[0px_6px_7px_rgba(0,0,0,0.16)]">
        <h2 className="text-xl lg:text-3xl text-center text-[#003b65]">
          {heading}
        </h2>

        {heading === "Youfirst" ? (
          <p className="mt-5 text-[#5f707d] text-sm lg:text-base h-[320px] lg:h-[400px] ">
            Giant strides, big leaps and innovation has formed <br /> the basis
            of our heritage over the years. Indeed, we are woven <br /> into the
            fabric of society.
            <br />
            <br />
            We are rooted in tradition but constantly leaning towards the
            future. We are excited about the days ahead.
            <br />
            <br />
            #EnablingYou #YouFirst
          </p>
        ) : (
          <p className="mt-5 text-[#5f707d] h-[300px] lg:h-[400px] text-sm lg:text-base">
            {text}
          </p>
        )}

        <button className="px-5 lg:px-8 py-3 lg:py-4 text-xs lg:text-sm mx-auto bg-primaryYellow text-primaryBlue">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default Flag;
