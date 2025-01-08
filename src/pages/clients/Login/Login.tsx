import styles from "./Login.module.scss"
import { Link } from "react-router-dom"

function Login() {


    return (
        <div className={styles.login__container}>
            <div className={styles.login}>
                <form action="" className={styles.login__form}>
                    <h1 className={styles.login__title}>Đăng nhập</h1>
                    <div className={styles["login__inp-group"]}>
                        <label htmlFor="">Email: </label>
                        <input type="email" placeholder="Nhập email của bạn..." className={styles.login__inp}/>
                    </div>
                    <div className={styles["login__inp-group"]}>
                        <label htmlFor="">Mật khẩu: </label>
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
                    <span className={styles.login__register}>Bạn chưa có tài khoản   <Link>Đăng ký ?</Link></span>
                </form>
            </div>
        </div>
    )
}


export default Login
