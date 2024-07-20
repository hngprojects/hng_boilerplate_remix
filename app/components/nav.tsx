"use client";
import { useState } from "react";

import { AlignJustify, HammerIcon, HomeIcon, X } from "lucide-react";
import icon1 from "public/icons//mdi_kettle.svg";
import icon from "public/icons/icon.svg";

const Nav = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex items-center justify-between w-[100%] h-auto bg-white text-black py-5 px-6 md:px-10 fixed top-0 z-20 space-y-2 gap-8">
      {!nav ? (
        <div
          className=" md:hidden cursor-pointer text-gray-600"
          onClick={() => setNav(true)}
        >
          <AlignJustify size={30} />
        </div>
      ) : (
        <div
          className=" md:hidden cursor-pointer"
          onClick={() => setNav(false)}
        >
          <X size={30} />{" "}
        </div>
      )}

      <div className="flex items-center w-2/3 whitespace-nowrap md:w-1/3">
        <p className="text-2xl md:text-[44px] text-blue-600 md:text-orange-500">
          [
        </p>
        <img
          src={icon1}
          className="w-[22px] md-[32px] text-blue-500]"
        />
        <p className="text-2xl md:text-[44px] text-blue-600 md:text-orange-500 ">
          ]
        </p>

        <p
          className={`font-semibold leading-normal text-gray-600 text-[28px] text-lg md:text-xl lg:text-2xl ml-3`}
        >
          HNG Boilerplate
        </p>
      </div>

      <div className="w-2/3 flex justify-around items-center space-x-12">
        <ul className="hidden w-full md:flex justify-between items-center gap-10 text-base">
          <li className="w-1/2 flex gap-5">
            <a href="/">Home</a>

            <a href="/">Pricing</a>

            <a href="/">Career</a>
          </li>

          <li className="w-1/2 flex gap-6 ml-4">
            <a href="/login">
              <button className="px-4 md:px-8 py-1 md:py-2 whitespace-nowrap  bg-white border-2 border-orange-500  hover:bg-orange-500 text-sm font-medium leading-6 text-gray-700 rounded-xl  hover:text-white hover:border-0">
                Log In
              </button>
            </a>

            <a href="/">
              <button className="px-4 md:px-8 py-1 md:py-2  whitespace-nowrap bg-white border-2 border-orange-500  hover:bg-orange-500 text-sm font-medium leading-6 text-gray-700 rounded-xl  hover:text-white hover:border-0">
                Get Started
              </button>
            </a>
          </li>
        </ul>
      </div>

      {nav && (
        <div className="md:hidden justify-between items-center gap-8 absolute   top-16 left-0 bg-gray-900  w-[70%] h-screen p-6 space-y-6 text-lg text-white">
          <ul className=" text-white md:flex justify-between items-center gap-10 text-base">
            <a href="/">
              <li className="">Home</li>
            </a>

            <a href="/pricing">
              <li className="">Pricing</li>
            </a>

            <a href="/pricing">
              <li className="">Career</li>
            </a>

            <div className=" flex flex-col md:flex gap-3">
              <a href="/login">
                <button className="px-4 md:px-8 py-1 md:py-2   bg-white border-2 border-orange-500  hover:bg-orange-500 text-sm font-medium leading-6 text-gray-700 rounded-xl  hover:text-white hover:border-0">
                  Log In
                </button>
              </a>

              <a href="/">
                <button className="px-4 md:px-8 py-1 md:py-2   bg-white border-2 border-orange-500  hover:bg-orange-500 text-sm font-medium leading-6 text-gray-700 rounded-xl  hover:text-white hover:border-0">
                  Get Started
                </button>
              </a>
            </div>
          </ul>
        </div>
      )}
      {!nav ? (
        <img
          src={icon}
          className=" md:hidden cursor-pointer px-8"
          onClick={() => setNav(true)}
        />
      ) : (
        <div
          className=" md:hidden cursor-pointer"
          onClick={() => setNav(false)}
        ></div>
      )}
    </div>
  );
};

export default Nav;
