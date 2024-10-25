import styles from "@/app/styles/components/stories/stories-card.module.scss"
import ArrowButton from "../components/ArrowButton"
import Image from "next/image"

type StoriesCardProps = {
  srcImage: {
    mobile: string
    tablet: string
    desktop: string
  }
  title: string
  date: string
  author: string
  description: string
  textButton: string
  hrefButton: string
}

export default function StoriesCard({
  srcImage,
  title,
  date,
  author,
  description,
  textButton,
  hrefButton,
}: StoriesCardProps) {
  return (
    <article className={styles["stories-card"]}>
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet={srcImage.mobile}
        />
        <source
          media="(max-width: 960px)"
          srcSet={srcImage.tablet}
        />
        <Image
          className={styles["stories-card__image"]}
          src={srcImage.desktop}
          alt="Descriptive text for the image"
          width={100}
          height={60}
          layout="responsive"
        />
      </picture>
      <div className={styles["stories-card__body"]}>
        <p className={styles["stories-card__header"]}>
          LAST MONTH’S FEATURED STORY
        </p>
        <h2 className={styles["stories-card__title"]}>{title}</h2>
        <p className={styles["stories-card__meta"]}>
          <span className={styles["stories-card__date"]}>{date}</span>
          <span className={styles["stories-card__author"]}>by {author}</span>
        </p>
        <p className={styles["stories-card__description"]}>{description}</p>
        <ArrowButton
          textButton={textButton}
          hrefButton={hrefButton}
          theme="dark"
        />
      </div>
    </article>
  )
}
