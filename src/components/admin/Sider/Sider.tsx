import styles from "./Sider.module.scss"
import { NavLink } from "react-router-dom"

function Sider() {

    return (
        <aside className={styles.sider}>
            <h1 className={styles.sider__title}>AGODA</h1>
            <div className={styles.sider__menu}>
                <ul>
                    <li className="sider__item"><i className="fa-solid fa-gauge"></i> <NavLink to={"/as"}>Dashboard</NavLink></li>
                    <li className="sider__item"><NavLink to={"/siu"}>SIUu</NavLink></li>
                </ul>
            </div>
        </aside>
    )
}

export default Sider