"use client"

import { motion } from "framer-motion"
import { Palette, Video, Camera, Megaphone, ArrowUpRight, Star } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Brand Identity",
      description:
        "Complete brand packages that tell your story and connect with your audience through strategic design.",
      features: ["Logo Design", "Brand Guidelines", "Color Systems", "Typography", "Business Cards", "Letterheads"],
      price: "From रु15,000",
      accent: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Motion Graphics",
      description: "Dynamic animations that bring brands to life and capture attention in the digital space.",
      features: [
        "Logo Animation",
        "Explainer Videos",
        "Kinetic Typography",
        "Social Motion",
        "Intro/Outro",
        "Transitions",
      ],
      price: "From रु8,000",
      accent: "from-purple-500 to-pink-500",
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Social Media",
      description: "Eye-catching content that drives engagement and builds your online presence across platforms.",
      features: ["Instagram Posts", "Story Templates", "Animated Posts", "Campaign Design", "Highlights", "Covers"],
      price: "From रु5,000",
      accent: "from-green-500 to-emerald-500",
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Video Editing",
      description: "Professional editing for all platforms that keeps viewers engaged and drives results.",
      features: [
        "YouTube Videos",
        "Short-form Content",
        "Reels & TikToks",
        "Promotional Videos",
        "Podcasts",
        "Tutorials",
      ],
      price: "From रु3,500",
      accent: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
            <span className="text-zinc-600">Services</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Comprehensive creative services to help your brand stand out
          </p>
        </motion.div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative bg-zinc-900/50 border p-8 rounded-3xl transition-all duration-500 hover:border-zinc-700 group overflow-hidden border-zinc-800`}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`p-4 bg-gradient-to-br ${service.accent} rounded-2xl text-white shadow-lg`}
                  >
                    {service.icon}
                  </motion.div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-white">{service.price}</p>
                    <p className="text-zinc-500 text-sm">Starting price</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zinc-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-zinc-400 mb-6 leading-relaxed">{service.description}</p>

                <div className="grid grid-cols-2 gap-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center text-zinc-400 text-sm"
                    >
                      <div
                        className={`w-1.5 h-1.5 bg-gradient-to-r ${service.accent} rounded-full mr-2 flex-shrink-0`}
                      />
                      {feature}
                    </motion.div>
                  ))}
                </div>

                <button className="w-full bg-transparent border border-zinc-700 text-white py-4 rounded-2xl font-semibold hover:bg-white hover:text-black transition-all duration-300 group/btn flex items-center justify-center gap-2">
                  Get Started
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

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
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Create Something Unforgettable?
              </h3>
              <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
                Let's collaborate to bring your creative vision to life. Whether it's a complete rebrand or a single
                project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-zinc-200 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  Start a Project
                </a>
                <a
                  href="#portfolio"
                  className="border border-zinc-700 text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-900 transition-all duration-300 flex items-center justify-center"
                >
                  View Portfolio
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
