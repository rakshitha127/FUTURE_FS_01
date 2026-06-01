import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const skills = [
  {
    title: "Programming Languages",
    items: ["Python", "Java", "C++"],
  },
  {
    title: "Frontend Development",
    items: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Backend Development",
    items: ["Node.js", "Java"],
  },
  {
    title: "Databases",
    items: ["MySQL", "MongoDB"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 max-w-6xl mx-auto px-6"
    >
      <SectionTitle title="Skills" />

      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-cyan-400 transition"
          >
            <h3 className="text-2xl text-cyan-400 mb-6">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-800 px-4 py-2 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}