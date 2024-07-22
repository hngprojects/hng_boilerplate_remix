import { Check, MessageSquare } from "lucide-react";

import { Button } from "~/components/ui/button";
import Container from "./Container";
import ImageSlider from "./ImageSlider";

const HeroSection = () => {
  return (
    <Container Element="section">
      <div className="relative flex flex-col items-center justify-center gap-14 pb-8 pt-12 md:mb-8 md:pb-20 md:pt-20 lg:flex-row lg:items-start lg:justify-between">
        <div className="absolute -left-[28.75rem] -top-80 -z-10 hidden h-[39.625rem] w-[39.625rem] rounded-full bg-[#6DC347] opacity-0 blur-[500px] md:flex"></div>
        <div className="absolute -top-[31rem] right-40 -z-10 hidden h-[39.625rem] w-[39.625rem] rounded-full bg-[#FFD6D6] blur-[500px] md:flex"></div>
        <div className="flex w-full flex-col items-center justify-center text-center lg:items-start lg:text-left">
          <h3 className="text-[2rem] font-bold text-neutral-2 md:text-6xl">
            Focus on What Matters. We&apos;ve Got the Foundation Covered.
          </h3>
          <div className="mb-8 mt-2 hidden w-full sm:flex lg:w-fit">
            <img src="/icons/curve.svg" className="w-full" alt="curve vector" />
          </div>
          <div className="mb-4 mt-2 flex w-full px-4 sm:hidden">
            <img
              src="/icons/curve-mobile.svg"
              className="w-full"
              alt="curve vector"
            />
          </div>
          <p className="px-4 text-base leading-tight text-neutral-2 md:px-0 md:text-[1.75rem] md:text-neutral-1">
            Streamline your processes with a boilerplate built for efficiency
            and optimal productivity.
          </p>

          <div className="mt-14 hidden md:flex">
            <Button size="lg">Get Started</Button>
          </div>
          <div className="mt-14 md:hidden">
            <Button>Get Started</Button>
          </div>
        </div>
        <div className="flex w-full justify-end">
          <div className="relative w-11/12 md:h-[32.9rem] lg:w-[26.5rem]">
            <ImageSlider />
            <div className="absolute -left-6 bottom-10 z-10 rounded-lg bg-white px-[0.625rem] py-2 md:-left-20 md:px-5 md:py-4">
              <h6 className="mb-1 text-[0.625rem] text-[#A9A7B6] md:mb-2 md:text-xs">
                Boilerplate
              </h6>
              <p className="text-xs font-medium text-neutral-1 md:text-base">
                Built to Last...
              </p>
            </div>
            <div className="absolute -left-7 top-8 z-10 -rotate-[15.25deg] rounded-lg bg-primary p-2 md:-left-20 md:top-40 md:p-3">
              <Check color="#ffffff" />
            </div>
            <div className="absolute -bottom-6 right-6 z-10 rotate-[15.25deg] rounded-lg bg-primary p-2 md:-bottom-9 md:right-16 md:p-3">
              <MessageSquare color="#ffffff" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
