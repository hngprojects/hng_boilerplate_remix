import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageSlider = () => {
  return (
    <Swiper
      spaceBetween={0}
      loop
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      speed={3000}
      modules={[Autoplay, A11y]}
      className="mySwiper md:rounded-lg"
    >
      <SwiperSlide className="w-full">
        <img
          className="h-[17.8rem] w-full sm:h-[22rem] md:h-[32.9rem]"
          src="/images/slide.jpeg"
          alt="slider 1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-[17.8rem] w-full sm:h-[22rem] md:h-[32.9rem]"
          src="/images/slide2.jpeg"
          alt="slider 2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-[17.8rem] w-full sm:h-[22rem] md:h-[32.9rem]"
          src="/images/slide3.jpeg"
          alt="slider 3"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-[17.8rem] w-full sm:h-[22rem] md:h-[32.9rem]"
          src="/images/slide4.jpeg"
          alt="slider 4"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-[17.8rem] w-full sm:h-[22rem] md:h-[32.9rem]"
          src="/images/slide5.jpeg"
          alt="slider 5"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-[17.8rem] w-full sm:h-[22rem] md:h-[32.9rem]"
          src="/images/slide6.jpeg"
          alt="slider 6"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageSlider;
