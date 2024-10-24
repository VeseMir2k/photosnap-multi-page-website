import styles from "@/app/styles/components/image-card.module.scss"
import Image from "next/image"
import ArrowButton from "./ArrowButton"

type ImageCardProps = {
  srcImage: string
  date?: string
  title: string
  author: string
  themeButton?: string
  textButton: string
  hrefButton: string
}

export default function ImageCard({
  srcImage,
  date,
  title,
  author,
  textButton,
  hrefButton,
}: ImageCardProps) {
  return (
    <div className={styles["image-card"]}>
      <Image
        className={styles["image-card__image"]}
        src={srcImage}
        layout="responsive"
        alt="image-card"
        width={100}
        height={60}
      />
      <div className={styles["image-card__body"]}>
        <div className={styles["image-card__details"]}>
          <div className={styles["image-card__meta"]}>
            {date && <p className={styles["image-card__date"]}>{date}</p>}
            <h4 className={styles["image-card__title"]}>{title}</h4>
            <p className={styles["image-card__author"]}>by {author}</p>
          </div>
          <hr className={styles["image-card__line"]} />
          <ArrowButton
            theme="dark"
            textButton={textButton}
            hrefButton={hrefButton}
            arrowPosition="right"
          />
        </div>
      </div>
    </div>
  )
}
