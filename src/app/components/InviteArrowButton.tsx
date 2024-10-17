import Link from "next/link"
import Image from "next/image"
import styles from "../styles/components/invite-arrow-button.module.scss"

export default function InviteArrowButton() {
  return (
    <Link
      className={styles["invite-arrow-button"]}
      href="/"
    >
      <span className={styles["invite-arrow-button__text"]}>GET AN INVITE</span>
      <Image
        className={styles["invite-arrow-button__arrow-image"]}
        src="assets/shared/desktop/arrow.svg"
        width={43}
        height={14}
        alt="arrow"
      />
    </Link>
  )
}
