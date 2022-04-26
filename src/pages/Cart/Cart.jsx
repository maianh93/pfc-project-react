import { useSelector } from "react-redux";
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import styles from "./Cart.module.css"
import { update, remove, clear } from "../../store/reducers/cart.slice";
import { useDispatch } from "react-redux";
import { selectTotalBill } from "../../store/reducers/cart.slice";
const numberFormater = new Intl.NumberFormat('de-DE');


const ItemInCart = (props) => {
    const dispatch = useDispatch();
    const handleRemove = (id) => dispatch(remove({ id: id }));


    const handleChangeInput = (e) => {
        let value = e.target.value;
        var reg = /^\d+$/;
        reg.test(value ? value.toString() : "")
            && Number(value) > 0
            && dispatch(update({ ...props.object, quantity: Number(value) }))
    }

    const handleIncrease = () => {
        let newQtty = Number(props.object.quantity) + 1;
        dispatch(update({ ...props.object, quantity: Math.max(newQtty, 1) }))
    }

    const handleDecrease = () => {
        let newQtty = Number(props.object.quantity) - 1;
        dispatch(update({ ...props.object, quantity: Math.max(newQtty, 1) }))
    }

    return (<div className={`container ${styles.single_product} mt-5 pt-3`}>
        <div className="row pt-3">
            <div className="col-lg-3 col-md-3 col-sm-12">
                <div className={styles.image}>
                    <img src={props.url} alt="anh" />
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="mt-2">
                    <h4 className={`${styles.info_name} orange-text semi_large_text uppercase-text`}>{props.name}</h4>
                    <div className="detail ps-2">
                        {props.description}
                    </div>
                    <p className="single-price ps-2 bold-text small-text green-text">{props.price} đ</p>
                </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                <div className="quantity mt-3">
                    <div className="d-flex">
                        <div className={styles.quantity_icon}>
                            <IndeterminateCheckBoxIcon  fontSize="large" className="extra-bold-text orange-text" onClick={handleDecrease} />
                        </div>
                        <div className={styles.quantity}>
                            <input id="" onChange={handleChangeInput} className="orange-text extra-bold-text" type="text" value={props.quantity} />
                        </div>
                        <div className={styles.quantity_icon}>
                            <AddBoxIcon  fontSize="large" className="extra-bold-text orange-text" onClick={handleIncrease} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                <div className={`${styles.total_notional_price} pt-5 mt-4`}>
                    <span className="notional-price pt-2 bold-text semi-large-text red_text">{props.total} đ</span>
                </div>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-12 text-center">
                <div className="remove pt-5 mt-4">
                    <span className={styles.close}>
                        <DeleteIcon fontSize="large" onClick={() => handleRemove(props.id)} />
                    </span>
                </div>
            </div>
        </div>
    </div>
    )
}

const Payment = (props) => {
    // const dispatch = useDispatch();
    // const totalBill = dispatch(selectTotalBill)
    return (
        <div className={`${styles.option_container} container`}>
            <li className={`${styles.subtotal} extra-bold-text`}>TỔNG CỘNG<span className={`extra_bold_text red_text ${styles.amount_of_money}`}>{numberFormater.format(50000)} VND</span>
            </li>
            <li className={styles.vat}>VAT<span className={`red_text ${styles.amount_of_money}`}>{numberFormater.format(2500)} VND</span></li>
            <li className={styles.discount}>
                GIẢM GIÁ (- {0.2 * 100}%)<span className={`red_text ${styles.amount_of_money}`}>- {numberFormater.format(100)} VND</span>
            </li>
            <li className={styles.total}>TỔNG THANH TOÁN <span className={`red_text ${styles.amount_of_money}`}>25000 VND</span></li>
            <div className="row pt-5 pb-5">
                <div className="continue-order col-lg-6 col-md-6 col-sm-12">
                    <Link to="/categories"><div className="btn btn--white uppercase_text">Tiếp tục đặt hàng</div></Link>
                </div>
                <div className={`${styles.confirm_btn} col-lg-6 col-md-6 col-sm-12`}>
                    <Link to="/checkout"><div id="confirm-btn" className="btn btn--orange uppercase_text">Tiến hành thanh toán</div></Link>
                </div>
            </div>
        </div>
    )
}

const Cart = () => {
    const dispatch = useDispatch();

    const cartState = useSelector(state => state.cart);
    function handleDeleteAll() {
        confirm("Có chắc chắn xóa toàn bộ giỏ hàng?")
            && dispatch(clear());
    }
    console.log(cartState)
    return <div>
        <div>
            <Helmet>
                <title>Pluto | Giỏ hàng</title>
            </Helmet>
        </div>
        <h2 className="extra-large-text red_text extra-bold-text uppercase_text text-center mt-5">Giỏ hàng</h2>
        <div className="container">
            <div className="row">
                <div className="confirm-btn col-lg-6 col-md-6 col-sm-12"></div>
                <div className={`${styles.confirm_btn} col-lg-6 col-md-6 col-sm-12`}><div onClick={handleDeleteAll} id="confirm-btn" className="btn btn--white uppercase_text">Xóa giỏ hàng</div></div>
            </div>
        </div>

        {cartState.map((i) => <ItemInCart
            id={i.id}
            name={i.name}
            price={numberFormater.format(i.price)}
            url={i.img}
            description={i.description}
            total={numberFormater.format(parseInt(i.price) * parseInt(i.quantity))}
            quantity={i.quantity}
            object={i}
        />
        )}
        <Payment

        />
    </div>
}

export default Cart