import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Lanyard from "./Lanyard/Lanyard";
import lanyardImg from "./Lanyard/Card - Copy.jpg";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="container relative min-h-[calc(100vh-80px)] flex items-center pt-20 md:pt-0">
      <div className="flex flex-col md:flex-row items-center gap-12 w-full">

        {/* TEXT SECTION */}
        <div className="flex-1 space-y-8 md:space-y-10 relative z-0 md:-translate-y-40 w-full">

          {/* SOFT GLOW */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-[var(--color-accent)]/10 blur-[100px] rounded-full pointer-events-none" />

          {/* EYEBROW */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-3"
          >
            <div className="h-px w-6 md:w-8 bg-[var(--color-accent)]/50" />
            <p className="uppercase tracking-[0.3em] text-[10px] md:text-xs text-[var(--color-accent)] font-medium">
              Frontend • UI • Motion
            </p>
          </motion.div>

          {/* MOBILE: CARD + HEADLINE SIDE BY SIDE */}
          {isMobile ? (
            <div className="flex items-center gap-4">
              {/* CARD */}
              <div style={{ perspective: '1000px' }}>
                <motion.img
                  src={lanyardImg}
                  alt="Lanyard Card"
                  initial={{ rotateY: 25, rotateX: 5, y: 0 }}
                  animate={{
                    y: [-10, 10, -10],
                    rotateY: [25, 15, 25],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-[120px] object-contain rounded-2xl border-[1px] border-white/20"
                  style={{
                    filter: "drop-shadow(20px 20px 30px rgba(0,0,0,0.7))",
                  }}
                />
              </div>

              {/* HEADLINE */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl font-bold leading-[0.95] tracking-tight"
              >
                Hi, I'm
                <br />
                <span className="relative inline-block mt-1">
                  <span className="gradient-text">Verdi</span>
                  <span className="absolute left-0 -bottom-1 w-full h-[6px] bg-[var(--color-accent)]/30 blur-xl px-4" />
                </span>
              </motion.h1>
            </div>
          ) : (
            /* DESKTOP: HEADLINE ONLY */
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight"
            >
              Hi, I'm
              <br />
              <span className="relative inline-block mt-2">
                <span className="gradient-text">Verdi</span>
                <span className="absolute left-0 -bottom-1 w-full h-[6px] bg-[var(--color-accent)]/30 blur-xl px-4" />
              </span>
            </motion.h1>
          )}

          {/* COPY */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-base md:text-lg max-w-md leading-relaxed font-light"
          >
            <span className="text-white font-normal text-lg">Front-end developer </span>
            designing and building immersive digital experiences through precision, motion, and code.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-6 pt-4"
          >
            {/* PRIMARY CTA */}
            <a
              href="#projects"
              className="group relative px-6 py-3 md:px-7 md:py-3.5 rounded-full text-sm md:text-base font-semibold
                bg-[var(--color-accent)] text-white
                shadow-[0_0_20px_rgba(var(--color-accent-rgb),0.2)]
                hover:shadow-[0_0_35px_rgba(var(--color-accent-rgb),0.4)]
                hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Launch Project</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>

            {/* SECONDARY CTA */}
            <a
              href="#contact"
              className="group relative text-gray-400 hover:text-white text-sm md:text-base font-medium transition-colors flex items-center gap-2"
            >
              <span>Get in touch</span>
              <span className="w-6 h-px bg-gray-600 group-hover:w-10 group-hover:bg-[var(--color-accent)] transition-all duration-300" />
            </a>
          </motion.div>
        </div>

        {/* LANYARD CONTAINER - DESKTOP ONLY */}
        {!isMobile && (
          <div className="md:relative md:flex-1 h-[800px] z-20 md:pointer-events-auto">
            <div className="w-full h-full md:-translate-y-40 lg:translate-x-10 scale-85 md:scale-100 origin-top-right">
              <Lanyard position={[0, 0, 18]} gravity={[0, -120, 0]} />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
