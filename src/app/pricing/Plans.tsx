"use client"

import styles from "@/app/styles/components/pricing/plans.module.scss"
import Switch from "./Switch"
import PlanCard from "./PlanCard"
import { useStore } from "../stores/store"

const plansData = [
  {
    variant: "Basic",
    description:
      "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
    price: {
      month: "19.00",
      year: "190.00",
    },
  },
  {
    variant: "Pro",
    description:
      "More advanced features available. Recommended for photography veterans and professionals.",
    price: {
      month: "39.00",
      year: "390.00",
    },
  },
  {
    variant: "Business",
    description:
      "Additional features available such as more detailed metrics. Recommended for business owners.",
    price: {
      month: "99.00",
      year: "990.00",
    },
  },
]

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
