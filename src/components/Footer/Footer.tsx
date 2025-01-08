import styles from "./Footer.module.scss"

function Footer() {

    return (
        <footer className={styles.footer}>
                <div className={styles.footer__desc}>
                    Mọi nội dung tại đây © 2005 – 2024 Công ty TNHH Tư nhân Agoda. Bảo Lưu Mọi Quyền.
                    <br />
                    Agoda.com là thành viên của Tập đoàn Booking Holdings, nhà cung cấp dịch vụ du lịch trực tuyến & các dịch vụ có liên quan hàng đầu thế giới.
                </div>
                <div className={styles.footer__menu}>
                    <ul>
                        <li><img src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg" alt="" /></li>
                        <li><img src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg" alt="" /></li>
                        <li><img src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg" alt="" /></li>
                        <li><img src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg" alt="" /></li>
                    </ul>
                </div>
        </footer>
    )
}

export default Footer