import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/Components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "chanakyagangabathina77@gmail.com",
    href: "mailto:chanakyagangabathina77@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7569769414",
    href: "tel:+917569769414",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tirupati, Andhra Pradesh",
    href: "#",
  },
];

const contactCustomStyles = `
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
  @keyframes rotate-3d-core {
    0% { transform: perspective(1000px) rotateX(15deg) rotateY(0deg); }
    50% { transform: perspective(1000px) rotateX(25deg) rotateY(180deg); }
    100% { transform: perspective(1000px) rotateX(15deg) rotateY(360deg); }
  }
  .animate-rotate-3d-core {
    animation: rotate-3d-core 20s ease-in-out infinite;
  }
  @keyframes float-depth {
    0%, 100% { transform: translateZ(20px) translateY(0); }
    50% { transform: translateZ(-50px) translateY(-20px); }
  }
  .contact-card-3d {
    transition: all 0.8s cubic-bezier(0.15, 0.85, 0.35, 1);
    transform-style: preserve-3d;
    perspective: 2000px;
  }
  .contact-card-3d:hover {
    transform: translateY(-20px) rotateX(8deg) rotateY(-8deg);
    box-shadow: 
      0 60px 120px rgba(0, 0, 0, 0.8),
      0 0 100px rgba(32, 178, 166, 0.4);
    border-color: rgba(32, 178, 166, 0.8) !important;
  }
  .layer-3d-float {
    transition: transform 1s cubic-bezier(0.15, 0.85, 0.35, 1);
  }
  .contact-card-3d:hover .layer-3d-float {
    transform: translateZ(80px);
  }
  @keyframes core-sparkle {
    0%, 100% { filter: brightness(1) blur(0px); }
    50% { filter: brightness(1.5) blur(2px); }
  }
  .neural-core-node {
    position: absolute;
    width: 6px;
    height: 6px;
    background: #20B2A6;
    border-radius: 50%;
    box-shadow: 0 0 15px #20B2A6, 0 0 30px #20B2A6;
    animation: core-sparkle 3s ease-in-out infinite;
  }
  .data-pillar {
    position: absolute;
    bottom: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(to top, #20B2A6, transparent);
    opacity: 0.15;
    filter: blur(1px);
  }
  @keyframes pulse-ring {
    0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
    50% { opacity: 0.2; }
    100% { transform: translate(-50%, -50%) scale(1.4); opacity: 0; }
  }
  .animate-pulse-ring {
    animation: pulse-ring 4s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
  }
  @keyframes spin-reverse {
    from { transform: rotate(360deg); }
    to { transform: rotate(0deg); }
  }
  .animate-spin-reverse {
    animation: spin-reverse 25s linear infinite;
  }
  @keyframes float {
    0%, 100% { transform: translateY(0) translateX(0); }
    33% { transform: translateY(-30px) translateX(15px); }
    66% { transform: translateY(15px) translateX(-20px); }
  }
  @keyframes pulse-slow {
    0%, 100% { opacity: 0.2; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.15); }
  }
  .animate-pulse-slow {
    animation: pulse-slow 8s ease-in-out infinite;
  }
  .tech-ring {
    border: 1px dashed rgba(32, 178, 166, 0.3);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .faculty-glow {
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: inline-block;
  }
  .faculty-glow:hover {
    filter: drop-shadow(0 0 12px rgba(32, 178, 166, 0.8));
    transform: translateY(-2px) scale(1.05);
  }
  @keyframes float-3d-status {
    0%, 100% { transform: perspective(1000px) rotateX(2deg) rotateY(-2deg) translateZ(0px); }
    25% { transform: perspective(1000px) rotateX(-2deg) rotateY(2deg) translateZ(15px); }
    50% { transform: perspective(1000px) rotateX(2deg) rotateY(5deg) translateZ(25px); }
    75% { transform: perspective(1000px) rotateX(5deg) rotateY(-2deg) translateZ(15px); }
  }
  @keyframes float-3d-info {
    0% { transform: perspective(1200px) rotateX(-5deg) rotateY(5deg) scale3d(1, 1, 1); }
    33% { transform: perspective(1200px) rotateX(3deg) rotateY(-8deg) scale3d(1.02, 1.02, 1.02); }
    66% { transform: perspective(1200px) rotateX(-2deg) rotateY(10deg) scale3d(0.98, 0.98, 0.98); }
    100% { transform: perspective(1200px) rotateX(-5deg) rotateY(5deg) scale3d(1, 1, 1); }
  }
  .animate-info-3d {
    animation: float-3d-info 15s ease-in-out infinite;
    transform-style: preserve-3d;
  }
  @keyframes neon-scan {
    0% { top: -100%; opacity: 0; }
    50% { opacity: 0.5; }
    100% { top: 200%; opacity: 0; }
  }
  .neon-scanner {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to bottom, transparent, rgba(32, 178, 166, 0.2), transparent);
    animation: neon-scan 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    pointer-events: none;
  }
  .info-corner {
    position: absolute;
    width: 20px;
    height: 20px;
    border: 2px solid var(--color-primary);
    opacity: 0.3;
  }
  @keyframes corner-glow {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.1); }
  }
  .info-corner-glow {
    animation: corner-glow 3s ease-in-out infinite;
  }
  .info-card-3d {
    transform-style: preserve-3d;
    perspective: 1200px;
    transition: all 0.5s ease;
  }
  .info-card-3d:hover {
    border-color: rgba(32, 178, 166, 0.5) !important;
    box-shadow: 0 0 50px rgba(32, 178, 166, 0.1);
  }
  .icon-layer-3d {
    transform: translateZ(60px);
    transform-style: preserve-3d;
    transition: transform 0.5s ease;
  }
  .text-layer-3d {
    transform: translateZ(30px);
    transform-style: preserve-3d;
    transition: transform 0.5s ease;
  }
  .info-card-3d:hover .icon-layer-3d { transform: translateZ(90px); }
  .info-card-3d:hover .text-layer-3d { transform: translateZ(50px); }
  @keyframes data-stream {
    0% { transform: translateY(-100%); opacity: 0; }
    50% { opacity: 0.1; }
    100% { transform: translateY(100%); opacity: 0; }
  }
  .data-stream-line {
    position: absolute;
    width: 1px;
    height: 50%;
    background: linear-gradient(to bottom, transparent, var(--color-primary), transparent);
    animation: data-stream 4s linear infinite;
  }
  .status-card-3d {
    transition: border-color 0.6s, box-shadow 0.6s;
    transform-style: preserve-3d;
    perspective: 1000px;
    border-color: rgba(34, 197, 94, 0.2) !important;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
  .status-card-3d:hover {
    border-color: rgba(34, 197, 94, 0.5) !important;
    box-shadow: 0 20px 50px rgba(34, 197, 94, 0.15);
  }
  .status-layer-3d {
    transform: translateZ(30px);
    transform-style: preserve-3d;
  }
  .status-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, rgba(34, 197, 94, 0.1) 0%, transparent 70%);
    animation: pulse-slow 4s ease-in-out infinite;
    pointer-events: none;
  }
  .hover-glow-paragraph {
    transition: all 0.3s ease;
    cursor: pointer;
  }
  .hover-glow-paragraph:hover {
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 
      0 0 15px rgba(32, 178, 166, 0.5),
      0 0 30px rgba(32, 178, 166, 0.3),
      0 0 45px rgba(59, 130, 246, 0.2);
    transform: translateY(-2px);
  }
  .form-input-enhanced {
    position: relative;
    transition: all 0.3s ease;
  }
  .form-input-enhanced:focus {
    background: rgba(32, 178, 166, 0.05);
    border-color: rgba(32, 178, 166, 0.6) !important;
    box-shadow: 
      0 0 20px rgba(32, 178, 166, 0.3),
      0 0 40px rgba(32, 178, 166, 0.1),
      inset 0 0 15px rgba(32, 178, 166, 0.05);
    transform: translateY(-2px);
  }
  .form-input-enhanced:hover {
    border-color: rgba(32, 178, 166, 0.3);
    background: rgba(255, 255, 255, 0.08);
  }
  .form-label-enhanced {
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 0.75rem;
    font-weight: 700;
  }
  @keyframes border-flow {
    0%, 100% { 
      background-position: 0% 50%;
    }
    50% { 
      background-position: 100% 50%;
    }
  }
  .form-container-glow {
    position: relative;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.02) 0%,
      rgba(32, 178, 166, 0.03) 50%,
      rgba(59, 130, 246, 0.02) 100%
    );
    background-size: 200% 200%;
    animation: border-flow 8s ease infinite;
  }
  .form-container-glow::before {
    content: '';
    position: absolute;
    inset: -1px;
    background: linear-gradient(
      135deg,
      rgba(32, 178, 166, 0.2),
      rgba(59, 130, 246, 0.2),
      rgba(139, 92, 246, 0.2)
    );
    background-size: 200% 200%;
    border-radius: 1.5rem;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.5s ease;
    animation: border-flow 8s ease infinite;
  }
  .form-container-glow:hover::before {
    opacity: 0.5;
  }
`;

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success' or 'error'
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables."
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Email Sent Successfully",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus({
        type: "error",
        message:
          error.text || "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="pt-12 pb-32 relative overflow-hidden bg-[#05080a]">
      <style>{contactCustomStyles}</style>

      {/* Background Elements - Quantum Neural Core Theme */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Base Layer */}
        <div className="absolute inset-0 bg-[#05080a]" />

        {/* 3D Quantum Core Centerpiece */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] [perspective:2000px] scale-150 opacity-40">
          <div className="absolute inset-0 animate-rotate-3d-core" style={{ transformStyle: 'preserve-3d' }}>
            <div className="tech-ring w-full h-full border-primary/20" />
            <div className="tech-ring w-[90%] h-[90%] border-blue-500/10 rotate-90" />
            <div className="tech-ring w-[70%] h-[70%] border-primary/40 dashed rotate-45" />

            {/* Core Neural Cluster */}
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="neural-core-node"
                style={{
                  left: `${50 + Math.sin(i * 1.5) * 20}%`,
                  top: `${50 + Math.cos(i * 1.5) * 20}%`,
                  animationDelay: `${i * 0.2}s`,
                  boxShadow: `0 0 20px ${i % 2 === 0 ? '#20B2A6' : '#3b82f6'}`
                }}
              />
            ))}
          </div>

          {/* Pulsing Energy Waves */}
          <div className="tech-ring w-[50%] h-[50%] animate-pulse-ring border-primary/30" />
          <div className="tech-ring w-[80%] h-[80%] animate-pulse-ring border-blue-400/20 animation-delay-1000" />
        </div>

        {/* Cinematic God Rays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-blue-600/5 mt-[-10%]" />

        {/* Floating Neural Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-primary/40 rounded-full blur-[1px]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${12 + Math.random() * 8}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
              boxShadow: '0 0 12px rgba(32, 178, 166, 0.6)'
            }}
          />
        ))}

      </div>

      <div className="container mx-auto px-6 relative z-20">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-primary text-sm font-bold tracking-[0.3em] uppercase animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mt-4 mb-12 animate-fade-in animation-delay-100 text-white leading-[1.2] drop-shadow-2xl">
            Let's build{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-indigo-500 gradient-text-animate glow-text vision-glow">
              something great
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200 max-w-2xl mx-auto leading-relaxed hover-glow-paragraph">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-stretch">
          <div className="glass p-8 rounded-3xl border border-white/10 animate-fade-in animation-delay-300 backdrop-blur-xl h-full flex flex-col form-container-glow">
            <div className="flex-1">
              <form className="space-y-6 h-full flex flex-col" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block mb-2 text-primary/90 form-label-enhanced">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your name..."
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 rounded-xl border border-white/10 outline-none text-white form-input-enhanced"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-primary/90 form-label-enhanced">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 rounded-xl border border-white/10 outline-none text-white form-input-enhanced"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-primary/90 form-label-enhanced">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message..."
                    className="w-full px-4 py-3 bg-white/5 rounded-xl border border-white/10 outline-none resize-none text-white form-input-enhanced"
                  />
                </div>

                <Button className="w-full" type="submit" size="lg" disabled={isLoading}>
                  {isLoading ? <>Sending...</> : <>Send Message <Send className="w-5 h-5 ml-2" /></>}
                </Button>

                {submitStatus.type && (
                  <div className={`flex items-center gap-3 p-4 rounded-xl ${submitStatus.type === "success" ? "bg-green-500/10 border border-green-500/20 text-green-400" : "bg-red-500/10 border border-red-500/20 text-red-400"}`}>
                    {submitStatus.type === "success" ? <CheckCircle className="w-5 h-5 flex-shrink-0" /> : <AlertCircle className="w-5 h-5 flex-shrink-0" />}
                    <p className="text-sm">{submitStatus.message}</p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Info Column */}
          <div className="animate-fade-in animation-delay-400 h-full flex flex-col gap-6">
            {/* Direct Channels Card - Holographic Upgrade */}
            <div className="glass rounded-3xl p-10 border border-white/10 bg-white/[0.01] backdrop-blur-2xl animate-info-3d info-card-3d relative overflow-hidden group/info">
              {/* Corner Accents */}
              <div className="info-corner top-0 left-0 border-r-0 border-b-0 rounded-tl-2xl info-corner-glow" />
              <div className="info-corner top-0 right-0 border-l-0 border-b-0 rounded-tr-2xl info-corner-glow" />
              <div className="info-corner bottom-0 left-0 border-r-0 border-t-0 rounded-bl-2xl info-corner-glow" />
              <div className="info-corner bottom-0 right-0 border-l-0 border-t-0 rounded-br-2xl info-corner-glow" />

              {/* Animated Scanner Beam */}
              <div className="neon-scanner" />

              {/* Background Tech Mesh */}
              <div className="absolute inset-0 tech-grid-mesh opacity-5 scale-150" />

              <div className="space-y-8 relative z-10">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-6 p-2 group transition-all"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="icon-layer-3d">
                      <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-500 shadow-[0_0_20px_rgba(32,178,166,0.1)]">
                        <item.icon className="w-6 h-6 text-primary" />
                        {/* 3D Reflection Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                      </div>
                    </div>

                    <div className="text-layer-3d">
                      <div className="text-xs text-primary/60 font-bold uppercase tracking-[0.2em] mb-1">
                        {item.label}
                      </div>
                      <div className="text-lg font-bold text-white/90 group-hover:text-white transition-colors tracking-tight">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status Card */}
            <div className="glass rounded-3xl p-8 border border-white/10 bg-white/[0.02] backdrop-blur-xl flex-grow flex flex-col justify-center status-card-3d animate-float-3d group/status relative overflow-hidden">
              <div className="status-glow" />
              <div className="status-layer-3d">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_#22c55e]" />
                  <span className="font-medium text-green-400 group-hover/status:text-white transition-colors uppercase tracking-widest text-xs">Currently Available</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed group-hover/status:text-white/90 transition-colors">
                  I'm currently open to new opportunities and exciting projects.
                  Whether you need a full-time engineer or a freelance consultant, let's talk!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};