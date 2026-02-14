import { ChevronLeft, ChevronRight, Quote, Cpu, Brain, Code2, Terminal, GraduationCap } from "lucide-react";

import { useState } from "react";



const testimonials = [

  {

    quote:

      "Chanakya possesses a remarkable flair for Machine Learning. His ability to optimize complex neural architectures while maintaining clean codebase standards is what truly sets him apart from his peers.",

    author: "Dr. Rajesh Kumar",

    role: "HOD, Computer Science (SVCE)",

    icon: <Cpu className="w-8 h-8" />,

    color: "from-blue-500 to-cyan-500",

  },

  {

    quote:

      "An exceptional problem solver. During his AI/ML projects, he demonstrated a rare maturity in handling large datasets and deriving meaningful insights where most students struggled with the complexity.",

    author: "Prof. Sneha Reddy",

    role: "AI & ML Specialization Lead",

    icon: <Brain className="w-8 h-8" />,

    color: "from-purple-500 to-pink-500",

  },

  {

    quote:

      "One of our most dedicated learners in CCBP. His mastery of the MERN stack is impressive; he doesn't just write code, he engineers scalable solutions following rigorous industrial practices.",

    author: "Mr. Anand Varma",

    role: "Senior Technical Mentor, NxtWave",

    icon: <Code2 className="w-8 h-8" />,

    color: "from-amber-500 to-orange-500",

  },

  {

    quote:

      "Chanakya's technical curiosity is contagious. Whether it's a lab experiment or a full-stack application, his focus on end-to-end implementation and high performance is highly commendable.",

    author: "Prof. Vijay Shankar",

    role: "Full Stack Lab Coordinator",

    icon: <Terminal className="w-8 h-8" />,

    color: "from-emerald-500 to-teal-500",

  },

];



const testimonialCustomStyles = `

  .tech-grid-mesh {

    background-image: 

      linear-gradient(rgba(32, 178, 166, 0.1) 1px, transparent 1px),

      linear-gradient(90deg, rgba(32, 178, 166, 0.1) 1px, transparent 1px);

    background-size: 60px 60px;

  }

  @keyframes spin-slow {

    from { transform: rotate(0deg); }

    to { transform: rotate(360deg); }

  }

  @keyframes spin-reverse {

    from { transform: rotate(360deg); }

    to { transform: rotate(0deg); }

  }

  .animate-spin-slow {

    animation: spin-slow 20s linear infinite;

  }

  .animate-spin-reverse {

    animation: spin-reverse 25s linear infinite;

  }

  @keyframes float {

    0%, 100% { transform: translateY(0) translateX(0); }

    33% { transform: translateY(-20px) translateX(10px); }

    66% { transform: translateY(10px) translateX(-15px); }

  }

  @keyframes pulse-slow {

    0%, 100% { opacity: 0.2; transform: scale(1); }

    50% { opacity: 0.5; transform: scale(1.15); }

  }

  .animate-pulse-slow {

    animation: pulse-slow 8s ease-in-out infinite;

  }

  .tech-ring {

    border: 1px dashed rgba(32, 178, 166, 0.2);

    border-radius: 50%;

    position: absolute;

    top: 50%;

    left: 50%;

    transform: translate(-50%, -50%);

  }

  .testi-card-3d {

    transition: all 0.8s cubic-bezier(0.15, 0.85, 0.35, 1);

    transform-style: preserve-3d;

    perspective: 1500px;

  }

  .testi-card-3d:hover {

    transform: translateY(-20px) rotateX(12deg) rotateY(-8deg);

    box-shadow: 

      0 50px 100px rgba(0, 0, 0, 0.7),

      0 0 80px rgba(32, 178, 166, 0.4);

    border-color: rgba(255, 255, 255, 0.5) !important;

  }

  .layer-primary {

    transition: transform 0.8s cubic-bezier(0.15, 0.85, 0.35, 1);

    transform-style: preserve-3d;

  }

  .testi-card-3d:hover .layer-primary {

    transform: translateZ(100px);

  }

  .layer-secondary {

    transition: transform 1s cubic-bezier(0.15, 0.85, 0.35, 1);

    transform-style: preserve-3d;

  }

  .testi-card-3d:hover .layer-secondary {

    transform: translateZ(60px);

  }

  @keyframes cosmic-bloom {

    0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }

    100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0.15; }

  }

  .hover-aura {

    position: absolute;

    top: 50%;

    left: 50%;

    width: 100%;

    height: 100%;

    background: radial-gradient(circle, var(--color-primary), transparent 70%);

    pointer-events: none;

    opacity: 0;

    transition: opacity 0.5s ease;

    z-index: 0;

  }

  .testi-card-3d:hover .hover-aura {

    opacity: 0.15;

    animation: cosmic-bloom 2s ease-out infinite alternate;

  }

  .faculty-glow {

    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    display: inline-block;

    position: relative;

    color: #ffffff;

    background: linear-gradient(45deg, 

      rgba(32, 178, 166, 0.1) 0%, 

      rgba(59, 130, 246, 0.1) 50%, 

      rgba(139, 92, 246, 0.1) 100%);

    background-clip: text;

    -webkit-background-clip: text;

    -webkit-text-fill-color: transparent;

    padding: 2px 6px;

    border-radius: 4px;

  }

  .faculty-glow:hover {

    text-shadow: 

      0 0 20px rgba(32, 178, 166, 1),

      0 0 40px rgba(59, 130, 246, 0.8),

      0 0 60px rgba(139, 92, 246, 0.6),

      0 0 80px rgba(236, 72, 153, 0.4);

    filter: brightness(1.3) drop-shadow(0 0 25px rgba(32, 178, 166, 0.8));

    transform: translateY(-3px) scale(1.05);

    color: #ffffff;

    border-color: rgba(32, 178, 166, 0.8);

  }

  .faculty-glow::before {

    content: '';

    position: absolute;

    top: -2px;

    left: -2px;

    right: -2px;

    bottom: -2px;

    background: linear-gradient(45deg, 

      rgba(32, 178, 166, 0.1) 0%, 

      rgba(59, 130, 246, 0.1) 50%, 

      rgba(139, 92, 246, 0.1) 100%);

    border-radius: 4px;

    z-index: -1;

    opacity: 0;

    transition: opacity 0.4s ease;

  }

  .faculty-glow:hover::before {

    opacity: 1;

  }

`;



