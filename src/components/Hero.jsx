import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles['hero-gradient-border']} />
      <img src="/src/assets/Profile.JPG" alt="Celestia" className={styles.photo} />
      <p className={styles.tagline}>Building creative web experiences.</p>
      <a href="#contact" className={styles.contactBtn}>Contact Me</a>
      <div className={styles['hero-gradient-border-bottom']} />
    </section>
  );
}
