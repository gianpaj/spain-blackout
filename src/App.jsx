import { useState } from "react";
import MapView from "./components/MapView";
import TimelineSlider from "./components/TimelineSlider";
import InfoPanel from "./components/InfoPanel";
import StatsCard from "./components/StatsCard";

import "./index.css";

export default function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="app-container">
      <InfoPanel currentTime={currentTime} />
      <main className="main">
        <MapView currentTime={currentTime} />
        <aside>
          <StatsCard currentTime={currentTime} />
          <TimelineSlider
            currentTime={currentTime}
            setCurrentTime={setCurrentTime}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
        </aside>
      </main>
      <footer>
        <div>
          X/Twitter:{" "}
          <a
            href="https://x.com/gianpaj"
            target="_blank"
            rel="noopener noreferrer"
          >
            @gianpaj
          </a>
        </div>
        <div>
          {"– "}
          <a
            href="https://github.com/gianpaj/spain-blackout"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
