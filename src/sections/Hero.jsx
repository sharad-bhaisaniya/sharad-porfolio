import React, { useEffect, useRef, useState } from 'react';
import { Flame, Github, Linkedin, Mail } from 'lucide-react';

/**
 * 1. Particle Logic
 * This class handles the math for the fine fire vapor particles.
 * It is defined outside the component for better performance.
 */
class SmogParticle {
    constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.reset();
    }

    reset() {
        // Radius of the elliptical rim (matches the 350px container width)
        const rx = 150;
        const ry = 15;

        const angle = Math.random() * Math.PI * 2;
        // Spawns particles on the perimeter of the ellipse
        this.x = this.canvasWidth / 2 + Math.cos(angle) * (rx * (0.9 + Math.random() * 0.2));
        // Spawns at the bottom of the canvas where the rim is located
        this.y = this.canvasHeight - 45 + Math.sin(angle) * ry;

        // Upward movement
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = -Math.random() * 1.2 - 0.4;

        this.life = 1.0;
        this.decay = 0.006 + Math.random() * 0.01;
        this.size = 0.4 + Math.random() * 1.8;

        // Heat colors: Red, Orange, Gold, White
        const colors = ['#ff0000', '#ff4d00', '#ff8c00', '#ffffff'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.size += 0.015; // Vapor expands as it rises
        this.life -= this.decay;
        if (this.life <= 0) this.reset();
    }

    draw(ctx) {
        ctx.globalAlpha = this.life * 0.4;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 3;
        ctx.shadowColor = this.color;
    }
}

const Hero = () => {
    // Path to your final transparent profile image asset.
    const finalAssetPath = "/public/image.png";

    // 2. Animation Hooks
    const canvasRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        // Initialize particle system
        const particles = Array.from({ length: 150 }, () => new SmogParticle(canvas.width, canvas.height));
        let frameId;

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw(ctx);
            });
            frameId = requestAnimationFrame(render);
        };

        render();
        // Trigger the "emergence" animation of the image
        setIsLoaded(true);

        return () => cancelAnimationFrame(frameId);
    }, []);

    return (
        <section
            id="home"
            className="min-h-screen flex items-center relative z-10 px-6 pt-24 bg-transperent overflow-hidden"
        >
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div className="z-20">
                        {/* Availability Badge */}
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-theme bg-transperent text-theme text-sm font-medium shadow-sm backdrop-blur-sm">
                            <span className="w-2 h-2 bg-theme rounded-full animate-pulse"></span>
                            Available for new opportunities
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
                            Sharad Bhaisaniya
                            <span className="block text-theme text-2xl md:text-3xl mt-3 font-semibold">
                                Laravel Developer
                            </span>
                        </h1>

                        {/* Professional Description */}
                        <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
                            I build scalable backend systems, secure REST APIs,
                            and performance-driven web applications using Laravel.
                            With strong frontend expertise in React and Tailwind CSS,
                            I deliver complete full-stack solutions with clean architecture
                            and maintainable code.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#projects"
                                className="px-8 py-3 rounded-lg bg-theme text-white font-semibold shadow-theme shadow-red-900/20 transition-all hover:-translate-y-1 hover:shadow-theme active:scale-95"
                            >
                                View Projects
                            </a>

                            <a
                                href="#contact"
                                className="px-8 py-3 rounded-lg border border-theme text-theme font-semibold transition-all hover:bg-theme hover:text-white hover:-translate-y-1 active:scale-95"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>

                    {/* RIGHT SIDE (Profile Image View - Professional Framing with Portal) */}
                    <div className="hidden md:flex justify-center">
                        <div className="relative w-full max-w-[350px] rounded-2xl shadow-2xl overflow-hidden bg-transparent group ms-36 mb-20 scale-[2.0]">

                            {/* Vapor Canvas - Renders the fire smoke rising from the rim */}
                            <canvas
                                ref={canvasRef}
                                width={350}
                                height={500}
                                className="absolute inset-0 pointer-events-none z-30"
                            />

                            {/* Profile Image with Emergence Animation (Sliding up from the portal) */}
                            <img
                                src={finalAssetPath}
                                alt="Sharad Bhaisaniya - Laravel Developer"
                                className={`w-full h-auto object-contain relative z-10 transition-all duration-[2500ms] ease-out group-hover:scale-[1.03] ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                                    }`}
                                onError={(e) => { e.target.src = "https://via.placeholder.com/350x500/000000/ff0000?text=Profile+Image"; }}
                            />

                            {/* The Thin Portal Rim (Clean Black & Red styling) */}
                            <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-[90%] h-[25px] z-40">
                                <div className="absolute inset-0 rounded-[100%] border-[2px] border-theme bg-transperent cirle-theme" />
                                {/* Bottom glow reflected on the "floor" */}
                                <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-full h-8 bg-red-600/10 blur-xl rounded-full" />
                            </div>

                            {/* Overlays & Fades for depth */}
                            <div className="absolute inset-0 z-20 pointer-events-none rounded-2xl shadow-inner bg-black/10"></div>
                            {/* Bottom fade helps the image "blend" into the black portal background */}
                            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black via-transparent to-transparent z-25"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;