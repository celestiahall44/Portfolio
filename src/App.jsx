import React, { useRef, useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ProjectsGrid from './components/ProjectsGrid';
import Footer from './components/Footer';

import styles from './styles/App.module.css';
import heroStyles from './styles/Hero.module.css';

export default function App() {
  // Firework pop colors for dramatic effect
  const popColors = [
    '#ff5e62', // red-pink
    '#43e97b', // green
    '#a259ff', // purple
    '#00eaff', // blue
    '#ffb347', // orange
    '#38f9d7', // teal
  ];
  // Track which bubbles are popping
  const [popping, setPopping] = useState(Array(12).fill(false));
  const intervals = useRef([]);

  useEffect(() => {
    // Clear any previous intervals
    intervals.current.forEach(clearInterval);
    // Set up intervals for each bubble
    intervals.current = [...Array(12)].map((_, i) => {
      const duration = 12 + (i % 4) * 4;
      const popDelay = duration - 1.1;
      // Start interval after initial delay
      const startDelay = (i * 1.2 + popDelay) * 1000;
      let first = true;
      let timeoutId;
      const triggerPop = () => {
        setPopping(prev => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
        setTimeout(() => {
          setPopping(prev => {
            const next = [...prev];
            next[i] = false;
            return next;
          });
        }, 1100); // 1.1s firework duration
      };
      // Initial pop after startDelay
      timeoutId = setTimeout(() => {
        triggerPop();
        // Then repeat every duration seconds
        intervals.current[i] = setInterval(triggerPop, duration * 1000);
      }, startDelay);
      return timeoutId;
    });
    // Cleanup
    return () => {
      intervals.current.forEach(clearInterval);
    };
  }, []);

  return (
    <div className={styles.container} style={{ position: 'relative', overflow: 'hidden' }}>
      <Header />
      <Hero />
      <About>
        <div className={heroStyles.bubbles}>
          {[...Array(12)].map((_, i) => {
            const duration = 12 + (i % 4) * 4;
            const color = popColors[i % popColors.length];
            return (
              <div
                key={i}
                className={heroStyles.bubble}
                style={{
                  left: `${8 + i * 7}%`,
                  animationDelay: `${i * 1.2}s`,
                  animationDuration: `${duration}s`,
                  width: `${12 + (i % 3) * 8}px`,
                  height: `${12 + (i % 3) * 8}px`,
                }}
              >
                <span className={heroStyles.sparkle} />
                {/* Only render firework pop at the top */}
                {popping[i] && (
                  <>
                    <span
                      className={heroStyles.fireworkCore}
                      style={{
                        '--fw-color': color,
                        '--fw-size': `${24 + (i % 3) * 8}px`,
                        '--fw-duration': '1.1s',
                      }}
                    />
                    <span
                      className={heroStyles.fireworkShockwave}
                      style={{
                        '--fw-color': color,
                        '--fw-size': `${32 + (i % 3) * 8}px`,
                        '--fw-duration': '1.1s',
                      }}
                    />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </About>
      <ProjectsGrid />
      <Footer />
    </div>
  );
}
