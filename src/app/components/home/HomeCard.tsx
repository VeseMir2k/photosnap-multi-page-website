import styles from "@/app/styles/components/home/home-card.module.scss"
import ArrowButton from "../ArrowButton"
import Image from "next/image"

type CardTopProps = {
  src: string
  title: string
  description: string
  textButton: string
}

export default function HomeCard({
  src,
  title,
  description,
  textButton,
}: CardTopProps) {
  return (
    <article className={styles["card-top"]}>
      <Image
        src={src}
        layout="responsive"
        width={100}
        height={60}
        alt="card-top-image"
      />
      <div className={styles["card-top__body"]}>
        <h2 className={styles["card-top__title"]}>{title}</h2>
        <p className={styles["card-top__description"]}>{description}</p>
        <ArrowButton
          textButton={textButton}
          href="/"
        />
      </div>
    </article>
  )
}
