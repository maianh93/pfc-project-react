import styles from "./Footer.module.css";
import "../../App.css"


const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className="container mt-4 pt-4">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className={styles.footer__logo}>
                <img src="/image/logo/footer-logo.png" alt="footer-logo" />
              </div>
              <div className={styles.footer__item}>
                <div className={styles.footer__item_icon}>
                  <img src="/image/map-market.svg" alt="map-market" />
                </div>
                <div className={`ps-3 ${styles.white_text}`}>
                  <p>25 Hồ Đắc Di - Đống Đa - Hà Nội</p>
                </div>
              </div>
              <div className={styles.footer__item}>
                <div className={styles.footer__item_icon}>
                  <img src="/image/phone.svg" alt="phone" />
                </div>
                <div className={`ps-3 ${styles.white_text}`}>
                  <p>0888 202 082</p>
                </div>
              </div>
              <div className={styles.footer__item}>
                <div className={styles.footer__item_icon}>
                  <img src="/image/mail.svg" alt="website" />
                </div>
                <div className={`ps-3 ${styles.white_text}`}>
                  <p>garanpluto.com.vn</p>
                </div>
              </div>
              <div className={styles.footer__social}>
                <i className="fab fa-facebook-f p-2"></i>
                <i className="fab fa-twitter p-2"></i>
                <i className="fab fa-instagram p-2"></i>
                <i className="fab fa-google-plus p-2"></i>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className={`${styles.footer__info} ${styles.white_text} pt-4`}>
                <h3>THÔNG TIN CƠ BẢN</h3>
                <p className={styles.basic_info} href="">
                  <p>Giới thiệu</p>
                </p>
                <p className={styles.basic_info} href="">
                  <p>Tin tức</p>
                </p>
                <p className={styles.basic_info} href="">
                  <p>Nhượng quyền</p>
                </p>
                <p className={styles.basic_info} href="">
                  <p>Điều khoản sử dụng</p>
                </p>
                <p className={styles.basic_info} href="">
                  <p>Chính sách bảo mật</p>
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className={`${styles.footer__download} ${styles.white_text} pt-4`}>
                <h3>TẢI ỨNG DỤNG</h3>
                <a href="#"><img className={styles.footer__downloadimage} src="/image/download (1).png"
                  alt="google-play"/></a>
                <a href="#"><img className={styles.footer__downloadimage} src="/image/download.png"
                  alt="app-store" /></a>
              </div>
            </div>
          </div>
          <hr className={styles.white_text} />
          <div className={`${styles.footer__company} ${styles.white_text}`}>
            <p>Công ty CP Thực phẩm và Đồ uống Pluto</p>
            <p>Designed by Mai Anh Phung</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Mở cái có carousel cơ mà?
