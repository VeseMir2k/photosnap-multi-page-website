import Link from "next/link"
import styles from "@/app/styles/components/button.module.scss"
import clsx from "clsx"

type ButtonProps = {
  theme?: "light" | "dark"
  hrefButton: string
  textButton: string
}

export default function Button({
  theme = "dark",
  hrefButton,
  textButton,
}: ButtonProps) {
  return (
    <Link
      className={clsx(
        styles["button"],
        theme === "dark" && styles["button--dark"],
        theme === "light" && styles["button--light"]
      )}
      href={hrefButton}
    >
      {textButton}
    </Link>
  )
}
