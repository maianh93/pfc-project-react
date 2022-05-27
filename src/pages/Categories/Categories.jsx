import { useSelector } from "react-redux";
import { useEffect } from "react";
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { useGetAllCategoriesQuery } from "../../services/categories.service";
import { selectCategoriesWithoutPromotion } from "../../store/reducers/categories.slice";
import styles from "./Categories.module.css"
import LoaderInverted from "../../components/Loader";

const Categories = ({ }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const { isFetching, error } = useGetAllCategoriesQuery(); // args = undefined
    const products = useSelector(selectCategoriesWithoutPromotion);

    if (isFetching) {
        return LoaderInverted()
      }

    if (error) {
        return <p>Oops!</p>;
    }

    return (
        <div>
            <div>
                <Helmet>
                    <title>Pluto | Menu</title>
                </Helmet>
            </div>
            <div className="container">
            <h2 className="extra_large_text red_text extra-bold-text uppercase_text text-center mt-5">Thực đơn</h2>
                <div className="row text-center">
                    {products.sort((a, b) => a.point - b.point).map((p) => {
                        return <div key={p.id} className="col-lg-4 col-md-4 col-sm-12 mt-5 mb-3">
                            <Link key={p.id} to={`/categories/${p.id}`}>
                                <div className={styles.main_menu_card_image}>
                                    <img src={p.imageUrl} alt={p.descriptions.VN.text}/>
                                </div>
                                <div className="btn btn--main-menu uppercase_text small-text bold-text">{p.descriptions.VN.text}</div>
                            </Link>
                        </div>
                    }
                    )}
                </div>
            </div>
        </div>
    );
};

export default Categories;
