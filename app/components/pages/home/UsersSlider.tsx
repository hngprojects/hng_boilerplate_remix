import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const UsersSlider = () => {
  return (
    <Swiper
      spaceBetween={16}
      loop
      slidesPerView={1.7}
      speed={2000}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        400: {
          slidesPerView: 2,
        },
        500: {
          slidesPerView: 2.4,
        },
        550: {
          slidesPerView: 2.7,
        },
        600: {
          slidesPerView: 3,
        },
        800: {
          slidesPerView: 3.7,
        },
        950: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
          autoplay: false,
        },
      }}
      modules={[Autoplay]}
      className="mySwiper w-full text-[1.69375rem] font-semibold text-neutral-1"
    >
      <SwiperSlide>
        <li className="flex items-center justify-center gap-2">
          <img src="/icons/unsplash.svg" alt="Unsplash" />
          Unsplash
        </li>
      </SwiperSlide>
      <SwiperSlide>
        <li className="flex items-center justify-center gap-2">
          <img src="/icons/notion.svg" alt="Notion" />
          Notion
        </li>
      </SwiperSlide>
      <SwiperSlide>
        <li className="flex items-center justify-center gap-2">
          <img src="/icons/intercom.svg" alt="INTERCOM" />
          INTERCOM
        </li>
      </SwiperSlide>
      <SwiperSlide>
        <li className="flex items-center justify-center gap-2">
          <img src="/icons/descript.svg" alt="descript" />
          descript
        </li>
      </SwiperSlide>
      <SwiperSlide>
        <li className="flex items-center justify-center gap-2 pr-2">
          <img src="/icons/grammarly.svg" alt="grammarly" />
          grammarly
        </li>
      </SwiperSlide>
    </Swiper>
  );
};

export default UsersSlider;
