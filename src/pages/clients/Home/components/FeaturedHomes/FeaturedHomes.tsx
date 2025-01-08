import styles from "../../Home.module.scss"



function FeaturedHomes() {


    return (
        <div className={styles.featured}>
            <h2 className="featured__title">Featured Homes recommended for you</h2> 
            <div className={styles.featured__menu}>
                <div className={`${styles["featured__menu--item"]} active`}>Hồ chí minh</div>
                <div className={styles["featured__menu--item"]}>Đà Lạt</div>
                <div className={styles["featured__menu--item"]}>Hà Nội</div>
                <div className={styles["featured__menu--item"]}>Vũng Tàu</div>
                <div className={styles["featured__menu--item"]}>Đã Năng</div>
            </div>
            <div className={styles.featured__list}>
                <div className={styles.featured__item}>
                    <img className={styles.featured__img} src="//q-xx.bstatic.com/xdata/images/hotel/max500/473824774.jpg?k=a70b57b0224b1a759b60c6e60233b42f6ca8f5c19b0e14780c29ddff1cd9c385&o=" alt="" />
                    <h5 className="featured__desc--title">CĂN HỘ VINHOMES GRAND PARK QUẬN 9 Studio (CAN HO VINHOMES GRAND PARK QUAN 9 Studio)</h5>
                    <p className={`${styles.featured__desc} ${styles["featured__desc--star"]}`}>
                        <i className="fa-solid fa-star"></i>    
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </p>
                    <p className="featured__desc featured__desc--sumary">Giá mỗi đêm chưa gồm giá và phí</p>
                    <p className={`${styles.featured__desc} ${styles["featured__desc--price"]}`}>VND 458.333</p>
                </div>
                <div className={styles.featured__item}>
                    <img className={styles.featured__img} src="//q-xx.bstatic.com/xdata/images/hotel/max500/473824774.jpg?k=a70b57b0224b1a759b60c6e60233b42f6ca8f5c19b0e14780c29ddff1cd9c385&o=" alt="" />
                    <h5 className="featured__desc--title">CĂN HỘ VINHOMES GRAND PARK QUẬN 9 Studio (CAN HO VINHOMES GRAND PARK QUAN 9 Studio)</h5>
                    <p className={`${styles.featured__desc} ${styles["featured__desc--star"]}`}>
                        <i className="fa-solid fa-star"></i>    
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </p>
                    <p className="featured__desc featured__desc--sumary">Giá mỗi đêm chưa gồm giá và phí</p>
                    <p className={`${styles.featured__desc} ${styles["featured__desc--price"]}`}>VND 458.333</p>
                </div>
                <div className={styles.featured__item}>
                    <img className={styles.featured__img} src="//q-xx.bstatic.com/xdata/images/hotel/max500/473824774.jpg?k=a70b57b0224b1a759b60c6e60233b42f6ca8f5c19b0e14780c29ddff1cd9c385&o=" alt="" />
                    <h5 className="featured__desc--title">CĂN HỘ VINHOMES GRAND PARK QUẬN 9 Studio (CAN HO VINHOMES GRAND PARK QUAN 9 Studio)</h5>
                    <p className={`${styles.featured__desc} ${styles["featured__desc--star"]}`}>
                        <i className="fa-solid fa-star"></i>    
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </p>
                    <p className="featured__desc featured__desc--sumary">Giá mỗi đêm chưa gồm giá và phí</p>
                    <p className={`${styles.featured__desc} ${styles["featured__desc--price"]}`}>VND 458.333</p>
                </div>
                <div className={styles.featured__item}>
                    <img className={styles.featured__img} src="//q-xx.bstatic.com/xdata/images/hotel/max500/473824774.jpg?k=a70b57b0224b1a759b60c6e60233b42f6ca8f5c19b0e14780c29ddff1cd9c385&o=" alt="" />
                    <h5 className="featured__desc--title">CĂN HỘ VINHOMES GRAND PARK QUẬN 9 Studio (CAN HO VINHOMES GRAND PARK QUAN 9 Studio)</h5>
                    <p className={`${styles.featured__desc} ${styles["featured__desc--star"]}`}>
                        <i className="fa-solid fa-star"></i>    
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </p>
                    <p className="featured__desc featured__desc--sumary">Giá mỗi đêm chưa gồm giá và phí</p>
                    <p className={`${styles.featured__desc} ${styles["featured__desc--price"]}`}>VND 458.333</p>
                </div>
            </div>
        </div>
    )
}

export default FeaturedHomes