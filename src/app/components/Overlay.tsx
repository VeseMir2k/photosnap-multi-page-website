"use client"
import { useStore } from "../stores/store"
import styles from "@/app/styles/components/overlay.module.scss"

export default function Overlay() {
  const { isMenuOpen } = useStore()

  return isMenuOpen ? <div className={styles["overlay"]}></div> : null
}
