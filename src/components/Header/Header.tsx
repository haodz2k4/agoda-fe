import './header.module.scss'
import { NavLink } from 'react-router-dom'


function Header() {

    return (
        <header className="header">
            <div className="container">
               
                <div className="header__inner">
                    {/* logo  */}
                    <div className="header__logo">
                        <img className='header__img' src="" alt="" />
                    </div>
                    {/* menu */}
                    <div className="header__menu">
                        <ul>
                            <li><NavLink to={""}>Trang chủ</NavLink></li>
                            <li><NavLink to={""}>Hỗ trợ</NavLink></li>
                            <li><NavLink to={""}>Liên lạc</NavLink></li>
                            <li><NavLink to={""}>Chuyến đi</NavLink></li>
                        </ul>
                    </div>
                    {/* auth */}
                    <div className="header__auth">
                        <button className="btn header__btn--login">Đăng nhập</button>
                        <button className="btn header__btn--register">Đăng ký</button>
                    </div>
                </div>
               
            </div>
        </header>
    )
}

export default Header