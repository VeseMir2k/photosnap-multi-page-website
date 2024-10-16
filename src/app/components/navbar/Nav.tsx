import Link from "next/link"
import styles from "@/app/styles/navbar/nav.module.css"

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/stories">Stories</Link>
      <Link href="/features">Features</Link>
      <Link href="/pricing">Pricing</Link>
      <hr />
      <Link href="/">Get an invite</Link>
    </nav>
  )
}
