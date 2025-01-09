

function Header() {
    

    return (
        <header className="header">
            <header className="header__title">Trang quảng trị</header>
            <div className="header__search">
                <input type="text" className="inp__search"/>
                <button>Tìm kiếm</button>
            </div>
            <div className="header__profiles">
                <img src="" alt="" />
                <span>Hồ Sơn Hào</span>
            </div>
        </header>
    )
}

export default Header