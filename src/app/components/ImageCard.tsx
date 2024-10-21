import styles from "@/app/styles/components/image-card.module.scss"
import Image from "next/image"
import ArrowButton from "./ArrowButton"

export default function ImageCard() {
  return (
    <div className={styles["image-card"]}>
      <Image
        className={styles["image-card__image"]}
        src="/assets/stories/mobile/mountains.jpg"
        layout="responsive"
        alt="image-card"
        width={100}
        height={60}
      />
      <div className={styles["image-card__body"]}>
        <div className={styles["image-card__details"]}>
          <div className={styles["image-card__meta"]}>
            <p className={styles["image-card__date"]}>April 16th 2020</p>
            <h4 className={styles["image-card__title"]}>The Mountains</h4>
            <p className={styles["image-card__author"]}>by John Appleseed</p>
          </div>
          <hr className={styles["image-card__line"]} />
          <ArrowButton
            theme="dark"
            textButton="Read Store"
            hrefButton="/"
            arrowPosition="right"
          />
        </div>
      </div>
    </div>
  )
}
