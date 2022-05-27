import { Link } from "react-router-dom"
import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../../store/reducers/cart.slice";
import { Helmet } from 'react-helmet';
import styles from "./Checkout.module.css"
import { selectTotalBill } from "../../store/reducers/cart.slice";

const numberFormater = new Intl.NumberFormat('de-DE');

const Checkout = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();


    const navigate = useNavigate();

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);;
    const totalBill = useSelector(selectTotalBill);
    const shipFee = 30000;


    const handleOrder = () => {
        dispatch(clear());
    }

    
    const onSubmit = (data) => {
        console.log(data);
        navigate("/thankyou");
        handleOrder();
    };

    return <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
            <div>
                <Helmet>
                    <title>Pluto | Check Out</title>
                </Helmet>
            </div>
            <div className="row pt-5 mt-5 pb-5">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="dialog">
                        <div className={styles.dialog_body}>
                            <div className={styles.dialog_body_logo}><datagrid>


                            </datagrid>
                                <img src="/image/logo/footer-logo.png" alt="" />
                            </div>
                            <div className="container">
                                <div className="row pt-2">
                                    <h3 className="red_text uppercase_text text-center bold-text pb-3">Thông tin vận chuyển</h3>
                                    <div className="col-lg-3 col-md-3 col-sm-12">
                                        <div className="small-text black-text">Tên</div>
                                    </div>
                                    <div className="col-lg-9 col-md-9 col-sm-12">
                                        <div className="input-box">
                                            <input type="text"
                                                className="user-id input-text required-entry"
                                                {...register("userFirstName", { required: true })} />
                                            {errors.userFirstName && <p className={styles.error_alert}>Vui lòng nhập đủ thông tin</p>}

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
                                            <input type="text"
                                                className="user-id input-text required-entry"
                                                {...register("userLastName", { required: true })} />
                                            {errors.userLastName && <p className={styles.error_alert}>Vui lòng nhập đủ thông tin</p>}

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
                                            <input type="text"
                                                className="input-text required-entry"
                                                {...register("address", { required: true })} />
                                            {errors.address && <p className={styles.error_alert}>Vui lòng nhập đủ thông tin</p>}

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
                                            <input type="text"
                                                className="input-text required-entry"
                                                {...register("email", { required: true })} />
                                            {errors.email && <p className={styles.error_alert}>Vui lòng nhập đủ thông tin</p>}

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
                                            <input type="text"
                                                className="input-text required-entry"
                                                {...register("phoneNumber", { required: true })} />
                                            {errors.phoneNumber && <p className={styles.error_alert}>Vui lòng nhập đủ thông tin</p>}

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

                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className={styles.order_info}>
                        <div className={styles.order_info_body}>
                            <div className={styles.dialog_body_logo}>
                                <img src="/image/logo/footer-logo.png" alt="" />
                            </div>
                            <div className="container">
                                <div className="row pt-2">
                                    <h3 className="red_text uppercase_text text-center bold-text pb-3">Thông tin đơn hàng</h3>
                                    <div style={{"overflowX": "auto"}}>
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
                                            {cart.map(i => (
                                                <tr>
                                                    <td className="col-lg-3 col-md-3 col-sm-12">{i.name}
                                                    </td>
                                                    <td className="col-lg-3 col-md-3 col-sm-12">{i.quantity}</td>
                                                    <td className="col-lg-3 col-md-3 col-sm-12">{numberFormater.format(i.price)} đ</td>
                                                    <td className="col-lg-3 col-md-3 col-sm-12 price-right">{numberFormater.format(i.price * i.quantity)} đ</td>
                                                </tr>
                                            ))}
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
                                                {numberFormater.format(totalBill * 1.1)} đ</td>
                                        </tr>
                                        <tr>
                                            <th className="col-lg-4 col-md-3 col-sm-12 black-text small-text uppercase_text">phí
                                                ship</th>
                                            <td className={`col-lg-3 col-md-3 col-sm-12 ${styles.price_right}`}>{numberFormater.format(shipFee)} đ</td>
                                        </tr>
                                        <tr>
                                            <th
                                                className="col-lg-4 col-md-3 col-sm-12 black-text small-text uppercase_text bold-text">
                                                tổng thanh toán</th>
                                            <td className={`col-lg-3 col-md-3 col-sm-12 bold-text ${styles.price_right}`}>{numberFormater.format(totalBill * 1.1 + shipFee)} đ</td>
                                        </tr>
                                    </table>
                                    <div className="container">
                                        <div className="row pt-2">
                                            <div className="col-lg-7 col-md-7 col-sm-12">
                                            </div>
                                            <div type="submit" className="col-lg-5 col-md-5 col-sm-12">
                                            <input type="submit" className="btn btn--login bold-text" value={"Đặt hàng"} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
}

export default Checkout