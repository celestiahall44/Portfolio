import { useEffect, useRef, useState } from 'react';
import styles from '../styles/About.module.css';


export default function About({ children }) {
  const sectionRef = useRef(null);
  const [fullyVisible, setFullyVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const isFullyInView = rect.top >= 0 && rect.bottom <= window.innerHeight;
      setFullyVisible(isFullyInView);
      if (isFullyInView && !hasAnimated) {
        setHasAnimated(true);
      }
    };

    checkVisibility();
    window.addEventListener('scroll', checkVisibility, { passive: true });
    window.addEventListener('resize', checkVisibility);

    return () => {
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
    };
  }, [hasAnimated]);

  return (
    <section className={styles.about} id="about" ref={sectionRef}>
      {children}
      <div className={styles.aboutContent}>
        <div className={`${styles.aboutText} ${hasAnimated ? styles.aboutTextVisible : ''}`}>
          <h2>About Me</h2>
          <p>Hello! I'm Celestia, a passionate developer focused on building creative and impactful web experiences. While I'm a beginner, I'm eager to grow, learn, and take on new challenges. I love working with modern web technologies and continuously learning new things.</p>
        </div>
        <div className={`${styles.skillsSection} ${hasAnimated ? styles.skillsSectionVisible : ''}`}>
          <h3>Skills</h3>
          <ul className={styles.skills}>
            <li>React</li>
            <li>Next.js</li>
            <li>Firebase</li>
            <li>Vercel</li>
            <li>Tailwind CSS</li>
            <li>Styled Components</li>
            <li>Node.js</li>
            <li>TMDB API</li>
            <li>NLP</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML &amp; CSS</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
