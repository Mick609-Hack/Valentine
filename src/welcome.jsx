import { motion } from "framer-motion";
import { useState } from "react";
import "./Welcome.css";
import t1 from "./assets/t1.svg"
import t2 from "./assets/t2.svg"

function Welcome({ onStart }) {
  const [fadeOut, setFadeOut] = useState(false);

  const handleStart = () => {
    setFadeOut(true);
     document.getElementById("memory-card").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div 
      className={`welcome-container ${fadeOut ? "fade-out" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="teddy-container">
        {/* Teddy Bear 1 */}
        <motion.div 
          className="teddy"
          animate={{ y: [0, -10, 0] }} 
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          🧸
        </motion.div>

        {/* Love Message */}
        <div className="love-message">
          <h1>Welcome, Gracious! 💖</h1>
          <p>You are my sweetest melody, my happiest memory, and my forever love. 💕</p>
        </div>

        {/* Teddy Bear 2 */}
        <motion.div 
          className="teddy"
          animate={{ y: [0, -10, 0] }} 
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          🧸
        </motion.div>
      </div>

      {/* Start Button */}
      <motion.button 
        className="start-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleStart}
      >
        💌 Enter the Love Story 💌
      </motion.button>
    </motion.div>
  );
}

export default Welcome;
