import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A responsive portfolio website built with React and TypeScript, featuring a modern design with smooth animations and a contact form.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
      githubLink: "#",
      liveLink: "#",
      image: ".\src\components\images\portfolio-preview.PNG", 
    },
    {
      title: "Todo List Application",
      description:
        "A feature-rich todo list app with CRUD operations, built to practice state management and local storage implementation.",
      technologies: ["React", "JavaScript", "CSS", "Local Storage"],
      githubLink: "#",
      liveLink: "#",
      image: "/images/todo-preview.jpg",
    },
    {
      title: "Weather Dashboard",
      description:
        "An interactive weather dashboard that fetches real-time weather data from an API and displays it with beautiful visualizations.",
      technologies: ["React", "API Integration", "CSS", "REST APIs"],
      githubLink: "#",
      liveLink: "#",
      image: "/images/weather-preview.jpg",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Here are some projects I've built during my bootcamp to practice and showcase my skills
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl border border-border bg-card shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Hover Image Overlay */}
                {project.image && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                  </div>
                )}

                {/* Card Content */}
                <div className="relative z-10 p-6 flex flex-col h-full group-hover:opacity-80 transition-opacity duration-500">
                  <CardHeader className="p-0 mb-3">
                    <CardTitle className="text-xl text-foreground mb-1">{project.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col justify-between p-0">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="border-primary text-primary">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3 mt-auto">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        asChild
                      >
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>

                      <Button
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary-dark text-primary-foreground"
                        asChild
                      >
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
