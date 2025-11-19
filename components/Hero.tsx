"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Cpu, Cloud, Shield, Server, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background text-foreground pt-20 pb-10">
            {/* Background Elements */}
            <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[120px] animate-pulse-slow delay-1000" />
                <div className="absolute top-[40%] left-[60%] w-[20%] h-[20%] rounded-full bg-accent/20 blur-[120px] animate-pulse-slow delay-2000" />

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
            </div>

            <div className="container mx-auto px-6 z-10 relative">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-muted/50 border border-muted mb-8">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <span className="text-base font-medium text-muted-foreground">Enterprise Architect | CISM | Multi-Cloud</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 leading-tight">
                            Gopi Chinnappa <br />
                            <span className="text-primary text-4xl md:text-6xl">DevSecOps & MLOPS/AIOPS</span>
                        </h1>

                        <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                            Tech Manager with 15+ years delivering secure, scalable, and <span className="text-accent font-medium">AI-driven platforms</span>.
                            Specializing in <span className="text-secondary font-medium">DevSecOps</span>, AIOps/MLOps, and Cloud Infrastructure across Healthcare, Finance, and Retail.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                            <a href="#experience" className="px-10 py-5 rounded-full bg-primary hover:bg-primary/90 text-white text-lg font-medium transition-all flex items-center gap-3 group">
                                View Experience
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="mailto:gopihc@gmail.com" className="px-10 py-5 rounded-full bg-muted hover:bg-muted/80 text-white text-lg font-medium transition-all border border-white/10">
                                Contact Me
                            </a>
                        </div>
                    </motion.div>

                    {/* Visual/Graphic */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 relative w-full max-w-xl"
                    >
                        <div className="relative w-full h-auto min-h-[600px]">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse-slow" />

                            <div className="relative h-full w-full bg-muted/30 backdrop-blur-sm rounded-3xl border border-white/10 p-10 flex flex-col justify-between overflow-hidden group hover:border-primary/50 transition-colors duration-500">
                                <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                                    <Cpu className="w-40 h-40" />
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-5 p-4 rounded-2xl bg-black/40 border border-white/5 transform translate-x-4 group-hover:translate-x-0 transition-transform duration-500">
                                        <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400">
                                            <Cloud className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-gray-400">Multi-Cloud</div>
                                            <div className="text-lg font-semibold">AWS (3x) & Azure (2x)</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-5 p-4 rounded-2xl bg-black/40 border border-white/5 transform -translate-x-4 group-hover:translate-x-0 transition-transform duration-500 delay-100">
                                        <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400">
                                            <Shield className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-gray-400">Security</div>
                                            <div className="text-lg font-semibold">CISM & DevSecOps</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-5 p-4 rounded-2xl bg-black/40 border border-white/5 transform translate-x-4 group-hover:translate-x-0 transition-transform duration-500 delay-200">
                                        <div className="p-3 rounded-xl bg-pink-500/20 text-pink-400">
                                            <Cpu className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-gray-400">AI Operations</div>
                                            <div className="text-lg font-semibold">MLOps & LLMs</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-5 p-4 rounded-2xl bg-black/40 border border-white/5 transform -translate-x-4 group-hover:translate-x-0 transition-transform duration-500 delay-300">
                                        <div className="p-3 rounded-xl bg-orange-500/20 text-orange-400">
                                            <Server className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-gray-400">Infrastructure</div>
                                            <div className="text-lg font-semibold">K8s, Docker , AWS, Azure, VMWare, Google Cloud, Terraform</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-5 p-4 rounded-2xl bg-black/40 border border-white/5 transform translate-x-4 group-hover:translate-x-0 transition-transform duration-500 delay-400">
                                        <div className="p-3 rounded-xl bg-green-500/20 text-green-400">
                                            <Users className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-gray-400">Leadership</div>
                                            <div className="text-lg font-semibold">Team & Strategy</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-5 p-4 rounded-2xl bg-black/40 border border-white/5 transform -translate-x-4 group-hover:translate-x-0 transition-transform duration-500 delay-500">
                                        <div className="p-3 rounded-xl bg-yellow-500/20 text-yellow-400">
                                            <Terminal className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-gray-400">Open Source</div>
                                            <div className="text-lg font-semibold"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
