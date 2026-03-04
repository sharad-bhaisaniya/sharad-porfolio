import React from "react";
import {
    Code,
    Github,
    ExternalLink,
    Globe,
    Database,
    ShoppingCart,
    ShieldCheck,
    BarChart3
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const Projects = () => {
    const iconPool = [
        Globe,
        Database,
        ShoppingCart,
        ShieldCheck,
        BarChart3,
        Code
    ];

    const projects = [
        {
            title: "Metawish AI – Company Portfolio",
            desc: "Developed a production-ready company portfolio platform with Laravel backend, REST APIs, and responsive Tailwind UI. Focused on performance, modular structure, and SEO optimization.",
            tech: ["Laravel", "REST API", "Tailwind CSS", "MySQL"],
            image: '/metawish_image.png',
            links: { github: "#", live: "https://www.metawish.ai/" }
        },
        {
            title: "Vedaro.in – E-commerce Platform",
            desc: "Built a scalable multi-product e-commerce platform with admin panel, product management, order system, and modern responsive UI.",
            tech: ["Laravel", "MySQL", "Authentication", "Blade"],
            image: '/vedaro_image.png',
            links: { github: "https://github.com/sharad-bhaisaniya/vedaro_new_update", live: "https://vedaro.in/" }
        },
        {
            title: "KhetiBazar – Agri Equipment Platform",
            desc: "Agricultural equipment marketplace featuring product listings, backend management, and structured database design.",
            tech: ["Laravel", "Database Design", "Tailwind CSS"],
            image: '/khetibazar_image.png',
            links: { github: "#", live: "https://khetibazar.in/" }
        },
        {
            title: "Jewellery ERP System",
            desc: "Inventory & billing system with e-commerce capabilities for jewellery business including admin control & secure data handling.",
            tech: ["Laravel", "MySQL", "Admin Panel", "Security"],
            image: '/jewelBook_image.png',
            links: { github: "https://github.com/sharad-bhaisaniya/Riddhi_Siddhi_Jewellery", live: "https://jwellery.eaznpro.com/" }
        },
        {
            title: "MySkillShow & VikalpPromotions",
            desc: "Advertisement management system handling campaigns, analytics, and user modules with scalable backend logic.",
            tech: ["Laravel", "MVC", "API Development"],
            image: '/skill_show_image.png',
            links: { github: "#", live: "https://myskillshow.com/" }
        },
        {
            title: "Bharat Stock Market Research",
            desc: "KYC & subscription-based financial services platform with secure authentication, role-based access, and subscription modules.",
            tech: ["Laravel Sanctum", "Subscription Logic", "Security"],
            image: '/bharat_image.png',
            links: { github: "https://github.com/sharad-bhaisaniya/VPS_BHARAT_STOCK_MARKET_RESEARCH", live: "https://bharatstockmarketresearch.com/" }
        }
    ];

    return (
        <section
            id="projects"
            className="py-24 relative z-10 px-6 max-w-7xl mx-auto"
        >
            <SectionHeading
                title="Featured Projects"
                subtitle="< real world work />"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                {projects.map((proj, idx) => {
                    const RandomIcon = iconPool[idx % iconPool.length];

                    return (
                        <div
                            key={idx}
                            className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden flex flex-col 
              hover:border-theme/50 transition-all duration-300 hover:-translate-y-2 
              hover:shadow-xl hover:shadow-theme/20 group"
                        >
                            {/* IMAGE OR ICON */}
                            <div className="h-48 bg-slate-800 flex items-center justify-center relative overflow-hidden">
                                {proj.image ? (
                                    <img
                                        src={proj.image}
                                        alt={proj.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <RandomIcon
                                        size={60}
                                        className="text-gray-600 group-hover:text-theme transition-colors duration-300"
                                    />
                                )}
                            </div>

                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-theme transition-colors">
                                    {proj.title}
                                </h3>

                                <p className="text-gray-400 mb-6 flex-1 text-sm leading-relaxed">
                                    {proj.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {proj.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="text-xs font-mono px-2 py-1 rounded bg-theme/10 text-theme border border-theme/20"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                                    {proj.links.github && (
                                        <a
                                            href={proj.links.github}
                                            className="text-gray-400 hover:text-theme transition-colors flex items-center gap-2 text-sm"
                                        >
                                            <Github size={18} />
                                            Code
                                        </a>
                                    )}

                                    {proj.links.live && (
                                        <a
                                            href={proj.links.live}
                                            className="text-gray-400 hover:text-theme transition-colors flex items-center gap-2 text-sm"
                                        >
                                            <ExternalLink size={18} />
                                            Live
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;