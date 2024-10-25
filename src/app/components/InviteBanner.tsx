import styles from "@/app/styles/components/invite-banner.module.scss"
import ArrowButton from "./ArrowButton"
import Image from "next/image"

const inviteBannerImage = {
  mobile: "/assets/shared/mobile/bg-beta.jpg",
  tablet: "/assets/shared/tablet/bg-beta.jpg",
  desktop: "/assets/shared/desktop/bg-beta.jpg",
}

export default function InviteBanner() {
  return (
    <div className={styles["invite-banner"]}>
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet={inviteBannerImage.mobile}
        />
        <source
          media="(max-width: 960px)"
          srcSet={inviteBannerImage.tablet}
        />
        <Image
          className={styles["invite-banner__image"]}
          src={inviteBannerImage.desktop}
          alt="Descriptive text for the image"
          width={100}
          height={60}
          layout="responsive"
        />
      </picture>
      <div className={styles["invite-banner__body"]}>
        <h2 className={styles["invite-banner__title"]}>
          We’re in beta. Get your invite today!
        </h2>
        <ArrowButton
          theme="dark"
          textButton="Get an  invite"
          hrefButton="/"
        />
      </div>
    </div>
  )
}
