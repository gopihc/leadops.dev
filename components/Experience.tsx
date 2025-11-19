"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        role: "DevSecOps Manager",
        company: "The Garage India",
        period: "Jan 2023 - Present",
        description: "Leading DevSecOps initiatives, ensuring secure and resilient infrastructure. Implementing advanced security practices and compliance frameworks.",
        tags: ["DevSecOps", "Security", "Management"],
    },
    {
        role: "DevOps Manager",
        company: "Resilience InfoTech",
        period: "Oct 2021 - Jan 2023",
        description: "Managed DevOps teams and streamlined deployment pipelines. Focused on automation and cloud infrastructure optimization.",
        tags: ["DevOps", "Automation", "Cloud"],
    },
    {
        role: "Information Technology Manager",
        company: "Blackberrys Menswear",
        period: "Jan 2019 - Oct 2021",
        description: "Oversaw IT operations and digital transformation initiatives. Managed enterprise systems and infrastructure.",
        tags: ["IT Management", "Infrastructure", "Retail"],
    },
    {
        role: "Deputy Manager Of Information Technology",
        company: "Devyani International Limited",
        period: "Mar 2011 - Jan 2019",
        description: "Managed IT infrastructure for a large-scale retail operation. Implemented system upgrades and maintained high availability.",
        tags: ["IT Operations", "System Admin", "Retail"],
    },
    {
        role: "Technical Consultant",
        company: "DEVAS MULTIMEDIA PVT LTD",
        period: "Mar 2010 - Mar 2011",
        description: "Provided technical consultancy for multimedia systems and satellite communications projects.",
        tags: ["Consulting", "Multimedia", "SatCom"],
    },
];

const education = [
    {
        degree: "MTech AI & DSE  (Pursuing)",
        institution: "IIT Patna",
        period: "2026 - 2028",
    },
    {
        degree: "Master of Science (MSc), Information Technology",
        institution: "Manipal University",
        period: "2010 - 2012",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-background/50 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Professional <span className="text-secondary">Journey</span></h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        15+ years of delivering secure, scalable, and AI-driven platforms across various industries.
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline Line (Desktop) */}
                            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 to-transparent -translate-x-1/2" />

                            <div className={`md:flex items-center justify-between gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Timeline Dot (Desktop) */}
                                <div className="hidden md:block absolute left-[50%] top-8 w-5 h-5 rounded-full bg-background border-4 border-primary -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(139,92,246,0.6)]" />

                                {/* Content Card */}
                                <div className="w-full md:w-[calc(50%-3rem)] p-8 rounded-3xl bg-muted/20 border border-white/5 hover:border-secondary/30 transition-all group">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                                        <h3 className="text-2xl font-bold text-foreground group-hover:text-secondary transition-colors">{exp.role}</h3>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-white/5 px-3 py-1.5 rounded-full w-fit">
                                            <Calendar className="w-4 h-4" />
                                            {exp.period}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 mb-6 text-base text-muted-foreground font-medium">
                                        <Briefcase className="w-5 h-5" />
                                        {exp.company}
                                    </div>

                                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                        {exp.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.tags.map(tag => (
                                            <span key={tag} className="text-sm px-3 py-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Empty Space for alignment */}
                                <div className="hidden md:block w-[calc(50%-3rem)]" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Education Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-24 max-w-4xl mx-auto"
                >
                    <h3 className="text-3xl font-bold mb-10 text-center">Education</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {education.map((edu, index) => (
                            <div key={index} className="p-6 rounded-2xl bg-muted/10 border border-white/5">
                                <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                                <div className="text-muted-foreground">{edu.institution}</div>
                                <div className="text-sm text-muted-foreground/60 mt-2">{edu.period}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
