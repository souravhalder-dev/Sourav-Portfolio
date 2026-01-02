// src/components/Header.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const MENU = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];

export default function Header() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = MENU.map((item) =>
      document.getElementById(item.toLowerCase())
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header id="header" className="fixed top-0 z-50 w-full pt-5">
      <nav className="mx-auto max-w-5xl px-6">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-3.5 backdrop-blur-xl">
          {/* Logo / Name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg font-semibold text-black hover:font-bold hover:text-black"
          >
            Sourav
          </motion.div>

          {/* Menu */}
          <div className="hidden items-center gap-10 md:flex">
            {MENU.map((item) => {
              const id = item.toLowerCase();
              const isActive = active === id;

              return (
                <motion.a
                  key={item}
                  href={`#${id}`}
                  className={`text-sm transition-colors ${
                    isActive
                      ? "text-lightBlue-500 font-semibold"
                      : "text-black hover:text-lightBlue-500"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {item}
                </motion.a>
              );
            })}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://www.linkedin.com/in/sourav-halder-dev"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={20} className="text-gray-400 hover:text-black" />
            </motion.a>

            <motion.a
              href="https://github.com/souravhalder-dev"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} className="text-gray-400 hover:text-black" />
            </motion.a>
          </div>
        </div>
      </nav>
    </header>
  );
}
