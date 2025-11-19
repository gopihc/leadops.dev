"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Server, Layout, Wrench, Cloud, Shield, Users, Terminal, Activity } from "lucide-react";

const skillCategories = [
    {
        title: "Cloud & Platform",
        icon: <Cloud className="w-10 h-10 text-cyan-400" />,
        skills: ["GCP (2x)", "Alibaba Cloud", "FinOps", "Cost Optimization", "Cloud Architecture", "Well-Architected"],
    },
    {
        title: "Security & Compliance",
        icon: <Shield className="w-10 h-10 text-red-400" />,
        skills: ["Zero-Trust", "SOC2", "ISO 27001", "NIST", "Threat Modeling", "Red/Blue Team", "Vault", "KMS", "SSM"],
    },
    {
        title: "AI Engineering",
        icon: <Brain className="w-10 h-10 text-purple-400" />,
        skills: ["Prompt Eng", "RAG", "Pinecone", "Weaviate", "Chroma", "SageMaker", "Vertex AI", "Azure ML", "WhyLabs", "Arize AI"],
    },
    {
        title: "DevOps & Infrastructure",
        icon: <Server className="w-10 h-10 text-orange-400" />,
        skills: ["GitOps", "ArgoCD", "Flux", "Istio", "Linkerd", "Pulumi", "Crossplane", "Backstage", "Platform Eng", "VMware", "Hyper-V", "Checkpoint", "Sophos"],
    },
    {
        title: "SRE & Operations",
        icon: <Activity className="w-10 h-10 text-emerald-400" />,
        skills: ["Grafana", "Prometheus", "OpenTelemetry", "Litmus", "Gremlin", "Incident Response", "On-Call Playbooks"],
    },
    {
        title: "Leadership & Management",
        icon: <Users className="w-10 h-10 text-yellow-400" />,
        skills: ["OKRs", "KPI Dashboards", "Team Coaching", "ADR", "RACI", "DACI", "Cross-Functional Collab"],
    },
    {
        title: "Software Engineering",
        icon: <Code2 className="w-10 h-10 text-blue-400" />,
        skills: ["C#", "Python", "PowerShell", "Shell", "Groovy", "JavaScript", "Distributed Systems", "Event-Driven", "Microservices", "API Governance", "Design Patterns"],
    },
    {
        title: "Open Source & Ecosystem",
        icon: <Terminal className="w-10 h-10 text-pink-400" />,
        skills: ["Trivy", "Falco", "OPA", "Kyverno", "Neovim", "Tmux", "Fish", "Oh-My-Zsh"],
    },
];

export default function Skills() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">Technical <span className="text-primary">Arsenal</span></h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        A comprehensive toolkit for building scalable, intelligent, and robust systems.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-3xl bg-muted/30 border border-white/5 hover:border-primary/30 transition-colors group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-4 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                                    {category.icon}
                                </div>
                                <h3 className="text-2xl font-semibold">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 text-base rounded-full bg-white/5 border border-white/5 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
