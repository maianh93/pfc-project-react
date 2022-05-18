import styles from "./UserInfo.module.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"


const UserInfo = () => {
    return (
        <div className="container">
        <div id ="user-info" class="row mt-5">
                <h2 class="extra_large_text red_text extra-bold-text uppercase_text text-center pb-5">thông tin tài khoản</h2>
                <div class={`${styles.user_picture} col-lg-4 col-md-4 col-sm-12}`}>
                    <img src="/image/user.png" alt=""/>
                    <p class="red_text text-center semi_bold_text semi-large-text pt-3 cursor">Đổi avatar</p>
                </div>
                <div class="col-lg-8 col-md-8 col-sm-12 ps-4">
                    <div class={styles.dialog}>
                        <div class={styles.dialog_body}>
                            <div class="container">
                                <div class="row pt-2">
                                    <h3 class="red_text uppercase_text bold-text pb-3 large-text">Chi tiết tài khoản</h3>
                                    <div class="col-lg-3 col-md-3 col-sm-12">
                                        <div class="small-text black-text bold-text">Tên</div>
                                    </div>
                                    <div class="col-lg-9 col-md-9 col-sm-12">
                                        <div class="input-box">
                                            <input type="text" id="firstname" name="firstname" title="Tên"
                                                maxlength="255" class="input-text required-entry"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="container mt-2">
                                <div class="row pt-2">
                                    <div class="col-lg-3 col-md-3 col-sm-12">
                                        <div class="small-text black-text bold-text">Họ</div>
                                    </div>
                                    <div class="col-lg-9 col-md-9 col-sm-12">
                                        <div class="input-box">
                                            <input type="text" id="lastname" name="lastname" title="Họ" maxlength="255"
                                                class="input-text required-entry"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="container mt-2">
                                <div class="row pt-2">
                                    <div class="col-lg-3 col-md-3 col-sm-12">
                                        <div class="small-text black-text bold-text">Địa chỉ</div>
                                    </div>
                                    <div class="col-lg-9 col-md-9 col-sm-12">
                                        <div class="input-box">
                                            <input type="text" id="address" name="address" title="Địa chỉ"
                                                class="input-text required-entry"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="container mt-2">
                                <div class="row pt-2">
                                    <div class="col-lg-3 col-md-3 col-sm-12">
                                        <div class="small-text black-text bold-text">Email</div>
                                    </div>
                                    <div class="col-lg-9 col-md-9 col-sm-12">
                                        <div class="input-box">
                                            <input type="email" autocapitalize="off" autocorrect="off" spellcheck="false"
                                                name="email" id="email_address" title="Địa chỉ email"
                                                class="input-text validate-email required-entry" readonly/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="container mt-2">
                                <div class="row pt-2">
                                    <div class="col-lg-3 col-md-3 col-sm-12">
                                        <div class="small-text black-text bold-text">Điện thoại</div>
                                    </div>
                                    <div class="col-lg-9 col-md-9 col-sm-12">
                                        <div class="input-box">
                                            <input type="text" name="phone_number" id="phone_number" value=""
                                                title="Điện thoại" class="input-text  required-entry"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="container mt-4">
                                <div class="row pt-2">
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <div id="update-btn" class={`btn btn--login bold-text ${styles.not_update}`}>Cập nhật</div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <p class="red_text regular-text semi-bold-text float-end pe-3 cursor">Đổi mật khẩu</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id ="order-info" class="order-info">
                <h3 class="red_text uppercase_text text-center bold-text mt-5 pb-3">lịch sử đơn hàng</h3>
                <div class={styles.order_info_body}>
                    <div class="container">
                        <div class="row mb-5">
                            <div style={{"overflowX": "auto"}}>
                                <table class="text-center pt-4 mt-5">
                                    <tr >
                                        <th
                                            class="col-lg-3 col-md-3 col-sm-3 bold-text black-text small-text uppercase_text">
                                            ngày đặt hàng</th>
                                        <th colspan="2"
                                            class="col-lg-3 col-md-3 col-sm-3 bold-text black-text small-text uppercase_text">
                                            chi tiết đơn hàng</th>
                                        <th
                                            class="col-lg-3 col-md-3 col-sm-3 bold-text black-text small-text uppercase_text">
                                            tổng thanh toán</th>
                                    </tr>
                                    <tr>
                                        <td rowspan="3" class="col-lg-3 col-md-3 col-sm-3">29/10/2021
                                        </td>
                                        <td class="col-lg-3 col-md-3 col-sm-3">01 COMBO GÀ GIÒN KHÔNG XƯƠNG (3 MIẾNG)</td>
                                        <td class="col-lg-3 col-md-3 col-sm-3">69.000đ</td>
                                        <td rowspan="3" class="col-lg-3 col-md-3 col-sm-3 price-right">280.000đ</td>
                                    </tr>
                                    <tr>
                                        
                                        <td class="col-lg-3 col-md-3 col-sm-3">02 COMBO GÀ GIÒN CAY (3 MIẾNG)</td>
                                        <td class="col-lg-3 col-md-3 col-sm-3">230.000đ</td>
                                    </tr>
                                    <tr>
                                        
                                        <td class="col-lg-3 col-md-3 col-sm-3">GIẢM GIÁ</td>
                                        <td class="col-lg-3 col-md-3 col-sm-3">-19.000đ</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
     
        </div>
    )
}

export default UserInfo