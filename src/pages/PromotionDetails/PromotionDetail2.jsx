import { Link } from "react-router-dom";
import styles from "./PromotionDetail.module.css"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const PromotionDetail2 = () => {
    return (
        <section className="km-3">
            <div className="container">
                <div class="km-2__image">
                    <img className={styles.slide_img} src="/image/trang-chu/promo_1711_off40.jpg" alt="" />

                </div>
                <div class="container ps-5 pe-5 mt-5">
                    <h2 class="extra-large-text orange-text">3 GÀ GIÒN CHỈ 79K</h2>
                    <p><i>10 tháng 02 năm 2022</i></p>
                    <p>ƯU ĐÃI HỜI - GIÁ SIÊU SỐC VỚI COMBO 3 MIẾNG GÀ GIÒN CHỈ 79K</p>
                    <p>Tin được thì tin, mà không tin được thì... cũng phải tin nha cả nhà ơi!!</p>
                    <p>Pluto tung ưu đãi siêu khủng giảm đến 27%: 3 miếng gà - Giá chỉ 79k - Giá gốc 108k</p>
                    <p>Ưu đãi siêu khủng này chỉ áp dụng cho khách dùng tại cửa hàng hoặc mua mang đi thôiiii !!</p>
                    <p>Vậy nên nhanh tay rủ rê nhau ra ngay cửa hàng Popeyes gần nhất, cùng tận hưởng "đại tiệc gà rán" này nhaaa!!</p>
                    <ul>
                        <li>- Mua Combo 2 miếng gà giòn + 1 Coke tặng 2 miếng gà giòn chỉ 91k</li>
                        <li>- Mua Combo 3 miếng gà giòn + 1 Coke tặng 3 miếng gà giòn chỉ 127k</li>
                    </ul>
                    <p>Bước 3: Bấm đặt hàng và chờ shipper của Popeyes giao tới trong 30p nè.</p>
                    <p>------------------</p>
                    <p>Lưu ý:</p>
                    <ul>
                        <li>-          Áp dụng tại cửa hàng hoặc mua mang đi</li><br />

                        <li>-          Không áp dụng chung với các chương trình khuyến mãi khác</li><br />
                    </ul>

                    <div className={`${styles.page_flex} mt-3 pb-3`}>
                        <div class="previous-page">
                            <Link to="/promotion/1">
                                <div class="orange-text"> <ArrowBackIcon />Trang khuyến mãi trước</div>
                            </Link>
                        </div>
                        <div class="next-page">
                            <Link to="/promotion/3">
                                <div class="orange-text">Trang khuyến mãi kế tiếp <ArrowForwardIcon /></div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default PromotionDetail2