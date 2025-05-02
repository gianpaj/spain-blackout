import { provinceOutageTimes } from "../blackoutData";

const TOTAL_POP = 43000000; //  Peninsular Spain population
const totalAffectedProvinces = Object.keys(provinceOutageTimes).length;

export default function StatsCard({ currentTime }) {
  // Demo: estimate affected provinces/pop as function of time
  const blackoutFraction = Math.min(1, currentTime / 5);
  const affectedPop = Math.round(TOTAL_POP * blackoutFraction);
  const affectedProvinces = Math.round(
    totalAffectedProvinces * blackoutFraction,
  );

  return (
    <div className="stats-card">
      <h4>Event Stats</h4>
      <div>
        Affected Population: <b>{affectedPop.toLocaleString()}</b>
      </div>
      <div>
        Affected Provinces: <b>{affectedProvinces}/52</b>
      </div>
    </div>
  );
}
