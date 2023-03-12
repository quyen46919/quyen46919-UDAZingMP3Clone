import { Swiper } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";

export default function Slide({
  children,
  className,
  renderSlide,
  slidesPerView,
  slidesPerGroup,
}) {
  //   SwiperCore.use([Autoplay]);
  return (
    <div className={className}>
      {children}
      <Swiper
        breakpoints={{
          // Responsive
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 2,
            spaceBetweenSlides: 150,
          },
          768: {
            slidesPerView: 4,
            slidesPerGroup: 2,
            spaceBetweenSlides: 200,
          },
          640: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetweenSlides: 200,
          },
          480: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 30,
          },
          320: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 20,
          },
        }}
        spaceBetween={20}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
        loop={true}
        loopedSlides={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {renderSlide}
      </Swiper>
    </div>
  );
}
