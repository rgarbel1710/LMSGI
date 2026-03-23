import type { Estudio } from "../types";
import estudiosData from "../data/estudios.json";

const estudios: Estudio[] = estudiosData;

const Estudios = () => {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: 800, background: "linear-gradient(135deg, #c084fc, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "0.5rem" }}>Estudios</h1>
      <p style={{ color: "#7070a0", marginBottom: "2rem" }}>Mi formacion academica</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 380px), 1fr))", gap: "1.25rem" }}>
        {estudios.map((estudio) => (
          <div key={estudio.id} style={{ background: "#12121e", border: "1px solid rgba(139,92,246,0.15)", borderRadius: "16px", padding: "1.5rem", boxSizing: "border-box", overflow: "hidden" }}>
            <span style={{ fontSize: "0.72rem", fontWeight: 600, textTransform: "uppercase" as const, color: "#c084fc", letterSpacing: "0.08em" }}>{estudio.tipo}</span>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#e0e0f0", margin: "0.25rem 0", wordBreak: "break-word" as const }}>{estudio.titulo}</h3>
            <p style={{ fontSize: "0.9rem", color: "#9090c0", marginBottom: "0.15rem" }}>{estudio.centro}</p>
            <p style={{ fontSize: "0.82rem", color: "#606080", marginBottom: "0.75rem" }}>{estudio.fecha}</p>
            <p style={{ fontSize: "0.875rem", color: "#8080a0", lineHeight: 1.6 }}>{estudio.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Estudios;
