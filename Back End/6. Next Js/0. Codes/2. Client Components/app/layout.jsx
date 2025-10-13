import "./global.css"
import Navbar from "./components/Navbar"

export default function RootLayout({ children }) {
  console.log("RootLayout:", `${typeof window === "undefined" ? "Server" : "Client"} component`)
  
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>

        <main>{children}</main>

        <footer>&copy; {new Date().getFullYear()} Generic Web Dev, LLC.</footer>

      </body>
    </html>
  )
}