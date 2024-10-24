"use client"

import styles from "@/app/styles/components/pricing/plans.module.scss"
import Switch from "./Switch"
import PlanCard from "./PlanCard"
import { useStore } from "../stores/store"
import { plansData } from "../data/plansData"

export default function Plans() {
  const { plan } = useStore()

  const plans = plansData.map((item) => (
    <PlanCard
      accent={item.variant === "Pro" && true}
      theme={item.variant === "Pro" ? "dark" : "light"}
      variant={item.variant}
      description={item.description}
      price={plan === "monthly" ? item.price.month : item.price.year}
      per={plan === "monthly" ? "month" : "year"}
      textButton="pick plan"
      hrefButton="/"
    />
  ))

  return (
    <div className={styles["plans"]}>
      <Switch />
      {plans}
    </div>
  )
}
