"use client"
import { useStore } from "@/app/stores/store"
import Logo from "../Logo"
import Nav from "../Nav"
import styles from "@/app/styles/components/navbar/navbar.module.scss"

export default function Navbar() {
  const { isMenuOpen } = useStore()

  return (
    <div className={styles.navbar}>
      <Logo
        isHamburger={true}
        variantColor="black"
      />
      {isMenuOpen && <Nav variant="navbar" />}
    </div>
  )
}
