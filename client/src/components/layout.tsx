import { Decoration } from "./decoration"
import Navbar from "./navbar"

export default function Layout({ children } : {children: React.ReactNode}) {
  return (
    <>
      <head />
      <body>
          <Navbar />
          {children}
      </body>
    </>
  )
}