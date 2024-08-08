import React from "react";

const SectionFour = () => {
  return (
    <div className=" bg-primaryGrey pt-40">
      <div className="max-w-maxWidth px-4 lg:px-0 mx-auto">
        <p className="text-primaryBlue text-xs lg:text-sm">BLOG</p>
        <h1 className="text-2xl lg:text-4xl text-primaryBlue">Featured</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10">
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index} className="flex flex-col">
              <img src="/cart.png" className="" alt="cart" />
              <p className="p-4 text-sm lg:text-base bg-white">
                World's Singles' Day
              </p>
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

export default SectionFour;
