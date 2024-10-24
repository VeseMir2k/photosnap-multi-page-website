"use client"

import Link from "next/link"
import styles from "@/app/styles/components/nav.module.scss"
import clsx from "clsx"
import InviteButton from "./header/navbar/InviteButton"
import { useStore } from "@/app/stores/store"

const navData = [
  { name: "HOME", href: "/" },
  { name: "STORIES", href: "/stories" },
  { name: "FEATURES", href: "/features" },
  { name: "PRICING", href: "/pricing" },
]

type NavProps = {
  variant: "navbar" | "footer"
}

export default function Nav({ variant }: NavProps) {
  const { toggleMenu } = useStore()

  const navFooter = navData.map((item) => (
    <Link
      key={item.name}
      className={clsx(
        styles.nav__link,
        variant === "navbar" && styles["nav__link--navbar"],
        variant === "footer" && styles["nav__link--footer"]
      )}
      href={item.href}
    >
      {item.name}
    </Link>
  ))

  const navNavbar = navData
    .filter((item) => !(item.name === "HOME"))
    .map((item) => (
      <Link
        onClick={toggleMenu}
        key={item.name}
        className={styles.nav__link}
        href={item.href}
      >
        {item.name}
      </Link>
    ))

  return (
    <nav
      className={clsx(
        styles.nav,
        variant === "navbar" && styles["nav--navbar"],
        variant === "footer" && styles["nav--footer"]
      )}
    >
      {variant === "navbar" && navNavbar}
      {variant === "footer" && navFooter}
      {variant === "navbar" && <hr className={styles["nav__line"]} />}
      {variant === "navbar" && <InviteButton />}
    </nav>
  )
}
