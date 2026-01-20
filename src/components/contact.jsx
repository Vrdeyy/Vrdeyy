import React from "react";
import { motion } from "framer-motion";
import { Github, Instagram, Mail, Phone, ExternalLink } from "lucide-react";

const contactMethods = [
  {
    id: "whatsapp",
    icon: Phone,
    label: "WhatsApp",
    value: "+62 857-7409-3174",
    link: "https://wa.me/6285774093174",
    color: "bg-green-500/10 text-green-500"
  },
  {
    id: "instagram",
    icon: Instagram,
    label: "Instagram",
    value: "@vr.deyy",
    link: "https://www.instagram.com/vr.deyy?igsh=bDBteXFycXNtbjZ4",
    color: "bg-pink-500/10 text-pink-500"
  },
  {
    id: "github",
    icon: Github,
    label: "GitHub",
    value: "vrdialip",
    link: "https://github.com/Vrdeyy",
    color: "bg-gray-500/10 text-white"
  },
  {
    id: "email",
    icon: Mail,
    label: "Email",
    value: "vrdialif385@gmail.com", // Placeholder, adjust if needed
    link: "mailto:vrdialif385@gmail.com",
    color: "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="container py-24 md:py-32">
      {/* SECTION HEADER */}
      <div className="flex flex-col items-center mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 text-[var(--color-accent)] text-xs font-bold uppercase tracking-widest"
        >
          Contact Me
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-heading)] mb-6 tracking-tight">
          Let’s Get in <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-gray-400 max-w-xl text-balance leading-relaxed">
          I’m always open to new opportunities, creative collaborations, or just a friendly chat about design and code.
        </p>
      </div>

      {/* CARDS GRID */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
        {contactMethods.map((method, index) => (
          <motion.a
            key={method.id}
            href={method.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex flex-col items-center p-6 md:p-8 bg-[var(--color-bg-card)]/50 backdrop-blur-sm rounded-2xl border border-white/5 
              hover:border-[var(--color-accent)]/30 hover:shadow-[0_20px_40px_-15px_rgba(var(--color-accent-rgb),0.2)] 
              transition-all duration-300 group text-center"
          >
            <div className={`p-4 rounded-2xl mb-5 ${method.color} group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
              <method.icon size={28} className="md:w-8 md:h-8" />
            </div>
            <h3 className="text-base md:text-lg font-bold mb-1 tracking-tight">{method.label}</h3>
            <p className="text-[10px] md:text-xs text-gray-500 mb-5 truncate w-full px-2">{method.value}</p>
            <div className="mt-auto flex items-center gap-1.5 text-[10px] md:text-xs text-[var(--color-accent)] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              Open <ExternalLink size={12} />
            </div>
          </motion.a>
        ))}
      </div>

      {/* FOOTER CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 md:mt-24 p-8 md:p-12 relative overflow-hidden bg-[var(--color-bg-card)] rounded-[2rem] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8"
      >
        {/* Decorative Background Glow */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-[var(--color-accent)]/10 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative z-10 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">Ready to start a project?</h3>
          <p className="text-gray-400 text-sm md:text-base font-light">Let's build something amazing and future-proof together.</p>
        </div>

        <a
          href="mailto:vrdialif385@gmail.com"
          className="relative z-10 px-10 py-4 bg-white text-black font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_10px_20px_-5px_rgba(255,255,255,0.3)]"
        >
          Work with me
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
