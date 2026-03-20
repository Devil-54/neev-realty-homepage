import "./Properties.css";
import pune from "./assets/pune.jpg";
import mumbai from "./assets/mumbai.jpg";
import delhi from "./assets/delhi.jpg";

/* 🔥 Reusable Card */
const PropertyCard = ({ img, title, price, location }) => {
  return (
    <div className="property-card">
      <img src={img} alt={title} />

      <div className="property-info">
        <h3>{title}</h3>
        <p className="location">{location}</p>
        <p className="price">{price}</p>

        <div className="details">
          <span>3 Beds</span>
          <span>2 Baths</span>
          <span>1200 sqft</span>
        </div>
      </div>
    </div>
  );
};

/* 🔥 Section Component */
const PropertySection = ({ title }) => {
  return (
    <div className="property-section container">
      <div className="section-header">
        <h2>{title}</h2>
        <button className="explore-btn">Explore More</button>
      </div>

      <div className="properties-grid">
        <PropertyCard img={pune} title="Luxury Villa" price="₹80 Lakhs" location="Pune" />
        <PropertyCard img={mumbai} title="Modern Apartment" price="₹50 Lakhs" location="Mumbai" />
        <PropertyCard img={delhi} title="Family House" price="₹60 Lakhs" location="Delhi" />
      </div>
    </div>
  );
};

function Properties() {
  return (
    <section className="properties">

      {/* 🔥 New Launch */}
      <PropertySection title="New Launch Projects" />

      {/* 🔥 Trending */}
      <PropertySection title="Trending Projects" />

    </section>
  );
}

export default Properties;