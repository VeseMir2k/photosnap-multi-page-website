import styles from "@/app/styles/components/footer/socials.module.scss"
import Image from "next/image"
import Link from "next/link"

const socialsData = [
  {
    href: "https://www.facebook.com/",
    src: "assets/shared/desktop/facebook.svg",
    alt: "facebook",
  },
  {
    href: "https://www.youtube.com/",
    src: "assets/shared/desktop/youtube.svg",
    alt: "youtube",
  },
  {
    href: "https://www.x.com/",
    src: "assets/shared/desktop/twitter.svg",
    alt: "twitter",
  },
  {
    href: "https://www.pinterest.com/",
    src: "assets/shared/desktop/pinterest.svg",
    alt: "pinterest",
  },
  {
    href: "https://www.instagram.com/",
    src: "assets/shared/desktop/instagram.svg",
    alt: "instagram",
  },
]

export default function Socials() {
  const socials = socialsData.map((item) => (
    <Link
      key={item.alt}
      href={item.href}
    >
      <Image
        className={styles.socials__icon}
        src={item.src}
        width={20}
        height={20}
        alt={item.alt}
      />
    </Link>
  ))

  return <div className={styles.socials}>{socials}</div>
}
