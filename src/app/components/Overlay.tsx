"use client"
import { useStore } from "../stores/store"
import styles from "@/app/styles/components/overlay.module.scss"

export default function Overlay() {
  const { isMenuOpen, closeMenu } = useStore()

  return isMenuOpen ? (
    <div
      onClick={closeMenu}
      className={styles["overlay"]}
    ></div>
  ) : null
}
