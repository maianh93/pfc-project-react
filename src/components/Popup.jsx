import { useSelector } from "react-redux";
import styles from "./Popup.module.css"
const numberFormater = new Intl.NumberFormat('de-DE');

const PlusIcon = () => <i className="bi bi-plus-square"></i>;

const MinusIcon = () => <i className="bi bi-minus-square"></i>;


const Popup = (props) => {
    
    const currentProductOnPopup = useSelector(state => state.popup)

    const handleClick = () => {
        
    }

    return <div className={`${styles.dialog_body} ${props.classDisable}`}>
        {console.log("currentProductOnPopup", currentProductOnPopup)}
        <div className={styles.dialog_body_input_volumn}>
            <div className={styles.dialog_body_input_volumn_item}>
                <p className="white-text text-center semi-large-text bold-text pt-2">{currentProductOnPopup ? currentProductOnPopup.description : ""}</p>
            </div>
            <div className={`container ${styles.beige_background}`}>
                <div className="row mt-2 p-3">
                    <p className="quantity-center col-lg-6 col-md-6 col-sm-12 orange-red-text bold-text semi-large-text pt-2">Số lượng
                    </p>
                    <div className="col-lg-6 col-md-6 col-sm-12 dialog-body__input-volumn-quantity">
                        <div className={styles.quantity}>
                            <div className={styles.quantity_container}>
                                <div className={styles.quantity_icon}>
                                    <MinusIcon />
                                </div>
                                <div className="quantity-value">
                                    <input className="orange-text extra-bold-text" type="text" value="1" />
                                </div>
                                <div className="quantity-icon">
                                    <PlusIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row pt-3">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="uppercase-text semi-large-text bold-text text-center">Tổng tiền:</div>
                </div>
                <div id="pop-up-price" className="col-lg-6 col-md-6 col-sm-12">
                    {console.log(currentProductOnPopup ? currentProductOnPopup.prices.VND.price : 0)}
                    <div className="pop-up-price semi-large-text bold-text green-text">{numberFormater.format(currentProductOnPopup ? currentProductOnPopup.prices.VND.price : 0)}đ</div>
                </div>
            </div>
        </div>
        <div className="dialog-body__deal-confirm-btn">
            <div className="container pt-3">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                        <div id="add-to-cart" onClick={handleClick} className="btn btn--orange-red uppercase-text btn--bigger btn--confirm">Thêm vào giỏ hàng</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Popup