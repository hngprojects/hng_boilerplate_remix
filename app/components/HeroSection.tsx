import React from "react";
import { Button } from "./ui/button";

interface HeroSectionProps {
  imageUrl: "/public/images/herosectionImg.jpg";
}

const HeroSection: React.FC<HeroSectionProps> = ({ imageUrl }) => {
  return (
    <section
      className={`relative h-[500px] overflow-hidden bg-contain bg-no-repeat px-6 lg:mx-20 lg:bg-cover`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute bottom-16 ">
      <h5 className="inset-0 text-[40px] leading-[48px] font-bold text-white" >
        Unlock Industry Insights: Get <br />
        Essential Tips & Boilerplate <br /> Hacks
      </h5>

      <Button className="bg-orange-500 mt-4 px-7"> Read More</Button>

      </div>
     
    </section>
  );
};

export default HeroSection;
