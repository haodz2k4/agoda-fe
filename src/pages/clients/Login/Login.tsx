import styles from "./Login.module.scss"
import { Link } from "react-router-dom"
import logo_google from "../../../assets/images/logo_google.png"
import logo_facebook from "../../../assets/images/logo_facebook.png";
import logo_instagram from "../../../assets/images/logo_instagram.png"

function Login() {


    return (
        <div className={styles.login__container}>
            <div className={styles.login}>
                <form action="" className={styles.login__form}>
                    <h1 className={styles.login__title}>Đăng nhập</h1>
                    <div className={styles["login__inp-group"]}>
                        <label htmlFor="">Email: </label>
                        <i className="fa-solid fa-envelope"></i>
                        <input type="email" placeholder="Nhập email của bạn..." className={styles.login__inp}/>
                    </div>
                    <div className={styles["login__inp-group"]}>
                        <label htmlFor="">Mật khẩu: </label>
                        <i className="fa-solid fa-lock"></i>
                        <input type="email" placeholder="Nhập mật khẩu của bạn" className={styles.login__inp}/>
                    </div>
                    <div className={styles.login__other}>
                        <div className={styles["login__other--remember"]}>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Ghi nhớ tôi...</label>
                        </div>
                        <div className={styles["login__other--forgot"]}>
                            <Link to={"/"}>Quên mật khẩu ?</Link>
                        </div>
                    </div>
                    <button className={styles.login__btn}>Đăng nhập</button> 
                    <span className={styles.login__register}>Bạn chưa có tài khoản   <Link to={"/register"}>Đăng ký ?</Link></span>
                    <div className={styles.login__social}>
                        <div className={styles.login__line}></div>
                        <ul>
                            <li><img src={logo_google} alt="" /></li>
                            <li><img src={logo_facebook} alt="" /></li>
                            <li><img src={logo_instagram} alt="" /></li>
                        </ul>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}


export default Login
