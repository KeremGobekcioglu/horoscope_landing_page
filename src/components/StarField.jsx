import { useEffect, useRef } from "react";
import "./StarField.css";

const BACKGROUND_DENSITY = 1 / 9000; // faint static stars, scaled to page area
const ACTIVE_DENSITY = 1 / 26000; // bigger stars that drift, collide, and flash

function StarField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let background = [];
    let active = [];
    let raf;

    function resize() {
      width = window.innerWidth;
      height = document.documentElement.scrollHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const area = width * height;
      const bgCount = Math.round(area * BACKGROUND_DENSITY);
      const activeCount = reduceMotion ? 0 : Math.min(70, Math.round(area * ACTIVE_DENSITY));

      background = Array.from({ length: bgCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1 + 0.3,
        baseAlpha: Math.random() * 0.45 + 0.15,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.5 + 0.15,
      }));

      active = Array.from({ length: activeCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.4 + 1.4,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        baseAlpha: Math.random() * 0.35 + 0.5,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.4 + 0.2,
        flash: 0,
      }));
    }

    function resolveCollisions() {
      for (let i = 0; i < active.length; i++) {
        for (let j = i + 1; j < active.length; j++) {
          const a = active[i];
          const b = active[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.hypot(dx, dy) || 0.0001;
          const minDist = a.r + b.r + 6;
          if (dist < minDist) {
            const nx = dx / dist;
            const ny = dy / dist;
            const rvx = a.vx - b.vx;
            const rvy = a.vy - b.vy;
            const rel = rvx * nx + rvy * ny;
            if (rel > 0) {
              a.vx -= rel * nx;
              a.vy -= rel * ny;
              b.vx += rel * nx;
              b.vy += rel * ny;
              a.flash = 1;
              b.flash = 1;
            }
            const overlap = (minDist - dist) / 2;
            a.x -= nx * overlap;
            a.y -= ny * overlap;
            b.x += nx * overlap;
            b.y += ny * overlap;
          }
        }
      }
    }

    function draw(time) {
      ctx.clearRect(0, 0, width, height);

      for (const star of background) {
        const twinkle = reduceMotion ? 0 : Math.sin(time * 0.001 * star.speed + star.phase) * 0.3;
        const alpha = Math.max(0, Math.min(1, star.baseAlpha + twinkle));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232, 232, 240, ${alpha})`;
        ctx.fill();
      }

      if (!reduceMotion) {
        for (const star of active) {
          star.x += star.vx;
          star.y += star.vy;
          if (star.x < 0 || star.x > width) star.vx *= -1;
          if (star.y < 0 || star.y > height) star.vy *= -1;
          star.x = Math.max(0, Math.min(width, star.x));
          star.y = Math.max(0, Math.min(height, star.y));
          star.flash *= 0.94;
        }
        resolveCollisions();
      }

      for (const star of active) {
        const twinkle = reduceMotion ? 0 : Math.sin(time * 0.001 * star.speed + star.phase) * 0.3;
        const alpha = Math.max(0, Math.min(1, star.baseAlpha + twinkle + star.flash * 0.5));
        const radius = star.r + star.flash * 2.2;

        if (star.flash > 0.05) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, radius * 4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(201, 168, 76, ${star.flash * 0.12})`;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232, 232, 240, ${alpha})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="yz-starfield" aria-hidden="true" />;
}

export default StarField;
