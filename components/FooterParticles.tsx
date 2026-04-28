import React, { useEffect, useRef } from 'react';

type P = {
  x: number; y: number;
  hx: number; hy: number;
  vx: number; vy: number;
  r: number;
  blink: number;
  blinkSpeed: number;
  anchored: boolean;
};

const FooterParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const mouse = { x: -9999, y: -9999 };
    let particles: P[] = [];
    let raf = 0;
    let mounted = true;

    const W = () => canvas.offsetWidth;
    const H = () => canvas.offsetHeight;

    const init = () => {
      const count = window.innerWidth < 768 ? 40 : window.innerWidth < 1280 ? 80 : 120;
      particles = Array.from({ length: count }, () => {
        const big = Math.random() < 0.12;
        const x = Math.random() * W();
        const y = Math.random() * H();
        return {
          x, y,
          hx: x, hy: y,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          r: big ? 1.2 + Math.random() * 1.0 : 0.4 + Math.random() * 0.7,
          blink: Math.random() * Math.PI * 2,
          blinkSpeed: 0.6 + Math.random() * 2.0,
          anchored: Math.random() < 0.4,
        };
      });
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = W() * dpr;
      canvas.height = H() * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      init();
    };

    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onMouseLeave = () => { mouse.x = -9999; mouse.y = -9999; };
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    const render = (now: number) => {
      if (!mounted) return;
      const t = now * 0.001;
      ctx.clearRect(0, 0, W(), H());

      for (const p of particles) {
        // Mouse repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 130 * 130 && d2 > 0) {
          const d = Math.sqrt(d2);
          const f = (130 - d) / 130;
          p.vx += (dx / d) * f * 0.85;
          p.vy += (dy / d) * f * 0.85;
        }

        // Anchored spring
        if (p.anchored) {
          p.vx += (p.hx - p.x) * 0.003;
          p.vy += (p.hy - p.y) * 0.003;
        }

        p.vx *= 0.95;
        p.vy *= 0.95;
        p.x += p.vx;
        p.y += p.vy;

        // Wraparound for free particles
        if (!p.anchored) {
          if (p.x < 0) p.x = W();
          if (p.x > W()) p.x = 0;
          if (p.y < 0) p.y = H();
          if (p.y > H()) p.y = 0;
        }
      }

      // Connection lines
      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 120 * 120) {
            const alpha = (1 - Math.sqrt(d2) / 120) * 0.22;
            ctx.strokeStyle = `rgba(255,199,44,${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Dots
      for (const p of particles) {
        const alpha = 0.15 + 0.45 * (0.5 + 0.5 * Math.sin(t * p.blinkSpeed + p.blink));
        ctx.fillStyle = `rgba(255,199,44,${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);

    return () => {
      mounted = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div className="absolute bottom-0 left-0 right-0 h-96 pointer-events-none">
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, #0A2A66 0%, transparent 30%)' }}
      />
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ pointerEvents: 'auto' }}
      />
    </div>
  );
};

export default FooterParticles;
