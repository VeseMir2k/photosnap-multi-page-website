"use client"
import { useState } from "react"
import Logo from "../Logo"
import Nav from "./Nav"
import styles from "@/app/styles/navbar/navbar.module.css"

export default function Navbar() {
  const [isToggleMenu, setIsToggleMenu] = useState(false)

  const handleMenuToggle = () => {
    setIsToggleMenu((prevState) => !prevState)
  }

  return (
    <div className={styles.navbar}>
      <Logo handleMenuToggle={handleMenuToggle} />
      {isToggleMenu && <Nav />}
    </div>
  )
}
