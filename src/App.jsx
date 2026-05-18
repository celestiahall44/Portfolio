

import styles from './styles/App.module.css';
import heroStyles from './styles/Hero.module.css';

export default function App() {
  // Track pop count for each bubble
  const bubbleCount = 12;
  const [popCounts, setPopCounts] = useState(Array(bubbleCount).fill(0));
  const bubbleRefs = useRef([]);

  // Handler to increment pop count when animation ends
  const handleBubblePop = (i) => {
    setPopCounts((prev) => {
      const next = [...prev];
      next[i] = (next[i] + 1) % 9999;
      return next;
    });
  };

  // Attach animationend event to each bubble
  useEffect(() => {
    bubbleRefs.current.forEach((el, i) => {
      if (!el) return;
      const handler = () => handleBubblePop(i);
      el.addEventListener('animationiteration', handler);
      return () => el.removeEventListener('animationiteration', handler);
    });
  }, [bubbleRefs.current]);

  return (
    <div className={styles.container} style={{ position: 'relative', overflow: 'hidden' }}>
      <Header />
      <Hero />
      <About>
        <div className={heroStyles.bubbles}>
          {[...Array(bubbleCount)].map((_, i) => {
            // Drama level cycles on every pop for each bubble
            const dramaLevel = popCounts[i] % 3;
            const delay = i * 1.2 + 0.95 * (12 + (i % 4) * 4);
            return (
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
                ref={el => bubbleRefs.current[i] = el}

              import React, { useState, useRef, useEffect } from 'react';
              import styles from './styles/App.module.css';
              import heroStyles from './styles/Hero.module.css';
                    <span className={heroStyles.fireworkCore} style={{ animationDelay: `${delay}s` }} />
                    <span className={heroStyles.fireworkShockwave} style={{ animationDelay: `${delay}s` }} />
                  </>
                ) : dramaLevel === 1 ? (
                  <>
                    <span className={heroStyles.fireworkCoreMedium} style={{ animationDelay: `${delay}s` }} />
                    <span className={heroStyles.fireworkShockwaveMedium} style={{ animationDelay: `${delay}s` }} />
                  </>
                ) : (
                  <span className={heroStyles.fireworkCoreSubtle} style={{ animationDelay: `${delay}s` }} />
                )}
                {/* ...existing code... */}
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
            );
          })}
        </div>
      </About>
      <ProjectsGrid />
      <Footer />
    </div>
  );
}
