import "./Stats.css";

const StatCard = ({ icon, number, label }) => {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>
      <h2>{number}</h2>
      <p>{label}</p>
    </div>
  );
};

function Stats() {
  return (
    <section className="stats">
      <div className="container stats-grid">

        <StatCard
          icon="🌐"
          number="100+"
          label="Hand-Picked Projects Across Market"
        />

        <StatCard
          icon="📊"
          number="50+"
          label="Dedicated Agents and Financial Advisors"
        />

        <StatCard
          icon="🏢"
          number="15+"
          label="Years of Trust and Expertise"
        />

        <StatCard
          icon="🏙️"
          number="1,500+"
          label="Happy Clients"
        />

      </div>
    </section>
  );
}

export default Stats;