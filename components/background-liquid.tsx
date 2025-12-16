'use client';
import { useEffect, useRef } from 'react';

const BackgroundLiquid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = 550); // match your banner

    // Waves configuration
    const waves = [
      {
        amplitude: 20,
        wavelength: 200,
        speed: 0.02,
        phase: 0,
        yOffset: 300,
        color: 'rgba(211, 166, 65, 0.3)',
      },
      {
        amplitude: 15,
        wavelength: 150,
        speed: 0.015,
        phase: 0,
        yOffset: 320,
        color: 'rgba(211, 166, 65, 0.4)',
      },
      {
        amplitude: 10,
        wavelength: 100,
        speed: 0.01,
        phase: 0,
        yOffset: 340,
        color: 'rgba(211, 166, 65, 0.5)',
      },
    ];

    let animationFrameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.moveTo(0, height);

        for (let x = 0; x <= width; x++) {
          const y =
            wave.yOffset +
            Math.sin((x / wave.wavelength) * Math.PI * 2 + wave.phase) *
              wave.amplitude;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fillStyle = wave.color;
        ctx.fill();

        wave.phase += wave.speed;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = 550;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />
  );
};

export default BackgroundLiquid;
