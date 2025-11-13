import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Mail, Github, Linkedin, MessageSquare } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [contentVisible, setContentVisible] = useState(false);

  // Show text after short loading delay
  useEffect(() => {
    const timer = setTimeout(() => setContentVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-start bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Floating stars */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white opacity-70 animate-twinkle"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <nav className="absolute top-6 left-1/2 transform -translate-x-1/2 flex space-x-6 z-20 bg-black/40 px-6 py-3 rounded-full backdrop-blur-md border border-white/10">
        <Button
          variant="ghost"
          className="text-white hover:text-blue-400"
          onClick={() => document.getElementById("hero").scrollIntoView({ behavior: "smooth" })}
        >
          Home
        </Button>

        <Button
          variant="ghost"
          className="text-white hover:text-blue-400"
          onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
        >
          About
        </Button>

        <Button
          variant="ghost"
          className="text-white hover:text-blue-400"
          onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
        >
          Projects
        </Button>

        {/* Contact Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <Button
            variant="ghost"
            className="text-white hover:text-blue-400"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            onMouseEnter={() => setDropdownOpen(true)}
          >
            Contact
          </Button>

          {dropdownOpen && (
            <div
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
              className="absolute top-full mt-2 right-0 bg-black/80 backdrop-blur-md border border-white/10 rounded-lg shadow-lg w-48 z-30 p-2"
            >
              <a
                href="mailto:nyashakufa29@gmail.com"
                className="flex items-center px-3 py-2 text-sm text-white hover:bg-blue-500/20 rounded-md"
              >
                <Mail className="w-4 h-4 mr-2" /> Email
              </a>
              <a
                href="https://github.com/TheaNyashaKufa8910"
                target="_blank"
                className="flex items-center px-3 py-2 text-sm text-white hover:bg-blue-500/20 rounded-md"
              >
                <Github className="w-4 h-4 mr-2" /> GitHub
              </a>
              <a
                href="www.linkedin.com/in/nyasha-thea-kufa-5218272a8"
                target="_blank"
                className="flex items-center px-3 py-2 text-sm text-white hover:bg-blue-500/20 rounded-md"
              >
                <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
              </a>
              <a
                href="#contact"
                className="flex items-center px-3 py-2 text-sm text-white hover:bg-blue-500/20 rounded-md"
              >
                <MessageSquare className="w-4 h-4 mr-2" /> Message
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Animated content */}
      <div
        className={`relative z-10 px-6 md:px-16 max-w-2xl transform transition-all duration-1000 ease-out ${
          contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
          Nyasha Thea Kufa
        </h1>
        <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-200">
          Crafting exceptional web experiences with cutting-edge technologies and a passion for innovation.
        </p>

        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 text-lg shadow-md hover:shadow-lg transition-all"
          onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
        >
          View My Work
        </Button>
      </div>
    </section>
  );
};

export default Hero;



