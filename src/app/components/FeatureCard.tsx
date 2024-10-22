import styles from "@/app/styles/components/feature-card.module.scss"
import Image from "next/image"

type FeatureCardProps = {
  srcImage: string
  title: string
  description: string
}

export default function FeatureCard({
  srcImage,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className={styles["feature-card"]}>
      <Image
        className={styles["feature-card__image"]}
        src={srcImage}
        alt="embed"
        width={72}
        height={72}
      />
      <div className={styles["feature-card__body"]}>
        <h4 className={styles["feature-card__title"]}>{title}</h4>
        <p className={styles["feature-card__description"]}>{description}</p>
      </div>
    </div>
  )
}
