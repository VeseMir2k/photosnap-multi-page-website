"use client"

import Link from "next/link"
import styles from "@/app/styles/components/header/navbar/invite-button.module.scss"
import { useStore } from "@/app/stores/store"

export default function InviteButton() {
  const { closeMenu } = useStore()

  return (
    <Link
      onClick={closeMenu}
      className={styles["invite-button"]}
      href="/"
    >
      GET AN INVITE
    </Link>
  )
}
