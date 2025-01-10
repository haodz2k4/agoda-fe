import styles from "./TableManage.module.scss";


interface ITableManage {
    ths: string[],
    items: unknown[],
}

function TableManage(data: ITableManage) {
    const {ths} = data
    return (
        <table className={styles.table__manage}>
            <thead>
                <tr>
                    {ths.map((item) => <th>{item}</th>)}
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    )
}

export default TableManage