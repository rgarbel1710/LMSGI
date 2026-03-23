import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: "/", label: "Inicio" },
    { to: "/sobre-mi", label: "Sobre mi" },
    { to: "/habilidades", label: "Habilidades" },
    { to: "/estudios", label: "Estudios" },
    { to: "/trabajos", label: "Trabajos" },
    { to: "/formacion", label: "Formacion" },
    { to: "/contacto", label: "Contacto" },
  ];

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2rem", height: "64px", background: "rgba(10,10,20,0.95)", borderBottom: "1px solid rgba(139,92,246,0.2)", boxSizing: "border-box" }}>
      <span style={{ fontWeight: 800, fontSize: "1.1rem", color: "#c084fc" }}>Rocio Garcia</span>
      <ul style={{ display: "flex", gap: "0.5rem", listStyle: "none", margin: 0, padding: 0, flexWrap: "wrap" }}>
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end={link.to === "/"}
              style={({ isActive }) => ({
                padding: "0.4rem 0.75rem",
                borderRadius: "8px",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: isActive ? "#c084fc" : "#a0a0b0",
                textDecoration: "none",
                background: isActive ? "rgba(139,92,246,0.2)" : "transparent",
              })}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
