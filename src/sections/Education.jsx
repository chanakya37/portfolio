import { GraduationCap, Terminal, BookOpen, School } from "lucide-react";



const educationData = [

  {

    period: "2024 — Present",

    degree: "Software Engineering & Full Stack Specialization",

    institution: "NxtWave CCBP 4.0",

    icon: Terminal,

    description:

      "Intensive industry-ready program focused on mastering complex software engineering paradigms. Bridging the gap between academic theory and high-performance industrial standards with a focus on scalable MERN architectures and competitive programming.",

    technologies: ["Node.js", "React.js", "System Design", "Python", "DSA"],

    current: true,

  },

  {

    period: "2022 — 2026 (Expected)",

    degree: "B.Tech in Computer Science and Engineering (AI & ML)",

    institution: "Sri Venkateswara College of Engineering",

    icon: GraduationCap,

    description:

      "Specializing in Artificial Intelligence and Machine Learning. Maintaining a CGPA of 7.67 while building full-stack applications and ML models.",

    technologies: ["Python", "Machine Learning", "React.js", "Node.js", "SQL"],

    current: true,

  },

  {

    period: "2020 — 2022",

    degree: "Intermediate / Junior College",

    institution: "MGM Institutions",

    icon: BookOpen,

    description:

      "Completed higher secondary education with a focused curriculum in Mathematics and Science, achieving a 93% score.",

    technologies: ["Mathematics", "Physics", "Chemistry"],

    current: false,

  },

  {

    period: "2020",

    degree: "Secondary Schooling",

    institution: "Zilla Parishad High School Chemebedu",

    icon: School,

    description:

      "Foundation in basic sciences and mathematics with high academic performance, securing a 97% percentage.",

    technologies: ["General Science", "Languages", "Mathematics"],

    current: false,

  },

];



const educationCustomStyles = `

  .edu-bio-glow {

    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

    cursor: default;

  }

  .edu-bio-glow:hover {

    color: #ffffff;

    text-shadow: 0 0 15px rgba(32, 178, 166, 0.4);

    filter: brightness(1.2);

  }

  .vision-glow {

    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    cursor: pointer;

    display: inline-block;

  }

  .vision-glow:hover {

    text-shadow: 

      0 0 20px rgba(32, 178, 166, 1),

      0 0 40px rgba(32, 178, 166, 0.8),

      0 0 60px rgba(59, 130, 246, 0.6),

      0 0 80px rgba(139, 92, 246, 0.4);

    filter: brightness(1.3) drop-shadow(0 0 25px rgba(32, 178, 166, 0.6));

    transform: translateY(-2px) scale(1.02);

  }

  .edu-card-3d {

    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);

    transform-style: preserve-3d;

    perspective: 1000px;

  }

  .edu-card-3d:hover {

    transform: translateY(-15px) rotateX(8deg) rotateY(-8deg);

    box-shadow: 

      0 30px 60px rgba(0, 0, 0, 0.5),

      0 0 50px rgba(32, 178, 166, 0.3);

    border-color: rgba(32, 178, 166, 0.6) !important;

  }

  .edu-card-content {

    transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);

    transform-style: preserve-3d;

  }

  .edu-card-3d:hover .edu-card-content {

    transform: translateZ(60px);

  }

  @keyframes liquid-pulse-up {

    0% { top: 100%; }

    100% { top: -100%; }

  }

  .timeline-pulse {

    position: absolute;

    top: 0;

    left: 0;

    width: 100%;

    height: 150px;

    background: linear-gradient(to top, transparent, #20B2A6, transparent);

    animation: liquid-pulse-up 4s linear infinite;

  }

  @keyframes holo-glare {

    0% { transform: translateX(-150%) skewX(-25deg); }

    100% { transform: translateX(150%) skewX(-25deg); }

  }

  .holo-sweep {

    position: absolute;

    inset: 0;

    background: linear-gradient(90deg, transparent, rgba(32, 178, 166, 0.1), transparent);

    width: 200%;

    transform: translateX(-150%) skewX(-25deg);

    pointer-events: none;

    z-index: 1;

  }

  .edu-card-3d:hover .holo-sweep {

    animation: holo-glare 2s ease-in-out infinite;

  }

  @keyframes float-icon {

    0%, 100% { transform: translateZ(30px) translateY(0); }

    50% { transform: translateZ(30px) translateY(-10px); }

  }

  .floating-icon {

    animation: float-icon 3s ease-in-out infinite;

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

`;



