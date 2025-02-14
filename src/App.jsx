import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SpotifyPlayer from './spotifyplayer';
import MemoryCards from './memorycard';
import FloatingHearts from './floatinghearts';
import LoveQuiz from './quiz';
import Gallery from './Gallery';
import SurpriseMessage from './Surprisemessage';
import Welcome from './welcome';



function App() {
  return (
    <div>

      <FloatingHearts />
      <h1>Happy Valentine's Day, Babe! 💖</h1>
      <Welcome/>
      <p>Here’s a playlist of all our special songs! 🎶</p>


      <MemoryCards />
      <LoveQuiz />
      <Gallery />
      <SurpriseMessage />
    </div>
  );
}

export default App;