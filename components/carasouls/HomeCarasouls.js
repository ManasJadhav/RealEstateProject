import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";

const HomeCarasouls = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      loop={true}
      centeredSlides={false}
      slidesPerView={"3"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper lg:w-[75rem]"
    >
      <SwiperSlide>
        <img
          className="w-full object-fit h-full"
          src="/assets/home page photos/HomeCara1.png"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full object-fit h-full"
          src="/assets/home page photos/HomeCara2.png"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full object-fit h-full"
          src="/assets/home page photos/HomeCara4.png"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeCarasouls;
