import InviteBanner from "../components/InviteBanner"
import Card from "../components/Card"
import styles from "@/app/styles/components/pricing/pricing.module.scss"
import Plans from "./Plans"
import Features from "./Features"

const imagesTopData = {
  mobile: "/assets/pricing/mobile/hero.jpg",
  tablet: "/assets/pricing/tablet/hero.jpg",
  desktop: "/assets/pricing/desktop/hero.jpg",
}

export default function Pricing() {
  return (
    <main className={styles["pricing"]}>
      <section className={styles["pricing__heading"]}>
        <Card
          accent={true}
          theme="dark"
          title="PRICING"
          description="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
          srcImage={imagesTopData}
        />
      </section>
      <section className={styles["pricing__plans"]}>
        <Plans />
      </section>
      <section className={styles["pricing__features"]}>
        <Features />
      </section>
      <section className={styles["pricing__invite-banner"]}>
        <InviteBanner />
      </section>
    </main>
  )
}
