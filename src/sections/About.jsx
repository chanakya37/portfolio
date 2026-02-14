import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import { useMemo } from "react";

const highlights = [
  {
    icon: Code2,
    title: "Programming Languages",
    description: "Python, JavaScript, Java (Basic), OOPs",
  },
  {
    icon: Rocket,
    title: "Database & Systems",
    description: "SQL, MongoDB, DBMS, Operating Systems, Computer Networks",
  },
  {
    icon: Users,
    title: "Cloud & APIs",
    description: "REST API (Integration), Node.js, AWS (Basic)",
  },
  {
    icon: Lightbulb,
    title: "Soft Skills",
    description:
      "Teamwork, Communication, Time Management, Adaptability, Problem Solving",
  },
];

const aboutCustomStyles = `
  @keyframes float-3d-card {
    0%, 100% { 
      transform: perspective(1200px) rotateX(2deg) rotateY(-5deg) translateZ(0);
      box-shadow: 
        -10px 10px 30px rgba(0, 0, 0, 0.5),
        -5px 5px 15px rgba(32, 178, 166, 0.1);
    }
    50% { 
      transform: perspective(1200px) rotateX(-2deg) rotateY(5deg) translateZ(30px);
      box-shadow: 
        20px 20px 60px rgba(0, 0, 0, 0.6),
        10px 10px 30px rgba(32, 178, 166, 0.2);
    }
  }
  .animate-3d-card {
    animation: float-3d-card 6s ease-in-out infinite;
    transform-style: preserve-3d;
  }
  .tech-grid-mesh {
    background-image: 
      linear-gradient(rgba(32, 178, 166, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(32, 178, 166, 0.1) 1px, transparent 1px);
    background-size: 60px 60px;
  }
  .hover-glow-text {
    transition: all 0.3s ease;
    cursor: pointer;
    display: inline-block;
  }
  .hover-glow-text:hover {
    text-shadow: 
      0 0 20px rgba(32, 178, 166, 0.8),
      0 0 40px rgba(32, 178, 166, 0.6),
      0 0 60px rgba(59, 130, 246, 0.4);
    transform: translateY(-2px) scale(1.02);
    filter: brightness(1.3);
  }
`;

