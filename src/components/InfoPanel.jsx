export default function InfoPanel({ currentTime }) {
  return (
    <section className="info-panel">
      <h2>
        Spain National Blackout Visualization -{" "}
        <a
          href="https://en.wikipedia.org/wiki/2025_Iberian_Peninsula_blackout"
          target="_blank"
          style={{ color: "blue" }}
          rel="noopener noreferrer"
        >
          Wikipedia
        </a>
      </h2>
      <p>
        At 12:30 on April 28th 2025, a cascading failure triggered a{" "}
        <b>nationwide blackout</b> affecting mainland Portugal and peninsular
        Spain. Watch the 5-second propagation unfold as the power grid loses
        connectivity, province by province, in this map time-lapse.
      </p>
      <p>
        <em>
          Timeline: <b>{currentTime.toFixed(2)} seconds</b> since event start.
        </em>
      </p>
    </section>
  );
}
