import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Sasken Technologies LTM",
    period: "Jan 2022 – Present",
    description: "Led the development of modular and scalable components for enterprise-grade React.js and Next.js applications.",
  },
  {
    role: "Rust Developer",
    company: "Sasken Technologies LTM",
    period: "Apr 2023 – Present",
    description: "Built high-performance, asynchronous backend APIs using Rust and the Actix framework.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-light">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-primary mb-12 text-center"
        >
          Experience
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-8 bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold text-primary mb-2">{exp.role}</h3>
              <p className="text-secondary mb-2">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
              <p className="text-secondary">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;