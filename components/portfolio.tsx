"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Play } from "lucide-react"

export function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Brand Identity System",
      category: "Branding",
      description: "Complete brand identity for a tech startup",
      image: "/images/branding.jpg",
      tags: ["Branding", "Logo", "Identity"],
      type: "image",
    },
    {
      id: 2,
      title: "Motion Graphics Reel",
      category: "Motion",
      description: "Dynamic showcase of logo animations",
      image: "/images/motion.jpg",
      tags: ["Motion", "Animation", "Typography"],
      type: "video",
    },
    {
      id: 3,
      title: "Social Media Campaign",
      category: "Social",
      description: "Instagram campaign with consistent visuals",
      image: "/images/graphicdesign.jpg",
      tags: ["Social", "Instagram", "Campaign"],
      type: "image",
    },
  ]

  const filteredProjects = projects

  return (
    <section id="portfolio" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
            <span className="text-zinc-600">Selected</span> <span className="text-white">Work</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Curated projects showcasing design, motion, and visual storytelling
          </p>
        </motion.div>

        {/* Portfolio Grid - Clean Aligned Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key="all"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {filteredProjects.map((project, index) => (
              <a
                key={project.id}
                href="https://behance.net/sandeshshrestha11"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
                tabIndex={0}
                aria-label={`View ${project.title} on Behance`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`group relative bg-zinc-900/50 border border-zinc-800 rounded-3xl overflow-hidden hover:border-zinc-700 transition-all duration-500`}
                >
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 h-64`}
                    />

                    {/* Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/80 flex items-center justify-center"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-4 hover:bg-white/20 transition-all"
                      >
                        {project.type === "video" ? (
                          <Play className="w-6 h-6 text-white" />
                        ) : (
                          <ExternalLink className="w-6 h-6 text-white" />
                        )}
                      </motion.div>
                    </motion.div>

                    {/* Category Badge */}
                    <div className="absolute top-6 left-6">
                      <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-zinc-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 mb-6 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="bg-zinc-800 text-zinc-400 px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </a>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-zinc-900/50 border border-zinc-800 p-12 rounded-3xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5" />

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to See More Work?</h3>
              <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
                These are just a few highlights. Let's discuss your project and create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.behance.net/gallery/229124081/Portfolio-Sandesh-Shrestha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-zinc-200 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  View Full Portfolio
                </a>
                <button className="border border-zinc-700 text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-900 transition-all duration-300">
                  Start a Project
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
