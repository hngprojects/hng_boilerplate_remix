"use client";
import Subscribe from "./ui/subscribe";

const Footer = () => {
  return (
    <div className="h-[497px] bg-black text-gray-50">
      <div className=" grid grid-cols-2 lg:grid-cols-7 p-4 ">
        <div className="hidden col-span-2 md:flex flex-col gap-4 ml-3 font-Inter">
          <p className="text-xl font-bold leading-normal ">Boiler Plate</p>

          <div
            className={`font-thin leading-normal text-white text-lg  md:text-sm lg:text-lg ml-3 md:space-y-4`}
          >
            Logo subject details and address
          </div>
        </div>

        <div className="flex flex-col gap-4 font-Inter">
          <p className="text-xl font-bold leading-normal ">Navigation</p>
          <ul className="flex flex-col font-thin leading-normal text-white text-lg  md:text-sm lg:text-lg md:space-y-4">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Career</a>
            </li>
            <li>
              <a href="">Future Updates</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 font-Inter ">
          <p className="text-xl font-bold leading-normal ">Support</p>
          <ul className="flex flex-col font-thin leading-normal text-white text-lg  md:text-sm lg:text-lg md:space-y-4">
            <li>
              <a href="">Help Center </a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Waiting List</a>
            </li>
            <li>
              <a href="">Pricing Experience</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 mt-6 md:mt-0 font-Inter">
          <p className="text-xl font-bold leading-normal ">Legal</p>
          <ul className="flex flex-col font-thin  leading-normal text-white text-lg  md:text-sm lg:text-lg md:space-y-4">
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Terms and conditions</a>
            </li>
          </ul>
        </div>

        <div className="col-span-2 hidden md:flex flex-col gap-4 px-4">
          <p className="text-xl font-bold leading-normal ">
            Sign Up for Newsletter
          </p>
          <br />
          <Subscribe />

          <div className=" text-white">Follow us on</div>
        </div>
      </div>
      <hr className="text-gray-50" />
      <br />
    </div>
  );
};

export default Footer;
