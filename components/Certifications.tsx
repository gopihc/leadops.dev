"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";

const certifications = [
    { title: "AWS Certified Solutions Architect – Professional", issuer: "Amazon Web Services" },
    { title: "AWS Certified DevOps Engineer – Professional", issuer: "Amazon Web Services" },
    { title: "Certified Information Security Manager® (CISM)", issuer: "ISACA" },
    { title: "AWS Certified Machine Learning Engineer – Associate", issuer: "Amazon Web Services" },
    { title: "AWS Certified Solutions Architect – Associate", issuer: "Amazon Web Services" },
    { title: "AZ-400: Designing and Implementing Microsoft DevOps Solutions", issuer: "Microsoft" },
    { title: "Set Up an App Dev Environment on Google Cloud", issuer: "Google Cloud" },
    { title: "Optimize Costs for Google Kubernetes Engine", issuer: "Google Cloud" },
    { title: "Implement Cloud Security Fundamentals on Google Cloud", issuer: "Google Cloud" },
    { title: "LFS258: Kubernetes Fundamentals", issuer: "The Linux Foundation" },
    { title: "Containers & Kubernetes Essentials", issuer: "IBM" },
    { title: "Microsoft Developer", issuer: "Microsoft" },
    { title: "Microsoft Certified Trainer 2022-2023", issuer: "Microsoft" },
    { title: "Cloud Essentials", issuer: "IBM" },
    { title: "IBM Blockchain Essentials V2", issuer: "IBM" },
    { title: "Exam 895: Financial Management in Microsoft Dynamics 365", issuer: "Microsoft" },
    { title: "Exam 409: Server Virtualization with Windows Server Hyper-V", issuer: "Microsoft" },
];

export default function Certifications() {
    return (
        <section className="py-24 bg-background/50 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Active <span className="text-accent">Certifications</span></h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Validated expertise across Multi-Cloud, Security, and DevOps domains.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="p-6 rounded-2xl bg-muted/20 border border-white/5 hover:border-accent/30 transition-all group flex items-start gap-4"
                        >
                            <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors mt-1">
                                <Award className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors leading-tight">
                                    {cert.title}
                                </h3>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <CheckCircle className="w-3 h-3 text-green-500" />
                                    {cert.issuer}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://www.credly.com/users/gopihc/badges"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors border-b border-primary/20 hover:border-primary"
                    >
                        View all badges on Credly <Award className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}
