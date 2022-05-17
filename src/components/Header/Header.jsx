
import { Link, NavLink } from "react-router-dom";
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { useGetAllCategoriesQuery } from "../../services/categories.service";
import { selectCategoriesWithPromotion, selectCategoriesWithoutPromotion } from "../../store/reducers/categories.slice";
import { useGetPromotionQuery } from "../../services/promotion.service";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Header.module.css"
import LoaderInverted from "../Loader";
import { useEffect } from "react";
import { useGetproductsByCategoriesIdQuery } from "../../services/product.service";
import { selectCount } from "../../store/reducers/cart.slice";
import FallbackAvatars from "../Avatar/Avatar";

const Header = () => {
  const { isFetching, isError } = useGetAllCategoriesQuery();
  const count = useSelector(selectCount);
  const products = useSelector(selectCategoriesWithoutPromotion);
  const promotionCategories = useSelector(state => state.promotions);
  console.log(promotionCategories)

  if (isFetching) {
    return LoaderInverted()
  }

  if (isError) {
    return <p>Oops!</p>;
  }

  return (
    <div className={styles.main_menu}>
      <Navbar collapseOnSelect expand="lg">
        <Container>
        <Link to="/">
          <Navbar.Brand className={styles.navbar_brand}>

              <img src="/image/logo/header-logo.png" />

          </Navbar.Brand>
          </Link>


          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse className={`${styles.nav_margin} ${styles.nav_item}`} id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Thực Đơn" id="collasible-nav-dropdown">
                {products.map((p) => {
                  return <NavDropdown.Item>
                    <Link to={`/categories/${p.id}`}><div>{p.descriptions.VN.text}</div></Link>
                  </NavDropdown.Item>
                })}
              </NavDropdown>

              {promotionCategories.map((p) => {
                return <NavLink key={p.id} className="nav-link" to={`/categories/${p.id}`}><div>{promotionCategories[0].description}</div></NavLink>
              })}

              <NavLink className="nav-link" to="/about">Về Chúng Tôi</NavLink>
              <NavLink className="nav-link" to="/stores">Cửa Hàng</NavLink>
            </Nav>
            <Nav>
              <NavLink className="nav-link" to="/cart"><i className="bi bi-cart-fill">{count}</i></NavLink>
            </Nav>
            <Nav>
              <FallbackAvatars />
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  );
};

export default Header;