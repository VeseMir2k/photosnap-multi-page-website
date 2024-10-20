import HomeCard from "./components/home/HomeCard"

export default function Home() {
  return (
    <main>
      <HomeCard
        src="/assets/home/mobile/create-and-share.jpg"
        title="Create and share your photo stories"
        description="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
        textButton="GET AN INVITE"
        hrefButton="/"
        theme="dark"
        accent={true}
      />
      <HomeCard
        src="/assets/home/mobile/beautiful-stories.jpg"
        title="Beautiful stories ever time"
        description="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
        textButton="View the stories"
        hrefButton="/"
        theme="light"
      />
      <HomeCard
        src="/assets/home/mobile/designed-for-everyone.jpg"
        title="Designed for everyone"
        description="Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. "
        textButton="View the stories"
        hrefButton="/"
        theme="light"
      />
    </main>
  )
}
