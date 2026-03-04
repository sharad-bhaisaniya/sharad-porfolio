import React from 'react';
import { Server, Database, Code, Wrench, Shield } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const Skills = () => {
    // Skills updated exactly as per your Laravel Full Stack Developer Resume
    const skillCategories = [
        {
            title: "Backend Development",
            icon: <Server className="w-6 h-6 text-theme group-hover:scale-110 transition-transform duration-300" />,
            description: "Building scalable server-side systems and APIs.",
            skills: ["Laravel 10/11", "PHP", "RESTful APIs", "MVC Architecture"]
        },
        {
            title: "Frontend & UI",
            icon: <Code className="w-6 h-6 text-theme group-hover:scale-110 transition-transform duration-300" />,
            description: "Crafting clean and responsive user interfaces.",
            skills: ["Tailwind CSS", "JavaScript", "Blade Templating", "HTML & CSS", "Responsive Design"]
        },
        {
            title: "Database & Security",
            icon: <Database className="w-6 h-6 text-theme group-hover:scale-110 transition-transform duration-300" />,
            description: "Managing data and secure authentication.",
            skills: ["MySQL", "Eloquent ORM", "Laravel Sanctum", "Bcrypt", "CSRF Protection"]
        },
        {
            title: "Tools & Deployment",
            icon: <Wrench className="w-6 h-6 text-theme group-hover:scale-110 transition-transform duration-300" />,
            description: "Version control, API testing, and hosting.",
            skills: ["Git & GitHub", "Postman", "VS Code", "Shared Hostinger"]
        }
    ];

    return (
        <section
            id="skills"
            className="py-20 relative z-10 px-6 max-w-7xl mx-auto"
        >
            <SectionHeading
                title="Technical Arsenal"
                subtitle="< skills & technologies />"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                {skillCategories.map((cat, idx) => (
                    <div
                        key={idx}
                        className="bg-slate-800/40 backdrop-blur-md border border-white/5 hover:border-theme/50 p-7 rounded-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group shadow-lg"
                    >
                        {/* Top glowing line on hover */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-theme to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Background subtle glow on hover */}
                        <div className="absolute inset-0 bg-theme/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                        {/* Icon Container */}
                        <div className="bg-slate-900/80 w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-theme/30 group-hover:shadow-[0_0_15px_rgba(var(--theme-color-rgb),0.2)] transition-all">
                            {cat.icon}
                        </div>

                        {/* Title & Description */}
                        <h3 className="text-xl font-bold mb-2 text-white tracking-wide">
                            {cat.title}
                        </h3>
                        <p className="text-sm text-gray-400 mb-6 h-10">
                            {cat.description}
                        </p>

                        {/* Skills Badges */}
                        <div className="flex flex-wrap gap-2">
                            {cat.skills.map((skill, sIdx) => (
                                <span
                                    key={sIdx}
                                    className="px-3 py-1.5 text-xs font-medium bg-slate-900/60 border border-white/5 rounded-md text-gray-300 group-hover:border-theme/30 group-hover:text-white transition-colors duration-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;