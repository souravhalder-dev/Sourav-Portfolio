import { motion } from "framer-motion";
import { Download, Linkedin, Github } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-6">
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
              src="/profile.jpg"
              alt="Profile"
              className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover"
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
          Hello, I'm <span className="text-indigo-600">Sourav</span>. <br />
          I'm a Mern-stack developer
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-gray-700 text-lg"
        >
          with <strong>2 years</strong> of coding experience. I enjoy building{" "}
          <em>sites & apps</em>. My focus is{" "}
          <span className="underline decoration-indigo-500">
            JavaScript, Node, React (Next.js)
          </span>
          .
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
            href="https://linkedin.com"
            className="p-3 rounded-full bg-white border hover:shadow transition"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="https://github.com"
            className="p-3 rounded-full bg-white border hover:shadow transition"
          >
            <Github size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
