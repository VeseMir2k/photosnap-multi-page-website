import HomeCard from "./components/home/HomeCard"

export default function Home() {
  return (
    <main>
      <HomeCard
        src="/assets/home/mobile/create-and-share.jpg"
        title="Create and share your photo stories."
        description="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
        textButton="GET AN INVITE"
      />
    </main>
  )
}
