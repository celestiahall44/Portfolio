import { useEffect, useRef } from 'react';
import styles from '../styles/Header.module.css';

export default function CanvasGalaxy() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let lastTime = performance.now();
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = canvas.offsetHeight;

    // Generate random stars with twinkling
    const stars = Array.from({ length: 120 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5 + 0.5,
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
      twinklePhase: Math.random() * Math.PI * 2,
      twinkleSpeed: Math.random() * 0.03 + 0.01
    }));


    // Random shooting star state
    const shootingStar = {
      active: false,
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      life: 0,
      maxLife: 0
    };

    function draw() {
      const now = performance.now();
      const delta = Math.min((now - lastTime) / 16.67, 1.2);
      lastTime = now;

      ctx.clearRect(0, 0, width, height);
      // Draw stars with twinkling
      ctx.save();
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        ctx.fillStyle = '#fff';
        // Twinkling effect: opacity varies between 0.3 and 1
        ctx.globalAlpha = 0.3 + Math.sin(star.twinklePhase) * 0.35;
        ctx.fill();
        // Update twinkling phase
        star.twinklePhase += star.twinkleSpeed;
        // Animate position
        star.x += star.dx;
        star.y += star.dy;
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;
      });
      ctx.restore();

      // Randomly spawn a shooting star (increased frequency)
      if (!shootingStar.active && Math.random() < 0.02) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 2 + Math.random() * 1.5;
        shootingStar.active = true;
        shootingStar.x = Math.random() * width;
        shootingStar.y = Math.random() * height;
        shootingStar.vx = Math.cos(angle) * speed;
        shootingStar.vy = Math.sin(angle) * speed;
        shootingStar.life = 0;
        shootingStar.maxLife = 55 + Math.floor(Math.random() * 25);
      }

      if (shootingStar.active) {
        const tailX = shootingStar.x - shootingStar.vx * 4;
        const tailY = shootingStar.y - shootingStar.vy * 4;

        ctx.save();
        const trail = ctx.createLinearGradient(
          shootingStar.x,
          shootingStar.y,
          tailX,
          tailY
        );
        trail.addColorStop(0, 'rgba(255,255,255,0.95)');
        trail.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.strokeStyle = trail;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        ctx.fillStyle = 'rgba(255,255,255,0.95)';
        ctx.beginPath();
        ctx.arc(shootingStar.x, shootingStar.y, 1.8, 0, 2 * Math.PI);
        ctx.fill();
        ctx.restore();

        shootingStar.x += shootingStar.vx;
        shootingStar.y += shootingStar.vy;
        shootingStar.life += 1;

        if (
          shootingStar.life > shootingStar.maxLife ||
          shootingStar.x < -20 ||
          shootingStar.x > width + 20 ||
          shootingStar.y < -20 ||
          shootingStar.y > height + 20
        ) {
          shootingStar.active = false;
        }
      }

      animationId = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <canvas ref={canvasRef} className={styles.galaxyCanvas} style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',zIndex:0,pointerEvents:'none'}} aria-hidden="true" />
  );
}
