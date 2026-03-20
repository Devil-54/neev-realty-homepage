import "./MegaFooter.css";

function MegaFooter() {
  return (
    <section className="mega-footer">
      <div className="container mega-grid">

        <div>
          <h4>Projects by size</h4>
          <ul>
            <li>1 BHK property</li>
            <li>2 BHK property</li>
            <li>3 BHK property</li>
            <li>4 BHK property</li>
          </ul>
        </div>

        <div>
          <h4>Properties by type</h4>
          <ul>
            <li>Residential</li>
            <li>Commercial</li>
            <li>Luxury apartments</li>
            <li>Builder floors</li>
          </ul>
        </div>

        <div>
          <h4>Projects by status</h4>
          <ul>
            <li>New launch</li>
            <li>Ready to move</li>
            <li>Under construction</li>
          </ul>
        </div>

        <div>
          <h4>Projects by location</h4>
          <ul>
            <li>Dwarka Expressway</li>
            <li>Golf Course Road</li>
            <li>Sohna Road</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default MegaFooter;