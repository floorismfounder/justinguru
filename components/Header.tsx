import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Lottie from 'lottie-react-web';
import styles from '@/styles/components/Header.module.scss';
import Image from 'next/image';

const navLinks = [
  // { href: '/', label: 'Home' },
  { href: '/resume', label: 'Resume' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [currentLinkIndex, setCurrentLinkIndex] = useState(-1);
  const router = useRouter();
  const { pathname } = router;
  const linkRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const index = navLinks.findIndex(link => link.href === pathname);
    setCurrentLinkIndex(index);
  }, [pathname]);

  const currentClass = (path: string) => {
    if (pathname === path) {
      return styles.current;
    }
    return '';
  };

  return (
    <header className={styles.header}>
      <div className={styles.headercontainer}>
        <Link href="/" className={styles.logo}>
          <Image
            className={styles.logoimg}
            src="/images/meh3.png"
            alt="Justin Bartlett and Peter Bartlett"
            width={80}
            height={80}
            priority
          />
          <span>
            Justin.<span className={styles.guru}>guru</span>
          </span>
        </Link>
        <nav>
          <ul className={styles.navul}>
            {navLinks.map((link, index) => {
              const linkRef = linkRefs.current[index] ?? (linkRefs.current[index] = null);
              const linkClass = `${styles.navLink} ${currentClass(link.href)}`;
              return (
                <li key={link.href}>
                  <Link href={link.href} ref={el => linkRefs.current[index] = el}>
                    <span className={linkClass}>{link.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
