import { useRef, useEffect } from "react";

export default function PolygonHero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width, height;

    let particles = [];
    let groups = [];

    const mouse = {
      x: 0,
      y: 0,
      tx: 0,
      ty: 0,
    };

    const MAX_DISTANCE = 160;

    function resize() {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;

      particles = [];

      groups = [
        { x: width * 0.4, y: height * 0.42, fx: 0, fy: 0, color: "#4f5d75" },
        { x: width * 0.7, y: height * 0.58, fx: 0, fy: 0, color: "#FF2FAF" },
      ];

      groups.forEach((group) => {
        for (let i = 0; i < 24; i++) {
          particles.push({
            x: group.x + (Math.random() - 0.5) * 300,
            y: group.y + (Math.random() - 0.5) * 300,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            group,
          });
        }
      });
    }

    resize();

    window.addEventListener("resize", resize);

    window.addEventListener("mousemove", (e) => {
      mouse.tx = e.clientX;
      mouse.ty = e.clientY;
    });

    function animate() {
      requestAnimationFrame(animate);

      mouse.x += (mouse.tx - mouse.x) * 0.08;
      mouse.y += (mouse.ty - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      const time = Date.now() * 0.001;

      const offsetX = (mouse.x - width / 2) * 0.03;
      const offsetY = (mouse.y - height / 2) * 0.03;

      groups[0].fx = Math.sin(time) * 10;
      groups[0].fy = Math.cos(time) * 8;

      groups[1].fx = Math.cos(time * 0.8) * 12;
      groups[1].fy = Math.sin(time * 1.2) * 8;

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (Math.abs(p.x - p.group.x) > 170) p.vx *= -1;
        if (Math.abs(p.y - p.group.y) > 170) p.vy *= -1;
      });

      // Draw Lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];

          if (a.group !== b.group) continue;

          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAX_DISTANCE) {
            const alpha = 1 - dist / MAX_DISTANCE;

            ctx.beginPath();

            ctx.moveTo(a.x + offsetX + a.group.fx, a.y + offsetY + a.group.fy);

            ctx.lineTo(b.x + offsetX + b.group.fx, b.y + offsetY + b.group.fy);

            ctx.strokeStyle = a.group.color.replace(")", "");

            ctx.strokeStyle =
              a.group.color === "#4f5d75"
                ? `rgba(79,93,117,${alpha})`
                : `rgba(255,47,175,${alpha})`;

            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      // Draw Points
      particles.forEach((p) => {
        ctx.beginPath();

        ctx.arc(
          p.x + offsetX + p.group.fx,
          p.y + offsetY + p.group.fy,
          2,
          0,
          Math.PI * 2,
        );

        ctx.fillStyle = p.group.color;
        ctx.fill();
      });
    }

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}
