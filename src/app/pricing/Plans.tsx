import styles from "@/app/styles/components/pricing/plans.module.scss"
import Switch from "./Swicth"
import PlanCard from "./PlanCard"

export default function Plans() {
  return (
    <div className={styles["plans"]}>
      <Switch />
      <PlanCard
        theme="light"
        variant="Basic"
        description="Includes basic usage of our platform. Recommended for new and aspiring photographers."
        price="19.00"
        per="month"
        textButton="pick plan"
        hrefButton="/"
      />
      <PlanCard
        theme="dark"
        accent={true}
        variant="Pro"
        description="More advanced features available. Recommended for photography veterans and professionals."
        price="39.00"
        per="month"
        textButton="pick plan"
        hrefButton="/"
      />
      <PlanCard
        theme="light"
        variant="Business"
        description="Additional features available such as more detailed metrics. Recommended for business owners."
        price="99.00"
        per="month"
        textButton="pick plan"
        hrefButton="/"
      />
    </div>
  )
}
