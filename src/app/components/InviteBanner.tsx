import styles from "@/app/styles/components/invite-banner.module.scss"
import ArrowButton from "./ArrowButton"
import Image from "next/image"

export default function InviteBanner() {
  return (
    <div className={styles["invite-banner"]}>
      <Image
        className={styles["invite-banner__image"]}
        src="/assets/shared/mobile/bg-beta.jpg"
        layout="responsive"
        width={100}
        height={60}
        alt="Background beta"
      />
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
