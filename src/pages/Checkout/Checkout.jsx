import { Link } from "react-router-dom"
import React from 'react';
import { Helmet } from 'react-helmet';
import styles from "./Checkout.module.css"

const Checkout = () => {
    return <div className="container">
        <div>
            <Helmet>
                <title>Pluto | Check Out</title>
            </Helmet>
        </div>
        <div className="row pt-5 mt-5">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="dialog">
                    <div className={styles.dialog_body}>
                        <div className={styles.dialog_body_logo}>
                            <img src="/public/image/logo/footer-logo.png" alt="" />
                        </div>
                        <div className="container">
                            <div className="row pt-2">
                                <h3 className="red_text uppercase_text text-center bold-text pb-3">Thông tin vận chuyển</h3>
                                <div className="col-lg-3 col-md-3 col-sm-12">
                                    <div className="small-text black-text">Tên</div>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-12">
                                    <div className="input-box">
                                        <input type="text" id="firstname" name="firstname" value="" title="Tên"
                                            maxlength="255" className="input-text required-entry" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row pt-2">
                                <div className="col-lg-3 col-md-3 col-sm-12">
                                    <div className="small-text black-text">Họ</div>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-12">
                                    <div className="input-box">
                                        <input type="text" id="lastname" name="lastname" title="Họ" maxlength="255"
                                            className="input-text required-entry" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row pt-2">
                                <div className="col-lg-3 col-md-3 col-sm-12">
                                    <div className="small-text black-text">Địa chỉ</div>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-12">
                                    <div className="input-box">
                                        <input type="text" id="address" name="address" title="Địa chỉ"
                                            className="input-text required-entry" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row pt-2">
                                <div className="col-lg-3 col-md-3 col-sm-12">
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-12">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 mx-auto">
                                            <select id="province-list">
                                                <option>Tỉnh/Thành phố</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row pt-2">
                                <div className="col-lg-3 col-md-3 col-sm-12">
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-12">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-12 mx-auto">
                                            <select id="district-list">
                                                <option>Quận/Huyện</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 mx-auto">
                                            <select id="ward-list">
                                                <option>Huyện/Thị xã</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row pt-2">
                                <div className="col-lg-3 col-md-3 col-sm-12">
                                    <div className="small-text black-text">Email</div>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-12">
                                    <div className="input-box">
                                        <input type="email" autocapitalize="off" autocorrect="off" spellcheck="false"
                                            name="email" id="email_address" title="Địa chỉ email"
                                            className="input-text validate-email required-entry" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row pt-2">
                                <div className="col-lg-3 col-md-3 col-sm-12">
                                    <div className="small-text black-text">Điện thoại</div>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-12">
                                    <div className="input-box">
                                        <input type="text" name="phone_number" id="phone_number" value=""
                                            title="Điện thoại" className="input-text  required-entry" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row pt-2">
                                <div className="col-lg-3 col-md-3 col-sm-12">
                                    <div className="small-text black-text">Ghi chú</div>
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-12">
                                    <div className="input-box">
                                        <textarea name="order_comment" id="order_comment" rows="4"
                                            className="textarea-text valid"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row pt-2">
                                <div className="col-lg-3 col-md-3 col-sm-12">
                                </div>
                                <div className="col-lg-9 col-md-9 col-sm-12">
                                    <Link to="/thankyou"><div className="btn btn--login bold-text">Đặt hàng</div></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="order-info">
                    <div className="order-info-body">
                        <div className="dialog-body__logo">
                            <img src="/public/image/logo/footer-logo.png" alt="" />
                        </div>
                        <div className="container">
                            <div className="row pt-2">
                                <h3 className="red_text uppercase_text text-center bold-text pb-3">Thông tin đơn hàng</h3>
                                <div>
                                    <table className="text-center pt-4">
                                        <tr>
                                            <th
                                                className="col-lg-3 col-md-3 col-sm-12 bold-text black-text small-text uppercase_text">
                                                tên sản phẩm</th>
                                            <th
                                                className="col-lg-3 col-md-3 col-sm-12 bold-text black-text small-text uppercase_text">
                                                số lượng</th>
                                            <th
                                                className="col-lg-3 col-md-3 col-sm-12 bold-text black-text small-text uppercase_text">
                                                đơn giá</th>
                                            <th
                                                className="col-lg-3 col-md-3 col-sm-12 bold-text black-text small-text uppercase_text">
                                                thành tiền</th>
                                        </tr>
                                        <tr>
                                            <td className="col-lg-3 col-md-3 col-sm-12">COMBO GÀ GIÒN KHÔNG XƯƠNG (3 MIẾNG)
                                            </td>
                                            <td className="col-lg-3 col-md-3 col-sm-12">01</td>
                                            <td className="col-lg-3 col-md-3 col-sm-12">69.000đ</td>
                                            <td className="col-lg-3 col-md-3 col-sm-12 price-right">69.000đ</td>
                                        </tr>
                                        <tr>
                                            <td className="col-lg-3 col-md-3 col-sm-12">COMBO GÀ GIÒN CAY (3 MIẾNG)</td>
                                            <td className="col-lg-3 col-md-3 col-sm-12">02</td>
                                            <td className="col-lg-3 col-md-3 col-sm-12">115.000đ</td>
                                            <td className="col-lg-3 col-md-3 col-sm-12 price-right">230.000đ</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="container">
                            <div className="row">
                                <table>
                                    <tr>
                                        <th
                                            className="col-lg-4 col-md-3 col-sm-12 bold-text black-text small-text uppercase_text">
                                            <span>tổng cộng</span></th>

                                        <td
                                            className={`col-lg-3 col-md-3 col-sm-12 bold-text ${styles.price_right}`}>
                                            299.000đ</td>
                                    </tr>
                                    <tr>
                                        <th className="col-lg-4 col-md-3 col-sm-12 black-text small-text uppercase_text">
                                            giảm giá</th>
                                        <td className={`col-lg-3 col-md-3 col-sm-12 ${styles.price_right}`}>-19.000đ</td>
                                    </tr>
                                    <tr>
                                        <th className="col-lg-4 col-md-3 col-sm-12 black-text small-text uppercase_text">phí
                                            ship</th>
                                        <td className={`col-lg-3 col-md-3 col-sm-12 ${styles.price_right}`}>30.000đ</td>
                                    </tr>
                                    <tr>
                                        <th
                                            className="col-lg-4 col-md-3 col-sm-12 black-text small-text uppercase_text bold-text">
                                            tổng thanh toán</th>
                                        <td className={`col-lg-3 col-md-3 col-sm-12 bold-text ${styles.price_right}`}>310.000đ</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Checkout