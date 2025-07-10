"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Instagram, Linkedin, Github, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// Add Behance SVG icon
const BehanceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 16 16" className="w-5 h-5">
    <path fill="currentColor" d="M1.5 3.5h13a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5Zm.5 1v7h12v-7h-12Zm2.654 1c.461 0 .887.035 1.278.14.39.07.711.216.996.391s.497.426.641.747c.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922s.461.957.461 1.563c0 .496-.105.922-.285 1.278a2.3 2.3 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.3 5.3 0 0 1-1.278.176H2.17V5.5h2.484Zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a1 1 0 0 0-.32-.355 1.8 1.8 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005Zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305Zm6.858-.035q.428.427 1.278.426c.39 0 .746-.106 1.032-.286q.426-.32.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.1 4.1 0 0 1-1.527-.285 2.8 2.8 0 0 1-1.137-.782 2.85 2.85 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4 4 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396m2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176s-.356.25-.496.39a.96.96 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132Zm-3.127-3.728h3.978v.957h-3.978z"/>
  </svg>
)

export function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "sandeshstha67@gmail.com",
      href: "mailto:sandeshstha67@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+977 9805364156",
      href: "tel:+977980536415",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Thapagaun, New Baneshwor",
      href: "https://www.google.com/maps/place/Thapagaun,+New+Baneshwor,+Kathmandu,+Nepal/",
    },
  ]

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, label: "Instagram", href: "https://instagram.com/sandesh__shrestha" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "https://linkedin.com/in/sandeshshrestha7" },
    { icon: <BehanceIcon />, label: "Behance", href: "https://behance.net/sandeshshrestha11" },
  ]

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
            <span className="text-zinc-600">Let's Make</span>
            <br />
            <span className="text-white">Something</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's collaborate.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Send a message</h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">First Name</label>
                  <Input
                    type="text"
                    placeholder="John"
                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-zinc-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Last Name</label>
                  <Input
                    type="text"
                    placeholder="Doe"
                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-zinc-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-zinc-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Project Type</label>
                <select className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-zinc-600 focus:outline-none">
                  <option>Select a service</option>
                  <option>Brand Identity</option>
                  <option>Motion Graphics</option>
                  <option>Social Media Design</option>
                  <option>Video Editing</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Budget Range</label>
                <select className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-zinc-600 focus:outline-none">
                  <option>Select budget range</option>
                  <option>रु15,000 - रु30,000</option>
                  <option>रु30,000 - रु50,000</option>
                  <option>रु50,000 - रु1,00,000</option>
                  <option>रु1,00,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Project Details</label>
                <Textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-zinc-600 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black py-4 rounded-lg font-semibold hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                Always excited to work on new projects and collaborate with creative minds.
              </p>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-all group"
                  >
                    <div className="text-zinc-400 group-hover:text-white transition-colors">{item.icon}</div>
                    <div>
                      <p className="text-sm text-zinc-500">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-6">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <h4 className="text-xl font-bold text-white">Currently Available</h4>
              </div>
              <p className="text-zinc-400">
                Accepting new projects and collaborations. Let's create something amazing together!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
