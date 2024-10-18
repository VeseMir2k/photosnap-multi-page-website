import Link from "next/link"
import Image from "next/image"
import styles from "../styles/components/arrow-button.module.scss"

type ArrowButtonProps = {
  text: string
}

export default function ArrowButton({ text }: ArrowButtonProps) {
  return (
    <Link
      className={styles["arrow-button"]}
      href="/"
    >
      <span className={styles["arrow-button__text"]}>{text}</span>
      <Image
        className={styles["arrow-button__arrow-image"]}
        src="assets/shared/desktop/arrow.svg"
        width={43}
        height={14}
        alt="arrow"
      />
    </Link>
  )
}
