// Import Swiper React components
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
const ServiceCarasouls = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper lg:h-[38rem]"
    >
      <SwiperSlide>
        <img
          className="lg:w-full lg:h-[39rem] h-[16rem]"
          src="/assets/ServiceCarasouls/img6.png"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="lg:w-full lg:h-[39rem] h-[16rem]"
          src="/assets/ServiceCarasouls/img1.png"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="lg:w-full lg:h-[39rem] h-[16rem]"
          src="/assets/ServiceCarasouls/img2.png"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="lg:w-full lg:h-[39rem] h-[16rem]"
          src="/assets/ServiceCarasouls/img3.png"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="lg:w-full lg:h-[39rem] h-[16rem]"
          src="/assets/ServiceCarasouls/img4.png"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="lg:w-full lg:h-[39rem] h-[16rem]"
          src="/assets/ServiceCarasouls/img5.png"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ServiceCarasouls;
