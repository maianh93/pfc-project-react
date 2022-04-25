import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css"
// import { selectAllCartItems } from "../../store/reducers/cart.slice";
import { useDispatch } from "react-redux";
const numberFormater = new Intl.NumberFormat('de-DE');


const ItemInCart = (props) => {
    return (<div className={`container ${styles.single_product} mt-5`}>
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
                        {props.description}
                    </div>
                    <p className="single-price ps-2 bold-text small-text green-text">{props.price} đ</p>
                </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12 text-center">
                <div className="quantity">
                    <div className="d-flex">
                        <div className={styles.quantity_icon}>
                            <i onClick={props.decrease} className="far fa-minus-square extra-bold-text orange-text fa-2x">-</i>
                        </div>
                        <div className="quantity-value">
                            <input id="" className="orange-text extra-bold-text" type="text" value="1" />
                        </div>
                        <div className={styles.quantity_icon}>
                            <i onClick={props.increase} className="far fa-plus-square extra-bold-text orange-text fa-2x">+</i>
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
        </div>
    )
}

const Payment = (props) => {
    return (
        <div className="container">
        <li className="subtotal extra-bold-text">TỔNG CỘNG <span className="extra-bold-text red-text amount-of-money">25000 VND</span>
        </li>
        <li className="vat">VAT<span className="red-text amount-of-money">{numberFormater.format(2500)} VND</span></li>
        <li className="discount ${hideClass}">
            GIẢM GIÁ (- {0.2 * 100}%)<span className="red-text amount-of-money">- {numberFormater.format(100)} VND</span>
        </li>
        <li className="total">TỔNG THANH TOÁN <span className="red-text amount-of-money">25000 VND</span></li>
        <div className="row pt-5 pb-5">
            <div className="continue-order col-lg-6 col-md-6 col-sm-12">
                <a href="../page/main-menu.html"><div className="btn btn--white uppercase-text">Tiếp tục đặt hàng</div></a>
            </div>
            <div className="confirm-btn col-lg-6 col-md-6 col-sm-12">
                <Link to="/checkout"><div id="confirm-btn" className="btn btn--orange uppercase-text">Tiến hành thanh toán</div></Link>
            </div>
        </div>
        </div>
    )
}

const Cart = () => {
    const dispatch = useDispatch();

    const handleIncrease = (id) => {
        dispatch(increase(id));
    };

    const handleDecrease = (id) => {
        dispatch(decrease(id));
    };

    const cartState = useSelector(state => state.cart);
    
    return <div>
        {cartState.map((i) => <ItemInCart
            name={i.name}
            price={numberFormater.format(i.price)}
            url={i.img}
            description={i.description}
            total= "25000"
            decrease={() => handleDecrease(i.id)}
            increase={() => handleIncrease(i.id)}
        />
        )}
    <Payment 

    />
    </div>
}

export default Cart