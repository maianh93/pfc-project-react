import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useGetproductsByCategoriesIdQuery } from "../../services/product.service";
import { selectAllCategories, selectCategoryNameById } from "../../store/reducers/categories.slice";
import { selectAllProduct } from "../../store/reducers/product.slice";

import styles from "./Product.module.css"

const numberFormater = new Intl.NumberFormat('de-DE');


const buildDescription = (obj) => {
    let a = "";
    a = obj.map(e => e.text).join(" + ");
    return a= `${a}`;
}

const Product = ({ }) => {
    const { categoryId } = useParams()  ;
    const { isFetching, error } = useGetproductsByCategoriesIdQuery({ id: categoryId }); // args = undefined

    const products = useSelector(selectAllProduct);
    const categoriesName = useSelector(selectCategoryNameById(categoryId))

    console.log(categoriesName)

    if (isFetching) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Oops!</p>;
    }

    return (
        <div>
            <div className="container">
                <h2 className="extra-large-text red_text extra_bold_text uppercase_text text-center mt-5">{categoriesName}</h2>
                <div className="row text-center">
                    {products.map((p) => {
                        {console.log(p)}
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
                                    <p className="extra_bold_text green-text pt-3">{numberFormater.format(p.prices.VND.price)}đ</p>
                                </div>
                                <div className="btn btn--red btn--order uppercase_text small_text bold-text mb-4">Đặt mua</div>
                            </div>
                        </div>

                    }
                    )}
                </div>
            </div>

        </div>
    );
};

export default Product;
