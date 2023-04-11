import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@/styles/components/Header.module.scss';

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <span className={router.pathname === '/' ? styles.current : ''}>Home</span>
        </Link>
        <Link href="/about">
          <span className={router.pathname === '/about' ? styles.current : ''}>About</span>
        </Link>
        <Link href="/resume">
          <span className={router.pathname === '/resume' ? styles.current : ''}>Resume</span>
        </Link>
        <Link href="/contact">
          <span className={router.pathname === '/contact' ? styles.current : ''}>Contact</span>
        </Link>
        <Link href="/blog">
          <span className={router.pathname === '/blog' ? styles.current : ''}>Blog</span>
        </Link>
      </nav>
    </header>
  );
}
