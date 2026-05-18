import styles from '../styles/About.module.css';


export default function About({ children }) {
  return (
    <section className={styles.about} id="about">
      {children}
      <div className={styles.info}>
        <h2>About Me</h2>
        <p>Hello! I'm Celestia, a passionate developer focused on building creative and impactful web experiences. I love working with modern web technologies and continuously learning new things.</p>
        <h3>Skills</h3>
        <ul className={styles.skills}>
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>HTML & CSS</li>
          <li>Node.js</li>
          <li>Git & GitHub</li>
        </ul>
      </div>
    </section>
  );
}
