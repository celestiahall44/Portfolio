import styles from '../styles/About.module.css';


export default function About({ children }) {
  return (
    <section className={styles.about} id="about">
      {children}
      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <h2>About Me</h2>
          <p>Hello! I'm Celestia, a passionate developer focused on building creative and impactful web experiences. While I'm a beginner, I'm eager to grow, learn, and take on new challenges. I love working with modern web technologies and continuously learning new things.</p>
        </div>
        <div className={styles.skillsSection}>
          <h3>Skills</h3>
          <ul className={styles.skills}>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>HTML & CSS</li>
            <li>Node.js</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
