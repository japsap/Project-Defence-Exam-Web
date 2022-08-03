import React from 'react'

//swipers 
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";



//logos
import one from './sponsors/first-logo.jpg';
import two from './sponsors/second-logo.jpg';
import three from './sponsors/third-logo.jpg';

import four from './sponsors/forth-logo.jpg'
import five from './sponsors/fifth-logo.jpg';
import six from './sponsors/six.jpg';

import seven from './sponsors/seven.jpg';
import eight from './sponsors/eigth.jpg';
import nine from './sponsors/nine.jpg';


const Sponsors = () => {
    SwiperCore.use([Autoplay]);
  return (
    <Swiper
    slidesPerView={5}
    spaceBetween={200}
    showspagination="false"
    autoplay={{
      delay:2500
    }}
    modules={[Pagination, Autoplay]}
    className="mySwiper mt-5"
  >
    <SwiperSlide>
      <img src={one} />
    </SwiperSlide>
    <SwiperSlide>
      <img src={two} />
    </SwiperSlide>
    <SwiperSlide>
      <img src={three} />
    </SwiperSlide>
    <SwiperSlide>
      <img src={four} />
    </SwiperSlide>
    <SwiperSlide>
      <img src={five} />
    </SwiperSlide>
    <SwiperSlide>
      <img src={six} />
    </SwiperSlide>
    <SwiperSlide>
      <img src={seven} />
    </SwiperSlide>
    <SwiperSlide>
      <img src={eight} />
    </SwiperSlide>
    <SwiperSlide>
      <img src={nine} />
    </SwiperSlide>
  </Swiper>
  )
}

export default Sponsors