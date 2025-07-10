"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Briefcase, Zap } from "lucide-react"

export function About() {
  const timeline = [
    {
      date: "Jun 2024",
      title: "Design Intern",
      company: "Kathmandu Infotech",
      description: "First professional experience in the industry",
      icon: <Briefcase className="w-4 h-4" />,
    },
    {
      date: "Nov 2024",
      title: "Graphic Designer",
      company: "Merojob",
      description: "Full-time role focusing on digital marketing assets",
      icon: <MapPin className="w-4 h-4" />,
    },
    {
      date: "Aug 2025",
      title: "Freelance Creative",
      company: "Independent",
      description: "Launched freelance career specializing in motion graphics",
      icon: <Calendar className="w-4 h-4" />,
    },
  ]

  const skills = [
    { name: "Photoshop", level: 90 },
    { name: "Illustrator", level: 85 },
    { name: "After Effects", level: 80 },
    { name: "Premiere Pro", level: 75 },
    { name: "Adobe InDesign", level: 70 },
  ]

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
            <span className="text-zinc-600">About</span> <span className="text-white">Me</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Gen Z creative who believes in the power of visual storytelling
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-12">Journey</h3>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start gap-6 group"
                >
                  {/* Timeline Line */}
                  {index !== timeline.length - 1 && (
                    <div className="absolute left-6 top-14 w-px h-16 bg-gradient-to-b from-zinc-700 to-transparent" />
                  )}

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex-shrink-0 w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center text-white group-hover:border-zinc-700 transition-colors"
                  >
                    {item.icon}
                  </motion.div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-2 py-1 rounded">{item.date}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-zinc-400 font-medium mb-2">{item.company}</p>
                    <p className="text-zinc-500 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Philosophy</h3>
              <div className="space-y-6">
                <p className="text-zinc-400 leading-relaxed">
                  Design isn't just about making things look pretty—it's about solving problems, telling stories, and
                  creating emotional connections.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  I believe in the power of motion to bring static designs to life, creating experiences that capture
                  attention in our fast-paced digital world.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between"
                  >
                    <span className="text-white font-medium">{skill.name}</span>
                    <div className="flex items-center gap-4">
                      <div className="w-32 h-1 bg-zinc-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ delay: index * 0.1, duration: 1 }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-white to-zinc-400 rounded-full"
                        />
                      </div>
                      <span className="text-zinc-500 text-sm font-mono w-8">{skill.level}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
