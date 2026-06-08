import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const projects = [
    {
    title: "Personal Portfolio Website",
    description:
      "A responsive portfolio website built using React, Tailwind CSS, Vercel, and Resend API with a functional contact form.",
    tech: ["React", "Tailwind CSS", "Vercel", "Resend"],
  },
   {
    title: "Client Lead Management System (Mini CRM)",
    description:
      "A lead management application for tracking clients, managing interactions, and organizing sales leads efficiently.",
    tech: ["React", "Node.js", "MySQL"],
  },
  {
    title: "Learning Resource Hub",
    description:
      "A learning platform with an AI-powered chatbot for interactive educational assistance.",
    tech: ["HTML", "CSS", "JavaScript", "AI API"],
  },
];

export default function Projects() {
  return (
      <section
        id="projects"
        className="py-24 max-w-6xl mx-auto px-6"
      >
        <SectionTitle title="Projects" />

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-100 dark:bg-slate-900 p-6 rounded-2xl border border-slate-800 hover:border-cyan-400 transition"
            >
              <h3 className="text-xl font-bold text-cyan-400">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="border-gray-300 dark:border-slate-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
  );
}