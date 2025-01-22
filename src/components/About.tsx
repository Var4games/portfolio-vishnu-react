import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-light">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-primary mb-8 text-center"
        >
          About Me
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-secondary"
        >
          <p className="mb-4">
            Hello! I'm Vishnu K, a passionate frontend developer specializing in React.js and Next.js, 
            with 3 years of professional experience at Sasken Technologies LTM, Bangalore.
          </p>
          <p>
            I have also honed my backend development skills using Rust and the Actix framework 
            to build high-performance web applications. I thrive in creating intuitive, scalable, 
            and performant applications while keeping user experience at the forefront.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;