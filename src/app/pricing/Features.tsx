import { plansFeaturesData } from "../data/plansData"
import styles from "@/app/styles/components/pricing/features.module.scss"
import FeatureCheck from "./FeatureCheck"

type Feature = {
  name: string
  basic: boolean
  pro: boolean
  business: boolean
}

export default function Features() {
  return (
    <div className={styles["features"]}>
      <h5 className={styles["features__title"]}>Features</h5>
      {plansFeaturesData.map((item: Feature) => (
        <FeatureCheck
          key={item.name}
          feature={item}
        />
      ))}
    </div>
  )
}
