import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import './Style.css'

import React from 'react'

const Carousel = () => {
    return (
        <>
            <Swiper
 className='hidden-xs'
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}



            >
                <div>

                    <SwiperSlide><img className='img-carousel' src='https://www.artisticarubens.com.ar/media/wysiwyg/banners/banner-web-2023-clases2.jpg' /></SwiperSlide>
                    <SwiperSlide><img className='img-carousel' src='https://www.artisticarubens.com.ar/media/wysiwyg/banners/banner-desktop.jpg' /></SwiperSlide>
                    <SwiperSlide><img className='img-carousel' src='https://www.artisticarubens.com.ar/media/wysiwyg/banners/banner-web-liquitex-30.jpg' /></SwiperSlide>
                </div>

                ...

            </Swiper>
            <Swiper className='hidden-lg'
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}>

                <div className='hidden-lg'>
                    <SwiperSlide><img className='img-carousel' src='https://www.artisticarubens.com.ar/media/wysiwyg/banners/banner-mobile-liquitex-30.jpg' /></SwiperSlide>
                    <SwiperSlide><img className='img-carousel' src='https://www.artisticarubens.com.ar/media/wysiwyg/banners/banner-mobile.jpg' /></SwiperSlide>
                    <SwiperSlide><img className='img-carousel' src='https://www.artisticarubens.com.ar/media/wysiwyg/banners/banner-movil-imaginacion.jpg' /></SwiperSlide>
                </div>

                ...
            </Swiper>
        </>
    )
}

export default Carousel