"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Django E-Commerce Application",
    description:
      "Full-stack e-commerce platform with user authentication, product catalog, shopping cart, and checkout functionality. Implemented secure payment integration and session management.",
    tech: ["Python", "Django", "PostgreSQL", "Bootstrap"],
    image: "/ecommerce-dashboard.png",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Algorithm Visualizer",
    description:
      "Interactive web application to visualize sorting and searching algorithms with step-by-step animations. Includes Quick Sort, Merge Sort, Binary Search, and Dijkstra's Algorithm.",
    tech: ["JavaScript", "HTML5 Canvas", "CSS"],
    image: "/algorithm-visualization-sorting-bars.jpg",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Network Security Scanner",
    description:
      "Command-line tool to scan networks for open ports and identify potential security vulnerabilities. Multi-threaded scanning with detailed security reports.",
    tech: ["Python", "Socket Programming", "Cybersecurity"],
    image: "/network-security-terminal-interface.jpg",
    github: "https://github.com",
    featured: false,
  },
  {
    title: "Data Structures Library in C++",
    description:
      "Custom data structure library including linked lists, stacks, queues, binary trees, and hash tables with template programming and comprehensive testing.",
    tech: ["C++", "OOP", "Template Programming"],
    image: "/data-structures-code-visualization.jpg",
    github: "https://github.com",
    featured: false,
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Professional portfolio website with responsive design using CSS Grid and Flexbox. Features smooth scrolling, interactive navigation, and dynamic content loading.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    image: "/modern-portfolio.png",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-20 bg-muted/30" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              {/* Project Image */}
              <div className={`relative group ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="overflow-hidden rounded-lg border border-border">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Project Info */}
              <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:text-right" : ""}`}>
                <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                <div className="bg-card border border-border rounded-lg p-6 mb-4">
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <div className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-sm font-mono text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={`flex gap-4 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold text-foreground">Other Projects</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:-translate-y-2 group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs font-mono text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
