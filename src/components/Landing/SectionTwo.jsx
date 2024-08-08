import React, { useState } from "react";

const categories = ["ALL", "LOAN", "INSURANCE", "WAYS TO BANK", "FAMILY"];

const SectionTwo = () => {
  const [category, setCategory] = useState("ALL");

  return (
    <div className=" bg-primaryGrey pt-20 lg:pt-80">
      <div className="max-w-maxWidth mx-auto px-4 lg:px-0">
        <p className="text-primaryBlue text-xs lg:text-sm">PODCAST</p>
        <h1 className="text-2xl lg:text-4xl text-primaryBlue">
          Recent Episodes
        </h1>

        <div className="flex sm:flex-row zr:flex-col gap-4 lg:gap-8 sm:mx-auto w-fit mt-10 lg:mt-20">
          {categories.map((item, index) => (
            <button
              className={`${
                item === category
                  ? "text-white bg-primaryBlue"
                  : "bg-primaryYellow text-primaryBlue"
              } p-2 lg:p-4  w-[80px] lg:w-[150px] text-[8px] lg:text-sm text-center `}
              key={index}
              onClick={() => setCategory(item)}
            >
              <p className="">{item}</p>
            </button>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-10">
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index} className="flex">
              <img
                src="/money.png"
                className="w-[270px] zr:hidden lg:flex"
                alt="money"
              />

              <div className="p-4 bg-white w-full flex gap-4 lg:gap-0 flex-col justify-between">
                <div className="flex gap-10">
                  <div className="flex gap-1 items-center">
                    <img src="/calendar.png" className="h-5" alt="calendar" />
                    <p className="text-[8px] sm:text-xs">SEPTEMBER 15, 2022</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img src="/clock.png" className="h-5" alt="clock" />
                    <p className="text-[8px] sm:text-xs">02:20:06</p>
                  </div>
                </div>

                <h2 className="text-base lg:text-2xl font-normal text-primaryBlue ">
                  How To Thrive In An <br /> Economic Shutdown
                </h2>

                <p className="text-[8px] sm:text-xs font-light text-[#5f707d]">
                  With about 17.4 million enterprises, it is no denial that SMEs
                  account forums approximately 50% and 90% of both industrial
                  jobs and the manufacturing sector respectively
                </p>

                <div className="flex cursor-pointer items-center mt-4 w-full gap-4">
                  <div className="flex items-center gap-1 ">
                    <img src="/back.png" alt="back" className="h-[10px]" />
                    <img src="/play.png" alt="play" className="h-[15px]" />
                    <img
                      src="/forward.png"
                      alt="forward"
                      className="h-[10px]"
                    />
                  </div>
                  <div className="w-[65%] flex items-center gap-4">
                    <p className="text-[8px] sm:text-xs">00:00</p>
                    <span className="inline-flex relative h-1 rounded-full w-full bg-primaryBlue">
                      <span className="absolute left-0  translate-y-[-4px] h-3 w-3 rounded-full bg-primaryBlue"></span>
                    </span>
                    <p className="text-[8px] sm:text-xs">01:20</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img src="/volume.png" alt="volume" className="h-[10px]" />
                    <p className="p-[0.5px] text-primaryBlue border-[1px] rounded-[4px] border-primaryBlue text-center text-[8px] w-[30px]">
                      1x
                    </p>
                    <img
                      src="/download.png"
                      alt="download"
                      className="h-[10px]"
                    />
                    <img src="/share.png" alt="share" className="h-[10px]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-base lg:text-xl cursor-pointer text-[#5f707d] flex gap-16 w-fit mx-auto mt-20">
          <p className="">Previous</p>
          <div className="zr:hidden sm:flex gap-8">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>...</p>
            <p>5</p>
          </div>
          <p>Next</p>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
