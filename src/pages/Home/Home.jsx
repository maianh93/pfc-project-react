import React from "react";
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css"
import "owl.carousel/dist/assets/owl.theme.default.min.css"
import styles from "./Home.module.css"


const HomeMenu = ({ label, img }) => {
  return (
    <div className={`${styles.home_main_menu_card} mx-auto`}>
      <div className={styles.home_main_menu_card_content}>
        <h3 className="white-text text-center semi-large-text bold-text">{label}</h3>
      </div>
      <div className={styles.home_main_menu_card_image}>
        <img src={img} alt={label} />
      </div>
    </div>
  )
}

const Home = ({ label, img }) => {
  return (
    <section className="home">
      <div>
        <Helmet>
          <title>Pluto | Trang chủ</title>
        </Helmet>
      </div>
      <OwlCarousel
        className="owl-theme"
        items="1"
        autoplay
        nav
        dots
        loop
      >
        <div className="item">
          <img src="/image/trang-chu/banner_1.jpg" alt="" />
        </div>
        <div className="item">
          <img src="/image/trang-chu/promo_1711_off40.jpg" alt="" />
        </div>
        <div className="item">
          <img src="/image/trang-chu/slider_3.jpg" alt="" />
        </div>
      </OwlCarousel>

      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <Link to="/categories">
              <HomeMenu
                label="Thực đơn"
                img="/image/trang-chu/menu.jpg"
              />
            </Link>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <Link to="/stores">
              <HomeMenu
                label="Cửa hàng"
                img="/image/trang-chu/pluto-loduc.png"
              />
            </Link>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <Link to="/about">
              <HomeMenu
                label="Về chúng tôi"
                img="/image/trang-chu/tuyen-dung.png"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Home;