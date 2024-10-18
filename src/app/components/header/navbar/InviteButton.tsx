import Link from "next/link"
import styles from "@/app/styles/components/header/navbar/invite-button.module.scss"

export default function InviteButton() {
  return (
    <Link
      className={styles["invite-button"]}
      href="/"
    >
      GET AN INVITE
    </Link>
  )
}
