// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// Import required modules
import { Pagination, Navigation } from "swiper/modules";
import React, { useState } from "react";
import type { Slide } from "../../types/slide.interface";

interface SliderProps {
  slideData: Slide[];
}

const Slider: React.FC<SliderProps> = ({ slideData }) => {
  const [slides, setSlides] = useState<Slide[]>(slideData);

  const handleSlideChange = () => {
    setSlides((prevSlides) => {
      const [first, ...rest] = prevSlides;
      return [...rest, first];
    });
  };
  return (
    <>
      <Swiper
        slidesPerView = {2.2}
        spaceBetween={20}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        onSlideChangeTransitionEnd={handleSlideChange}
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.image} alt={slide.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
