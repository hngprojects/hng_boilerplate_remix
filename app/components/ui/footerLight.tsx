import { FC } from "react";

const FooterLight: FC = () => {
  return (
    <footer className="max-w-screen bg-background py-10 text-black md:py-[70px]">
      <div className="flex flex-col items-start justify-between px-5 md:flex-row md:px-[120px]">
        <div className="mx-auto mb-5">
          <h2 className="mb-3 text-center text-xl font-bold leading-6 md:mb-9 md:text-left">
            BoilerPlate
          </h2>
          <p className="text-center text-lg font-normal leading-6 md:text-left">
            Logo subject details and address
          </p>
        </div>

        <div className="mx-auto mb-20 mt-10 block md:hidden">
          <h2 className="mb-5 text-center text-lg font-semibold tracking-[-1px]">
            Sign Up For Newsletter
          </h2>
          <form className="relative flex">
            <input
              placeholder="Enter Email"
              className="flex h-[50px] w-[316px] items-center rounded-[5px] bg-input px-2.5 text-sm font-normal tracking-[-1px] text-foreground"
            />
            <button className="absolute right-0 mr-1.5 mt-[5px] h-10 w-[100px] rounded-[6px] bg-primary text-primary-foreground">
              Subscribe
            </button>
          </form>
        </div>

        <div className="ml-5 flex">
          <div className="mr-16 w-full md:mr-10">
            <h2 className="mb-3 text-xl font-semibold leading-6 md:mb-9">
              Navigation
            </h2>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-lg font-normal leading-5">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-lg font-normal leading-5">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-lg font-normal leading-5">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="text-lg font-normal leading-5">
                  Feature updates
                </a>
              </li>
              <li>
                <a href="#" className="text-lg font-normal leading-5">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="mr-[40px] w-full">
            <h2 className="mb-3 text-xl font-semibold leading-6 md:mb-9">
              Support
            </h2>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-lg font-normal leading-5">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-lg font-normal leading-5">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-lg font-normal leading-5">
                  Waiting list
                </a>
              </li>
              <li>
                <a href="#" className="text-lg font-normal leading-5">
                  Pricing Experience
                </a>
              </li>
              <li>
                <a href="#" className="text-lg font-normal leading-5">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden w-full md:block">
            <h2 className="mb-3 text-xl font-semibold leading-6 md:mb-9">
              Legal
            </h2>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-lg font-normal leading-5">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-lg font-normal leading-5">
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-10 ml-5 mt-20 flex md:hidden">
          <div>
            <h2 className="mb-3 text-xl font-semibold leading-6 md:mb-9">
              Legal
            </h2>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-lg font-normal leading-5">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-lg font-normal leading-5">
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2>Follow Us</h2>
            <div className="flex">
              <div className="mr-[7px] flex h-[22px] w-[22px] items-center justify-center rounded-full bg-primary">
                <img
                  src="/icons/twitter.svg"
                  alt="twitter"
                  className="h-3 w-3"
                />
              </div>
              <div className="mr-[7px] flex h-[22px] w-[22px] items-center justify-center rounded-full bg-primary">
                <img
                  src="/images/youtube.png"
                  alt="youtube"
                  className="h-3 w-3"
                />
              </div>
              <div className="mr-[7px] flex h-[22px] w-[22px] items-center justify-center rounded-full bg-primary">
                <img
                  src="/icons/instagram.svg"
                  alt="instagram"
                  className="h-3 w-3"
                />
              </div>
              <div className="mr-[7px] flex h-[22px] w-[22px] items-center justify-center rounded-full bg-primary">
                <img
                  src="/images/linkedin.png"
                  alt="linkedin"
                  className="h-3 w-3"
                />
              </div>
              <div className="mr-[7px] flex h-[22px] w-[22px] items-center justify-center rounded-full bg-primary">
                <img
                  src="/images/facebook.png"
                  alt="facebook"
                  className="h-3 w-3"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="ml-4 hidden md:block">
          <h2 className="mb-5 text-lg font-semibold tracking-[-1px]">
            Sign Up For Newsletter
          </h2>
          <form className="relative flex">
            <input
              placeholder="Enter Email"
              className="flex h-11 w-[270px] items-center rounded-[5px] bg-gray-200 px-2.5 text-sm font-normal tracking-[-1px] text-primary outline-none"
            />
            <button className="absolute bottom-[0.01rem] right-0 my-[3.5px] h-10 w-[100px] rounded-[6px] bg-primary text-primary-foreground">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-screen mb-6 mt-20 border border-b border-black md:mt-8"></div>

      <div className="flex flex-col items-center justify-between px-5 md:flex-row md:px-[120px]">
        <div className="hidden md:flex">
          <div className="mr-[3px] flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <img src="/icons/twitter.svg" alt="twitter" />
          </div>
          <div className="mr-[3px] flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <img src="/images/youtube.png" alt="youtube" />
          </div>
          <div className="mr-[3px] flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <img src="/icons/instagram.svg" alt="instagram" />
          </div>
          <div className="mr-[3px] flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <img src="/images/linkedin.png" alt="linkedin" />
          </div>
          <div className="mr-[3px] flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <img src="/images/facebook.png" alt="facebook" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-1 text-center text-base font-semibold tracking-[-1px] text-gray-300">
          <p className="text-3xl">&copy;</p>
          <p></p>2024 All rights reserved
        </div>
        <div className="hidden space-x-2.5 text-xs font-medium md:flex md:text-sm">
          <a>Privacy Policy</a>
          <a>Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterLight;
