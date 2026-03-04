import React from "react";
import { Code2, Briefcase, Rocket } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const About = () => {
    return (
        <section
            id="about"
            className="py-24 px-6 max-w-7xl mx-auto relative z-10"
        >
            <SectionHeading
                title="About Me"
                subtitle="< who_am_i />"
            />

            {/* GRID */}
            <div className="grid md:grid-cols-2 gap-12 mt-16 items-stretch">

                {/* ================= LEFT SIDE ================= */}
                <div className="flex flex-col justify-between">

                    <div>
                        <h3 className="text-3xl md:text-4xl font-extrabold mb-6 leading-snug">
                            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                Laravel Full Stack Developer
                            </span>
                            <br />
                            <span className="text-white">
                                passionate about building
                            </span>{" "}
                            <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                                secure & scalable
                            </span>{" "}
                            <span className="text-white">
                                web applications.
                            </span>
                        </h3>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                            I specialize in{" "}
                            <span className="text-blue-400 font-medium">Laravel</span> and{" "}
                            <span className="text-purple-400 font-medium">PHP</span>, crafting{" "}
                            <span className="text-cyan-400 font-medium">RESTful APIs</span>,
                            authentication systems, and scalable architectures. On the frontend,
                            I build clean, responsive interfaces using{" "}
                            <span className="text-pink-400 font-medium">Tailwind CSS</span> and
                            modern JavaScript.
                        </p>

                        <p className="text-gray-400 mb-10 leading-relaxed">
                            My focus is writing clean, maintainable code and delivering
                            performance-optimized applications that provide real business value.
                        </p>
                    </div>

                    {/* Feature Points */}
                    <div className="space-y-5">

                        <div className="flex items-center gap-4 p-4 bg-slate-800/40 backdrop-blur-md border border-white/5 rounded-xl hover:border-blue-400/40 transition-all duration-300 group">
                            <Code2 className="text-blue-400 w-6 h-6 group-hover:scale-110 transition" />
                            <span className="text-gray-200 font-medium">
                                Clean & Scalable Code Architecture
                            </span>
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-slate-800/40 backdrop-blur-md border border-white/5 rounded-xl hover:border-purple-400/40 transition-all duration-300 group">
                            <Briefcase className="text-purple-400 w-6 h-6 group-hover:scale-110 transition" />
                            <span className="text-gray-200 font-medium">
                                Real-world Project Experience
                            </span>
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-slate-800/40 backdrop-blur-md border border-white/5 rounded-xl hover:border-pink-400/40 transition-all duration-300 group">
                            <Rocket className="text-pink-400 w-6 h-6 group-hover:scale-110 transition" />
                            <span className="text-gray-200 font-medium">
                                Performance & Security Focused
                            </span>
                        </div>

                    </div>
                </div>

                {/* ================= RIGHT SIDE ================= */}
                <div className="relative h-full">
                    <div className="h-full flex flex-col bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">

                        {/* Mac Window Top Bar */}
                        <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-white/10">
                            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            <span className="ml-4 text-sm text-gray-400 font-mono">
                                sharad@portfolio ~ developer.js
                            </span>
                        </div>

                        {/* Code Content */}
                        <div className="flex-1 p-6 text-sm font-mono text-gray-300 leading-relaxed space-y-1">

                            <p>
                                <span className="text-blue-400">class</span>{" "}
                                <span className="text-green-400">Sharad</span>{" "}
                                {"{"}
                            </p>

                            <p className="ml-4">
                                <span className="text-purple-400">constructor</span>() {"{"}
                            </p>

                            <p className="ml-8">
                                this.name = <span className="text-yellow-400">"Sharad"</span>;
                            </p>
                            {/* 
                            <p className="ml-8">
                                this.role = <span className="text-yellow-400">"Laravel Full Stack Developer"</span>;
                            </p> */}

                            {/* <p className="ml-8">
                                this.experience = <span className="text-yellow-400">"Building production-ready web applications"</span>;
                            </p>

                            <p className="ml-8">
                                this.mindset = [
                                <span className="text-yellow-400">"Hardworking"</span>,{" "}
                                <span className="text-yellow-400">"Consistent"</span>,{" "}
                                <span className="text-yellow-400">"Problem Solver"</span>,{" "}
                                <span className="text-yellow-400">"Growth Oriented"</span>
                                ];
                            </p> */}

                            <p className="ml-8">
                                this.coreValues = [
                                <span className="text-yellow-400">"Clean Code"</span>,{" "}
                                <span className="text-yellow-400">"Scalability"</span>,{" "}
                                <span className="text-yellow-400">"Security First"</span>,{" "}
                                <span className="text-yellow-400">"Performance Optimization"</span>
                                ];
                            </p>

                            <p className="ml-4">
                                {"}"}
                            </p>

                            <p className="ml-4 mt-3">
                                <span className="text-cyan-400">buildSolutions</span>() {"{"}
                            </p>

                            <p className="ml-8">
                                return {"{"}
                            </p>

                            <p className="ml-12">
                                backend: [
                                <span className="text-yellow-400">"Laravel APIs"</span>,{" "}
                                <span className="text-yellow-400">"Authentication Systems"</span>,{" "}
                                <span className="text-yellow-400">"Database Design"</span>
                                ],
                            </p>

                            <p className="ml-12">
                                frontend: [
                                <span className="text-yellow-400">"Responsive UI"</span>,{" "}
                                <span className="text-yellow-400">"Tailwind Design"</span>
                                ],
                            </p>

                            <p className="ml-12">
                                goal: <span className="text-yellow-400">"Deliver scalable & business-driven products"</span>
                            </p>

                            <p className="ml-8">
                                {"}"};
                            </p>

                            <p className="ml-4">
                                {"}"}
                            </p>

                            <p>{"}"}</p>

                            {/* OUTPUT SECTION */}
                            <div className="mt-6 pt-4 border-t border-white/10">
                                <p className="text-gray-500">// Output</p>
                                <p className="text-green-400 mt-2">
                                    ✓ Production Ready Developer
                                </p>
                                <p className="text-green-400">
                                    ✓ Scalable Architecture Mindset
                                </p>
                                <p className="text-green-400">
                                    ✓ Performance & Security Focused
                                </p>
                                <p className="text-green-400">
                                    ✓ Business Value Driven
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;