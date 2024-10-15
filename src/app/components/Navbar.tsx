import Link from "next/link"

export default function Navbar() {
  return (
    <>
      <h3>
        <Link href="/">PHOTOSNAP</Link>
      </h3>
      <nav>
        <Link href="/stories">Stories</Link>
        <Link href="/features">Features</Link>
        <Link href="/pricing">Pricing</Link>
      </nav>
    </>
  )
}
