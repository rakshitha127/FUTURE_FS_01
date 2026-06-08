import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 max-w-6xl mx-auto px-6">
      <SectionTitle title="About Me" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-slate-900/60 backdrop-blur-lg p-8 rounded-3xl border border-slate-800"
      >
        <p className="text-gray-300 text-lg leading-7">
          I'm Mamidi Rakshitha, a 3rd-year Information Technology student with
          hands-on experience in full-stack development. I've worked as a Full
          Stack Java Intern at VR IT Solutions for 6 months, where I gained
          practical knowledge in web development technologies including HTML,
          CSS, JavaScript, MongoDB, and MySQL.

          <br />
          <br />

          I enjoy building responsive web applications, exploring modern
          technologies, and solving real-world problems through software.
        </p>
      </motion.div>
      
    </section>
  );
}