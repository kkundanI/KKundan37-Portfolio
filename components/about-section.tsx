"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, GraduationCap, Code, Shield } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const highlights = [
    {
      icon: GraduationCap,
      title: "BCA Graduate",
      description: "St. Columba's College, Hazaribagh",
    },
    {
      icon: Code,
      title: "300+ Problems",
      description: "Solved on coding platforms",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Ethical hacking & network security",
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Hazaribagh, Jharkhand, India",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm a passionate software developer with a Bachelor's degree in Computer Applications from St. Columba's
              College, Hazaribagh. My journey in technology began with a curiosity about how things work and has evolved
              into a deep expertise in web development, algorithms, and cybersecurity.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I specialize in building full-stack applications using Python, Django, and JavaScript. My experience spans
              from creating responsive web applications to developing network security tools and algorithm visualizers.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              When I'm not coding, you'll find me solving algorithmic challenges on competitive programming platforms,
              contributing to open-source projects, or writing technical blog posts about problem-solving approaches and
              development best practices.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <item.icon className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
