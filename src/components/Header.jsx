import CanvasGalaxy from './CanvasGalaxy';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <CanvasGalaxy />
      <h1>
        Hi, I'm <span className={styles.name}>Celestia</span>
      </h1>
      <nav>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
