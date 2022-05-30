import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import Helmet from "react-helmet";
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import styles from "./Login.module.css"
import { Link } from "react-router-dom";

const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Helmet>
                    <title>Pluto | Đăng nhập</title>
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
                                        <span className={styles.CustomerLoginTitle}>Đăng nhập</span>
                                    </h1>
                                </div>
                                <div id="CustomerLoginForm" className="form-vertical">
                                    <div className={styles.email_input}>
                                        <MailOutlinedIcon style={{ color: "var(--green-color)" }} />
                                        <input type="text"
                                            className="email"
                                            placeholder="Email"
                                            {...register("email", { required: true })} />
                                        {errors.email && <p className={styles.error_alert}>Vui lòng nhập đủ thông tin</p>}                                        </div>


                                    <div className={styles.password_input}>
                                        <LockOutlinedIcon style={{ color: "var(--green-color)" }} />
                                        <input
                                            type="password"
                                            name="password"
                                            className="user-password"
                                            placeholder="Mật khẩu"
                                            {...register("password", {
                                                required: true,
                                                minLength: 8,
                                            })}
                                        />
                                        {errors.password?.type == "required" && (
                                            <p className={styles.error_alert}>Vui lòng nhập mật khẩu</p>
                                        )}
                                        {errors.password?.type == "minLength" && (
                                            <p className={styles.error_alert}>Mật khẩu tối thiểu 6 kí tự</p>
                                        )}
                                    </div>


                                    <div>
                                        <input type="submit" className={`${styles.signin_button} button button-second`} value={"Sign in"} />

                                    </div>
                                    <div>
                                        <Link to="/account/register"><input className={`${styles.create_account_button} button button-second`} value={"Chưa có tài khoản? Đăng ký ngay"} /></Link>

                                    </div>

                                    <div className="text-center buttons-set">
                                        <div className={`${styles.forgot_password} cursor`} id="RecoverPassword">Quên mật khẩu?</div>

                                    </div>
                                    <input type="hidden" name="return_url" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </form>

    );
};

export default Login;