import type { Trabajo } from "../types";
import trabajosData from "../data/trabajos.json";

const trabajos: Trabajo[] = trabajosData;

const Trabajos = () => {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: 800, background: "linear-gradient(135deg, #c084fc, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "0.5rem" }}>Trabajos</h1>
      <p style={{ color: "#7070a0", marginBottom: "2rem" }}>Mi experiencia profesional</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 380px), 1fr))", gap: "1.25rem" }}>
        {trabajos.map((trabajo) => (
          <div key={trabajo.id} style={{ background: "#12121e", border: "1px solid rgba(139,92,246,0.15)", borderRadius: "16px", padding: "1.5rem", boxSizing: "border-box", overflow: "hidden" }}>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#e0e0f0", marginBottom: "0.2rem", wordBreak: "break-word" as const }}>{trabajo.puesto}</h3>
            <p style={{ fontSize: "0.9rem", color: "#9090c0", marginBottom: "0.15rem" }}>{trabajo.empresa}</p>
            <p style={{ fontSize: "0.82rem", color: "#606080", marginBottom: "0.75rem" }}>{trabajo.fecha}</p>
            <p style={{ fontSize: "0.875rem", color: "#8080a0", lineHeight: 1.6, marginBottom: "0.75rem" }}>{trabajo.descripcion}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {trabajo.tecnologias.map((tec) => (
                <span key={tec} style={{ padding: "0.25rem 0.65rem", background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.25)", borderRadius: "20px", fontSize: "0.75rem", color: "#c084fc" }}>{tec}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trabajos;
