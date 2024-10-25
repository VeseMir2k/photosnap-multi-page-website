import { plansFeaturesData } from "../data/plansData"
import styles from "@/app/styles/components/pricing/features.module.scss"

export default function Features() {
  const features = plansFeaturesData.map((item) => (
    <tr key={item.name}>
      <th>{item.name}</th>
      <td>
        <span>Basic</span>
        {item.basic && "+"}
      </td>
      <td>
        <span>Pro</span>
        {item.pro && "+"}
      </td>
      <td>
        <span>Business</span>
        {item.business && "+"}
      </td>
    </tr>
  ))
  return (
    <table className={styles["features-table"]}>
      <thead className={styles["features-table__header"]}>
        <tr>
          <th>Features</th>
        </tr>
      </thead>
      <tbody className={styles["features-table__body"]}>{features}</tbody>
    </table>
  )
}
