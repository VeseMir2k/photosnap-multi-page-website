"use client"

import styles from "@/app/styles/components/navbar/hamburger.module.scss"
import { useStore } from "@/app/stores/store"

export default function Hamburger() {
  const { toggleMenu } = useStore()

  return (
    <button
      onClick={toggleMenu}
      className={`${styles.hamburger} menuToggle`}
    >
      <span></span>
      <span></span>
    </button>
  )
}
