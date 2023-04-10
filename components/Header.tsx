import Link from 'next/link';
import styles from '@/styles/components/Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <span>Home</span>
        </Link>
        <Link href="/about">
          <span>About</span>
        </Link>
        <Link href="/resume">
          <span>Resume</span>
        </Link>
        <Link href="/contact">
          <span>Contact</span>
        </Link>
        <Link href="/blog">
          <span>Blog</span>
        </Link>
      </nav>
    </header>
  );
}
