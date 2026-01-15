"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Award, BookOpen, Code2 } from "lucide-react"

const education = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    institution: "St. Columba's College, Hazaribagh",
    period: "Graduated: September 2022",
    description:
      "Specialized in Computer Systems, Networking, and Telecommunications. Relevant coursework included Data Structures, Algorithms, Database Management, Operating Systems, and Computer Networks.",
    icon: GraduationCap,
  },
  {
    title: "Intermediate - Science Stream",
    institution: "High School Charghara",
    period: "September 2019 - May 2021",
    description:
      "Studied Mathematics, Physics, Chemistry, and Biology. Built a strong foundation in analytical thinking and problem-solving.",
    icon: BookOpen,
  },
]

const achievements = [
  {
    title: "Competitive Programming",
    description: "Solved 300+ problems on various coding platforms focusing on algorithmic optimization",
    icon: Code2,
  },
  {
    title: "Open Source Contribution",
    description: "Active contributor to GitHub with multiple repositories showcasing personal projects",
    icon: Award,
  },
  {
    title: "Self-Learner",
    description:
      "Completed online courses in Django Web Development, Cybersecurity Fundamentals, and Advanced Algorithms",
    icon: BookOpen,
  },
  {
    title: "Technical Writing",
    description: "Maintained technical blog documenting problem-solving approaches and development best practices",
    icon: Award,
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Education & Achievements</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl font-semibold text-foreground mb-8 flex items-center gap-2"
            >
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </motion.h3>

            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                  <p className="text-sm text-primary font-mono mb-1">{item.period}</p>
                  <h4 className="text-lg font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-sm mb-2">{item.institution}</p>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl font-semibold text-foreground mb-8 flex items-center gap-2"
            >
              <Award className="h-6 w-6 text-primary" />
              Achievements & Leadership
            </motion.h3>

            <div className="grid gap-4">
              {achievements.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
