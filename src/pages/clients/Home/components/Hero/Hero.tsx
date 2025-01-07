import styles from "../../Home.module.scss"

function Hero() {

    return (
        
        <div className={styles.hero}>
            <img src="https://cdn6.agoda.net/images/agodavip/bg-vip-bronze.png" alt="" className={styles.hero__background} />
            
            <div className="container">
                <div className={styles.hero__content}>
                    <h2 className={styles.hero__title}>Rong chơi bốn phương, giá vẫn "yêu thương"</h2>

                    <div className={styles.hero__engine}>
                        <form action="" className={styles.hero__form}>
                            <div className={styles["hero__search-group"]}>
                                <label htmlFor="">Tìm kiếm</label>
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <input type="text" className={styles.search__inp} placeholder="Nhập điểm du lịch hoặc tên khách sạn"/>
                            </div>
                            <div className={styles.hero__filter}>
                                <div className={styles["hero__filter--date"]}>
                                    <input type="date" name="" />
                                    <input type="date" name="" />
                                </div>
                                <div className={styles["hero__filter--room"]}>
                                    <select name="" id="">
                                        <option value="">saas</option>
                                    </select>
                                </div>
                            </div>
                            <button className={styles.hero__btn}>Tìm kiếm</button>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Hero