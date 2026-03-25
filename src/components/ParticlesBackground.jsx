import React, { useRef, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const ParticlesBackground = () => {
  const canvasRef = useRef(null);
  const { theme } = useTheme(); // 👈 important

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particlesArray = [];
    const numberOfParticles = 80;

    // 🎨 THEME-BASED COLORS (premium tuned)
    const isDark = theme === "dark";

    const PARTICLE_COLOR = isDark
      ? "rgba(99, 241, 106, 0.7)"   // soft indigo (dark)
      : "rgba(17, 249, 237, 0.89)"; // very subtle (light)

    const LINE_COLOR = isDark
      ? "rgba(184, 148, 148, 0.2)"
      : "rgba(0, 0, 0, 0.1)";

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener("resize", resize);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.size = Math.random() * 1.2 + 2.5;

        this.speedX = Math.random() * 0.5 - 1.25;
        this.speedY = Math.random() * 0.5 - 1.25;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = PARTICLE_COLOR;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function init() {
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    function connect() {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = dx * dx + dy * dy;

          if (distance < 9000) {
            ctx.strokeStyle = LINE_COLOR;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesArray.forEach((p) => {
        p.update();
        p.draw();
      });

      connect();
      requestAnimationFrame(animate);
    }

    init();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [theme]); // 👈 re-run on theme change

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default ParticlesBackground;