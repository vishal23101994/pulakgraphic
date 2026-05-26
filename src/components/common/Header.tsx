import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ padding: '10px', background: '#eee' }}>
      <nav>
        <Link href="/">Home</Link> | 
        <Link href="/about">About</Link> | 
        <Link href="/services">Services</Link> | 
        <Link href="/portfolio">Portfolio</Link> | 
        <Link href="/blog">Blog</Link> | 
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}