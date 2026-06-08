import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-4xl"
      >

        <p className="text-cyan-400 text-lg mb-4">
          👋 Hello, I'm
        </p>

        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Mamidi Rakshitha
        </h1>

        <div className="text-2xl md:text-3xl font-semibold mb-8">

          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "AI/ML Enthusiast",
              2000,
              "Information Technology Student",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-cyan-400"
          />

        </div>

        <p className="text-gray-400 text-lg leading-8">
          A 3rd-year Information Technology student,
          Full-Stack Developer, and AI/ML enthusiast
          passionate about building modern web applications
          and solving real-world problems through technology.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">

          <a
            href="#projects"
            className="bg-cyan-500 px-6 py-3 rounded-xl hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-500 hover:text-black transition"
          >
            Contact Me
          </a>

          <a
           href="/Mamidi_Rakshitha_Resume.pdf"
           download
           className="px-6 py-3 bg-cyan-500 rounded-xl font-medium hover:bg-cyan-600 transition"
           >
          Download Resume
          </a>

        </div>

        <div className="flex justify-center gap-6 mt-10 text-2xl">

          <a
            href="https://www.linkedin.com/in/rakshitha-mamidi-029a1a2b5"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400"
          >
            <FaLinkedin />
          </a>

         

          <a
            href="mailto:rakshithaa1211@gmail.com"
            className="hover:text-cyan-400"
          >
            <FaEnvelope />
          </a>

           

        </div>

      </motion.div>
    </section>
  );
}