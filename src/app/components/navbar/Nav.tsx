import Link from "next/link"
import styles from "@/app/styles/components/navbar/nav.module.scss"

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link
        className={styles.nav__link}
        href="/stories"
      >
        Stories
      </Link>
      <Link
        className={styles.nav__link}
        href="/features"
      >
        Features
      </Link>
      <Link
        className={styles.nav__link}
        href="/pricing"
      >
        Pricing
      </Link>
      <hr className={styles.nav__hr} />
      <Link
        className={styles.nav__button}
        href="/"
      >
        Get an invite
      </Link>
    </nav>
  )
}
