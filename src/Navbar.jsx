import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-container">

        {/* Logo */}
        <div className="logo">
          Neev <span>Realty</span>
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Listings</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        {/* CTA Button */}
        <button className="nav-btn">Add Property</button>

      </div>
    </header>
  );
}

export default Navbar;