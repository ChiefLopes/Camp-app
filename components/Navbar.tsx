import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="border-2 border-red-500 flexBetween max-container relative padding-container z-30 py-2">
<Link href="/">
    <Image src="/hilink-logo.svg" alt="logo" width={74} height={29}/>
</Link>
    </nav>
  )
}

export default Navbar