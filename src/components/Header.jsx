
import { Link, NavLink } from "react-router-dom";
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { useGetAllCategoriesQuery } from "../services/categories.service";
import { selectCategoriesWithPromotion, selectCategoriesWithoutPromotion } from "../store/reducers/categories.slice";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Header.module.css"
import LoaderInverted from "./Loader";

const Header = () => {
  const { isFetching, error } = useGetAllCategoriesQuery();
  const products = useSelector(selectCategoriesWithoutPromotion);
  const promotionProducts = useSelector(selectCategoriesWithPromotion);
  console.log(promotionProducts)
  
  if (isFetching) {
    return LoaderInverted()
  }

  if (error) {
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
                    <Link to={`/categories/${p.id}`}>{p.descriptions.VN.text}</Link>
                  </NavDropdown.Item>
                })}
              </NavDropdown>
              {promotionProducts.map((p) => {
                  return <NavLink className="nav-link" to={`/categories/${p.id}`}>{promotionProducts[0].description}</NavLink>
                })}
              
              <NavLink className="nav-link" to="/about">Về Chúng Tôi</NavLink>
              <NavLink className="nav-link" to="/stores">Cửa Hàng</NavLink>
            </Nav>
            <Nav>
              <NavLink className="nav-link" to="/cart">Giỏ Hàng</NavLink>
              <NavLink className="nav-link" to="/promotions">
                Tài Khoản
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  );
};

export default Header;