import { FC } from "react";
import twitter from "../../../public/images/twitter.png";
import youtube from "../../../public/images/youtube.png";
import instagram from "../../../public/images/instagram.png";
import linkedin from "../../../public/images/linkedin.png";
import facebook from "../../../public/images/facebook.png";

const Footer: FC = () => {
  return (
    <footer className="bg-[#0A0A0A] max-w-screen text-[#FAFAFA] py-10 md:py-[70px]">
      <div className="flex flex-col md:flex-row justify-between items-start px-5 md:px-[120px]">
        <div className="mb-5 mx-auto">
          <h2 className="font-bold text-xl leading-6 mb-3 md:mb-9 text-center md:text-left">
            BoilerPlate
          </h2>
          <p className="font-normal text-lg leading-6 text-center md:text-left">
            Logo subject details and address
          </p>
        </div>

        <div className="mt-10 mb-20 mx-auto block md:hidden">
          <h2 className="font-semibold text-lg tracking-[-1px] mb-5 text-center">
            Sign Up For Newsletter
          </h2>
          <form className="flex relative">
            <input
              placeholder="Enter Email"
              className="flex items-center w-[316px] h-[50px] px-2.5 bg-[#E2E8F0] rounded-[5px] text-sm tracking-[-1px] font-normal text-[#20382B]"
            />
            <button className="absolute right-0 mt-[5px] mr-1.5 bg-[#F97316] text-[#FAFAFA] w-[100px] h-10 rounded-[6px]">
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex ml-5">
          <div className="mr-16 md:mr-10 w-full">
            <h2 className="font-semibold text-xl leading-6 mb-3 md:mb-9 ">
              Navigation
            </h2>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-lg leading-5 font-normal">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-lg leading-5 font-normal">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-lg leading-5 font-normal">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="text-lg leading-5 font-normal">
                  Feature updates
                </a>
              </li>
              <li>
                <a href="#" className="text-lg leading-5 font-normal">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="mr-[40px] w-full">
            <h2 className="font-semibold text-xl leading-6 mb-3 md:mb-9">
              Support
            </h2>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-lg leading-5 font-normal">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-lg leading-5 font-normal">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-lg leading-5 font-normal">
                  Waiting list
                </a>
              </li>
              <li>
                <a href="#" className="text-lg leading-5 font-normal">
                  Pricing Experience
                </a>
              </li>
              <li>
                <a href="#" className="text-lg leading-5 font-normal">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden md:block w-full">
            <h2 className="font-semibold text-xl leading-6 mb-3 md:mb-9">
              Legal
            </h2>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-lg leading-5 font-normal">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-lg leading-5 font-normal">
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex md:hidden mt-20 mb-10 ml-5">
          <div>
            <h2 className="font-semibold text-xl leading-6 mb-3 md:mb-9">
              Legal
            </h2>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-lg leading-5 font-normal">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-lg leading-5 font-normal">
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2>Follow Us</h2>
            <div className="flex">
              <div className="bg-[#F97316] rounded-full h-[22px] w-[22px] flex items-center justify-center mr-[7px]">
                <img src={twitter} alt="twitter" className="w-3 h-3" />
              </div>
              <div className="bg-[#F97316] rounded-full h-[22px] w-[22px] flex items-center justify-center mr-[7px]">
                <img src={youtube} alt="youtube" className="w-3 h-3" />
              </div>
              <div className="bg-[#F97316] rounded-full h-[22px] w-[22px] flex items-center justify-center mr-[7px]">
                <img src={instagram} alt="instagram" className="w-3 h-3" />
              </div>
              <div className="bg-[#F97316] rounded-full h-[22px] w-[22px] flex items-center justify-center mr-[7px]">
                <img src={linkedin} alt="linkedin" className="w-3 h-3" />
              </div>
              <div className="bg-[#F97316] rounded-full h-[22px] w-[22px] flex items-center justify-center mr-[7px]">
                <img src={facebook} alt="facebook" className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>

        <div className="ml-4 hidden md:block">
          <h2 className="font-semibold text-lg tracking-[-1px] mb-5">
            Sign Up For Newsletter
          </h2>
          <form className="flex relative">
            <input
              placeholder="Enter Email"
              className="flex items-center w-[270px] h-11 px-2.5 bg-[#E2E8F0] rounded-[5px] text-sm tracking-[-1px] font-normal text-[#20382B]"
            />
            <button className="absolute right-0 my-[3px] mr-2.5 bg-[#F97316] text-[#FAFAFA] w-[100px] h-10 rounded-[6px]">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border border-b border-white mt-20 md:mt-8 mb-6 max-w-screen"></div>

      <div className="flex flex-col md:flex-row justify-between items-center px-5 md:px-[120px]">
        <div className="md:flex hidden">
          <div className="bg-[#F97316] rounded-full h-10 w-10 flex items-center justify-center mr-[3px]">
            <img src={twitter} alt="twitter" />
          </div>
          <div className="bg-[#F97316] rounded-full h-10 w-10 flex items-center justify-center mr-[3px]">
            <img src={youtube} alt="youtube" />
          </div>
          <div className="bg-[#F97316] rounded-full h-10 w-10 flex items-center justify-center mr-[3px]">
            <img src={instagram} alt="instagram" />
          </div>
          <div className="bg-[#F97316] rounded-full h-10 w-10 flex items-center justify-center mr-[3px]">
            <img src={linkedin} alt="linkedin" />
          </div>
          <div className="bg-[#F97316] rounded-full h-10 w-10 flex items-center justify-center mr-[3px]">
            <img src={facebook} alt="facebook" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-1 text-base font-semibold tracking-[-1px] text-center">
          <p className="text-3xl">&copy;</p>
          <p></p>2024 All rights reserved
        </div>
        <div className="hidden md:flex space-x-2.5 text-xs md:text-sm font-medium">
          <a>Privacy Policy</a>
          <a>Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
