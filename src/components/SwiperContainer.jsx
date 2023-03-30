import { lazy } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
const Card = lazy(() => import("@/components/Card.jsx"));

const breakpoints = {
  300: {
    slidesPerView: 1,
  },
  480: {
    slidesPerView: 2,
  },
  750: {
    slidesPerView: 3,
  },
  1000: {
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
