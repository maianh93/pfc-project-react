import { useSelector } from "react-redux";
import styles from "./Popup.module.css"
const numberFormater = new Intl.NumberFormat('de-DE');
import { update } from "../store/reducers/cart.slice";
import { useDispatch } from "react-redux";


const Popup = (props) => {
    const dispatch = useDispatch();
    const currentProductOnPopup = useSelector(state => state.popup)
    
    const handleUpdateProduct = () => {
        dispatch(update({
            id: currentProductOnPopup.id,
            name: currentProductOnPopup.description,
            price: currentProductOnPopup.prices.VND.price,
            img: currentProductOnPopup.imageUrl,
            description: currentProductOnPopup.units.VN.map((e) => e.text),
            categoryId: currentProductOnPopup.categoryId,
        }));
    }

    return <div className={`${styles.dialog_body} ${props.classDisable}`}>
        <div className={styles.dialog_body_input_volumn}>
            <div className={styles.dialog_body_input_volumn_item}>
                <p className="white-text text-center semi-large-text bold-text pt-2">{currentProductOnPopup ? currentProductOnPopup.description : ""}</p>
            </div>
            <div className={`container ${styles.beige_background}`}>
                <div className="row mt-2 p-3">
                    <p className="quantity-center col-lg-6 col-md-6 col-sm-12 orange-red-text bold-text semi-large-text pt-2">Số lượng
                    </p>
                    <div className={`col-lg-6 col-md-6 col-sm-12 ${styles.dialog_body_input_volumn_quantity} d-flex`}>
                    <div className="quantity">
                    <div className="d-flex">
                        <div className={styles.quantity_icon}>
                            <i className="extra-bold-text orange-text bi bi-dash-square-fill"></i>
                        </div>
                        <div className={styles.quantity}>
                            <input id="" className={`${styles.quantity_value} orange-text extra-bold-text`} type="text" value="1" />
                        </div>
                        <div className={styles.quantity_icon}>
                        <i className="extra-bold-text orange-text bi bi-plus-square-fill"></i>
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
                    <div className="pop-up-price semi-large-text bold-text green-text">{numberFormater.format(currentProductOnPopup ? currentProductOnPopup.prices.VND.price : 0)}đ</div>
                </div>
            </div>
        </div>
        <div className="dialog-body__deal-confirm-btn">
            <div className="container pt-3">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                        <div id="add-to-cart" onClick={handleUpdateProduct} className="btn btn--orange-red uppercase-text btn--bigger btn--confirm">Thêm vào giỏ hàng</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Popup