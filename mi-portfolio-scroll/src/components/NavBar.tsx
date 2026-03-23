const NavBar = () => {
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2rem", height: "64px", background: "rgba(10,10,20,0.95)", borderBottom: "1px solid rgba(139,92,246,0.2)", boxSizing: "border-box" }}>
      <span style={{ fontWeight: 800, fontSize: "1.1rem", color: "#c084fc" }}>Rocio Garcia</span>
      <ul style={{ display: "flex", gap: "0.5rem", listStyle: "none", margin: 0, padding: 0, flexWrap: "wrap" }}>
        {["inicio","sobre-mi","habilidades","estudios","trabajos","formacion","contacto"].map((id) => (
          <li key={id}>
            <a href={`#${id}`} style={{ padding: "0.4rem 0.75rem", borderRadius: "8px", fontSize: "0.875rem", fontWeight: 500, color: "#a0a0b0", textDecoration: "none" }}>
              {id.charAt(0).toUpperCase() + id.slice(1).replace("-", " ")}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
