import React, { useEffect, useRef, useState } from 'react';
import CanvasGalaxy from './CanvasGalaxy';
import styles from '../styles/Header.module.css';

export default function Header({ onContactClick }) {
  const headerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = headerRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <header className={styles.header} ref={headerRef}>
      <CanvasGalaxy />
      <h1 className={`${styles.title} ${isVisible ? styles.titleVisible : ''}`}>
        Hi, I'm <span className={styles.name}>Celestia</span>
      </h1>
      <nav>
        <a
          className={`${styles.navLink} ${isVisible ? styles.navLinkVisible : ''}`}
          href="#projects"
          onClick={() => {
            window.dispatchEvent(new Event('projects-link-click'));
          }}
        >
          Projects
        </a>
        <a className={`${styles.navLink} ${isVisible ? styles.navLinkVisible : ''}`} href="/celestia_hall_resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        <a
          className={`${styles.navLink} ${isVisible ? styles.navLinkVisible : ''}`}
          href="#contact"
          onClick={e => {
            e.preventDefault();
            onContactClick?.();
          }}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
