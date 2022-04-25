
import { Link, NavLink } from "react-router-dom";
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Header.module.css"

const Header = () => {
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
                <NavDropdown.Item to="/product">Product1</NavDropdown.Item>
                <NavDropdown.Item to="/product">Product2</NavDropdown.Item>
                <NavDropdown.Item to="/product">Product3</NavDropdown.Item>
              </NavDropdown>
              <NavLink className="nav-link" to="/promotions">Khuyến Mại</NavLink>
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