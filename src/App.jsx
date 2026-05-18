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
              {/* Central flash for firework core */}
              {/* Assign drama level: 0 = dramatic, 1 = medium, 2 = subtle */}
              {/* All bubbles get dramatic pop */}
              <span className={heroStyles.fireworkCore} style={{
                animationDelay: `${i * 1.2 + 0.95 * (12 + (i % 4) * 4)}s`,
              }} />
              {/* Shockwave at top only: translateY(-58vh) matches bubble pop height */}
              <span className={heroStyles.fireworkShockwave} style={{
                animationDelay: `${i * 1.2 + 0.95 * (12 + (i % 4) * 4)}s`,
                transform: 'translate(-50%, -50%) translateY(-58vh) scale(0.5)',
              }} />
              <span className={heroStyles.fireworkAfterglow} style={{
                animationDelay: `${i * 1.2 + 0.95 * (12 + (i % 4) * 4) + 0.7}s`,
              }} />
              {/* Main firework ring */}
              {[...Array(22)].map((_, j) => {
                // More vibrant, random color for each particle
                const colorPalette = [
                  '#fff', '#ffea00', '#ff2d2d', '#00eaff', '#ff00e0', '#00ff6a', '#ff7b00', '#00ffea', '#ffb300', '#00bfff', '#ff5cf4', '#00ffb3', '#fff', '#fff',
                ];
                const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
                const size = 10 + Math.random() * 10;
                const trail = 60 + Math.random() * 80;
                const duration = 1.1 + Math.random() * 0.7;
                const particleDelay = i * 1.2 + 0.95 * (12 + (i % 4) * 4) + j * 0.015;
                return (
                  <span
                    key={j}
                    className={heroStyles.fireworkParticle}
                    style={{
                      '--fw-angle': `${j * (360 / 22)}deg`,
                      '--fw-color': color,
                      '--fw-size': `${size}px`,
                      '--fw-trail': `${trail}px`,
                      '--fw-duration': `${duration}s`,
                      animationDelay: `${particleDelay}s`,
                      animationDuration: `${duration}s`,
                    }}
                  />
                );
              })}
              {/* Secondary ring for realism */}
              {[...Array(10)].map((_, j) => {
                const colorPalette = [
                  '#fff', '#ffea00', '#ff2d2d', '#00eaff', '#ff00e0', '#00ff6a', '#ff7b00', '#00ffea', '#ffb300', '#00bfff', '#ff5cf4', '#00ffb3', '#fff', '#fff',
                ];
                const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
                const size = 8 + Math.random() * 8;
                const trail = 30 + Math.random() * 40;
                const duration = 0.9 + Math.random() * 0.5;
                const particleDelay = i * 1.2 + 0.95 * (12 + (i % 4) * 4) + 0.1 + j * 0.02;
                return (
                  <span
                    key={`s${j}`}
                    className={heroStyles.fireworkParticle}
                    style={{
                      '--fw-angle': `${j * (360 / 10) + 18}deg`,
                      '--fw-color': color,
                      '--fw-size': `${size}px`,
                      '--fw-trail': `${trail}px`,
                      '--fw-duration': `${duration}s`,
                      animationDelay: `${particleDelay}s`,
                      animationDuration: `${duration}s`,
                    }}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </About>
      <ProjectsGrid />
      <Footer />
    </div>
  );
}
