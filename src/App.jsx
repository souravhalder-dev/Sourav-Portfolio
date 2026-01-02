import { motion } from "framer-motion";
import { Download, Linkedin, Github } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-100 to-pink-0 px-6">
      <div className="max-w-3xl text-center">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <img
              src="../../../public/sh.png"
              alt="Sourav Halder"
              className="w-34 h-34  rounded-full border-4 border-white shadow-lg object-cover"
            />
            <span className="absolute bottom-1 right-1 text-xl">👋</span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight"
        >
          Hello, I'm <span className="text-indigo-600">Sourav</span>.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-gray-700 text-lg leading-relaxed"
        >
          I'm a{" "}
          <span className="text-gray-900 text-xl font-semibold">
            MERN Stack Developer
          </span>{" "}
          I enjoys building modern, scalable{" "}
          <em>websites and web applications</em>. My core focus is{" "}
          <span className="underline decoration-indigo-500 font-semibold">
            JavaScript, Node.js, and React
          </span>
          , and I’m actively exploring{" "}
          <span className="font-semibold">Next.js</span> to build
          high-performance, server-side rendered applications.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition"
          >
            Contact me →
          </a>

          <a
            href="/cv.pdf"
            className="px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-900 font-medium flex items-center gap-2 hover:shadow transition"
          >
            Download CV <Download size={18} />
          </a>

          <a
            href="https://linkedin.com/in/sourav-halder-dev"
            className="p-3 rounded-full bg-white border hover:shadow transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="https://github.com/souravhalder-dev"
            className="p-3 rounded-full bg-white border hover:shadow transition"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
