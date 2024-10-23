import Card from "../components/Card"
import InviteBanner from "../components/InviteBanner"
import styles from "@/app/styles/components/features/features.module.scss"
import { featuresData } from "../data/featuresData"
import FeatureCard from "../components/FeatureCard"

export default function Features() {
  const features = featuresData.map((item) => (
    <FeatureCard
      srcImage={item.srcImage}
      title={item.title}
      description={item.description}
    />
  ))

  return (
    <main className="features">
      <section className={styles["features__heading"]}>
        <Card
          accent={true}
          theme="dark"
          title="FEATURES"
          description="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
          srcImage="/assets/features/mobile/hero.jpg"
        />
      </section>
      <section className={styles["features__features-list"]}>
        {features}
      </section>
      <section className={styles["features__invite-banner"]}>
        <InviteBanner />
      </section>
    </main>
  )
}
