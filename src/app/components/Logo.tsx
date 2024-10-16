import Link from "next/link"
import Image from "next/image"
import Hamburger from "./navbar/Hamburger"
import styles from "@/app/styles/logo.module.css"

type LogoProps = {
  handleMenuToggle: () => void
}

export default function Logo({ handleMenuToggle }: LogoProps) {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <Image
          src="/assets/logo.png"
          width={170}
          height={16}
          alt="logo"
        />
      </Link>
      <Hamburger handleMenuToggle={handleMenuToggle} />
    </div>
  )
}
