import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">

        {/* Column 1 */}
        <div className="footer-col">
          <h2 className="footer-logo">
            Neev <span>Realty</span>
          </h2>
          <p>
            Your trusted partner in finding dream homes with the best properties and verified listings.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Listings</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h3>Property Types</h3>
          <ul>
            <li><a href="#">Apartments</a></li>
            <li><a href="#">Villas</a></li>
            <li><a href="#">Offices</a></li>
            <li><a href="#">Commercial</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h3>Contact</h3>
          <p>Pune, India</p>
          <p>Email: info@neevrealty.com</p>

          <div className="socials">
            <span>🌐</span>
            <span>📘</span>
            <span>📷</span>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 Neev Realty. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;