export const Education = () => {

  return (

    <>

      <style>{educationCustomStyles}</style>

      <section id="education" className="pt-16 pb-12 relative overflow-hidden bg-[#05080a]">

        {/* Background Elements - Cyber Campus Theme */}

        <div className="absolute inset-0 pointer-events-none">

          {/* Base Layer */}

          <div className="absolute inset-0 bg-[#0a0f14]/50" />



          {/* Moving Aura Orbs */}

          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow" />

          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow animation-delay-2000" />



          {/* 3D Mesh Grid Floor (Top-down perspective for Education) */}

          <div className="absolute top-0 left-0 w-full h-[60%] opacity-20 [mask-image:linear-gradient(to_bottom,black,transparent)]">

            <div className="w-full h-full tech-grid-mesh [transform:perspective(1000px)_rotateX(-60deg)_translateY(-50px)] origin-top" />

          </div>



          {/* Floating Knowledge Nodes */}

          {[Terminal, GraduationCap, BookOpen, School].map((Icon, i) => (

            <div

              key={i}

              className="absolute opacity-20 hidden lg:block"

              style={{

                left: `${10 + (i * 25)}%`,

                top: `${30 + (Math.cos(i) * 20)}%`,

                animation: `float ${8 + i}s infinite ease-in-out`,

                animationDelay: `${i * 1.2}s`,

              }}

            >

              <Icon className="w-12 h-12 text-primary/40" />

            </div>

          ))}



          {/* Laser Streaks */}

          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent rotate-12" />

          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent -rotate-6" />

        </div>



        <div className="container mx-auto px-6 relative z-10">

          {/* Section Header */}

          <div className="max-w-3xl mb-16">

            <span

              className="text-primary text-sm

           font-bold tracking-[0.3em] uppercase animate-fade-in"

            >

              Academic Journey

            </span>

            <h2

              className="text-5xl md:text-6xl font-black

           mt-4 mb-6 animate-fade-in animation-delay-100

            text-white leading-tight"

            >

              Education that{" "}

              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-indigo-500 gradient-text-animate glow-text vision-glow">

                fuels my vision

              </span>

            </h2>



            <p

              className="text-lg text-muted-foreground

           animate-fade-in animation-delay-200 font-light leading-relaxed edu-bio-glow"

            >

              A timeline of my academic background, laying the technical foundation for

              my transition into the professional world of AI and Web Development.

            </p>

          </div>



          {/* Timeline */}

          <div className="relative">

            {/* Main Timeline Path */}

            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 md:-translate-x-1/2 overflow-hidden">

              <div className="timeline-pulse" />

            </div>



            <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/40 via-primary/20 to-transparent md:-translate-x-1/2 shadow-[0_0_20px_rgba(32,178,166,0.3)]" />



            {/* Timeline Items */}

            <div className="space-y-12">

              {educationData.map((edu, idx) => (

                <div

                  key={idx}

                  className="relative grid md:grid-cols-2 gap-8 animate-fade-in"

                  style={{ animationDelay: `${(idx + 1) * 150}ms` }}

                >

                  {/* Timeline Dot */}

                  <div className="absolute left-0 md:left-1/2 top-10 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">

                    {edu.current && (

                      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />

                    )}

                  </div>



                  {/* Content */}

                  <div

                    className={`pl-8 md:pl-0 ${idx % 2 === 0

                      ? "md:pr-16 md:text-right"

                      : "md:col-start-2 md:pl-16"

                      }`}

                  >

                    <div

                      className="glass p-8 rounded-3xl border border-white/5 transition-all duration-500 group relative overflow-hidden edu-card-3d"

                    >

                      {/* Holographic Glare */}

                      <div className="holo-sweep" />



                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />



                      <div className="edu-card-content flex gap-6 relative z-10">

                        {/* Floating Icon */}

                        <div className="hidden sm:flex shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/10 items-center justify-center border border-primary/20 floating-icon shadow-[0_0_20px_rgba(32,178,166,0.2)]">

                          <edu.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" />

                        </div>



                        <div className="flex-1">

                          <span className="text-xs text-primary font-bold tracking-widest uppercase mb-3 block">

                            {edu.period}

                          </span>

                          <h3 className="text-2xl font-black text-white group-hover:text-primary transition-colors duration-300">

                            {edu.degree}

                          </h3>

                          <p className="text-muted-foreground font-medium mt-1">{edu.institution}</p>

                          <p className="text-sm text-muted-foreground mt-4 leading-relaxed font-light">

                            {edu.description}

                          </p>

                          <div

                            className={`flex flex-wrap gap-2 mt-6 ${idx % 2 === 0 ? "md:justify-end" : ""

                              }`}

                          >

                            {edu.technologies.map((tech, techIdx) => (

                              <span

                                key={techIdx}

                                className="px-3 py-1 bg-primary/5 border border-primary/10 rounded-md text-[10px] font-bold text-primary/80 uppercase tracking-tighter"

                              >

                                {tech}

                              </span>

                            ))}

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

    </>

  );

};