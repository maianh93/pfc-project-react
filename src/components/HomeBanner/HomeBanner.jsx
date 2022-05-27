import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

import styles from "./HomeBanner.module.css"

export default function HomeBanner() {
    return (
        <>
            <Swiper
                rewind={true}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
            
                <SwiperSlide className={styles.banner}>
                    <Link to="/promotion/1">
                        <div className={styles.banner_item}>
                            <img className={styles.slide_img} src="/image/trang-chu/banner_1.jpg" alt="" />
                        </div>
                    </Link>
                </SwiperSlide>
            
                <SwiperSlide className={styles.banner}>
                    <Link to="/promotion/2">
                    <div className={styles.banner_item}>
                        <img className={styles.slide_img} src="/image/trang-chu/promo_1711_off40.jpg" alt="" />
                    </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className={styles.banner}>
                <Link to="/promotion/3">
                    <div className={styles.banner_item}>
                        <img className={styles.slide_img} src="/image/trang-chu/slider_3.jpg" alt="" />
                    </div>
                    </Link>
                </SwiperSlide>

            </Swiper>
        </>
    );
}