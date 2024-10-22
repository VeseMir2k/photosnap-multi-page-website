import styles from "@/app/styles/components/card.module.scss"
import ArrowButton from "./ArrowButton"
import Image from "next/image"
import clsx from "clsx"

type CardProps = {
  theme: "dark" | "light"
  accent?: boolean
  srcImage: string
  title: string
  description: string
  textButton: string
  hrefButton: string
}

export default function HomeCard({
  theme,
  accent = false,
  srcImage,
  title,
  description,
  textButton,
  hrefButton,
}: CardProps) {
  return (
    <article
      className={clsx(
        styles["card"],
        theme === "dark" && styles["card--dark"],
        theme === "light" && styles["card--light"]
      )}
    >
      <Image
        className={styles.card__image}
        src={srcImage}
        layout="responsive"
        width={100}
        height={60}
        alt="card-image"
      />
      <div
        className={clsx(
          styles["card__body"],
          accent && styles["card__body--accent"]
        )}
      >
        <h2
          className={clsx(
            styles["card__title"],
            theme === "dark" && styles["card__title--dark"],
            theme === "light" && styles["card__title--light"]
          )}
        >
          {title}
        </h2>
        <p
          className={clsx(
            styles["card__description"],
            theme === "dark" && styles["card__description--dark"],
            theme === "light" && styles["card__description--light"]
          )}
        >
          {description}
        </p>
        <ArrowButton
          textButton={textButton}
          hrefButton={hrefButton}
          theme={theme}
        />
      </div>
    </article>
  )
}
