import styles from "@/app/styles/components/footer/footer.module.scss"
import Logo from "../Logo"
import Socials from "./Socials"
import Nav from "../Nav"
import ArrowButton from "../ArrowButton"
import Copyright from "./Copyright"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo
        isHamburger={false}
        variantColor="white"
      />
      <Socials />
      <Nav variant="footer" />
      <ArrowButton
        textButton="Get An Invite"
        hrefButton="/"
        theme="dark"
      />
      <Copyright />
    </footer>
  )
}
