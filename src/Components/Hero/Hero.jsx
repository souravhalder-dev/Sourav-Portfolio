// src/components/Hero.jsx
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left - Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-block rounded-full bg-indigo-500/10 px-5 py-1.5 text-sm font-medium text-indigo-300 mb-8"
            >
              Full-Stack Developer • 2+ Years Experience
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white"
            >
              Sourav <span className="text-indigo-400">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed"
            >
              I build{" "}
              <span className="text-white font-medium">modern, scalable</span>{" "}
              web applications with a strong focus on clean architecture,
              performance and exceptional user experience.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-6 text-lg text-slate-400 max-w-xl"
            >
              Current stack: <strong className="text-white">JavaScript</strong>{" "}
              •<strong className="text-white"> React</strong> •
              <strong className="text-white"> Next.js</strong> •
              <strong className="text-white"> Node.js</strong>
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex flex-wrap gap-5"
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center rounded-lg bg-indigo-600 px-8 py-4 text-base font-medium text-white shadow-lg hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-400 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Let's discuss your project →
              </motion.a>

              <motion.a
                href="/cv-aniket.pdf"
                download
                className="inline-flex items-center rounded-lg border border-slate-700 px-8 py-4 text-base font-medium text-slate-200 hover:border-slate-500 hover:text-white transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Download CV
              </motion.a>
            </motion.div>
          </div>

          {/* Right - Professional headshot area (optional but recommended) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:block mt-12 lg:mt-0"
          >
            <div className="relative aspect-[4/5] w-full max-w-[420px] mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500/20 to-purple-600/10" />
              <div className="absolute inset-[6px] rounded-3xl overflow-hidden border border-slate-700/60 bg-slate-900/40 backdrop-blur-sm">
                <img
                  src="/images/professional-headshot.jpg"
                  alt="Aniket - Full Stack Developer"
                  className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
