import styles from '../styles/Hero.module.css';
import profileImage from '../assets/profile-photo.jpg';

export default function Hero({ onContactClick }) {
  return (
    <section className={styles.hero}>
      <div className={styles['hero-gradient-border']} />
      <img src={profileImage} alt="Celestia" className={styles.photo} />
      <p className={styles.tagline}>Building creative web experiences.</p>
      <a
        href="#contact"
        className={styles.contactBtn}
        onClick={e => {
          e.preventDefault();
          onContactClick?.();
        }}
      >
        Contact Me
      </a>
      <div className={styles['hero-gradient-border-bottom']} />
    </section>
  );
}
