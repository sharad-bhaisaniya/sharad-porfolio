import React, { useEffect, useRef } from 'react';
import { hexToRgb } from '../utils/hexToRgb';

const BackgroundAnimation = ({ type, color }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || type === 'none') return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        let w = canvas.width = window.innerWidth;
        let h = canvas.height = window.innerHeight;

        const rgbColor = hexToRgb(color);

        const handleResize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            initParticles();
        };

        window.addEventListener('resize', handleResize);

        const initParticles = () => {
            particles = [];

            // SPIDERWEB
            if (type === 'spiderweb') {
                for (let i = 0; i < 100; i++) {
                    particles.push({
                        x: Math.random() * w,
                        y: Math.random() * h,
                        vx: (Math.random() - 0.5) * 1,
                        vy: (Math.random() - 0.5) * 1,
                        size: Math.random() * 2 + 1
                    });
                }
            }

            // RAIN
            if (type === 'rain') {
                for (let i = 0; i < 200; i++) {
                    particles.push({
                        x: Math.random() * w,
                        y: Math.random() * h,
                        length: Math.random() * 20 + 10,
                        speed: Math.random() * 8 + 6
                    });
                }
            }

            // LEAVES INIT
            if (type === 'leaves') {
                for (let i = 0; i < 60; i++) {
                    particles.push({
                        x: Math.random() * w * 0.3,   // start mostly from left side
                        y: Math.random() * -h,        // start above screen
                        size: Math.random() * 4 + 2,  // small leaves only
                        speedX: Math.random() * 1 + 0.5,
                        speedY: Math.random() * 1.5 + 1,
                        angle: Math.random() * 360,
                        spin: (Math.random() - 0.5) * 3
                    });
                }
            }

            // ORBS
            if (type === 'orbs') {
                for (let i = 0; i < 20; i++) {
                    particles.push({
                        x: Math.random() * w,
                        y: Math.random() * h,
                        size: Math.random() * 100 + 50,
                        vx: (Math.random() - 0.5) * 0.5,
                        vy: (Math.random() - 0.5) * 0.5
                    });
                }
            }

            // LINES
            if (type === 'lines') {
                for (let i = 0; i < 30; i++) {
                    particles.push({
                        pos: Math.random() * (Math.random() > 0.5 ? w : h),
                        isVertical: Math.random() > 0.5,
                        speed: (Math.random() + 0.2) * (Math.random() > 0.5 ? 1 : -1),
                        opacity: Math.random() * 0.5 + 0.1
                    });
                }
            }
        };

        let fireworks = [];

        const render = () => {
            ctx.clearRect(0, 0, w, h);

            // SPIDERWEB
            if (type === 'spiderweb') {
                particles.forEach((p, i) => {
                    p.x += p.vx;
                    p.y += p.vy;

                    if (p.x < 0 || p.x > w) p.vx *= -1;
                    if (p.y < 0 || p.y > h) p.vy *= -1;

                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fillStyle = color;
                    ctx.fill();

                    for (let j = i + 1; j < particles.length; j++) {
                        const p2 = particles[j];
                        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
                        if (dist < 120) {
                            ctx.beginPath();
                            ctx.moveTo(p.x, p.y);
                            ctx.lineTo(p2.x, p2.y);
                            ctx.strokeStyle = `rgba(${rgbColor}, ${1 - dist / 120})`;
                            ctx.lineWidth = 0.5;
                            ctx.stroke();
                        }
                    }
                });
            }

            // RAIN
            if (type === 'rain') {
                ctx.strokeStyle = `rgba(${rgbColor}, 0.6)`;
                particles.forEach(p => {
                    p.y += p.speed;
                    if (p.y > h) p.y = -p.length;

                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p.x, p.y + p.length);
                    ctx.stroke();
                });
            }

            // LEAVES (Top-Left → Bottom-Right)
            if (type === 'leaves') {
                particles.forEach(p => {

                    // diagonal movement
                    p.x += p.speedX;
                    p.y += p.speedY;
                    p.angle += p.spin;

                    // reset when out of screen
                    if (p.y > h || p.x > w) {
                        p.x = Math.random() * w * 0.2;   // respawn near left
                        p.y = -20;                       // respawn from top
                    }

                    ctx.save();
                    ctx.translate(p.x, p.y);
                    ctx.rotate(p.angle * Math.PI / 180);

                    ctx.fillStyle = `rgba(${rgbColor}, 0.7)`;
                    ctx.beginPath();
                    ctx.ellipse(0, 0, p.size, p.size / 2, 0, 0, Math.PI * 2);
                    ctx.fill();

                    ctx.restore();
                });
            }

            // ORBS
            if (type === 'orbs') {
                particles.forEach(p => {
                    p.x += p.vx;
                    p.y += p.vy;

                    const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
                    grad.addColorStop(0, `rgba(${rgbColor}, 0.2)`);
                    grad.addColorStop(1, 'rgba(0,0,0,0)');
                    ctx.fillStyle = grad;

                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fill();
                });
            }

            // LINES
            if (type === 'lines') {
                particles.forEach(p => {
                    p.pos += p.speed;

                    ctx.fillStyle = `rgba(${rgbColor}, ${p.opacity})`;

                    if (p.isVertical) {
                        if (p.pos > w || p.pos < 0) p.speed *= -1;
                        ctx.fillRect(p.pos, 0, 1, h);
                    } else {
                        if (p.pos > h || p.pos < 0) p.speed *= -1;
                        ctx.fillRect(0, p.pos, w, 1);
                    }
                });
            }

            animationFrameId = requestAnimationFrame(render);
        };

        initParticles();
        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };

    }, [type, color]);

    if (type === 'none') return null;

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none opacity-60"
        />
    );
};

export default BackgroundAnimation;