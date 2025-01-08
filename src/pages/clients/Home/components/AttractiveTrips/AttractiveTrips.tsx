import styles from "../../Home.module.scss";


function AttractiveTrips() {

    return (
        <div className={styles.attractive}>
            <h2 className="attractive__title">
            Các điểm đến thu hút nhất Việt Nam
            </h2>
            <div className={styles.attractive__list}>
            <div className={styles.attractive__item}>
                    <img src="//pix6.agoda.net/geo/city/13170/1_13170_02.jpg?ca=6&ce=1&s=345x345&ar=1x1" alt="" className={styles.attractive__img}  />
                    <h3 className={styles["attractive__item--title"]}>Hồ Chí Minh</h3>
                    <p className={styles["attractive__item--accommodation"]}>15,546 chỗ ở</p>
                </div>
                <div className={styles.attractive__item}>
                    <img src="//pix6.agoda.net/geo/city/13170/1_13170_02.jpg?ca=6&ce=1&s=345x345&ar=1x1" alt="" className={styles.attractive__img}  />
                    <h3 className={styles["attractive__item--title"]}>Hồ Chí Minh</h3>
                    <p className={styles["attractive__item--accommodation"]}>15,546 chỗ ở</p>
                </div>
                <div className={styles.attractive__item}>
                    <img src="//pix6.agoda.net/geo/city/13170/1_13170_02.jpg?ca=6&ce=1&s=345x345&ar=1x1" alt="" className={styles.attractive__img}  />
                    <h3 className={styles["attractive__item--title"]}>Hồ Chí Minh</h3>
                    <p className={styles["attractive__item--accommodation"]}>15,546 chỗ ở</p>
                </div>
                <div className={styles.attractive__item}>
                    <img src="//pix6.agoda.net/geo/city/13170/1_13170_02.jpg?ca=6&ce=1&s=345x345&ar=1x1" alt="" className={styles.attractive__img}  />
                    <h3 className={styles["attractive__item--title"]}>Hồ Chí Minh</h3>
                    <p className={styles["attractive__item--accommodation"]}>15,546 chỗ ở</p>
                </div>
                <div className={styles.attractive__item}>
                    <img src="//pix6.agoda.net/geo/city/13170/1_13170_02.jpg?ca=6&ce=1&s=345x345&ar=1x1" alt="" className={styles.attractive__img}  />
                    <h3 className={styles["attractive__item--title"]}>Hồ Chí Minh</h3>
                    <p className={styles["attractive__item--accommodation"]}>15,546 chỗ ở</p>
                </div>
            </div>
        </div>
    )
}

export default AttractiveTrips