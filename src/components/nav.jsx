import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Cpu, Briefcase, Mail, Star } from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: Home, href: "#home" },
  { id: "highlights", label: "Highlights", icon: Star, href: "#highlights" },
  { id: "skills", label: "Skills", icon: Cpu, href: "#skills" },
  { id: "projects", label: "Projects", icon: Briefcase, href: "#projects" },
  { id: "contact", label: "Contact", icon: Mail, href: "#contact" },
];

function DockIcon({ item, isActive, onClick }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
  }, []);

  return (
    <div
      onClick={onClick}
      className={`w-[60px] h-[60px] rounded-full border backdrop-blur-md flex items-center justify-center relative group cursor-pointer transition-all duration-300
        ${isActive
          ? "bg-[var(--color-accent)]/15 border-[var(--color-accent)]/40 shadow-[0_0_20px_var(--color-accent)]/20 scale-110 -translate-y-1"
          : "bg-white/10 border-white/20 hover:bg-white/20 hover:scale-110 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(255,255,255,0.1)]"
        }`}
    >
      <div className="w-full h-full flex items-center justify-center p-3">
        <item.icon
          className={`w-full h-full transition-colors ${isActive
            ? "text-[var(--color-accent)]"
            : "text-gray-300 group-hover:text-white"
            }`}
        />
      </div>

      {!isMobile && (
        <span
          className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1
          bg-[var(--color-bg-card)]/90 border border-white/10
          rounded text-xs text-white opacity-0 group-hover:opacity-100
          transition-opacity pointer-events-none whitespace-nowrap"
        >
          {item.label}
        </span>
      )}

      {isActive && (
        <motion.div
          layoutId="activeDot"
          className="absolute -bottom-2 w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full"
        />
      )}
    </div>
  );
}

const Nav = () => {
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0% -40% 0%',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveTab(id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-end gap-4 pb-3">
      <div
        className="flex h-16 items-end gap-4 rounded-2xl
          bg-[var(--color-bg-card)]/70
          border border-white/10
          px-4 pb-3 backdrop-blur-md"
      >
        {navItems.map((item) => (
          <a key={item.id} href={item.href}>
            <DockIcon
              item={item}
              isActive={activeTab === item.id}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Nav;
