import {
  ChevronDown,
  Download,
  Github,
  Linkedin,
} from "lucide-react";
import { AnimatedBorderButton } from "@/Components/AnimatedBorderButton";
import { useMemo } from "react";

const headlineStyles = `
  @keyframes gradient-flow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .headline-hover-glow {
    cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%2320B2A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/></svg>'), auto;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .headline-hover-glow:hover .glow-text {
    text-shadow: 
      0 0 20px rgba(32, 178, 166, 1),
      0 0 40px rgba(32, 178, 166, 0.6),
      0 0 60px rgba(32, 178, 166, 0.3);
  }
  .headline-hover-glow:hover .gradient-text-animate {
    filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.8));
    text-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
  }
  .bio-3d {
    cursor: default;
    transition: all 0.4s ease;
    opacity: 1;
  }
  .bio-3d:hover {
    filter: brightness(1.1);
    text-shadow: 0 0 15px rgba(32, 178, 166, 0.4);
  }
  .gradient-text-animate {
    background-size: 200% auto;
    animation: gradient-flow 3s linear infinite;
  }
  .glow-badge {
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: pointer;
  }
  .glow-badge:hover {
    transform: scale(1.1) translateY(-5px) translateZ(30px);
    box-shadow: 
      0 0 20px rgba(32, 178, 166, 0.6), 
      0 0 40px rgba(32, 178, 166, 0.3);
    border-color: rgba(32, 178, 166, 0.8);
    background: rgba(32, 178, 166, 0.1);
  }
  .glow-badge:hover .animate-pulse {
    animation-duration: 0.5s;
    background-color: #ffffff;
  }
  .bio-text {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: default;
  }
  .bio-text:hover {
    color: #ffffff;
    text-shadow: 0 0 15px rgba(32, 178, 166, 0.5);
    filter: brightness(1.2);
  }
  .profile-card-glow {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 20px rgba(32, 178, 166, 0.1);
  }
  .profile-card-glow:hover {
    transform: scale(1.02) translateY(-5px);
    box-shadow: 
      0 0 30px rgba(32, 178, 166, 0.4),
      0 0 60px rgba(32, 178, 166, 0.2);
    border-color: rgba(32, 178, 166, 0.5);
  }
  @keyframes floating-3d {
    0%, 100% { 
      transform: perspective(1200px) rotateX(2deg) rotateY(-5deg) translateY(0) translateZ(0); 
    }
    33% { 
      transform: perspective(1200px) rotateX(-5deg) rotateY(8deg) translateY(-10px) translateZ(30px); 
    }
    66% { 
      transform: perspective(1200px) rotateX(4deg) rotateY(-8deg) translateY(5px) translateZ(15px); 
    }
  }
  .animate-3d-hero {
    animation: floating-3d 10s ease-in-out infinite;
    transform-style: preserve-3d;
  }
  .tech-title-animated {
    animation: gradient-flow 6s ease infinite;
    background-size: 200% auto;
  }
`;

const skills = [
  "Python",
  "JavaScript",
  "Java",
  "OOPs",
  "SQL",
  "MongoDB",
  "DBMS",
  "Node.js",
  "REST API",
  "AWS",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "React.js",
  "Git",
  "GitHub",
];

export const Hero = () => {
  const dots = useMemo(() => {
    return [...Array(30)].map((_, index) => ({
      id: index,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <>
      <style>{headlineStyles}</style>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Bg */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
        </div>

        {/* Green Dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {dots.map((dot) => (
            <div
              key={dot.id}
              className="absolute w-1.5 h-1.5 rounded-full opacity-60"
              style={{
                backgroundColor: "#20B2A6",
                left: `${dot.left}%`,
                top: `${dot.top}%`,
                animation: `slow-drift ${dot.duration}s ease-in-out infinite`,
                animationDelay: `${dot.delay}s`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              {/* Normal Badge */}
              <div className="animate-fade-in [transform-style:preserve-3d]">
                <span className="glow-badge inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  Full Stack Developer
                </span>
              </div>

              {/* 3D Animated Headline Only */}
              <div className="animate-3d-hero [transform:translateZ(100px)]">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100 headline-hover-glow">
                  <span className="block">
                    <span className="text-primary glow-text">Code Your Vision</span>
                  </span>
                  <span className="block mt-3 bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-primary gradient-text-animate">
                    into Reality
                  </span>
                </h1>
              </div>

              {/* Normal Bio Content */}
              <div
                className="bio-text text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200"
              >
                I build intelligent, data-driven applications using React, Node.js, and SQL. Focused on creating impactful software and growing with forward-thinking teams.
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                <AnimatedBorderButton onClick={() => window.open('https://github.com/chanakya37', '_blank')}>
                  <Github className="w-5 h-5" />
                  GitHub
                </AnimatedBorderButton>
                <AnimatedBorderButton onClick={() => window.open('https://www.linkedin.com/in/chanakyagangabathina/', '_blank')}>
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </AnimatedBorderButton>
                <AnimatedBorderButton onClick={() => window.open('/Gangabathina_Chanakya_Resume.pdf', '_blank')}>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="relative animate-fade-in animation-delay-300">
              <div className="relative max-w-md mx-auto">
                <div
                  className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
                />
                <div className="relative glass rounded-3xl profile-card-glow transition-all duration-500 overflow-hidden">
                  <img
                    src="/portfolio/profile-photo.jpg"
                    alt="Gangabathina Chanakya"
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>

                {/* Simplified Professional Status Cards */}
                <div className="absolute -bottom-6 -right-6 lg:-right-8 glass-strong px-5 py-4 rounded-2xl border border-white/10 animate-fade-in z-20 shadow-2xl flex items-center gap-4 group hover:border-primary/40 transition-colors duration-300">
                  <div className="relative">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping absolute inset-0" />
                    <div className="w-3 h-3 bg-emerald-500 rounded-full relative shadow-[0_0_10px_#10b981]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Status</span>
                    <span className="text-sm font-black text-white group-hover:text-primary transition-colors">OPEN FOR WORK</span>
                  </div>
                </div>


              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-20 animate-fade-in animation-delay-600">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="h-px w-12 bg-cyan-500 shadow-[0_0_10px_#06b6d4]" />
                <p className="text-sm font-bold tracking-[0.3em] text-cyan-400 uppercase drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
                  My Expertise
                </p>
                <span className="h-px w-12 bg-cyan-500 shadow-[0_0_10px_#06b6d4]" />
              </div>
              <h3 className="text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary via-cyan-400 to-indigo-500 gradient-text-animate drop-shadow-[0_0_25px_rgba(32,178,166,0.6)] cursor-default py-4 leading-normal tracking-tight">
                Technologies I work with
              </h3>
            </div>
            <div className="relative overflow-hidden">
              <div
                className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10"
              />
              <div
                className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10"
              />
              <div className="flex animate-marquee gap-8 py-10">
                {[...skills, ...skills].map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 group cursor-default"
                  >
                    <div className="glass px-8 py-3 rounded-2xl border border-primary/20 group-hover:border-primary/60 group-hover:bg-primary/5 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 relative overflow-hidden group-hover:shadow-[0_10px_30px_rgba(32,178,166,0.2)]">
                      {/* Internal Glow Pulse */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                      <span className="text-xl font-bold bg-clip-text text-muted-foreground/40 group-hover:text-primary transition-all duration-500 whitespace-nowrap">
                        {skill}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>
      </section>
    </>
  );
};
