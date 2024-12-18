import styles from "@/app/styles/components/card.module.scss"
import ArrowButton from "./ArrowButton"
import Image from "next/image"
import clsx from "clsx"

type CardProps = {
  theme: "dark" | "light"
  accent?: boolean
  srcImage: {
    mobile: string
    tablet: string
    desktop: string
  }
  imagePosition?: "left" | "right"
  title: string
  description: string
  textButton?: string
  hrefButton?: string
}

export default function HomeCard({
  theme,
  accent = false,
  srcImage,
  imagePosition = "left",
  title,
  description,
  textButton,
  hrefButton,
}: CardProps) {
  return (
    <article
      className={clsx(
        styles.card,
        theme === "dark" && styles["card--dark"],
        theme === "light" && styles["card--light"]
      )}
    >
      <picture
        className={clsx(
          styles["card__image"],
          imagePosition === "left" && styles["card__image--left"],
          imagePosition === "right" && styles["card__image--right"]
        )}
      >
        <source
          media="(max-width: 767px)"
          srcSet={srcImage.mobile}
        />
        <source
          media="(max-width: 1023px)"
          srcSet={srcImage.tablet}
        />
        <Image
          src={srcImage.desktop}
          alt="Descriptive text for the image"
          width={100}
          height={60}
          layout="responsive"
        />
      </picture>
      <div
        className={clsx(
          styles.card__body,
          accent && styles["card__body--accent"]
        )}
      >
        <h2
          className={clsx(
            styles.card__title,
            theme === "dark" && styles["card__title--dark"],
            theme === "light" && styles["card__title--light"]
          )}
        >
          {title}
        </h2>
        <p
          className={clsx(
            styles.card__description,
            theme === "dark" && styles["card__description--dark"],
            theme === "light" && styles["card__description--light"]
          )}
        >
          {description}
        </p>
        {textButton && hrefButton && (
          <ArrowButton
            textButton={textButton}
            hrefButton={hrefButton}
            theme={theme}
          />
        )}
      </div>
    </article>
  )
}
