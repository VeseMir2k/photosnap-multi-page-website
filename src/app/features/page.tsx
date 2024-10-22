import Card from "../components/Card"
import InviteBanner from "../components/InviteBanner"

export default function Features() {
  return (
    <>
      <Card
        accent={true}
        theme="dark"
        title="FEATURES"
        description="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
        srcImage="/assets/features/mobile/hero.jpg"
      />
      <InviteBanner />
    </>
  )
}
