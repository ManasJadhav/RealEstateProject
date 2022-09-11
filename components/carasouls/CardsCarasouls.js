import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Images2 from "../imageData/image2";
import Image from "next/image";

const CardsCarasouls = (props) => {
  const ImageUrl = Images2[props.index.mainIndex][props.index.subIndex];
  // Images2[props.index.mainIndex][props.index.subIndex];

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper h-[20rem]"
    >
      {ImageUrl.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <Image width={500} height={370} src={item.img} />
          </SwiperSlide>
        );
      })}
      ;
    </Swiper>
  );
};

export default CardsCarasouls;
