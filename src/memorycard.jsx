import { useState } from "react";
import { cards } from "./data";
import { motion } from "framer-motion";
import "./MemoryCards.css";

function MemoryCards() {
  const [filter, setFilter] = useState("all");
  const [playingSong, setPlayingSong] = useState(null); // Store the selected track ID

  const playSong = (spotifyTrackId) => {
    setPlayingSong(spotifyTrackId); // Set the track to be played
  };

  const filteredCards = filter === "all" ? cards : cards.filter(card => card.emotion === filter);

  return (
    <div id="memory-card" className="memory-container">
      <h2>Gracious' Love Playlist 💖</h2>

      {/* Filter Buttons */}
      <div className="btn-group">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("romantic")}>Romantic</button>
        <button onClick={() => setFilter("happy")}>Happy</button>
        <button onClick={() => setFilter("nostalgic")}>Nostalgic</button>
      </div>

       {/* Spotify Embed Player */}
      {playingSong && (
        <div className="spotify-player-container">
          <iframe
            src={`https://open.spotify.com/embed/track/${playingSong}`}
            width="100%"
            height="80"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            className="spotify-player"
          ></iframe>
        </div>
      )}



      {/* 5-4-3 Layout */}
      <div className="card-container">
        {/* First Row - 5 Cards */}
        <div className="row row-0">
          {filteredCards.slice(0, 5).map((card) => (
            <motion.div key={card.id} className="small-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={card.img} alt="Memory" />
              <h4>{card.title}</h4>
              <p>{card.message}</p>
              <button className="play-button" onClick={() => playSong(card.song)}>▶ Play</button>
            </motion.div>
          ))}
        </div>

        {/* Second Row - 4 Cards */}
        <div className="row row-1">
          {filteredCards.slice(5, 9).map((card) => (
            <motion.div key={card.id} className="small-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={card.img} alt="Memory" />
              <h4>{card.title}</h4>
              <p>{card.message}</p>
              <button className="play-button" onClick={() => playSong(card.song)}>▶ Play</button>
            </motion.div>
          ))}
        </div>

        {/* Third Row - 3 Cards */}
        <div className="row row-2">
          {filteredCards.slice(9, 12).map((card) => (
            <motion.div key={card.id} className="small-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={card.img} alt="Memory" />
              <h4>{card.title}</h4>
              <p>{card.message}</p>
              <button className="play-button" onClick={() => playSong(card.song)}>▶ Play</button>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default MemoryCards;
