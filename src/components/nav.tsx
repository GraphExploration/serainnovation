import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about-us">About Us</Link>
      <Link href="/services">Services</Link>
      {/* other links */}
    </nav>
  );
}
