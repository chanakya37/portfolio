import { Button } from "../Components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#testimonials", label: "Testimonials" },
];

const navbarCursorStyles = `
  .navbar-cursor {
    position: fixed;
    width: 24px;
    height: 24px;
    border: 2px solid #20B2A6;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.15s ease, background-color 0.3s ease;
    transform: translate(-50%, -50%);
    background: radial-gradient(circle, rgba(32, 178, 166, 0.2), transparent);
    box-shadow: 
      0 0 20px rgba(32, 178, 166, 0.6),
      0 0 40px rgba(59, 130, 246, 0.4),
      inset 0 0 10px rgba(32, 178, 166, 0.3);
  }
  .navbar-cursor.active {
    background: radial-gradient(circle, rgba(32, 178, 166, 0.4), transparent);
    transform: translate(-50%, -50%) scale(1.3);
    box-shadow: 
      0 0 30px rgba(32, 178, 166, 0.8),
      0 0 60px rgba(59, 130, 246, 0.6),
      inset 0 0 15px rgba(32, 178, 166, 0.5);
  }
  @keyframes cursor-pulse {
    0%, 100% { 
      border-color: #20B2A6;
      box-shadow: 
        0 0 20px rgba(32, 178, 166, 0.6),
        0 0 40px rgba(59, 130, 246, 0.4),
        inset 0 0 10px rgba(32, 178, 166, 0.3);
    }
    50% { 
      border-color: #3B82F6;
      box-shadow: 
        0 0 30px rgba(59, 130, 246, 0.8),
        0 0 60px rgba(139, 92, 246, 0.6),
        inset 0 0 15px rgba(59, 130, 246, 0.5);
    }
  }
  .navbar-cursor.pulsing {
    animation: cursor-pulse 2s ease-in-out infinite;
  }
  .navbar-section {
    cursor: none !important;
  }
`;

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight px-4 py-2 rounded-lg border border-transparent hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
        >
          GC<span className="text-primary group-hover:glow-text transition-all">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1 border border-primary/30 hover:border-primary/60 transition-all duration-500 glow-border">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-full transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button onClick={handleContactClick} size="sm" className="glow-border border border-primary/30 hover:border-primary/60">Contact Me</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}

            <Button onClick={handleContactClick} className="glow-border border border-primary/30 hover:border-primary/60">
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};