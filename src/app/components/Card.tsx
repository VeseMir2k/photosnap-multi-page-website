import styles from "@/app/styles/components/card.module.scss"
import ArrowButton from "./ArrowButton"
import Image from "next/image"
import clsx from "clsx"

type CardTopProps = {
  theme: "dark" | "light"
  accent?: boolean
  src: string
  title: string
  description: string
  textButton: string
  hrefButton: string
}

export default function HomeCard({
  theme,
  accent = false,
  src,
  title,
  description,
  textButton,
  hrefButton,
}: CardTopProps) {
  return (
    <article
      className={clsx(
        styles["card"],
        theme === "dark" && styles["card--dark"],
        theme === "light" && styles["card--light"]
      )}
    >
      <Image
        src={src}
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
