import { Link } from "react-router-dom";
import styles from "./PromotionDetail.module.css"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const PromotionDetail1 = () => {
    return (
        <section className="km-3">
            <div className="km-1__image">
            <img src="/image/trang-chu/banner_1.jpg" alt="" />
                <div>
                <div className="container ps-5 pe-5 mt-5">
                <h2 className="extra-large-text orange-text">THỨ 2 MUA 1 TẶNG 1 - ƯU ĐÃI GIAO HÀNG TẬN NƠI</h2>
                <p><i>22 tháng 02 năm 2022</i></p>
                <p>THỨ 2 MUA 1 TẶNG 1 - ƯU ĐÃI GIAO HÀNG TẬN NƠI</p>
                <p>Nghe nói thứ Hai cực kỳ nightmare, nhưng fans Pluto lại cực high với thứ Hai sắp tới vì có ƯU ĐÃI HOÀN TOÀN MỚI – MUA 1 TẶNG 1</p>
                <p>****3 bước đặt gà online - Mua 1 được 2 khi đặt qua app/web Pluto hoặc Hotline 0888 202 082</p>
                <p>Bước 1: Vào Website: của Pluto hoặc Hotline 0888 202 082</p>
                <p>Bước 2: Chọn Combo Mua 1 Tặng 1</p>
                <ul>
                    <li>- Mua Combo 2 miếng gà giòn + 1 Coke tặng 2 miếng gà giòn chỉ 91k</li>
                    <li>- Mua Combo 3 miếng gà giòn + 1 Coke tặng 3 miếng gà giòn chỉ 127k</li>
                </ul>
                <p>Bước 3: Bấm đặt hàng và chờ shipper của Pluto giao tới trong 30p nè.</p>
                <p>------------------</p>
                <p>Lưu ý:</p>
                 <ul>
                <li>-          Áp dụng khách đặt Delivery (không áp dụng pick-up) trên website/ app Pluto hoặc Hotline </li><br/>
                        
                        <li>-          Áp dụng mỗi thứ 2 hàng tuần</li><br/>
                            
                        <li>-          Phí giao hàng 15.000đ cho mỗi đơn hàng.</li>   <br/> 
                            
                        <li>-          Không áp dụng cho đơn hàng trên 500.000</li><br/>
                        <li>-          Phần gà được phục vụ ngẫu nhiên</li>     <br/>       
                            
                        <li>-         Không áp dụng vào Lễ Tết.</li><br/>
                </ul>
                
                <Link to="/categories/293"><div className="btn btn--red btn--order bold-text">ĐẶT HÀNG</div></Link>
                <div className={`${styles.page_flex} mt-3 pb-3`}>
                    <div className="previous-page">
                        
                        
                    </div>
                    <div className="next-page">
                        <Link to="/promotion/2">
                        <div className="orange-text">Trang khuyến mãi kế tiếp<ArrowForwardIcon/></div>
                        </Link>
                        
                        
                    </div>
                </div>
                
                </div>
                </div>
            </div>

        </section>
    )
}

export default PromotionDetail1