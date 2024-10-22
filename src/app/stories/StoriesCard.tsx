import styles from "@/app/styles/components/stories/stories-card.module.scss"
import ArrowButton from "../components/ArrowButton"
import Image from "next/image"
import clsx from "clsx"

type StoriesCardProps = {
  srcImage: string
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
    <article className={clsx(styles["card"])}>
      <Image
        className={styles["stories-card__image"]}
        src={srcImage}
        layout="responsive"
        width={100}
        height={60}
        alt="card-image"
      />
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
