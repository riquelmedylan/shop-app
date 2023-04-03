import "swiper/css";
import "swiper/css/navigation";
import style from "@/styles/modules/product/images-carrousel.module.css";
import { EffectCoverflow, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export const ImagesCarrousel = ({ images, title }) => {
  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#ffba08",
      }}
      navigation={true}
      modules={[EffectCoverflow, Navigation]}
      className={style.mySwiper}
      effect={"coverflow"}
      centeredSlides={true}
    >
      {images?.map((image, key) => (
        <SwiperSlide key={key}>
          <img className={style.image} src={image} alt={title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
