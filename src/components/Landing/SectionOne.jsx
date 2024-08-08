import React from "react";

const SectionOne = () => {
  return (
    <div
      className="min-h-[700px] relative"
      style={{ backgroundImage: "url(/banner.png)", backgroundSize: "cover" }}
    >
      <div className="flex flex-col relative z-10 gap-2 text-white bg-[#00000086] w-[400px] lg:w-[540px] mt-[170px] px-10 py-12">
        <h1 className="text-3xl lg:text-5xl font-normal  mb-4">FBN PODCAST</h1>
        <p className=" text-base lg:text-2xl font-light mb-8">
          Enjoy amazing discussions about life and <br /> solutions that will
          transform <br /> your everyday on the go.
        </p>
      </div>
      <div className="absolute flex items-end pb-10 justify-center  w-[96%] bg-[#0000004c] top-0 right-0 h-[86%]">
        <div className="flex gap-8">
          {Array.from({ length: 3 }, (_, index) => (
            <span
              key={index}
              className={`${
                index === 0 ? " bg-white" : " bg-[#504e4e]"
              } inline-flex h-1 w-12`}
            ></span>
          ))}
        </div>
      </div>

      <div className="zr:hidden lg:flex flex-1 relative translate-y-[50%] z-20 container mx-auto py-4 ">
        <section className="bg-white w-full rounded-[15px] shadow-[0px_6px_7px_rgba(0,0,0,0.16)] p-4 flex gap-8">
          <img src="/mankey.png" alt="mankey" className="w-[300px]" />
          <div className="py-8 w-full">
            <img src="/live.png" alt="" className="w-[80px]" />
            <p className="mt-4 text-primaryBlue text-sm">
              EPISODE 10: LET'S TALK ABOUT PERSONAL HOME LOANS
            </p>
            <div className="flex cursor-pointer items-center mt-4 w-full gap-8">
              <div className="flex items-center gap-2 ">
                <img src="/back.png" alt="back" className="h-[20px]" />
                <img src="/play.png" alt="play" className="h-[30px]" />
                <img src="/forward.png" alt="forward" className="h-[20px]" />
              </div>
              <div className="w-[65%] flex items-center gap-4">
                <p>00:00</p>
                <span className="inline-flex relative h-2 rounded-full w-full bg-primaryBlue">
                  <span className="absolute left-0  translate-y-[-8px] h-6 w-6 rounded-full bg-primaryBlue"></span>
                </span>
                <p>01:20</p>
              </div>
              <div className="flex gap-4">
                <img src="/volume.png" alt="volume" className="h-[20px]" />
                <p className="p-[1px] text-primaryBlue border-[1px] rounded-[4px] border-primaryBlue text-center text-sm w-[40px]">
                  1x
                </p>
                <img src="/download.png" alt="download" className="h-[20px]" />
                <img src="/share.png" alt="share" className="h-[20px]" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SectionOne;
