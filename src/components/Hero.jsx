import React, { useState } from 'react';
import styles from '../styles/Hero.module.css';
import ContactModal from './ContactModal';

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section className={styles.hero}>
      <div className={styles['hero-gradient-border']} />
      <img src="/src/assets/Profile.JPG" alt="Celestia" className={styles.photo} />
      <p className={styles.tagline}>Building creative web experiences.</p>
      <a
        href="#contact"
        className={styles.contactBtn}
        onClick={e => {
          e.preventDefault();
          setModalOpen(true);
        }}
      >
        Contact Me
      </a>
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <div className={styles['hero-gradient-border-bottom']} />
    </section>
  );
}
