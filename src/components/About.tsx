import { GraduationCap, Heart, Code2 } from "lucide-react";
import { Card } from "./ui/card";
import "./FloatingCircles.css"; // 👈 we'll create this file next

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Fresh Graduate",
      description:
        "Recently completed Uncommon bootcamp with hands-on experience in modern web development",
    },
    {
      icon: Code2,
      title: "Tech Enthusiast",
      description:
        "Passionate about writing clean code and building user-friendly applications",
    },
    {
      icon: Heart,
      title: "Eager Learner",
      description:
        "Always excited to learn new technologies and improve my skills every day",
    },
  ];

  return (
    <section id="about" className="relative py-20 bg-background overflow-hidden">
      {/* 🌈 Floating circles background */}
      <div className="floating-bg">
        {Array.from({ length: 15 }).map((_, i) => (
          <span key={i} className="circle" />
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <div className="mb-12 animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Hi! I’m Nyasha Thea Kufa, a passionate software developer and recent graduate of the Uncommon Bootcamp.
              I specialize in modern web development, creating clean, efficient, and user-centered digital experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
              I thrive on transforming ideas into functional, impactful solutions through code. My journey may be just beginning, but my drive to learn, grow, and contribute meaningfully to every project I take on is unwavering.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

