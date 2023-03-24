import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'

import React from 'react'

const Carousel = () => {
    return (
        <Swiper

            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: false}}


        >
            <SwiperSlide><img src='https://www.artisticarubens.com.ar/media/wysiwyg/banners/banner-web-2023-clases2.jpg' /></SwiperSlide>
            <SwiperSlide><img src='https://www.artisticarubens.com.ar/media/wysiwyg/banners/banner-desktop.jpg' /></SwiperSlide>
            <SwiperSlide><img src='https://www.artisticarubens.com.ar/media/wysiwyg/banners/banner-web-liquitex-30.jpg' /></SwiperSlide>

            ...
        </Swiper>
    )
}

export default Carousel