import { useState } from "react";
import "./SurpriseMessage.css";

function SurpriseMessage() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="surprise-container">
      <button onClick={() => setShowMessage(!showMessage)}>❤️ Click Me ❤️</button>
      {showMessage && (
        <div className="message">
          <h2>My Love Letter to You 💕</h2>
          <p>
            My love, every moment with you is a blessing. You make my world brighter, my heart fuller, and my life happier.
            I love you more than words can say! 💖
          </p>
        </div>
      )}
    </div>
  );
}

export default SurpriseMessage;
