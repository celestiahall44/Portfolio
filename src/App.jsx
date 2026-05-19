import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ProjectsGrid from './components/ProjectsGrid';
import Footer from './components/Footer';

import styles from './styles/App.module.css';
import heroStyles from './styles/Hero.module.css';

export default function App() {
  return (
    <div className={styles.container} style={{ position: 'relative', overflow: 'hidden' }}>
      <Header />
      <Hero />
      <About>
        <div className={heroStyles.bubbles}>
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={heroStyles.bubble}
              style={{
                left: `${8 + i * 7}%`,
                animationDelay: `${i * 1.2}s`,
                animationDuration: `${12 + (i % 4) * 4}s`,
                width: `${12 + (i % 3) * 8}px`,
                height: `${12 + (i % 3) * 8}px`,
              }}
            >
              <span className={heroStyles.sparkle} />
            </div>
          ))}
        </div>
      </About>
      <ProjectsGrid />
      <Footer />
    </div>
  );
}
