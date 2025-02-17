import style from "./TransactionHistory.module.css";
import "../transactions.json";

export default function TransactionHistory({ items }) {
    return (
<table className={style.table}>
    <thead className={style.thead}>
    <tr className={style.table_upper_part}>
        <th className={style.table_title}>Type</th>
        <th className={style.table_title}>Amount</th>
        <th className={style.table_title}>Currency</th>
    </tr>
    </thead>

<tbody>
        {items.map((item, index) => {
        return (
            <tr key={item.id} className={index % 2 === 0 ? style.isWhite : style.isDarker}>
                <td className={style.td}>{item.type}</td>
                <td className={style.td}>{item.amount}</td>
                <td className={style.td}>{item.currency}</td>
            </tr>
        );
    })}
</tbody>
</table>
    )
}