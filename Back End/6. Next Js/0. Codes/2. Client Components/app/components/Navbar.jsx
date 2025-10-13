"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  console.log("Navbar:", `${typeof window === "undefined" ? "Server" : "Client"} component`)
  const pathname = usePathname()

  return (
    <nav>
      <ul>
        <li><Link href="/" className={pathname === "/" ? "is-active" : null}>Home</Link></li>
        <li><Link href="/about" className={pathname === "/about" ? "is-active" : null}>About</Link></li>
        <li><Link href="/posts" className={pathname === "/posts" ? "is-active" : null}>Posts</Link></li>
      </ul>
    </nav>
  )
}