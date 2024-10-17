import Link from "next/link"
import Hamburger from "./navbar/Hamburger"
import styles from "@/app/styles/components/logo.module.scss"

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Link
        className={styles.logo__link}
        href="/"
      >
        <span className={styles.logo__triangle}></span>
        <h1 className={styles.logo__title}>PHOTOSNAP</h1>
      </Link>
      <Hamburger />
    </div>
  )
}
