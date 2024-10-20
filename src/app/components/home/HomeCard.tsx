import styles from "@/app/styles/components/home/home-card.module.scss"
import ArrowButton from "../ArrowButton"
import Image from "next/image"
import clsx from "clsx"

type CardTopProps = {
  theme: "dark" | "light"
  src: string
  title: string
  description: string
  textButton: string
  hrefButton: string
}

export default function HomeCard({
  theme,
  src,
  title,
  description,
  textButton,
  hrefButton,
}: CardTopProps) {
  return (
    <article
      className={clsx(
        styles["card-top"],
        theme === "dark" && styles["card-top--dark"],
        theme === "light" && styles["card-top--light"]
      )}
    >
      <Image
        src={src}
        layout="responsive"
        width={100}
        height={60}
        alt="card-top-image"
      />
      <div className={styles["card-top__body"]}>
        <h2
          className={clsx(
            styles["card-top__title"],
            theme === "dark" && styles["card-top__title--dark"],
            theme === "light" && styles["card-top__title--light"]
          )}
        >
          {title}
        </h2>
        <p
          className={clsx(
            styles["card-top__description"],
            theme === "dark" && styles["card-top__description--dark"],
            theme === "light" && styles["card-top__description--light"]
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
