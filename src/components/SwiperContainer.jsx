import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "./Card";

const breakpoints = {
  300: {
    slidesPerView: 1,
  },
  480: {
    slidesPerView: 2,
  },
  800: {
    slidesPerView: 3,
  },
  1140: {
    slidesPerView: 4,
  },
  1440: {
    slidesPerView: 5,
  },
};

export default function SwiperContainer({ data, space }) {
  return (
    <Swiper breakpoints={breakpoints} spaceBetween={space}>
      {data.map((product) => (
        <SwiperSlide key={product.id}>
          <Card product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
