import styles from "./Sider.module.scss"
import { NavLink } from "react-router-dom"
import dashboard from "../../../assets/admin/images/dashboard.png"

function Sider() {

    return (
        <aside className={styles.sider}>
            <img src={dashboard} className={styles.sider__logo} />
            <div className={styles.sider__menu}>
                <ul>
                    <li className="sider__item">
                        <i className="fa-solid fa-gauge"></i> 
                        <NavLink 
                            className={
                                ({isActive}) => isActive ? styles.sider__active : '' 
                                } 
                            to={"/admin/dashboard"}>Dashboard
                        </NavLink>
                    </li>
                    <li className="sider__item">
                        <NavLink
                            className={
                                ({isActive}) => isActive ? styles.sider__active : '' 
                                }  
                            to={"/admin/hotels"}>
                            <i className="fa-solid fa-hotel"></i> 
                            Hotels
                        </NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Sider