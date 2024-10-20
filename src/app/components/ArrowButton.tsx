import Link from "next/link"
import Image from "next/image"
import styles from "../styles/components/arrow-button.module.scss"

type ArrowButtonProps = {
  textButton: string
  href: string
}

export default function ArrowButton({ textButton, href }: ArrowButtonProps) {
  return (
    <Link
      className={styles["arrow-button"]}
      href={href}
    >
      <span className={styles["arrow-button__text"]}>{textButton}</span>
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
