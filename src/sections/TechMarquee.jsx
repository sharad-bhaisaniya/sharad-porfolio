import React from "react";
import {
    Globe,
    Database,
    ShoppingCart,
    ShieldCheck,
    BarChart3,
    Code,
    Server,
    Wrench
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";


const TechMarquee = () => {
    const projects = [
        { name: "Metawish AI", icon: Globe },
        { name: "Vedaro E-Commerce", icon: ShoppingCart },
        { name: "KhetiBazar", icon: Database },
        { name: "Jewellery ERP", icon: ShieldCheck },
        { name: "MySkillShow", icon: BarChart3 },
        { name: "Bharat Stock Research", icon: Code }
    ];

    const skills = [
        { name: "Laravel", icon: Server },
        { name: "REST APIs", icon: Globe },
        { name: "MySQL", icon: Database },
        { name: "Tailwind CSS", icon: Code },
        { name: "Authentication", icon: ShieldCheck },
        { name: "Git & Deployment", icon: Wrench }
    ];

    return (
        <section className="py-16 bg-black relative z-10  border-y border-theme ">

            <div className="max-w-6xl mx-auto relative overflow-hidden">

                {/* LEFT FADE */}
                <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-20" />

                {/* RIGHT FADE */}
                <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-20" />

                {/* TOP MARQUEE */}
                <div className="mb-10">
                    <div className="flex whitespace-nowrap animate-marquee gap-10">
                        {[...projects, ...projects].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 px-6 py-3 bg-black  border border-theme rounded-md shadow-theme"
                                >
                                    <Icon className="w-5 h-5 text-theme" />
                                    <span className="text-gray-200 font-medium">
                                        {item.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* BOTTOM MARQUEE */}
                <div>
                    <div className="flex whitespace-nowrap animate-marquee-reverse gap-10">
                        {[...skills, ...skills].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 px-6 py-3 bg-black border border-theme rounded-md shadow-theme"
                                >
                                    <Icon className="w-5 h-5 text-theme" />
                                    <span className="text-gray-200 font-medium">
                                        {item.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TechMarquee;