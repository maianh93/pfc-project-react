
import { Link, NavLink } from "react-router-dom";
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { useGetAllCategoriesQuery } from "../../services/categories.service";
import { selectCategoriesWithPromotion, selectCategoriesWithoutPromotion } from "../../store/reducers/categories.slice";
import { useGetPromotionQuery } from "../../services/promotion.service";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Header.module.css"
import LoaderInverted from "../Loader";
import { useEffect, useState } from "react";
import { useGetproductsByCategoriesIdQuery } from "../../services/product.service";
import { selectCount } from "../../store/reducers/cart.slice";
import FallbackAvatars from "../Avatar/Avatar";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
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
      <Navbar collapseOnSelect expand="lg" expanded={expanded}>
        <Container>
        <Link to="/">
          <Navbar.Brand className={styles.navbar_brand} onClick={() => setExpanded(false)}>

              <img src="/image/logo/header-logo.png" />

          </Navbar.Brand>
          </Link>


          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />

          <Navbar.Collapse className={`${styles.nav_margin} ${styles.nav_item}`} id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Thực Đơn" id="collasible-nav-dropdown">
                {products.sort((a, b) => a.point - b.point).map((p) => {
                  return <NavDropdown.Item>
                    <Link to={`/categories/${p.id}`} onClick={() => setExpanded(false)}><div>{p.descriptions.VN.text}</div></Link>
                  </NavDropdown.Item>
                })}
              </NavDropdown>

              {promotionCategories.map((p) => {
                return <NavLink key={p.id} className="nav-link" to={`/categories/${p.id}`} onClick={() => setExpanded(false)}><div>{promotionCategories[0].description}</div></NavLink>
              })}

              <NavLink className="nav-link" to="/about" onClick={() => setExpanded(false)}>Về Chúng Tôi</NavLink>
              <NavLink className="nav-link" to="/stores" onClick={() => setExpanded(false)}>Cửa Hàng</NavLink>
            </Nav>
            <Nav>
              <NavLink className="nav-link" to="/cart" onClick={() => setExpanded(false)}><i className="bi bi-cart-fill">{count} </i></NavLink>
            </Nav>
            <Nav className="mb-2">
              <FallbackAvatars />
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  );
};

export default Header;