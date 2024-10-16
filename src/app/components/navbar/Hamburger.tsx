import styles from "@/app/styles/navbar/hamburger.module.css"

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
