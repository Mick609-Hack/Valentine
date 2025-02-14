import { motion } from "framer-motion";
import "./FloatingHearts.css";

const FloatingHearts = () => {
  return (
    <div className="hearts-container">
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="heart"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -1000 }}
          transition={{ duration: Math.random() * 5 + 3, repeat: Infinity }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
