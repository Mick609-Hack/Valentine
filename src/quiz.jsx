import { useState } from "react";
import { motion } from "framer-motion";
import "./LoveQuiz.css";

const questions = [
  {
    question: "Where did we go on our first date?",
    options: ["Beach", "Bowling", "Cafe", "Park"],
    answer: "Bowling",
  },
  {
    question: "What's my favorite thing about you?",
    options: ["Your smile", "Your kindness", "Your laugh", "Everything"],
    answer: "Everything",
  },
  {
    question: "Which song reminds me of us?",
    options: ["Perfect - Ed Sheeran", "Lover - Taylor Swift", "All of Me - John Legend", "My Heart- Asake"],
    answer: "My Heart- Asake",
  },
];

function LoveQuiz({ onFinish }) {
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = (selected) => {
    setSelectedOption(selected);
    setTimeout(() => {
      if (selected === questions[index].answer) {
        setScore(score + 1);
      }
      if (index + 1 < questions.length) {
        setIndex(index + 1);
        setSelectedOption(null);
      } else {
        setShowScore(true);
      }
    }, 800); // Adds a small delay for smooth transition
  };

  return (
    <motion.div 
      className="quiz-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>💘 Love Quiz 💘</h2>

      {!showScore ? (
        <>
          <motion.div 
            className="question-card"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{questions[index].question}</h3>
            <div className="options-container">
              {questions[index].options.map((option, i) => (
                <motion.button 
                  key={i} 
                  className={`option-button ${selectedOption === option ? "selected" : ""}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleAnswer(option)}
                  disabled={selectedOption !== null} // Prevents multiple clicks
                >
                  {option}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Progress Bar */}
          <div className="progress-bar">
            <motion.div 
              className="progress"
              initial={{ width: 0 }}
              animate={{ width: `${((index + 1) / questions.length) * 100}%` }}
            />
          </div>
        </>
      ) : (
        <motion.div 
          className="quiz-result"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <h2>🎉 Quiz Completed! 🎉</h2>
          <p>You scored <strong>{score}</strong> out of <strong>{questions.length}</strong>! 💕</p>
          <p>{score === questions.length ? "You know us perfectly! 💖" : "You did great! Keep making more memories! 😍"}</p>
          
          <button 
            className="restart-button"
            onClick={() => { setIndex(0); setScore(0); setShowScore(false); setSelectedOption(null); }}
          >
            🔄 Try Again
          </button>
          
          <button className="finish-button" onClick={onFinish}>🏆 Continue</button>
        </motion.div>
      )}
    </motion.div>
  );
}

export default LoveQuiz;
