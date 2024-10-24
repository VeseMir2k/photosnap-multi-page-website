"use client"
import styles from "@/app/styles/components/pricing/switch.module.scss"
import clsx from "clsx"
import { useStore } from "../stores/store"

export default function Switch() {
  const { togglePlan, plan } = useStore()
  return (
    <div
      onClick={togglePlan}
      className={styles["switch"]}
    >
      <span
        className={clsx(
          styles["switch__monthly"],
          plan === "monthly" && styles["switch__monthly--check"]
        )}
      >
        Monthly
      </span>
      <div
        className={clsx(
          styles["switch__input"],
          plan === "monthly" && styles["switch__input--monthly"],
          plan === "yearly" && styles["switch__input--yearly"]
        )}
      ></div>
      <span
        className={clsx(
          styles["switch__yearly"],
          plan === "yearly" && styles["switch__yearly--check"]
        )}
      >
        Yearly
      </span>
    </div>
  )
}
