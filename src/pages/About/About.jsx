import React from 'react';
import { Helmet } from 'react-helmet';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import styles from "./About.module.css"

const About = () => {
    return (
        <section className="about">
            <div>
                <Helmet>
                    <title>Pluto | Về chúng tôi</title>
                </Helmet>
            </div>
            <div className={styles.home__main_image}>
            </div>
            <div className="container">
                <div className={styles.timeline}>
                    <div className={`${styles.timeline__container} ${styles.left}`}>
                        <div className={styles.left_content}>
                            <h2 className="semi-large-text red_text bold-text">Năm 2003</h2>
                            <p className="bold-text">Bà Phùng Mai Anh khai trương cửa hàng đầu tiên tại 25 Hồ Đắc Di chuyên phục
                                vụ các món gà rán truyền thống và đặt tên là Pluto với tagline “Love That Chicken”</p>
                            <div className={styles.timeline__image_2003}>

                            </div>
                        </div>
                    </div>
                    <div className={`${styles.timeline__container} ${styles.right}`}>
                        <div className={styles.right_content}>
                            <h2 className="semi-large-text red_text bold-text">Năm 2005</h2>
                            <p className="bold-text">Pluto ra mắt thêm các món gà giòn cay theo phong cách miền Bắc, liên tiếp
                                mở nhà hàng thứ 2,3,4 tại Hà Nội</p>
                            <div className={styles.timeline__image_2005}>

                            </div>
                        </div>
                    </div>
                    <div className={`${styles.timeline__container} ${styles.left}`}>
                        <div className={styles.left_content}>
                            <h2 className="semi-large-text red_text bold-text">Năm 2012</h2>
                            <p className="bold-text">Công ty CP Thực phẩm và Đồ uống Pluto được thành lập và mua lại chuỗi nhà
                                hàng thuộc thương hiệu Pluto</p>
                            <div className={styles.timeline__image_2012}>

                            </div>
                        </div>
                    </div>
                    <div className={`${styles.timeline__container} ${styles.right}`}>
                        <div className={styles.right_content}>
                            <h2 className="semi-large-text red_text bold-text">Năm 2019</h2>
                            <p className="bold-text">Nối tiếp chuỗi thành công của những chi nhánh trước, Pluto mở rộng và mở
                                thêm chi nhánh tại TP Hồ Chí Minh và TP Đà Nẵng</p>
                            <div className={styles.timeline__image_2019}>

                            </div>
                        </div>
                    </div>
                    <div className={`${styles.timeline__container} ${styles.left}`}>
                        <div className={styles.left_content}>
                            <h2 className="semi-large-text red_text bold-text">Năm 2021 và hơn thế nữa</h2>
                            <p className="bold-text">Pluto tiếp tục hoàn thiện với phương châm “Làm hài lòng những khách hàng
                                khó tính nhất!”</p>
                            <div className={styles.timeline__image_2021}>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default About;