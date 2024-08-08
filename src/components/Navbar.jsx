import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

const navLinks = {
  left: ["HOME", "PERSONAL", "BUSINESS", "PRIVATE"],
  right: ["SELECT LANGUAGE", "SUSTAINABILITY"],
  bottom: ["CATEGORIES", "BLOG", "SUBSCRIBE"],
};

const Navbar = () => {
  const [leftActive, setLeftActive] = useState("PERSONAL");
  const [rightActive, setRightActive] = useState("SELECT LANGUAGE");

  const [isDropdown, setIsDropDown] = useState(false);

  return (
    <>
      <header className="bg-primaryBlue zr:hidden lg:flex text-white ">
        <div className="container mx-auto flex justify-between items-center">
          <nav className="flex justify-between w-full">
            <div className="flex space-x-8">
              {navLinks.left.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`${
                    item === leftActive
                      ? "bg-white text-primaryBlue"
                      : "text-[#c6ccd1]"
                  } px-4  hover:bg-blue-800 py-4 transition-colors  duration-300`}
                  onClick={() => setLeftActive(item)}
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="flex gap-8">
              {navLinks.right.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`${
                    item === rightActive
                      ? "bg-white text-primaryBlue"
                      : "text-[#c6ccd1]"
                  } px-4  hover:bg-blue-800 py-4 transition-colors  duration-300`}
                >
                  {item}
                </a>
              ))}
              <div className="flex gap-1 ml-10  items-center ">
                <img
                  src="/nigeriaFlag.png"
                  className="h-6"
                  alt="nigeria flag"
                />
                <p
                  className={` px-4  hover:bg-blue-800 transition-colors  duration-300`}
                >
                  NIGERIA
                </p>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div className="relative">
        <div className="max-w-maxWidth px-4 lg:px-0  mx-auto">
          <div className="flex items-center justify-between h-[121px]">
            <div className="lg:w-400px w-[200px]">
              <img src="/logo.png" alt="logo" className="w-full h-full" />
            </div>
            <div
              className={`${
                isDropdown ? "zr:flex" : "zr:hidden lg:flex"
              } zr:absolute bg-white pb-10 lg:pb-0 lg:gap-0 gap-[30px] z-30 lg:relative top-[100%] lg:top-0 left-0  lg:flex-row flex-col items-center w-full lg:w-[55%] justify-between`}
            >
              {navLinks.bottom.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={` px-4 flex items-center gap-1 py-4 text-primaryBlue transition-colors  duration-300`}
                  onClick={() => setLeftActive(item)}
                >
                  {item}
                  {index === 0 && (
                    <span>
                      <FaAngleDown size={20} />
                    </span>
                  )}
                </a>
              ))}
              <div className="flex lg:flex-row flex-col gap-4 items-center">
                <span>
                  <CiSearch size={25} />
                </span>
                <button className="py-4 px-4 bg-primaryYellow w-[140px] text-primaryBlue">
                  Contact
                </button>
              </div>
            </div>
            <span
              onClick={() => setIsDropDown(!isDropdown)}
              className="lg:hidden zr:flex "
            >
              <IoIosMenu size={30} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
