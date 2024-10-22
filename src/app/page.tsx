import Card from "./components/Card"
import FeatureCard from "./components/FeatureCard"
import ImageCard from "./components/ImageCard"
import styles from "@/app/styles/components/home/home.module.scss"

export default function Home() {
  return (
    <main>
      <section className={styles["home-hero"]}>
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

      <section className={styles["home-view-stories"]}>
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

      <section className={styles["home-stories"]}>
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
      <section className={styles["home-features"]}>
        <FeatureCard
          srcImage="/assets/features/desktop/responsive.svg"
          title="100% Responsive"
          description="No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
        />
        <FeatureCard
          srcImage="/assets/features/desktop/no-limit.svg"
          title="No Photo Upload Limit"
          description="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
        />
        <FeatureCard
          srcImage="/assets/features/desktop/embed.svg"
          title="Available to Embed"
          description="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. "
        />
      </section>
    </main>
  )
}
