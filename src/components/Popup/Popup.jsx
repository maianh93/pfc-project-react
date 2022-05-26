import { useSelector } from "react-redux";
import styles from "./Popup.module.css"
const numberFormater = new Intl.NumberFormat('de-DE');
import { update } from "../../store/reducers/cart.slice";
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { changePopupProduct } from "../../store/reducers/popup.slice"
import { style } from "@mui/system";


const Popup = (props) => {
    const dispatch = useDispatch();
    const currentProductOnPopup = useSelector(state => state.popup)
    const [currentQtty, setCurrentQtty] = useState(1)
    let inCartQutty = useSelector(state => state.cart).find((item) => currentProductOnPopup && item.id == currentProductOnPopup.id)

    inCartQutty = inCartQutty ? inCartQutty.quantity : 1;
    console.log("inCartQutty", inCartQutty);
    const handleUpdateProduct = () => {
        dispatch(update({
            id: currentProductOnPopup.id,
            name: currentProductOnPopup.description,
            price: currentProductOnPopup.prices.VND.price,
            img: currentProductOnPopup.imageUrl,
            description: currentProductOnPopup.units.VN.map((e) => e.text),
            categoryId: currentProductOnPopup.categoryId,
            quantity: Number(currentQtty)
        }));
        dispatch(changePopupProduct({ ...currentProductOnPopup, isDisable: true }))
    }

    const handleChangeInput = (e) => {
        let value = e.target.value;
        var reg = /^\d+$/;
        reg.test(value ? value.toString() : "")
            && Number(value) > 0
            && setCurrentQtty(value);
        console.log(value)
    }

    const handlePopupClickOut = () => {
        dispatch(changePopupProduct({ ...currentProductOnPopup, isDisable: true }))
    }

    const handleIncrease = () => {
        let newQtty = Number(currentQtty) + 1;
        setCurrentQtty(Math.max(newQtty, 1))
    }

    const handleDecrease = () => {
        let newQtty = Number(currentQtty) - 1;
        setCurrentQtty(Math.max(newQtty, 1))
    }


    useEffect(() => setCurrentQtty(inCartQutty), [inCartQutty, currentProductOnPopup]);

    return <div>
        <div onClick={handlePopupClickOut} className={`${styles.dialog} ${props.classDisable ? "disable" : " "}`}>

        </div>
        <div className={`${styles.dialog_body} ${props.classDisable ? "disable" : " "}`}>
            <div className={styles.dialog_body_input_volumn}>
                <div className={styles.dialog_body_input_volumn_item}>
                    <p className="white-text text-center semi-large-text bold-text pt-2">{currentProductOnPopup ? currentProductOnPopup.description : ""}</p>
                </div>
                <div className={`container ${styles.beige_background}`}>
                    <div className="row mt-2 p-3">
                        <p className={`${styles.quantity_center} col-lg-6 col-md-6 col-sm-12 orange-red-text bold-text semi-large-text pt-2`}>Số lượng
                        </p>
                        <div className={`col-lg-6 col-md-6 col-sm-12 ${styles.dialog_body_input_volumn_quantity} d-flex`}>
                            <div className={styles.quantity_group}>
                                <div className="d-flex">
                                    <div className={styles.cursor}>
                                    <IndeterminateCheckBoxIcon fontSize="large" onClick={handleDecrease} className="extra-bold-text orange-text mt-2"/>
                                    </div>
                                    <div className={styles.quantity}>
                                        <input className={`${styles.quantity_value} orange-text extra-bold-text`} onChange={handleChangeInput} type="text" value={currentQtty} />
                                    </div>
                                    <div className={styles.cursor}>
                                    <AddBoxIcon fontSize="large" onClick={handleIncrease} className="extra-bold-text orange-text mt-2"/>
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
                        <div className={`${styles.pop_up_price} semi-large-text bold-text green-text`}>
                            {numberFormater.format(currentProductOnPopup ? currentProductOnPopup.prices.VND.price * Number(currentQtty) : 0)} đ
                        </div>
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
    </div>

}

export default Popup