import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Apollo",
  "Express",
  "JWT ",
  "Firebase",
  "Framer Motion",
  "MediaWiki ",
  "WordPress",
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="w-full py-20 flex flex-col items-center">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-semibold mb-12"
      >
        My Skills
      </motion.h2>

      {/* Skills Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-4 max-w-5xl px-4"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 10px 25px rgba(0,0,0,0.08)",
            }}
            className="px-6 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm md:text-base cursor-default select-none"
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
