import "./WhyChooseUs.css";

function WhyChooseUs() {
  return (
    <section className="why bg-light">
      <div className="container">

        <h2>Why Choose Us</h2>

        <div className="why-grid">

          <div className="why-card">
            <div className="icon">🏠</div>
            <h3>Wide Range of Properties</h3>
            <p>Explore a variety of properties across top cities.</p>
          </div>

          <div className="why-card">
            <div className="icon">💰</div>
            <h3>Best Price Guarantee</h3>
            <p>We offer competitive pricing with no hidden costs.</p>
          </div>

          <div className="why-card">
            <div className="icon">⚡</div>
            <h3>Fast & Easy Process</h3>
            <p>Quick and smooth property buying experience.</p>
          </div>

          <div className="why-card">
            <div className="icon">🤝</div>
            <h3>Trusted Agents</h3>
            <p>Professional agents to guide you at every step.</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;