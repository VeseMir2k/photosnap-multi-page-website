import InviteBanner from "../components/InviteBanner"
import Card from "../components/Card"

export default function Pricing() {
  return (
    <>
      <Card
        accent={true}
        theme="dark"
        title="PRICING"
        description="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
        srcImage="/assets/pricing/mobile/hero.jpg"
      />
      <InviteBanner />
    </>
  )
}
