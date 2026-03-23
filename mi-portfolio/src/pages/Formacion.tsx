import type { Formacion } from "../types";
import formacionData from "../data/formacion.json";

const formaciones: Formacion[] = formacionData;

const Formacion = () => {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: 800, background: "linear-gradient(135deg, #c084fc, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "0.5rem" }}>Formacion</h1>
      <p style={{ color: "#7070a0", marginBottom: "2rem" }}>Cursos y certificaciones</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 380px), 1fr))", gap: "1.25rem" }}>
        {formaciones.map((item) => (
          <div key={item.id} style={{ background: "#12121e", border: "1px solid rgba(139,92,246,0.15)", borderRadius: "16px", padding: "1.5rem", boxSizing: "border-box", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.25rem" }}>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#e0e0f0", wordBreak: "break-word" as const }}>{item.titulo}</h3>
              {item.certificado && (
                <span style={{ fontSize: "0.7rem", fontWeight: 600, padding: "0.15rem 0.55rem", background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: "20px", color: "#34d399", whiteSpace: "nowrap" as const }}>Certificado</span>
              )}
            </div>
            <p style={{ fontSize: "0.9rem", color: "#9090c0", marginBottom: "0.15rem" }}>{item.plataforma}</p>
            <p style={{ fontSize: "0.82rem", color: "#606080", marginBottom: "0.75rem" }}>{item.fecha}</p>
            <p style={{ fontSize: "0.875rem", color: "#8080a0", lineHeight: 1.6 }}>{item.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Formacion;
