import styles from "@/app/styles/components/navbar/hamburger.module.scss"

type HamburgerProps = {
  handleMenuToggle: () => void
}

export default function Hamburger({ handleMenuToggle }: HamburgerProps) {
  return (
    <button
      onClick={handleMenuToggle}
      className={`${styles.hamburger} menuToggle`}
    >
      <span></span>
      <span></span>
    </button>
  )
}
