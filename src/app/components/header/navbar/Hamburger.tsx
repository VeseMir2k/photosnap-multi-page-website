"use client"

import styles from "@/app/styles/components/header/navbar/hamburger.module.scss"
import { useStore } from "@/app/stores/store"
import Image from "next/image"

export default function Hamburger() {
  const { isMenuOpen, toggleMenu } = useStore()

  return (
    <button
      onClick={toggleMenu}
      className={`${styles.hamburger} menuToggle`}
    >
      {isMenuOpen ? (
        <Image
          src="/assets/shared/mobile/close.svg"
          alt="menu"
          width={16}
          height={15}
        />
      ) : (
        <Image
          src="/assets/shared/mobile/menu.svg"
          alt="menu"
          width={20}
          height={6}
        />
      )}
    </button>
  )
}
