import Card from "./components/Card"
import FeatureCard from "./components/FeatureCard"
import ImageCard from "./components/ImageCard"
import styles from "@/app/styles/components/home/home.module.scss"
import {
  homeViewStoriesData,
  homeStoriesData,
  homeFeaturesData,
} from "./data/homeData"

export default function Home() {
  const viewStories = homeViewStoriesData.map((item) => (
    <Card
      key={item.title}
      srcImage={item.srcImage}
      title={item.title}
      description={item.description}
      textButton="View the stories"
      hrefButton="/"
      theme="light"
    />
  ))

  const stories = homeStoriesData.map((item) => (
    <ImageCard
      key={item.title}
      srcImage={item.srcImage}
      title={item.title}
      author={item.author}
      textButton="Read Story"
      hrefButton="/"
    />
  ))

  const features = homeFeaturesData.map((item) => (
    <FeatureCard
      srcImage={item.srcImage}
      title={item.title}
      description={item.description}
    />
  ))

  return (
    <main className={styles["home"]}>
      <section className={styles["home__hero"]}>
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

      <section className={styles["home__view-stories"]}>{viewStories}</section>
      <section className={styles["home__stories"]}>{stories}</section>
      <section className={styles["home__features"]}>{features}</section>
    </main>
  )
}
