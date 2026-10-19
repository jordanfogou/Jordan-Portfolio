import { useEffect, useRef } from 'react';

// Fond animé : faisceau de lignes ondulées dans la couleur principale du site.
// Les lignes s'écartent doucement autour du curseur.
// Une seule image figée si l'utilisateur réduit les animations ; pause quand l'onglet est caché.
const LINES = 38;
const COLOR = [46, 196, 176]; // = --accent (#2ec4b0)

export default function BackgroundLines() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0;
    let height = 0;
    let frame = 0;
    let last = 0;
    // Position du curseur (lissée) ; hors écran au départ
    const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999 };

    const draw = (t) => {
      ctx.clearRect(0, 0, width, height);
      mouse.x += (mouse.tx - mouse.x) * 0.08;
      mouse.y += (mouse.ty - mouse.y) * 0.08;
      const step = Math.max(8, width / 170);
      const radius = Math.min(width, height) * 0.22;

      for (let i = 0; i < LINES; i += 1) {
        const k = i / (LINES - 1); // 0 → 1 d'une ligne à l'autre
        const alpha = 0.07 + 0.3 * Math.sin(Math.PI * k);
        ctx.strokeStyle = `rgba(${COLOR.join(',')}, ${alpha.toFixed(3)})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        for (let x = -step; x <= width + step; x += step) {
          const u = x / width;
          // Le faisceau traverse l'écran en diagonale et ondule dans le temps
          const base = height * (0.15 + 0.7 * u) + (k - 0.5) * height * 0.6;
          const wave =
            Math.sin(u * 5.5 + t * 0.0004 + k * 2.2) * height * 0.09 +
            Math.sin(u * 2.3 - t * 0.00028 + k * 4.1) * height * 0.06;
          let y = base + wave;
          // Écartement autour du curseur
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < radius) {
            const push = (1 - dist / radius) ** 2 * 60;
            y += dy >= 0 ? push : -push;
          }
          if (x === -step) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduce) draw(0);
    };

    const loop = (t) => {
      frame = requestAnimationFrame(loop);
      if (t - last < 25) return; // ~40 images/s
      last = t;
      draw(t);
    };

    const onMove = (e) => {
      mouse.tx = e.clientX;
      mouse.ty = e.clientY;
    };
    const onLeave = () => {
      mouse.tx = -9999;
      mouse.ty = -9999;
    };
    const onVisibility = () => {
      cancelAnimationFrame(frame);
      if (!document.hidden) frame = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener('resize', resize);
    if (reduce) {
      draw(0);
    } else {
      frame = requestAnimationFrame(loop);
      window.addEventListener('pointermove', onMove, { passive: true });
      document.addEventListener('pointerleave', onLeave);
      document.addEventListener('visibilitychange', onVisibility);
    }

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="bg-lines" aria-hidden="true" />;
}
