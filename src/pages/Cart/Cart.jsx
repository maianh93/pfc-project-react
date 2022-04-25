import { useSelector } from "react-redux";
import styles from "./Cart.module.css"
const numberFormater = new Intl.NumberFormat('de-DE');

const ItemInCart = (props) => {
    return (
        <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12">
                <div className={styles.image}>
                    <img src={props.url} alt="anh" />
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="mt-2">
                    <h4 className={`${styles.info_name} orange-text semi_large_text uppercase-text`}>{props.name}</h4>
                    <div className="detail ps-2">
                    </div>
                    <p className="single-price ps-2 bold-text small-text green-text">{props.price} đ</p>
                </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                <div className="quantity">
                    <div className="d-flex">
                        <div className="quantity-icon">
                            <i className="far fa-minus-square extra-bold-text orange-text fa-2x"></i>
                        </div>
                        <div className="quantity-value">
                            <input id="" className="orange-text extra-bold-text" type="text" value="1" />
                        </div>
                        <div className="quantity-icon">
                            <i className="far fa-plus-square extra-bold-text orange-text fa-2x"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                <div className="total-notional-price pt-5">
                    <span className="notional-price pt-2 bold-text semi-large-text red-text">{props.total}</span>
                </div>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-12 text-center">
                <div className="remove pt-5">
                    <span className="close">
                        <i className="fas fa-trash black-text fa-2x"></i>
                    </span>
                </div>
            </div>

        </div>
    )
}

const Cart = () => {
    const cartState = useSelector(state => state.cart);
    console.log(cartState)
    console.log(cartState[0].name)

    return <div className="container single-product mt-5">
        {cartState.map((i) => <ItemInCart
            name={i.name}
            price={numberFormater.format(i.price)}
            url={i.img}
            total= "25000"
        />
        )}

        <li className="subtotal extra-bold-text">TỔNG CỘNG <span className="extra-bold-text red-text amount-of-money">{numberFormater.format(25000)} VND</span>
        </li>
        <li className="vat">VAT<span className="red-text amount-of-money">{numberFormater.format(2500)} VND</span></li>
        <li className="discount ${hideClass}">
            GIẢM GIÁ (- {0.2 * 100}%)<span className="red-text amount-of-money">- {numberFormater.format(100)} VND</span>
        </li>
        <li className="total">TỔNG THANH TOÁN <span className="red-text amount-of-money">{numberFormater.format(20000)} VND</span></li>
        <div className="row pt-5 pb-5">
            <div className="continue-order col-lg-6 col-md-6 col-sm-12">
                <a href="../page/main-menu.html"><div className="btn btn--white uppercase-text">Tiếp tục đặt hàng</div></a>
            </div>
            <div className="confirm-btn col-lg-6 col-md-6 col-sm-12">
                <a href="../page/checkout.html"><div id="confirm-btn" className="btn btn--orange uppercase-text">Tiến hành thanh toán</div></a>
            </div>
        </div>
    </div>
}

export default Cart