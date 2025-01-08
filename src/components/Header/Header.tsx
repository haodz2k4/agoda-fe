import styles from './header.module.scss'
import { Link, NavLink } from 'react-router-dom'


function Header() {

    return (
        <header className={styles.header}>
            <div className={styles.header__top}>Trang web đặt phòng trực tuyến số 1 Việt Nam <img src="https://cdn6.agoda.net/images/mobile/flag-vn@2x.png" alt="" /></div>
            <div className="container">
               
                <div className={styles.header__inner}>
                    {/* logo  */}
                    <div className={styles.header__logo}>
                        <img className={styles.header__img} src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg" alt="" />
                    </div>
                
                    {/* menu */}
                    <div className={styles.header__menu}>
                        <ul>
                            <li><NavLink to={"/"}><i className="fa-solid fa-house"></i> Trang chủ</NavLink></li>
                            <li><NavLink to={"/tour"}><i className="fa-solid fa-plane"></i> Tour, Chuyến đi</NavLink></li>
                            <li><NavLink to={"/contact"}>Hỗ trợ</NavLink></li>
                            <li><NavLink to={"/help"}>Liên lạc</NavLink></li>
                            <li><NavLink to={"/siu"}>Chuyến đi</NavLink></li>
                        </ul>
                        
                    </div>
                    
                    {/* language */}
                    <div className={styles.header__language }>
                        <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a3478fc6e57b8681609c1458bd50cbb9.svg" alt="" />
                        <span>VN | VNI</span>
                        <i className="fa-solid fa-caret-down"></i>
                    </div>
                    {/* auth */}
                    <div className={styles.header__auth}>
                        <Link to={"/login"} className={`${styles.header__btn} ${styles['header__btn--login']}`}><i className="fa-solid fa-user"></i> Đăng nhập</Link>
                        <button className={`${styles.header__btn} ${styles['header__btn--register']}`}>
                            <i className="fa-solid fa-user-plus"></i> Đăng ký
                        </button>
                    </div>
                    {/* header bar */}
                    <div className={styles.header__bar}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
               
            </div>
        </header>
    )
}

export default Header