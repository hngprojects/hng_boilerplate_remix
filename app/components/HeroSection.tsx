import React from "react";
import { Button } from "./ui/button";

interface HeroSectionProps {
  imageUrl: "/public/images/herosectionImg.jpg";
}

const HeroSection: React.FC<HeroSectionProps> = ({ imageUrl }) => {
  return (



    <div className="relative flex items-center lg:w-[81%]  lg:mx-[120px]  w-full ">
      <img src="/public/images/herosectionImg.jpg" alt="hero img" className="w-full" />
      <div className="absolute  top-15 lg:bottom-16 px-10  ">
      <h5 className="inset-0 text-3 lg:text-[36px] lg:leading-[48px] font-bold text-white " >
        Unlock Industry Insights: Get <br />
        Essential Tips & Boilerplate <br /> Hacks
      </h5>

      <Button className="bg-primary hover:default-foreground mt-4 px-7"> Read More</Button>

      </div>
      </div>

  );
};

export default HeroSection;
