import styles from "@/app/styles/components/pricing/plan-card.module.scss"
import Button from "../components/Button"
import clsx from "clsx"

type PlanCardProps = {
  theme?: "light" | "dark"
  accent?: boolean
  variant: string
  description: string
  price: string
  per: string
  hrefButton: string
  textButton: string
}

export default function PlanCard({
  theme = "light",
  accent = false,
  variant,
  description,
  price,
  per,
  hrefButton,
  textButton,
}: PlanCardProps) {
  return (
    <div
      className={clsx(
        styles["plan-card"],
        theme === "light" && styles["plan-card--light"],
        theme === "dark" && styles["plan-card--dark"],
        accent && styles["plan-card--accent"]
      )}
    >
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
