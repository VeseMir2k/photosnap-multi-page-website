import styles from "@/app/styles/components/pricing/plan-card.module.scss"
import Button from "../components/Button"

type PlanCardProps = {
  theme: "light" | "dark"
  variant: string
  description: string
  price: string
  per: string
  hrefButton: string
  textButton: string
}

export default function PlanCard({
  theme,
  variant,
  description,
  price,
  per,
  hrefButton,
  textButton,
}: PlanCardProps) {
  return (
    <div className={styles["plan-card"]}>
      <div className={styles["plan-card__info"]}>
        <h3 className={styles["plan-card__variant"]}>{variant}</h3>
        <p className={styles["plan-card__description"]}>{description}</p>
      </div>
      <div className={styles["plan-card__cost"]}>
        <h2 className={styles["plan-card__price"]}>${price}</h2>
        <p className={styles["plan-card__per"]}>per {per}</p>
      </div>
      <Button
        theme={theme}
        hrefButton={hrefButton}
        textButton={textButton}
      />
    </div>
  )
}
