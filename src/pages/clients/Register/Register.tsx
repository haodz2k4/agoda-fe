import styles from "./Register.module.scss"
import { Link } from "react-router-dom"

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
                            <label htmlFor="">Ghi nhớ tôi...</label>
                        </div>
                        <div className={styles["register__other--forgot"]}>
                            <Link to={"/"}>Quên mật khẩu ?</Link>
                        </div>
                    </div>
                    <button className={styles.register__btn}>Đăng nhập</button> 
                    <span className={styles.register__register}>Bạn chưa có tài khoản   <Link>Đăng ký ?</Link></span>
                </form>
            </div>
        </div>
    )
}

export default Register