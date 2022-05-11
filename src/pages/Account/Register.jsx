import { Container } from "@mui/material";
import Helmet from "react-helmet";
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import styles from "./Register.module.css"
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div>
        <Helmet>
          <title>Pluto | Đăng ký</title>
        </Helmet>
      </div>
      <main className={styles.main_content}>
        <div className={styles.account_section}>
          <div className={styles.shopify_section}>
            <div className={styles.shopify_image}>

            </div>
          </div>
          <div className={styles.form}>
            <div className={styles.form_center}>
              <div className={styles.box}>
                <div id="LoginTitle" className={styles.page_title}>
                  <h1>
                    <span className={styles.CustomerLoginTitle}>Tạo tài khoản</span>
                  </h1>
                </div>
                <div id="CustomerLoginForm" className="form-vertical">
                  <form>

                    <div className={styles.email_input}>
                      <PersonOutlineOutlinedIcon style={{ color: "var(--pink-color)" }} />
                      <input className={styles.input} type="text" placeholder="Họ" name="Họ" autoCorrect="off" autoCapitalize="off" autoFocus="" />
                    </div>
                    <div className={styles.email_input}>
                      <PersonOutlineOutlinedIcon style={{ color: "var(--pink-color)" }} />
                      <input className={styles.input} type="text" placeholder="Tên" name="Tên" autoCorrect="off" autoCapitalize="off" autoFocus="" />
                    </div>


                    <div className={styles.email_input}>
                      <MailOutlinedIcon style={{ color: "var(--pink-color)" }} />
                      <input className={styles.input} type="email" placeholder="E-mail" name="customer[email]" id="CustomerEmail" autoCorrect="off" autoCapitalize="off" autoFocus="" />
                    </div>


                    <div className={styles.password_input}>
                      <LockOutlinedIcon style={{ color: "var(--pink-color)" }} />
                      <input className={styles.input} type="password" placeholder="Password" name="customer[password]" id="CustomerPassword" />
                    </div>


                    <input className={`${styles.signin_button} button button-second`} value={"Tạo tài khoản"} />
                    <Link to="/account/login"><input className={`${styles.create_account_button} button button-second`} value={"Đã có tài khoản? Đăng nhập ngay"} /></Link>
                    <input type="hidden" name="return_url" />

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>

  );
};

export default Register;