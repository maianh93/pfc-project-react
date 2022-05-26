import { Link } from "react-router-dom";
import styles from "./PromotionDetail.module.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const PromotionDetail3 = () => {
    return (
        <section className="km-3">
            <div className="container">
                <div class="km-3__image">
                    <img className={styles.slide_img} src="/image/trang-chu/slider_3.jpg" alt="" />
                </div>
                <div class="container ps-5 pe-5 mt-5">
                    <h2 class="extra-large-text orange-text">THỨ 3 HÀNG TUẦN - GIẢM 40% ĐẶT HÀNG ONLINE</h2>
                    <p><i>12 tháng 02 năm 2022</i></p>
                    <p>GIẢM 40% KHI ĐẶT HÀNG QUA WEBSITE VÀO THỨ 3 HÀNG TUẦN</p>
                    <p>Khuyến mãi "vạn người mê" Giảm 40% thứ 3 hàng tuần đã trở lại đây các bạn ơi!!!</p>
                    <p>Từ 12/02/2022, Pluto chính thức áp dụng chương trình giảm 40% cho các đơn hàng order qua website. </p>
                    <p>Không cần phải tốn tiền gọi điện thoại, chỉ cần vài cái click chuột là có ngay 1 bữa ăn siêu ngon mà lại còn rẻ nữa. </p>
                    <p>****3 bước đặt gà online - Mua 1 được 2 khi đặt qua app/web Pluto</p>
                    <p>Bước 1: Vào Website: của Pluto</p>
                    <p>Bước 2: Chọn Combo Mua 1 Tặng 1</p>
                    <ul>
                        <li>- Mua Combo 2 miếng gà giòn + 1 Coke tặng 2 miếng gà giòn chỉ 91k</li>
                        <li>- Mua Combo 3 miếng gà giòn + 1 Coke tặng 3 miếng gà giòn chỉ 127k</li>
                    </ul>
                    <p>Bước 3: Bấm đặt hàng và chờ shipper của Pluto giao tới trong 30p nè.</p>
                    <p>------------------</p>
                    <p>Lưu ý:</p>
                    <ul>
                        <li>-          Chỉ áp dụng khi khách đặt Delivery (không áp dụng pick-up) trên website/ app Pluto</li><br />

                        <li>-          Áp dụng mỗi thứ 3 hàng tuần</li><br />

                        <li>-          Phí giao hàng 15.000đ cho mỗi đơn hàng.</li>   <br />

                        <li>-          Giảm 40% khi mua 3 miếng gà giòn (giá trước giảm: 108.000đ, giá sau giảm: 65.000đ)</li><br />
                        <li>-          Phần gà được phục vụ ngẫu nhiên</li>     <br />

                        <li>-         Không áp dụng vào Lễ Tết.</li><br />
                    </ul>

                    <div class="btn btn--red btn--order not-update bold-text">ĐẶT HÀNG</div>
                    <div className={`${styles.page_flex} mt-3 pb-3`}>
                        <div class="previous-page">
                            <Link to="/promotion/2">
                                <div class="orange-text"> <ArrowBackIcon /> Trang khuyến mãi trước</div>
                            </Link>
                        </div>
                        <div class="next-page">


                        </div>

                    </div>

                </div>
            </div>

        </section>
    )
}

export default PromotionDetail3