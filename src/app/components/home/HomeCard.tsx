import styles from "@/app/styles/components/home/home-card.module.scss"
import ArrowButton from "../ArrowButton"
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
        styles["home-card"],
        theme === "dark" && styles["home-card--dark"],
        theme === "light" && styles["home-card--light"]
      )}
    >
      <Image
        src={src}
        layout="responsive"
        width={100}
        height={60}
        alt="home-card-image"
      />
      <div
        className={clsx(
          styles["home-card__body"],
          accent && styles["home-card__body--accent"]
        )}
      >
        <h2
          className={clsx(
            styles["home-card__title"],
            theme === "dark" && styles["home-card__title--dark"],
            theme === "light" && styles["home-card__title--light"]
          )}
        >
          {title}
        </h2>
        <p
          className={clsx(
            styles["home-card__description"],
            theme === "dark" && styles["home-card__description--dark"],
            theme === "light" && styles["home-card__description--light"]
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
