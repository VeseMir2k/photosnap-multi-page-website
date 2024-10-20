import Navbar from "./navbar/Navbar"
import styles from "@/app/styles/components/header/header.module.scss"

export default function Header() {
  return (
    <header className={styles.header}>
      <Navbar />
    </header>
  )
}
