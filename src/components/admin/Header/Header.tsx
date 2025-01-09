import styles from "./Header.module.scss"

function Header() {
    

    return (
        <header className={styles.header}>
            <div className={styles.header__inner}>
                <h2 className="header__bars"><i className="fa-solid fa-bars"></i></h2>
                <div className={styles.header__search}>
                    <input type="text" className={styles.inp__search} placeholder="Tìm kiếm...."/>
                    <button className={styles.btn__search}><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <div className={styles.header__menu}>
                    <ul>
                        <li><i className="fa-solid fa-bag-shopping"></i></li>
                        <li><i className="fa-regular fa-moon"></i></li>
                        <li><i className="fa-regular fa-bell"></i></li>
                    </ul>
                </div>
                <div className={styles.header__profiles}>
                    <img src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" className={styles.header__avatar} alt="" />
                    <div className={styles["header__profiles--info"]}>
                        <h3 className={styles["header__profiles--title"]}> Sơn Hào</h3>
                        <span>Admin</span>
                    </div>
                    <i className="fa-solid fa-caret-down"></i>
                </div>
            </div>
        </header>
    )
}

export default Header