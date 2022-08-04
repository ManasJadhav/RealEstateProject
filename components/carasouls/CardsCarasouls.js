import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

// import Img1 from "/img1.png";

const ServiceCarasouls = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      //   navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper h-[20rem]"
    >
      <SwiperSlide>
        <img
          className="w-full h-[16rem]"
          src="/assets/ServiceCarasouls/img1.png"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[16rem]"
          src="/assets/ServiceCarasouls/img2.png"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[16rem]"
          src="/assets/ServiceCarasouls/img3.png"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[16rem]"
          src="/assets/ServiceCarasouls/img4.png"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full h-[16rem]"
          src="/assets/ServiceCarasouls/img5.png"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ServiceCarasouls;
