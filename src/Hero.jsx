import "./Hero.css";
import heroImg from "./assets/house1.jpg";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* 🔥 Dark Overlay */}
      <div className="hero-overlay">

        <div className="hero-content">
          
          {/* Heading */}
          <h1>
            Find Your <span>Perfect House</span>
          </h1>

          <p>
            Discover the best properties at unbeatable prices
          </p>

          {/* 🔥 Search Bar */}
          <div className="search-box">
            <select>
              <option>Location</option>
              <option>Pune</option>
              <option>Mumbai</option>
              <option>Delhi</option>
            </select>

            <select>
              <option>Property Type</option>
              <option>Apartment</option>
              <option>Villa</option>
            </select>

            <select>
              <option>Price Range</option>
              <option>₹10L - ₹50L</option>
              <option>₹50L - ₹1Cr</option>
            </select>

            <button>Search</button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;