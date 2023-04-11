import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@/styles/components/Header.module.scss';

export default function Header() {
  const [pacmanDirection, setPacmanDirection] = useState('right');
  const [pacmanPosition, setPacmanPosition] = useState(0);
  const router = useRouter();
  const { pathname } = router;
  const homeLinkRef = useRef<HTMLSpanElement>(null);
  const aboutLinkRef = useRef<HTMLSpanElement>(null);
  const resumeLinkRef = useRef<HTMLSpanElement>(null);
  const contactLinkRef = useRef<HTMLSpanElement>(null);
  const blogLinkRef = useRef<HTMLSpanElement>(null);
  let activeLinkRef = homeLinkRef;

  useEffect(() => {
    const currentPath = pathname.split('/')[1];
    const navLinks = ['/', '/about', '/resume', '/contact', '/blog'];
    const currentLinkIndex = navLinks.indexOf(pathname);
    const clickedLinkIndex = navLinks.indexOf(`/${currentPath}`);
    const pacmanClass = currentLinkIndex < clickedLinkIndex ? 'right' : 'left';
    setPacmanDirection(pacmanClass);
    switch (currentPath) {
      case '':
        activeLinkRef = homeLinkRef;
        break;
      case 'about':
        activeLinkRef = aboutLinkRef;
        break;
      case 'resume':
        activeLinkRef = resumeLinkRef;
        break;
      case 'contact':
        activeLinkRef = contactLinkRef;
        break;
      case 'blog':
        activeLinkRef = blogLinkRef;
        break;
      default:
        activeLinkRef = homeLinkRef;
        break;
    }
    if (activeLinkRef.current !== null) {
      setPacmanPosition(activeLinkRef.current.offsetLeft);
    }
  }, [pathname]);

  const currentClass = (path: string) => (path === pathname ? styles.current : '');
  const navLinkClass = `${styles.navLink} ${currentClass('/')}`;
  const aboutLinkClass = `${styles.navLink} ${currentClass('/about')}`;
  const contactLinkClass = `${styles.navLink} ${currentClass('/contact')}`;
  const resumeLinkClass = `${styles.navLink} ${currentClass('/resume')}`;
  const blogLinkClass = `${styles.navLink} ${currentClass('/blog')}`;
  const pacmanClass = `${styles.pacman} ${styles[`pacman${pacmanDirection}`]} ${pathname === '/' ? styles.pacmancenter : ''}`;
  const pacmanTopClass = `${styles.pacmantop} ${styles[`pacman${pacmanDirection === 'right' ? 'left' : 'right'}`]}`;
  const pacmanBottomClass = `${styles.pacmanbottom} ${styles[`pacman${pacmanDirection === 'right' ? 'left' : 'right'}`]}`;

  const handleLinkClick = (ref: React.RefObject<HTMLSpanElement>) => {
    if (ref.current !== null) {
      const currentPath = pathname.split('/')[1];
      const navLinks = ['/', '/about', '/resume', '/contact', '/blog'];
      const clickedLinkIndex = navLinks.indexOf(ref.current.getAttribute('href') ?? '');
      const pacmanClass = clickedLinkIndex > navLinks.indexOf(`/${currentPath}`) ? 'right' : 'left';
      setPacmanDirection(pacmanClass);
      setPacmanPosition(ref.current.offsetLeft);
    }
  };

  return (
    <header className={styles.header}>
      <div className={pacmanClass} style={{ left: pacmanPosition }}>
        <div className={pacmanTopClass}></div>
        <div className={pacmanBottomClass}></div>
      </div>
      <nav>
        <ul className={styles.navul}>
          <li>
            <Link href="/">
              <span ref={homeLinkRef} className={navLinkClass} onClick={() => handleLinkClick(homeLinkRef)}>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span ref={aboutLinkRef} className={aboutLinkClass} onClick={() => handleLinkClick(aboutLinkRef)}>About</span>
            </Link>
          </li>
          <li>
            <Link href="/resume">
              <span ref={resumeLinkRef} className={resumeLinkClass} onClick={() => handleLinkClick(resumeLinkRef)}>Resume</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span ref={contactLinkRef} className={contactLinkClass} onClick={() => handleLinkClick(contactLinkRef)}>Contact</span>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <span ref={blogLinkRef} className={blogLinkClass} onClick={() => handleLinkClick(blogLinkRef)}>Blog</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
  
  
}
