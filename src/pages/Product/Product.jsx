import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import React from "react";
import { Helmet } from 'react-helmet';
import { Link, useParams, useLocation } from "react-router-dom";
import { useGetproductsByCategoriesIdQuery } from "../../services/product.service";
import { selectCategoriesWithPromotion, selectCategoriesWithoutPromotion } from "../../store/reducers/categories.slice";
import { selectAllCategories, selectCategoryNameById } from "../../store/reducers/categories.slice";
import { selectAllProduct } from "../../store/reducers/product.slice";
import { changePopupProduct } from "../../store/reducers/popup.slice"

import styles from "./Product.module.css"
import Popup from "../../components/Popup/Popup";
import LoaderInverted from "../../components/Loader";

const numberFormater = new Intl.NumberFormat('de-DE');

const buildDescription = (obj) => {
    let a = "";
    a = obj.map(e => e.text).join(" + ");
    return a = `${a}`;
}

const Product = ({ }) => {
    const promotionCategories = useSelector(state => state.promotions);
    const popupProduct = useSelector(state => state.popup)
    const dispatch = useDispatch();
    const { categoryId } = useParams();
    const { isFetching, isError } = useGetproductsByCategoriesIdQuery({ id: categoryId });
    const promotionProductQueryResult = useGetproductsByCategoriesIdQuery({id: promotionCategories[0].id})

    const products = useSelector(selectAllProduct);
    const categoriesName = useSelector(selectCategoryNameById(categoryId))
    console.log("promotionCategories", promotionCategories)
    console.log("products", products)

    if (isFetching || promotionProductQueryResult.isFetching) {
        return LoaderInverted()
    }

    if (isError || promotionProductQueryResult.isError) {
        return <p>Error!</p>;
    }

    const handlePopupAvailable = (product) => {
        dispatch(changePopupProduct({...product, isDisable: false}))
    }

    return (
        <div>
            <div>
                <Helmet>
                    <title>Pluto | {categoriesName}</title>
                </Helmet>
            </div>
            <div className="container">
                <h2 className="extra-large-text red_text extra-bold-text uppercase_text text-center mt-5">{categoriesName}</h2>
                <div className="row text-center">
                    {products[categoryId].map((p) => {
                        return <div key={p.id} className="col-lg-4 col-md-4 col-sm-12">
                            <div className={`${styles.detail_menu_card} mx-auto mt-5`}>
                                <div className={styles.detail_menu_card_image}>
                                    <img src={p.imageUrl} alt={p.descriptions.VN.text} />
                                </div>
                                <div>
                                    <h3 className="regular-text uppercase_text orange-text extra-bold-text mt-3">{p.descriptions.VN.text}</h3>
                                    <div className={styles.detail_menu_info_content}>
                                        <p className={`small-text regular-bold-text grey-text pe-3 ps-3`}>{buildDescription(p.units.VN)}</p>
                                    </div>
                                    <p className="extra-bold-text green-text pt-3">{numberFormater.format(p.prices.VND.price)}đ</p>
                                </div>
                                <div onClick={() => handlePopupAvailable(p)} className="btn btn--red btn--order uppercase_text small_text bold-text mb-4 mt-4">Đặt mua</div>
                            </div>
                        </div>
                    }
                    )}
                </div>
                {!(parseInt(categoryId) === promotionCategories[0].id) && <div>
                    <h2 className="container extra_large_text black-text extra_bold_text uppercase_text mt-5">Sản phẩm đang khuyến mãi</h2>
                    <div className="row text-center">
                        {products[promotionCategories[0].id].map((p) => {
                            return <div key={p.id} className="col-lg-4 col-md-4 col-sm-12">
                                <div className={`${styles.detail_menu_card} mx-auto mt-5`}>
                                    <div className={styles.detail_menu_card_image}>
                                        <img src={p.imageUrl} alt={p.descriptions.VN.text} />
                                    </div>
                                    <div>
                                        <h3 className="regular-text uppercase_text orange-text extra-bold-text mt-3">{p.descriptions.VN.text}</h3>
                                        <div className={styles.detail_menu_info_content}>
                                            <p className={`small-text regular-bold-text grey-text pe-3 ps-3`}>{buildDescription(p.units.VN)}</p>
                                        </div>
                                        <p className="extra-bold-text green-text pt-3">{numberFormater.format(p.prices.VND.price)}đ</p>
                                    </div>
                                    <div onClick={() => handlePopupAvailable(p)} className="btn btn--red btn--order uppercase_text small_text bold-text mb-4 mt-4">Đặt mua</div>
                                </div>
                            </div>
                        }
                        )}
                    </div>
                </div>}

                <Popup
                    classDisable={popupProduct ? popupProduct.isDisable : true}
                />
            </div>
        </div>
    );
};

export default Product;
