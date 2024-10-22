import ImageCard from "../components/ImageCard"
import StoriesCard from "./StoriesCard"

const storiesData = [
  {
    date: "April 16th 2020",
    title: "The Mountains",
    author: "John Appleseed",
    image: "/assets/stories/mobile/mountains.jpg",
  },
  {
    date: "April 14th 2020",
    title: "Sunset Cityscapes",
    author: "Benjamin Cruz",
    image: "/assets/stories/mobile/cityscapes.jpg",
  },
  {
    date: "April 11th 2020",
    title: "18 Days Voyage",
    author: "Alexei Borodin",
    image: "/assets/stories/mobile/18-days-voyage.jpg",
  },
  {
    date: "April 9th 2020",
    title: "Architecturals",
    author: "Samantha Brooke",
    image: "/assets/stories/mobile/architecturals.jpg",
  },
  {
    date: "April 7th 2020",
    title: "World Tour 2019",
    author: "Timothy Wagner",
    image: "/assets/stories/mobile/world-tour.jpg",
  },
  {
    date: "April 3rd 2020",
    title: "Unforeseen Corners",
    author: "William Malcolm",
    image: "/assets/stories/mobile/unforeseen-corners.jpg",
  },
  {
    date: "March 29th 2020",
    title: "King on Africa: Part II",
    author: "Tim Hillenburg",
    image: "/assets/stories/mobile/king-on-africa.jpg",
  },
  {
    date: "March 21st 2020",
    title: "The Trip to Nowhere",
    author: "Felicia Rourke",
    image: "/assets/stories/mobile/trip-to-nowhere.jpg",
  },
  {
    date: "March 19th 2020",
    title: "Rage of The Sea",
    author: "Mohammed Abdul",
    image: "/assets/stories/mobile/rage-of-the-sea.jpg",
  },
  {
    date: "March 16th 2020",
    title: "Running Free",
    author: "Michelle",
    image: "/assets/stories/mobile/running-free.jpg",
  },
  {
    date: "March 11th 2020",
    title: "Behind the Waves",
    author: "Lamarr Wilson",
    image: "/assets/stories/mobile/behind-the-waves.jpg",
  },
  {
    date: "March 9th 2020",
    title: "Calm Waters",
    author: "Samantha Brooke",
    image: "/assets/stories/mobile/calm-waters.jpg",
  },
  {
    date: "March 5th 2020",
    title: "The Milky Way",
    author: "Benjamin Cruz",
    image: "/assets/stories/mobile/milky-way.jpg",
  },
  {
    date: "March 1st 2020",
    title: "Somwarpet’s Beauty",
    author: "Michelle",
    image: "/assets/stories/mobile/somwarpet.jpg",
  },
  {
    date: "February 25th 2020",
    title: "Land of Dreams",
    author: "William Malcolm",
    image: "/assets/stories/mobile/land-of-dreams.jpg",
  },
]

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
    <section>
      <StoriesCard
        srcImage="/assets/stories/mobile/moon-of-appalacia.jpg"
        title="HAZY FULL MOON OF APPALACHIA"
        date="March 2nd 2020"
        author="John Appleseed"
        description='The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.'
        textButton="Read the story"
        hrefButton="/"
      />
      {stories}
    </section>
  )
}
