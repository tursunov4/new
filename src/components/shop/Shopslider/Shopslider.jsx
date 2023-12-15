
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slide.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Shopslider = () => {
  return (
    <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
   
    navigation={true}
    modules={[Autoplay, Navigation]}
    className="shopslider"
  >
    <SwiperSlide className='shopslider__item'>Slide 1</SwiperSlide>
    <SwiperSlide className='shopslider__item'>Slide 2</SwiperSlide>
    <SwiperSlide className='shopslider__item'>Slide 3</SwiperSlide>
    <SwiperSlide className='shopslider__item'>Slide 4</SwiperSlide>
    <SwiperSlide className='shopslider__item'>Slide 5</SwiperSlide>
    <SwiperSlide className='shopslider__item'>Slide 6</SwiperSlide>
  </Swiper>
  )
}

export default Shopslider