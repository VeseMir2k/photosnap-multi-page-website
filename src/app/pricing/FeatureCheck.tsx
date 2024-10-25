import Image from "next/image"
import styles from "@/app/styles/components/pricing/feature-check.module.scss"

type Feature = {
  name: string
  basic: boolean
  pro: boolean
  business: boolean
}

type FeatureCheckProps = {
  feature: Feature
}

export default function FeatureCheck({ feature }: FeatureCheckProps) {
  const variantsData = [
    { name: "Basic", value: feature.basic },
    { name: "Pro", value: feature.pro },
    { name: "Business", value: feature.business },
  ]

  const variants = variantsData.map((item) => (
    <div
      key={item.name}
      className={styles["feature__variant"]}
    >
      <p className={styles["feature__variant-name"]}>{item.name}</p>
      {item.value && (
        <Image
          className={styles["feature__variant-image"]}
          src="/assets/pricing/desktop/check.svg"
          width={18}
          height={15}
          alt="check icon"
        />
      )}
    </div>
  ))

  return (
    <div className={styles["feature"]}>
      <h5 className={styles["feature__title"]}>{feature.name}</h5>
      <div className={styles["feature__variants"]}>{variants}</div>
    </div>
  )
}
