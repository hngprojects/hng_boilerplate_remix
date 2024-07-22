import React from "react";

import { Button } from "./ui/button";

const HeroSection: React.FC = () => {
  return (
    <div className="relative flex w-full items-center lg:mx-[120px] lg:w-[81%]">
      <img
        src="/public/images/herosectionImg.jpg"
        alt="hero img"
        className="w-full"
      />
      <div className="top-15 absolute px-10 lg:bottom-16">
        <h5 className="text-3 inset-0 font-bold text-white lg:text-[36px] lg:leading-[48px]">
          Unlock Industry Insights: Get <br />
          Essential Tips & Boilerplate <br /> Hacks
        </h5>

        <Button className="hover:default-foreground mt-4 bg-primary px-7">
          {" "}
          Read More
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
