import SectionTitle from "./SectionTitle";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 max-w-6xl mx-auto px-6"
    >
      <SectionTitle title="Experience" />

      <div className="relative border-l-2 border-cyan-500 ml-4">

        {/* VR IT Solutions */}
        <div className="mb-12 ml-8 relative">

          <div className="absolute -left-11 w-6 h-6 bg-cyan-500 rounded-full" />

          <h3 className="text-2xl font-bold">
            Full Stack Java Intern
          </h3>

          <p className="text-gray-600 dark:text-gray-400">
            VR IT Solutions
          </p>

          <p className="text-gray-400 mb-4">
            6 Months Internship
          </p>

          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>Worked on Full Stack Java projects.</li>
            <li>Developed responsive web applications.</li>
            <li>Worked with MySQL and MongoDB.</li>
            <li>Learned HTML, CSS, JavaScript and Web Development.</li>
          </ul>

        </div>

        {/* Future Intern */}
        <div className="ml-8 relative">

          <div className="absolute -left-11 w-6 h-6 bg-cyan-500 rounded-full" />

          <h3 className="text-2xl font-bold">
            Full Stack Development Intern
          </h3>

          <p className="text-cyan-400">
            Future Intern
          </p>

          <p className="text-gray-400 mb-4">
            1 Month Internship
          </p>

          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>Designed and developed a responsive portfolio website using React and Tailwind CSS.</li>
            <li>Built a Client Lead Management System (Mini CRM) for managing leads, client information, and interactions.</li>
            <li>Integrated APIs and implemented form handling, validation, and email functionality.</li>
            <li>Worked on frontend development, backend integration, GitHub version control, and deployment workflows.</li>
          </ul>

        </div>

      </div>
    </section>
  );
}