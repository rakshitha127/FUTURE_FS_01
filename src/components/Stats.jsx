import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

function StatCard({ number, label, index }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="
        p-8 rounded-2xl
        bg-slate-900 border border-slate-800
        hover:bg-blue-950 hover:shadow-lg hover:shadow-blue-900/40
        transition-all
      "
    >
      <h2 className="text-4xl font-bold">{number}</h2>
      <p className="text-slate-400 mt-2">{label}</p>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <div className="px-10 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <StatCard index={0} number="2+" label="Built Projects" />
        <StatCard index={1} number="3rd Year" label="computer Science Student" />
        <StatCard index={2} number="6 Months" label="Internship Experience" />
        <StatCard index={3} number="10+" label="Technologies Used" />
      </div>
    </div>
  );
}