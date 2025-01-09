import styles from "./Register.module.scss"
import { Link } from "react-router-dom"
import logo_google from "../../../assets/clients/images/logo_google.png";
import logo_facebook from "../../../assets/clients/images/logo_facebook.png";
import logo_instagram from "../../../assets/clients/images/logo_instagram.png";

function Register() {

    return (
        <div className={styles.register__container}>
            <div className={styles.register}>
                <form action="" className={styles.register__form}>
                    <h1 className={styles.register__title}>Đăng ký</h1>
                    <div className={styles["register__inp-group"]}>
                        <label htmlFor="">UserName: </label>
                        <i className="fa-solid fa-user"></i>
                        <input type="text" placeholder="Nhập userName của bạn..." className={styles.register__inp}/>
                    </div>
                    <div className={styles["register__inp-group"]}>
                        <label htmlFor="">Email: </label>
                        <i className="fa-solid fa-envelope"></i>
                        <input type="email" placeholder="Nhập email của bạn..." className={styles.register__inp}/>
                    </div>
                    <div className={styles["register__inp-group"]}>
                        <label htmlFor="">Phone: </label>
                        <i className="fa-solid fa-phone"></i>
                        <input type="phone" placeholder="Nhập Sô điện thoại của bạn..." className={styles.register__inp}/>
                    </div>
                    <div className={styles["register__inp-group"]}>
                        <label htmlFor="">Mật khẩu: </label>
                        <i className="fa-solid fa-lock"></i>
                        <input type="password" placeholder="Nhập mật khẩu của bạn" className={styles.register__inp}/>
                    </div>
                    <div className={styles["register__inp-group"]}>
                        <label htmlFor="">Điền lại mật khẩu: </label>
                        <i className="fa-solid fa-lock"></i>
                        <input type="password" placeholder="Nhập lại mật khẩu của bạn" className={styles.register__inp}/>
                    </div>
                    <div className={styles.register__other}>
                        <div className={styles["register__other--remember"]}>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="">Chấp nhận tất cả điều khoản trên</label>
                        </div>
                    </div>
                    <button className={styles.register__btn}>Đăng ký</button> 
                    <div className={styles.register__social}>
                        <div className={styles.register__line}></div>
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

export default Register