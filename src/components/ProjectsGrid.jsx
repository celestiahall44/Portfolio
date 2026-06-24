import { useEffect, useRef, useState } from 'react';

import styles from '../styles/ProjectsGrid.module.css';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import { ultraverseProject } from '../data/ultraverseProject';
import { summaristProject } from '../data/summaristProject';
import { netflixCloneProject } from '../data/netflixCloneProject';
import { flixReactProject } from '../data/flixReactProject';

const projects = [
  netflixCloneProject,
  summaristProject,
  ultraverseProject,
  flixReactProject,
  { ...flixReactProject, title: 'Skintristic' },
];

const projectImageStyle = {
  objectFit: 'contain',
  objectPosition: 'center center',
  borderRadius: 12,
  background: '#0f1722',
};

const getRequiredVisibilityRatio = () => {
  if (window.innerWidth <= 560) return 0.22;
  if (window.innerWidth <= 900) return 0.4;
  return 0.75;
};

export default function ProjectsGrid() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [pendingReplay, setPendingReplay] = useState(false);

  useEffect(() => {
    const triggerAnimationReplay = () => {
      const el = sectionRef.current;
      if (!el) return;
      const requiredRatio = getRequiredVisibilityRatio();

      const rect = el.getBoundingClientRect();
      const visiblePixels = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
      const visibleRatio = rect.height > 0 ? Math.max(0, visiblePixels) / rect.height : 0;

      setHasAnimated(false);

      if (visibleRatio >= requiredRatio) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setHasAnimated(true));
        });
        setPendingReplay(false);
      } else {
        setPendingReplay(true);
      }
    };

    window.addEventListener('projects-link-click', triggerAnimationReplay);

    return () => {
      window.removeEventListener('projects-link-click', triggerAnimationReplay);
    };
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;
    const requiredRatio = getRequiredVisibilityRatio();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= requiredRatio && (!hasAnimated || pendingReplay)) {
          setHasAnimated(true);
          setPendingReplay(false);
        }
      },
      {
        threshold: requiredRatio,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [hasAnimated, pendingReplay]);

  return (
    <section className={styles.projects} id="projects" ref={sectionRef}>
      <h2 className={styles.sectionTitle}>Projects</h2>
      <div className={styles.grid}>
        {projects.map((project, idx) => {
          const isLeftFlip = idx % 2 === 0;
          const delay = idx * 260;

          return (
            <div
              key={idx}
              className={`${styles.card} ${hasAnimated ? (isLeftFlip ? styles.cardWaveLeftVisible : styles.cardWaveRightVisible) : ''}`}
              style={{ '--flip-delay': `${delay}ms` }}
            >
              <div className={styles.imageWrap}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.image}
                  style={projectImageStyle}
                />
                <div className={styles.imageOverlay} />
              </div>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDesc}>{project.description}</p>
              <div className={styles.techList}>
                {project.tech.map((t) => (
                  <span key={t} className={styles.tech}>{t}</span>
                ))}
              </div>
              <a href={project.link} className={styles.link} target="_blank" rel="noopener noreferrer">
                <span className={styles.linkText}>View Project</span>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
