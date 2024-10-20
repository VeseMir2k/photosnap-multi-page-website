import Link from "next/link"
import styles from "../styles/components/arrow-button.module.scss"
import clsx from "clsx"

type ArrowButtonProps = {
  theme: "dark" | "light"
  textButton: string
  hrefButton: string
}

export default function ArrowButton({
  theme,
  textButton,
  hrefButton,
}: ArrowButtonProps) {
  return (
    <Link
      className={clsx(
        styles["arrow-button"],
        theme === "dark" && styles["arrow-button--dark"],
        theme === "light" && styles["arrow-button--light"]
      )}
      href={hrefButton}
    >
      <span className={styles["arrow-button__text"]}>{textButton}</span>
      <svg
        className={styles["arrow-button__image"]}
        xmlns="http://www.w3.org/2000/svg"
        width="43"
        height="14"
      >
        <g
          fill="none"
          fillRule="evenodd"
          stroke="currentColor"
        >
          <path d="M0 7h41.864M35.428 1l6 6-6 6" />
        </g>
      </svg>
    </Link>
  )
}
