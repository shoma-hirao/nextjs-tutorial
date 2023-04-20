import Link from "next/link";

export const Header = () => (
  <nav>
    <Link href="/"> Home</Link>
    <Link href="/events"> Events</Link>
    <Link href="/about-us"> About Us</Link>
  </nav>
);
