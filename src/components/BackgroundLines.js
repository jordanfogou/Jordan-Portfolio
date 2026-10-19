import { useEffect, useRef } from 'react';

// Fond animé : faisceau de lignes ondulées qui se déforment lentement.
// Dessiné sur un seul <canvas> fixe derrière le contenu.
// Une seule image figée si l'utilisateur réduit les animations ; pause quand l'onglet est caché.
const LINES = 34;
const COLOR = '134, 184, 177'; // = --accent (#86b8b1)

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

    const draw = (t) => {
      ctx.clearRect(0, 0, width, height);
      const step = Math.max(8, width / 160);
      for (let i = 0; i < LINES; i += 1) {
        const k = i / (LINES - 1); // 0 → 1 d'une ligne à l'autre
        const alpha = 0.05 + 0.2 * Math.sin(Math.PI * k);
        ctx.strokeStyle = `rgba(${COLOR}, ${alpha.toFixed(3)})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        for (let x = -step; x <= width + step; x += step) {
          const u = x / width;
          // Le faisceau traverse l'écran en diagonale et ondule dans le temps
          const base = height * (0.15 + 0.7 * u) + (k - 0.5) * height * 0.55;
          const wave =
            Math.sin(u * 5.5 + t * 0.00022 + k * 2.2) * height * 0.09 +
            Math.sin(u * 2.3 - t * 0.00015 + k * 4.1) * height * 0.06;
          const y = base + wave;
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
      if (t - last < 33) return; // ~30 images/s suffisent pour un mouvement lent
      last = t;
      draw(t);
    };

    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(frame);
      else if (!reduce) frame = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener('resize', resize);
    if (reduce) {
      draw(0);
    } else {
      frame = requestAnimationFrame(loop);
      document.addEventListener('visibilitychange', onVisibility);
    }

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="bg-lines" aria-hidden="true" />;
}
