


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
];

export default function ProjectsGrid() {
  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.sectionTitle}>Projects</h2>
      <div className={styles.grid}>
        {projects.map((project, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.imageWrap}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.image}
                style={
                  project.title === 'Netflix Clone'
                    ? { objectFit: 'cover', borderRadius: 12 }
                    : project.title === 'Summarist Advanced Internship'
                      ? { objectFit: 'contain', borderRadius: 12, background: '#fff' }
                      : {}
                }
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
              <span className={styles.shootingStar} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
