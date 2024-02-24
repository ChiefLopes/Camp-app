import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container relative padding-container z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((links) => (
          <Link
            href={links.href}
            key={links.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {links.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
