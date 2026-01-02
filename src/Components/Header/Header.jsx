// src/components/Header.jsx
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full pt-5">
      <nav className="mx-auto max-w-5xl px-6">
        <div
          id="header"
          className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-3.5 backdrop-blur-xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg font-semibold text-black"
          >
 
          </motion.div>

          <div className="hidden items-center    gap-10 md:flex">
            {[
              "Home",
              "About",
              "Skills",
              "Experience",
              "Projects",
              "Contact",
            ].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-black transition-colors hover:text-lightBlue-500"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin
                size={20}
                className="text-gray-400 hover:text-black transition-colors"
              />
            </motion.a>

            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github
                size={20}
                className="text-gray-400 hover:text-black transition-colors"
              />
            </motion.a>
          </div>
        </div>
      </nav>
    </header>
  );
}
