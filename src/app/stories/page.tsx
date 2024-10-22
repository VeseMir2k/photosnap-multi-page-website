import ImageCard from "../components/ImageCard"
import StoriesCard from "./StoriesCard"
import storiesData from "./storiesData"
import styles from "@/app/styles/components/stories/stories.module.scss"

export default function Stories() {
  const stories = storiesData.map((item) => (
    <ImageCard
      key={item.title}
      srcImage={item.image}
      date={item.date}
      title={item.title}
      author={item.author}
      textButton="Read story"
      hrefButton="/"
    />
  ))
  return (
    <>
      <section className={styles["featured-story"]}>
        <StoriesCard
          srcImage="/assets/stories/mobile/moon-of-appalacia.jpg"
          title="HAZY FULL MOON OF APPALACHIA"
          date="March 2nd 2020"
          author="John Appleseed"
          description='The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.'
          textButton="Read the story"
          hrefButton="/"
        />
      </section>
      <section className={styles["stories-list"]}>{stories}</section>
    </>
  )
}
