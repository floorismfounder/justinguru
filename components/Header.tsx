import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Lottie from 'lottie-react-web';
import styles from '@/styles/components/Header.module.scss';

import HomeIcon from '../public/Home_lottie.json';
import InfoIcon from '../public/Info_lottie.json';
import AwardIcon from '../public/Award_lottie.json';
import MailIcon from '../public/Mail_lottie.json';
import BookCloseIcon from '../public/Book_Close_lottie.json';

const navLinks = [
  { href: '/', label: 'Home', icon: HomeIcon },
  { href: '/resume', label: 'Resume', icon: AwardIcon },
  { href: '/blog', label: 'Blog', icon: BookCloseIcon },
];

export default function Header() {
  const [pacman, setPacman] = useState({ direction: 'right', position: 0 });
  const [currentLinkIndex, setCurrentLinkIndex] = useState(-1);
  const router = useRouter();
  const { pathname } = router;
  const linkRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const currentPath = pathname.split('/')[1];
    const index = navLinks.findIndex(link => link.href === pathname);
    setCurrentLinkIndex(index);
    const clickedLinkIndex = navLinks.findIndex(link => link.href === `/${currentPath}`);
    const pacmanDirection = index < clickedLinkIndex ? 'right' : 'left';
    const activeLinkRef = linkRefs.current.find(ref => ref && ref.getAttribute('href') === pathname);
    if (activeLinkRef) {
      const position = activeLinkRef.offsetLeft;
      setPacman({ direction: pacmanDirection, position });
    }
  }, [pathname]);

  const currentClass = (path: string) => {
    if (pathname.startsWith(path)) {
      return 'current';
    }
    return '';
  };

  const handleLinkClick = (index: number) => {
    const clickedLinkIndex = navLinks.findIndex(navLink => navLink.href === navLinks[index].href);
    const pacmanDirection = clickedLinkIndex > navLinks.findIndex(navLink => navLink.href === pathname) ? 'right' : 'left';
    const activeLinkRef = linkRefs.current[index];
    if (activeLinkRef) {
      const position = activeLinkRef.offsetLeft;
      setPacman({ direction: pacmanDirection, position });
    }
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
            const linkClass = `${styles.navLink} ${styles[(currentClass(link.href))]}`;
            let linkIcon;
            if (typeof link.icon === 'string') {
              linkIcon = require(link.icon);
            } else {
              linkIcon = link.icon;
            }
            const isCurrentLink = currentClass(link.href) === 'current';
            return (
              <li key={link.href}>
                <Link href={link.href} ref={el => linkRefs.current[index] = el} onClick={() => handleLinkClick(index)}>
                  <div className={styles.iconcontainer}>
                    <Lottie
                      options={{
                        animationData: linkIcon,
                        loop: false,
                        autoplay: isCurrentLink,
                      }}
                      height={50}
                      width={50}
                    />
                  </div>
                  <span className={linkClass} >
                    {link.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <span className={styles.logo}>
       © Justin.
        <span className={styles.red}>g</span>
        <span className={styles.yellow}>u</span>
        <span className={styles.green}>r</span>
        <span className={styles.blue}>u</span>
      </span>
    </header>
  );
  

}