import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Lottie from 'lottie-react-web';
import styles from '@/styles/components/Header.module.scss';
import Image from 'next/image';
import { NextRouter } from 'next/router'

const navLinks = [
  // { href: '/', label: 'Home' },
  { href: '/resume', label: 'Resume' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

type HeaderProps = {
  router: NextRouter;
};

export default function Header({ router }: HeaderProps) {
  const [currentLinkIndex, setCurrentLinkIndex] = useState(-1);
  const linkRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { pathname } = router;

  useEffect(() => {
    const index = navLinks.findIndex((link) => link.href === pathname);
    setCurrentLinkIndex(index);
  }, [pathname]);

  const currentClass = (path: string) => {
    if (pathname === path) {
      return styles.current;
    }
    return '';
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headercontainer}>
        <Link href="/" className={styles.logo} onClick={closeNav}>
          {/* <Image
            className={styles.logoimg}
            src="/images/justinface3.svg"
            alt="Justin Bartlett and Peter Bartlett"
            width={56}
            height={80}
            priority
          /> */}
          <span>
            Justin.<span className={styles.guru}>guru</span>
          </span>
        </Link>
        <nav>
          <div className={`${styles.navicon} ${isNavOpen ? styles.active : ''}`} onClick={toggleNav}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`${styles.navul} ${isNavOpen ? styles.active : ''}`}>
            {navLinks.map((link, index) => {
              const linkRef = linkRefs.current[index] ?? (linkRefs.current[index] = null);
              const linkClass = `${styles.navLink} ${currentClass(link.href)}`;
              return (
                <li key={link.href}>
                  <Link href={link.href} ref={el => linkRefs.current[index] = el} onClick={closeNav}>
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
