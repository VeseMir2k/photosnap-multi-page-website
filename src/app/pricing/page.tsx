import InviteBanner from "../components/InviteBanner"
import Card from "../components/Card"
import styles from "@/app/styles/components/pricing/pricing.module.scss"

export default function Pricing() {
  return (
    <main className={styles["pricing"]}>
      <section className={styles["pricing__heading"]}>
        <Card
          accent={true}
          theme="dark"
          title="PRICING"
          description="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
          srcImage="/assets/pricing/mobile/hero.jpg"
        />
      </section>
      <section className={styles["pricing__invite-banner"]}>
        <InviteBanner />
      </section>
    </main>
  )
}
