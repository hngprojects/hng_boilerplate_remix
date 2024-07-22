import { ArrowLeft, ArrowRight } from "lucide-react";
import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Button } from "~/components/ui/button";
import Container from "./Container";
import TestimonialCard from "./TestimonialCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useRef } from "react";

interface NavigationOptions {
  prevEl: HTMLButtonElement | null;
  nextEl: HTMLButtonElement | null;
}

const dummyResponds = [
  {
    image: "/images/dp.png",
    name: "Jane Smith",
    occupation: "Freelance Designer",
    comment:
      "I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!",
    rating: 5,
  },
  {
    image: "/images/dp2.png",
    name: "Tom Williams",
    occupation: "Software Developer",
    comment:
      "I've been using this web hosting service for a few months now and overall it's been fine. The uptime has been good and I haven't had any major issues. The pricing is also reasonable. Nothing particularly stands out as exceptional, but it gets the job done.",
    rating: 5,
  },
  {
    image: "/images/dp3.png",
    name: "Michael Brown",
    occupation: "Online Entrepreneur",
    comment:
      "I've been using this web hosting service for a few months and it's been nothing but problems. My website has gone down multiple times and the customer service has been unresponsive. I would not recommend this company.",
    rating: 5,
  },
  {
    image: "/images/dp.png",
    name: "Jane Smith",
    occupation: "Freelance Designer",
    comment:
      "I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!",
    rating: 5,
  },
  {
    image: "/images/dp2.png",
    name: "Tom Williams",
    occupation: "Software Developer",
    comment:
      "I've been using this web hosting service for a few months now and overall it's been fine. The uptime has been good and I haven't had any major issues. The pricing is also reasonable. Nothing particularly stands out as exceptional, but it gets the job done.",
    rating: 5,
  },
  {
    image: "/images/dp3.png",
    name: "Michael Brown",
    occupation: "Online Entrepreneur",
    comment:
      "I've been using this web hosting service for a few months and it's been nothing but problems. My website has gone down multiple times and the customer service has been unresponsive. I would not recommend this company.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const previousReference = useRef<HTMLButtonElement>(null);
  const nextReference = useRef<HTMLButtonElement>(null);
  return (
    <Container
      Element="section"
      wrapperClass="bg-background backdrop-filter backdrop:blur-[125px]"
    >
      <div className="relative py-1 md:py-28">
        <header className="mb-7s mb-7 flex flex-col items-center justify-between md:mb-14 md:flex-row">
          <div className="w-full text-center md:w-1/2 md:text-start">
            <h5 className="mb-2 text-2xl font-medium text-neutral-2 md:mb-3 md:text-[2.75rem] md:font-bold">
              Client Testimonials
            </h5>
            <p className="text-sm leading-tight text-neutral-1 md:text-xl">
              Don&apos;t just take our word for it - see what actual users of
              our product have to say about their experience.
            </p>
          </div>
          <nav className="mt-11 flex gap-4 self-end md:mt-0 md:self-center">
            <Button
              ref={previousReference}
              className="h-[4.375rem] w-[4.375rem] rounded-[0.375rem] border border-primary bg-white hover:bg-white/10 md:border-[#CBD5E1]"
            >
              <ArrowLeft className="text-primary" />
            </Button>
            <Button
              ref={nextReference}
              className="h-[4.375rem] w-[4.375rem] rounded-[0.375rem] border border-primary bg-white hover:bg-white/10 md:border-[#CBD5E1]"
            >
              <ArrowRight className="text-primary" />
            </Button>
          </nav>
        </header>
        <div>
          <Swiper
            spaceBetween={32}
            loop
            slidesPerView={1.125}
            navigation={{
              prevEl: previousReference.current,
              nextEl: nextReference.current,
            }}
            breakpoints={{
              450: {
                slidesPerView: 1.3,
              },
              500: {
                slidesPerView: 1.5,
              },
              600: {
                slidesPerView: 1.7,
              },
              700: {
                slidesPerView: 1.9,
              },
              800: {
                slidesPerView: 2,
              },
              850: {
                slidesPerView: 2.2,
              },
              950: {
                slidesPerView: 2.5,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            onInit={(swiper) => {
              // Make sure Swiper is initialized before assigning navigation refs
              if (swiper.params.navigation) {
                const navigation = swiper.params
                  .navigation as NavigationOptions;
                navigation.prevEl = previousReference.current;
                navigation.nextEl = nextReference.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }}
            modules={[A11y, Navigation]}
            className="mySwiper w-full"
          >
            {dummyResponds.map((testimonial, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <TestimonialCard {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default TestimonialsSection;
