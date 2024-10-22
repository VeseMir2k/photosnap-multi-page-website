import Card from "./components/Card"
import ImageCard from "./components/ImageCard"
import styles from "@/app/styles/components/home/home.module.scss"

export default function Home() {
  return (
    <main>
      <section className={styles["section-hero"]}>
        <Card
          srcImage="/assets/home/mobile/create-and-share.jpg"
          title="Create and share your photo stories"
          description="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
          textButton="GET AN INVITE"
          hrefButton="/"
          theme="dark"
          accent={true}
        />
      </section>

      <section className={styles["section-view-stories"]}>
        <Card
          srcImage="/assets/home/mobile/beautiful-stories.jpg"
          title="Beautiful stories ever time"
          description="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
          textButton="View the stories"
          hrefButton="/"
          theme="light"
        />
        <Card
          srcImage="/assets/home/mobile/designed-for-everyone.jpg"
          title="Designed for everyone"
          description="Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. "
          textButton="View the stories"
          hrefButton="/"
          theme="light"
        />
      </section>

      <section className={styles["section-stories"]}>
        <ImageCard
          srcImage="/assets/stories/mobile/mountains.jpg"
          title="The Mountains"
          author="John Appleseed"
          textButton="Read Story"
          hrefButton="/"
        />
        <ImageCard
          srcImage="/assets/stories/mobile/cityscapes.jpg"
          title="Sunset Cityscapes"
          author="Benjamin Cruz"
          textButton="Read Story"
          hrefButton="/"
        />
        <ImageCard
          srcImage="/assets/stories/mobile/18-days-voyage.jpg"
          title="18 Days Voyage"
          author="Alexei Borodin"
          textButton="Read Story"
          hrefButton="/"
        />
        <ImageCard
          srcImage="/assets/stories/mobile/architecturals.jpg"
          title="Architecturals"
          author="Samantha Brooke"
          textButton="Read Story"
          hrefButton="/"
        />
      </section>
    </main>
  )
}
