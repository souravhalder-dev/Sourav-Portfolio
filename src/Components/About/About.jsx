import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 bg-white"
    >
      <div className="max-w-4xl text-center">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-10"
        >
          <span className="  px-2 py-1 rounded">About</span> Me
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-700 leading-relaxed text-lg"
        >
          After graduating with a degree in <strong>BBA (Management)</strong>, I
          decided to pursue my passion for programming. I took many courses in
          coding and learned <strong>MERN stack web development</strong>. My
          favorite part of programming is the <em>problem-solving aspect</em>. I
          love the feeling of finally figuring out a solution to a problem.
          <br />
          <br />
          My core stack is{" "}
          <span className="font-medium">
            javaScript, React, Next.js, Node.js, and SQL
          </span>
          . I am also familiar with <strong>Express.js</strong> and{" "}
          <strong>PostgreSQL</strong>. I am always looking to learn new
          technologies. I am currently looking for a{" "}
          <span className="font-semibold">
            full-time position as a software developer
          </span>
          .
        </motion.p>

        {/* Hobbies */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-gray-600 italic text-lg"
        >
          When I'm not coding, I enjoy playing football, cricket, watching
          movies, and learning new things.
        </motion.p>
      </div>
    </section>
  );
}
