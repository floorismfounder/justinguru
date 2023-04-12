import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@/styles/components/Header.module.scss';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
  { href: '/blog', label: 'Blog' },
];

export default function Header() {
  const [pacman, setPacman] = useState({ direction: 'right', position: 0 });
  const router = useRouter();
  const { pathname } = router;
  const linkRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const currentPath = pathname.split('/')[1];
    const currentLinkIndex = navLinks.findIndex(link => link.href === pathname);
    const clickedLinkIndex = navLinks.findIndex(link => link.href === `/${currentPath}`);
    const pacmanDirection = currentLinkIndex < clickedLinkIndex ? 'right' : 'left';
    const activeLinkRef = linkRefs.current.find(ref => ref && ref.getAttribute('href') === pathname);
  }, [pathname]);

  const currentClass = (path: string) => (path === pathname ? styles.current : '');

  const handleLinkClick = (index: number) => {
    const clickedLinkIndex = navLinks.findIndex(navLink => navLink.href === navLinks[index].href);
    const pacmanDirection = clickedLinkIndex > navLinks.findIndex(navLink => navLink.href === pathname) ? 'right' : 'left';
    const activeLinkRef = linkRefs.current[index];
    const position = activeLinkRef ? activeLinkRef.offsetLeft : 0;
    setPacman({ direction: pacmanDirection, position: activeLinkRef?.offsetLeft ?? 0 });
  };

  const pacmanClass = `${styles.pacman} ${styles[`pacman${pacman.direction}`]} ${pathname === '/' ? styles.pacmancenter : ''}`;
  const pacmanTopClass = `${styles.pacmantop} ${styles[`pacman${pacman.direction === 'left' ? 'right' : 'right'}`]}`;
  const pacmanBottomClass = `${styles.pacmanbottom} ${styles[`pacman${pacman.direction === 'left' ? 'right' : 'right'}`]}`;

  return (
    <header className={styles.header}>
      <div className={pacmanClass} style={{ left: pacman.position }}>
        <div className={pacmanTopClass}></div>
        <div className={pacmanBottomClass}></div>
      </div>
      <nav>
        <ul className={styles.navul}>
          {navLinks.map((link, index) => {
            const linkRef = linkRefs.current[index] ?? (linkRefs.current[index] = null);
            const linkClass = `${styles.navLink} ${currentClass(link.href)}`;
            return (
              <li key={link.href}>
                <Link href={link.href}>
                  <span ref={el => linkRefs.current[index] = el} className={linkClass} onClick={() => handleLinkClick(index)}>
                    {link.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
