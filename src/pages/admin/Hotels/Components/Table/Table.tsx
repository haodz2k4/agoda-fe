import styles from "../../Hotel.module.scss"


interface IProps {
    items: Record<string, any>[] 
}
function Table(props: IProps) {
    const {items = []} = props
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tiêu đề</th>
                    <th>Lượt đánh giá</th>
                    <th>Ảnh</th>
                    <th>Ngày tạo</th>
                    <th>Ngày cập nhật</th>
                    <th>Thao tác</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map((item) => (
                        <td>{item.title}</td>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Table