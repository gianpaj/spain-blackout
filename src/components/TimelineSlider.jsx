import { useEffect, useRef } from "react";

export default function TimelineSlider({
  currentTime,
  setCurrentTime,
  isPlaying,
  setIsPlaying,
}) {
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isPlaying) return;
    if (currentTime >= 5) {
      setIsPlaying(false);
      return;
    }
    intervalRef.current = setInterval(() => {
      setCurrentTime((t) => Math.min(5, +(t + 0.07).toFixed(2)));
    }, 70);
    return () => clearInterval(intervalRef.current);
  }, [isPlaying, currentTime, setIsPlaying, setCurrentTime]);

  return (
    <div className="timeline-slider">
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <input
        type="range"
        min={0}
        max={5}
        step={0.01}
        value={currentTime}
        onChange={(e) => setCurrentTime(Number(e.target.value))}
        style={{ width: 220, margin: "0 1em" }}
      />
      <span>{currentTime.toFixed(2)} s</span>
    </div>
  );
}
