import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  const footerRef = useRef(null);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    const node = footerRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimateIn(entry.isIntersecting && entry.intersectionRatio >= 0.35);
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <footer className={styles.footer} id="contact" ref={footerRef}>
      <div className={styles.socials}>
        <a href="https://github.com/celestiahall44" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={`${styles.icon} ${animateIn ? styles.iconAnimate : ''}`}>
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.12 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.08.79 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/celestia-hall-234795195/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`${styles.icon} ${animateIn ? styles.iconAnimate : ''}`}>
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z"/></svg>
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume" className={`${styles.icon} ${animateIn ? styles.iconAnimate : ''}`}>
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm7 1.5V9h5.5L13 3.5zM6 20V4h6v5a2 2 0 0 0 2 2h5v9a2 2 0 0 1-2 2H6zm2-7h8v2H8v-2zm0 4h8v2H8v-2z"/></svg>
        </a>
      </div>
      <p className={`${styles.copy} ${animateIn ? styles.copyAnimate : ''}`}>&copy; 2026 Celestia. All rights reserved.</p>
    </footer>
  );
}