export const About = () => {
  return (
    <>
      <style>{aboutCustomStyles}</style>
      <section
        id="about"
        className="pt-0 pb-32 relative overflow-hidden scroll-mt-32"
      >
        {/* Background Elements - Cyber Topography Design */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Base Layer */}
          <div className="absolute inset-0 bg-[#0a0f14]" />

          {/* Moving Aura Orbs */}
          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse animation-delay-1000" />

          {/* Large Rotating Technology Rings */}
          <div className="absolute top-[10%] right-[10%] w-[800px] h-[800px] border border-primary/5 rounded-full rotate-45 animate-marquee opacity-40" />
          <div className="absolute top-[15%] right-[15%] w-[600px] h-[600px] border border-blue-500/10 rounded-full -rotate-12 animate-marquee animation-delay-500 opacity-30" />

          {/* 3D Mesh Grid Floor */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-30 [mask-image:linear-gradient(to_bottom,transparent,black)]">
            <div className="w-full h-full tech-grid-mesh [transform:perspective(1200px)_rotateX(70deg)_translateY(100px)] origin-bottom" />
          </div>

          {/* Floating Geometric Data Nodes */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-primary/30 rounded-sm"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                animation: `float ${7 + Math.random() * 5}s infinite ease-in-out`,
                animationDelay: `${i * 0.8}s`,
              }}
            />
          ))}

          {/* Vertical Laser Streaks */}
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent rotate-6" />
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent -rotate-3" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Heading */}
            <div className="mb-8 mt-24 sm:mt-32">
              <h1 className="text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-fade-in drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-500 hover:scale-[1.02] cursor-default leading-tight">
                About Me
              </h1>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-12 animate-fade-in cursor-default">
              <span className="text-primary glow-text hover-glow-text">Building the future,</span>
              <span className="font-serif italic font-normal text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] block md:inline">
                one component at a time
              </span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8 animate-fade-in animation-delay-200">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-[10px] uppercase tracking-[0.3em] text-primary font-bold">
                    Identity
                  </div>
                  <p className="text-xl leading-relaxed text-foreground/90 font-light">
                    I am <span className="text-primary font-bold drop-shadow-[0_0_15px_rgba(32,178,166,0.8)] animate-pulse shadow-primary/20">Gangabathina Chanakya</span>, a motivated <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]">Computer Science student specializing in AI & ML</span> <span className="text-muted-foreground/60 text-sm font-normal">(Expected 2026)</span>.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground font-light">
                    My expertise spans building dynamic web applications with React and Node.js to managing robust database systems like SQL and MongoDB. I thrive on bridging the gap between sophisticated logic and seamless user experiences.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground font-light">
                    Currently pursuing my B.Tech at <span className="text-primary font-bold drop-shadow-[0_0_8px_rgba(32,178,166,0.5)]">Sri Venkateswara College of Engineering</span>, I am deeply committed to continuous evolution. I seek an environment where I can contribute my technical skills and innovative project experience to solve real-world challenges while growing alongside a forward-thinking team.
                  </p>
                </div>

                <div className="glass-strong rounded-3xl p-10 border border-primary/30 relative overflow-hidden group transition-all duration-500 animate-3d-card">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-colors" />
                  <div className="relative z-10 [transform:translateZ(40px)]">
                    <span className="text-primary text-6xl font-serif absolute -top-8 -left-4 opacity-30 select-none">"</span>
                    <p className="text-xl font-medium italic text-foreground leading-relaxed">
                      I build practical, maintainable solutions with learning and growth in mind.
                    </p>
                    <span className="text-primary text-6xl font-serif absolute -bottom-12 -right-4 opacity-30 select-none">"</span>
                  </div>
                </div>
              </div>

              {/* Highlights/Skills Cards */}
              <div className="grid sm:grid-cols-2 gap-6 animate-fade-in animation-delay-300">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="glass p-8 rounded-3xl border border-white/5 relative group transition-all duration-500 [transform-style:preserve-3d] hover:[transform:perspective(1000px)_rotateX(10deg)_rotateY(-10deg)] hover:border-primary/50 hover:shadow-[0_0_30px_rgba(32,178,166,0.3),0_0_60px_rgba(32,178,166,0.1),20px_20px_60px_rgba(0,0,0,0.5)]"
                  >
                    {/* Floating Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

                    {/* 3D Icon Container */}
                    <div className="w-14 h-14 rounded-2xl bg-secondary border border-white/5 flex items-center justify-center mb-6 [transform:translateZ(30px)] group-hover:bg-primary/20 group-hover:border-primary/60 group-hover:shadow-[0_0_20px_rgba(32,178,166,0.4)] transition-all duration-500 shadow-xl">
                      <item.icon className="w-7 h-7 text-primary group-hover:drop-shadow-[0_0_15px_rgba(32,178,166,0.9)]" />
                    </div>

                    {/* 3D Content */}
                    <div className="[transform:translateZ(50px)]">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="h-[2px] w-6 bg-gradient-to-r from-primary to-blue-500 rounded-full group-hover:w-10 transition-all duration-500" />
                        <h3 className="text-base font-black uppercase tracking-[0.15em] bg-gradient-to-r from-white via-white to-primary/50 group-hover:from-primary group-hover:to-blue-400 bg-clip-text text-transparent transition-all duration-500">
                          {item.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2 transition-all duration-500 [transform:translateZ(20px)]">
                        {item.description.split(",").map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-muted-foreground font-medium transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover:scale-105"
                          >
                            {skill.trim()}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Scanning Light Streak */}
                    <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                      <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] group-hover:left-[200%] transition-all duration-1000 ease-in-out" />
                    </div>

                    {/* Subtle Corner Accent */}
                    <div className="absolute bottom-6 right-6 w-2 h-2 bg-primary/20 rounded-full group-hover:bg-primary/80 group-hover:scale-[2] transition-all [transform:translateZ(60px)]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};