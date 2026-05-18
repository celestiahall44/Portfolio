
import styles from '../styles/ProjectsGrid.module.css';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';

const projects = [
  {
    title: 'Project One',
    description: 'Description for project one.',
    image: project1,
    link: 'https://example.com/project1'
  },
  {
    title: 'Project Two',
    description: 'Description for project two.',
    image: project2,
    link: 'https://example.com/project2'
  },
  {
    title: 'Project Three',
    description: 'Description for project three.',
    image: project3,
    link: 'https://example.com/project3'
  },
];

export default function ProjectsGrid() {
  return (
    <section className={styles.projects} id="projects">
      <h2>Projects</h2>
      <div className={styles.grid}>
        {projects.map((project, idx) => (
          <div key={idx} className={styles.card}>
            <img src={project.image} alt={project.title} className={styles.image} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className={styles.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}
