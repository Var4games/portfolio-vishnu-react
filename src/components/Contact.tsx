import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-primary mb-12 text-center"
        >
          Get in Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto text-center"
        >
          <p className="text-secondary mb-6">
            I'm always open to new opportunities and interesting projects. Feel
            free to reach out!
          </p>
          <div className="space-y-4">
            <p className="text-secondary">
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:vishnuk.reactjs@gmail.com"
                className="text-primary hover:underline"
              >
                vishnuk.reactjs@gmail.com
              </a>
            </p>
            <p className="text-secondary">
              <span className="font-medium">LinkedIn:</span>{" "}
              <a
                href="https://linkedin.com/in/vishnu-k-reactjs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                linkedin.com/in/vishnu-k-reactjs
              </a>
            </p>
            <p className="text-secondary">
              <span className="font-medium">GitHub:</span>{" "}
              <a
                href="https://github.com/Var4games"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                github.com/Var4games
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
