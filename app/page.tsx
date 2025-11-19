import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-white">
      <Hero />
      <Skills />
      <Experience />

      {/* Contact / Footer Section */}
      <footer className="py-12 border-t border-white/10 bg-black/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Let's Build the Future</h2>
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://github.com/gopihc" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/gopihc" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-secondary/20 hover:text-secondary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:gopihc@gmail.com" className="p-3 rounded-full bg-white/5 hover:bg-accent/20 hover:text-accent transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://x.com/gopihc" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-blue-400/20 hover:text-blue-400 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} LeadOps.dev. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
