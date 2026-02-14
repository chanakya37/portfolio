import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/Components/AnimatedBorderButton";
const projects = [
  {
    title: "AI-Integrated Learning Management Platform",
    description:
      "Developed a full-stack AI-powered learning platform that delivers personalized and adaptive educational content. The system includes user authentication, progress tracking, and AI-driven recommendations to enhance learner engagement. Built responsive interfaces and RESTful APIs to support scalable and real-time interactions.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop",
    tags: ["React.js", "Node.js", "MongoDB", "Machine Learning", "REST API"],
    metrics: [
      { label: "Accuracy", value: "98.4%" },
      { label: "Throughput", value: "2.5k ops/s" }
    ],
    link: "#",
    github: "#",
  },
  {
    title: "Real Estate Price Prediction using Machine Learning",
    description:
      "Designed a logic-driven prediction module for real estate pricing using regression techniques, focusing on data validation, feature handling, and result evaluation. Implemented data preprocessing pipelines and evaluated model performance with comprehensive metrics.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
    tags: ["Python", "Machine Learning", "Regression", "Data Analysis"],
    metrics: [
      { label: "Prediction Rate", value: "95.2%" },
      { label: "Data Samples", value: "100k+" }
    ],
    link: "#",
    github: "#",
  },
];

const projectCustomStyles = `
  .project-card {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    transform-style: preserve-3d;
    perspective: 1000px;
  }
  .project-card:hover {
    transform: translateY(-10px) rotateX(2deg) rotateY(-2deg);
    box-shadow: 
      0 20px 40px rgba(32, 178, 166, 0.2),
      0 0 60px rgba(32, 178, 166, 0.1);
  }
  .project-image-container::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 0%, rgba(32, 178, 166, 0.2) 100%);
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  .project-card:hover .project-image-container::after {
    opacity: 1;
  }
  .project-title-gradient {
    background: linear-gradient(135deg, #fff 0%, #20B2A6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.5s ease;
  }
  .project-card:hover .project-title-gradient {
    filter: drop-shadow(0 0 10px rgba(32, 178, 166, 0.5));
  }
  .projects-heading-hover {
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    cursor: default;
    transform-style: preserve-3d;
  }
  .projects-heading-hover:hover {
    transform: scale(1.05) translateY(-5px);
  }
  .projects-heading-hover:hover .glow-text {
    text-shadow: 
      0 0 20px rgba(32, 178, 166, 0.8),
      0 0 40px rgba(32, 178, 166, 0.4);
  }
  .projects-bio-hover {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: default;
  }
  .projects-bio-hover:hover {
    color: #ffffff;
    text-shadow: 0 0 15px rgba(32, 178, 166, 0.4);
    filter: brightness(1.2);
  }
  .tech-grid-mesh {
    background-image: 
      linear-gradient(rgba(32, 178, 166, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(32, 178, 166, 0.1) 1px, transparent 1px);
    background-size: 60px 60px;
  }
  @keyframes float {
    0%, 100% { transform: translateY(0) translateX(0); }
    33% { transform: translateY(-20px) translateX(10px); }
    66% { transform: translateY(10px) translateX(-15px); }
  }
  @keyframes pulse-slow {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.1); }
  }
  .animate-pulse-slow {
    animation: pulse-slow 8s ease-in-out infinite;
  }
  @keyframes scan {
    0% { top: -100%; }
    100% { top: 200%; }
  }
  .neural-scan {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to bottom, transparent, rgba(32, 178, 166, 0.4), transparent);
    animation: scan 3s linear infinite;
    pointer-events: none;
    display: none;
  }
  .project-card:hover .neural-scan {
    display: block;
  }
  .stat-bar-fill {
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s;
  }
  .project-card:hover .stat-bar-fill {
    transform: scaleX(1);
  }
`;

export const Projects = () => {
  return (
    <>
      <style>{projectCustomStyles}</style>
      <section id="projects" className="pt-32 pb-16 relative overflow-hidden bg-[#05080a]">
        {/* Background Elements - Cyber Workspace Theme */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Base Layer */}
          <div className="absolute inset-0 bg-[#0a0f14]/50" />

          {/* Moving Aura Orbs */}
          <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow animation-delay-2000" />

          {/* 3D Mesh Grid Floor */}
          <div className="absolute bottom-0 left-0 w-full h-[60%] opacity-20 [mask-image:linear-gradient(to_top,black,transparent)]">
            <div className="w-full h-full tech-grid-mesh [transform:perspective(1000px)_rotateX(60deg)_translateY(50px)] origin-bottom" />
          </div>

          {/* Floating Data Nodes */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/40 rounded-full"
              style={{
                left: `${15 + (i * 15)}%`,
                top: `${20 + (Math.sin(i) * 30 + 30)}%`,
                animation: `float ${6 + i}s infinite ease-in-out`,
                animationDelay: `${i * 0.5}s`,
                boxShadow: '0 0 10px rgba(32, 178, 166, 0.5)'
              }}
            />
          ))}

          {/* Laser Scanners */}
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent -rotate-12" />
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/10 to-transparent rotate-6" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mx-auto max-w-3xl mb-24">
            <div className="flex items-center justify-center gap-3 mb-4 animate-fade-in">
              <span className="h-px w-8 bg-primary/50" />
              <span className="text-primary text-sm font-bold tracking-[0.3em] uppercase">
                Featured Work
              </span>
              <span className="h-px w-8 bg-primary/50" />
            </div>

            <h2 className="text-5xl md:text-7xl font-black mb-8 animate-fade-in animation-delay-100 leading-tight projects-heading-hover">
              <span className="text-white">PROJECTS THAT</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-indigo-500 gradient-text-animate glow-text">
                MAKE AN IMPACT
              </span>
            </h2>

            <p className="text-lg text-muted-foreground animate-fade-in animation-delay-200 font-light leading-relaxed projects-bio-hover">
              A curated selection of technical solutions, from AI-driven platforms
              to complex machine learning architectures.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group glass project-card rounded-3xl overflow-hidden animate-fade-in border border-white/5"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                {/* Image Wrapper */}
                <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-primary/20 via-card to-card/40 project-image-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Neural Scan Line */}
                  <div className="neural-scan" />

                  {/* Action Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-background/40 backdrop-blur-sm">
                    <a
                      href={project.link}
                      className="p-4 rounded-full glass hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(32,178,166,0.3)]"
                    >
                      <ArrowUpRight className="w-6 h-6" />
                    </a>
                    <a
                      href={project.github}
                      className="p-4 rounded-full glass hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(32,178,166,0.3)]"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  </div>
                </div>

                {/* Info Area */}
                <div className="p-8 space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-black project-title-gradient tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>

                  {/* Impact HUD Metrics */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/5">
                    {project.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="space-y-2">
                        <div className="flex justify-between items-center text-[10px] uppercase tracking-tighter text-muted-foreground/60 font-medium">
                          <span>{metric.label}</span>
                          <span className="text-primary/80">{metric.value}</span>
                        </div>
                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-primary/40 stat-bar-fill" />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-3 py-1 rounded-md bg-primary/5 border border-primary/10 text-[10px] text-primary/80 font-bold uppercase tracking-wider transition-all duration-300 hover:bg-primary/20 hover:border-primary/40 hover:text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All CTA */}
          <div className="text-center mt-12 animate-fade-in animation-delay-500">
            <AnimatedBorderButton onClick={() => window.open('https://github.com/chanakya37', '_blank')}>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </div>
        </div>
      </section>
    </>
  );
};