import "./Developers.css";

const developers = [
  { name: "DGS Group", projects: "41+ Projects", logo: "/dgs.png" },
  { name: "PCPL Developers", projects: "35+ Projects", logo: "/pcp.png" },
  { name: "Ruparel Realty", projects: "26+ Projects", logo: "/ruparel.png" },
  { name: "Sugee Group", projects: "33+ Projects", logo: "/sugee.png" },
  { name: "Rustomjee", projects: "24+ Projects", logo: "/rustomjee.png" },
  { name: "Lodha Group", projects: "44+ Projects", logo: "/lodha.png" }, // agar hai
  { name: "Arkade Developers", projects: "28+ Projects", logo: "/arkade.png" },
  { name: "Ajmera Group", projects: "26+ Projects", logo: "/ajmera.png" },
  { name: "H. Rishabraj Builder", projects: "28+ Projects", logo: "/hrishabraj.png" },
  { name: "Adityaraj Group", projects: "34+ Projects", logo: "/adityaraj.png" }
];

function Developers() {
  return (
    <section className="developers">
      <h2>
        Top Real Estate Developers in <span>Gurgaon</span>
      </h2>

      <div className="dev-grid">
        {developers.map((dev, index) => (
          <div className="dev-card" key={index}>
            <div className="dev-logo">
              <img src={dev.logo} alt={dev.name} />
            </div>

            <h3>{dev.name}</h3>
            <p>{dev.projects}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Developers;