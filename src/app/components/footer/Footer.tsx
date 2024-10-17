import styles from "@/app/styles/components/footer/footer.module.scss"
import Logo from "../Logo"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo />
    </footer>
  )
}