export const Testimonials = () => {

  const [activeIdx, setActiveIdx] = useState(0);



  const next = () => {

    setActiveIdx((prev) => (prev + 1) % testimonials.length);

  };



  const previous = () => {

    setActiveIdx(

      (prev) => (prev - 1 + testimonials.length) % testimonials.length

    );

  };

  return (

    <section id="testimonials" className="pt-12 pb-12 relative overflow-hidden bg-[#05080a]">

      <style>{testimonialCustomStyles}</style>



      {/* Background Elements - Kinetic Aura Theme */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Base Layer */}

        <div className="absolute inset-0 bg-[#0a0f14]/80" />



        {/* 3D Kinetic Mesh Walls */}

        <div className="absolute top-0 left-[-5%] w-[40%] h-full opacity-10 [mask-image:linear-gradient(to_right,black,transparent)]">

          <div className="w-full h-full tech-grid-mesh [transform:perspective(1200px)_rotateY(45deg)_translateZ(-50px)] origin-left" />

        </div>

        <div className="absolute top-0 right-[-5%] w-[40%] h-full opacity-10 [mask-image:linear-gradient(to_left,black,transparent)]">

          <div className="w-full h-full tech-grid-mesh [transform:perspective(1200px)_rotateY(-45deg)_translateZ(-50px)] origin-right" />

        </div>



        {/* Rotating Tech Rings */}

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20">

          <div className="tech-ring w-full h-full animate-spin-slow" />

          <div className="tech-ring w-[85%] h-[85%] animate-spin-reverse border-primary/10" />

          <div className="tech-ring w-[70%] h-[70%] animate-spin-slow border-blue-500/5 rotate-45" />

        </div>



        {/* Dynamic Aura System */}

        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] animate-pulse-slow" />

        <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] animate-pulse-slow animation-delay-2000" />



        {/* Floating Data Particles */}

        {[...Array(12)].map((_, i) => (

          <div

            key={i}

            className="absolute w-1 h-1 bg-primary/30 rounded-full"

            style={{

              left: `${Math.random() * 100}%`,

              top: `${Math.random() * 100}%`,

              animation: `float ${10 + Math.random() * 10}s infinite ease-in-out`,

              animationDelay: `${Math.random() * 5}s`,

              boxShadow: '0 0 8px rgba(32, 178, 166, 0.4)'

            }}

          />

        ))}



        {/* Scanner Beams */}

        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-pulse" />

        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent animate-pulse animation-delay-1500" />

      </div>

      <div

        className="container mx-auto 

       px-6 relative z-10"

      >

        {/* Section Header */}

        <div

          className="text-center max-w-3xl 

        mx-auto mb-16"

        >

          <span

            className="text-primary

          text-sm font-bold tracking-[0.3em] 

          uppercase animate-fade-in"

          >

            Academic Endorsements

          </span>

          <h2

            className="text-4xl md:text-5xl 

          font-black mt-4 mb-6 animate-fade-in 

          animation-delay-100 text-white mb-3"

          >

            Endorsed by{" "}

            <span

              className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-indigo-500 gradient-text-animate glow-text vision-glow pt-2"

            >

              Engineering Faculty

            </span>

          </h2>

        </div>



        {/* Testimonial Carousel */}

        <div className="max-w-4xl mx-auto mt-12">

          <div className="relative">

            {/* Main Testimonial */}

            <div

              key={activeIdx}

              className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-only min-h-[400px] flex flex-col justify-between testi-card-3d group relative overflow-hidden bg-white/[0.02]"

            >

              {/* Cinematic Bloom Layer */}

              <div className="hover-aura" />



              <div className="flex flex-col justify-between h-full relative z-10">

                <div className="relative layer-primary">

                  <div className="absolute -top-4 -left-4 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center z-20 shadow-lg rotate-12 group-hover:rotate-0 transition-transform duration-500">

                    <Quote className="w-7 h-7 text-white" />

                  </div>



                  <blockquote className="text-xl md:text-3xl font-medium leading-relaxed mb-8 pt-10 text-white/90 drop-shadow-2xl italic">

                    "{testimonials[activeIdx].quote}"

                  </blockquote>

                </div>



                <div className="flex items-center gap-6 layer-secondary">

                  <div className="relative group/avatar">

                    <div className={`absolute -inset-2 bg-gradient-to-r ${testimonials[activeIdx].color} rounded-full blur-md opacity-40 group-hover:opacity-100 transition-opacity duration-700`} />

                    <div className={`relative w-20 h-20 rounded-full bg-[#0a0f14] border-2 border-white/10 flex items-center justify-center text-white shadow-2xl overflow-hidden group-hover:border-primary/50 transition-colors`}>

                      <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[activeIdx].color} opacity-10`} />

                      <div className="relative z-10 flex flex-col items-center justify-center">

                        {testimonials[activeIdx].icon}

                        <span className="text-[10px] font-bold mt-1 opacity-50 tracking-tighter uppercase">

                          {testimonials[activeIdx].author.split(' ').map(n => n[0]).join('')}

                        </span>

                      </div>

                    </div>

                    {/* Academic Badge */}

                    <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-primary rounded-full border-2 border-[#05080a] flex items-center justify-center shadow-lg z-20">

                      <GraduationCap className="w-3.5 h-3.5 text-white" />

                    </div>

                  </div>

                  <div>

                    <div className="font-black text-2xl text-white tracking-tight">

                      {testimonials[activeIdx].author}

                    </div>

                    <div className="text-primary font-bold tracking-widest text-xs uppercase mt-1">

                      {testimonials[activeIdx].role}

                    </div>

                  </div>

                </div>

              </div>

            </div>



            {/* Testimonials Navigation */}

            <div className="flex items-center justify-center gap-4 mt-8">

              <button

                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"

                onClick={previous}

              >

                <ChevronLeft />

              </button>



              <div className="flex gap-2">

                {testimonials.map((_, idx) => (

                  <button

                    key={idx}

                    onClick={() => setActiveIdx(idx)}

                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIdx

                      ? "w-8 bg-primary"

                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"

                      }`}

                  />

                ))}

              </div>



              <button

                onClick={next}

                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"

              >

                <ChevronRight />

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

};