import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full py-10 flex justify-center items-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl" />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className=""
      >
        {/* Gradient Line */}
        <div className="w-20 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />

        {/* Title */}
        <h2 className="text-4xl font-semibold mb-4 text-center">
          Let’s Work Together
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 mb-8 text-center leading-relaxed">
          Have an idea, project, or just want to say hello?
          <br />
          I’d love to hear from you.
        </p>

        {/* Email Button */}
        <motion.a
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
          href="mailto:skhsouravhalder@gmail.com"
          className="flex justify-self-center font-medium text-purple-600"
        >
          skhsouravhalder@gmail.com
        </motion.a>

        {/* Footer Info */}
        <div className="mt-40 pt-6 text-sm text-gray-500">
          © 2030 Sourav. All rights reserved. Built with React & Next.js,
          Tailwind CSS, Framer Motion, React Email + Resend, and deployed on
          Vercel.
        </div>
      </motion.div>
    </section>
  );
}
