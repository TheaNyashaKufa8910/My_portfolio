import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import { Code, Palette, Database, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      color: "text-blue-500/20",
      accent: "text-blue-500",
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
    },
    {
      icon: Palette,
      color: "text-pink-500/20",
      accent: "text-pink-500",
      category: "Design & Styling",
      skills: ["Tailwind CSS", "Responsive Design", "UI/UX Basics"],
    },
    {
      icon: Database,
      color: "text-emerald-500/20",
      accent: "text-emerald-500",
      category: "Backend Basics",
      skills: ["Node.js", "REST APIs", "Database Fundamentals"],
    },
    {
      icon: Wrench,
      color: "text-yellow-500/20",
      accent: "text-yellow-500",
      category: "Tools & Others",
      skills: ["Git", "VS Code", "Chrome DevTools", "Problem Solving"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Here are the technologies and tools I've learned and worked with during my bootcamp journey
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                // ✅ overflow removed so icon can move freely
                className="relative bg-card p-8 rounded-lg shadow-md border border-border hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Large animated icon in background */}
                <motion.div
                  className={`absolute right-0 top-1/2 -translate-y-1/2 ${category.color}`}
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 8, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <category.icon className="w-32 h-32 opacity-800" />
                </motion.div>

                {/* Card header */}
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.category}
                  </h3>
                </div>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className={`px-3 py-1 text-sm bg-primary/10 ${category.accent} hover:bg-primary hover:text-primary-foreground transition-colors`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

