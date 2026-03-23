const TRABAJOS = [
  {
    id: 1,
    puesto: "En busca de practicas",
    empresa: "Disponible",
    fecha: "2026",
    descripcion: "Actualmente cursando 2o año de Administracion de Sistemas en Red y en busca de empresa para realizar las practicas FCT.",
    tecnologias: ["Redes", "Linux", "Windows Server", "TypeScript"],
  },
];

const Trabajos = () => {
  return (
    <section id="trabajos" className="section" style={{ background: "rgba(139,92,246,0.03)" }}>
      <h2 className="section__title">Trabajos</h2>
      <p className="section__subtitle">Mi experiencia profesional</p>
      <div className="grid">
        {TRABAJOS.map((trabajo) => (
          <div key={trabajo.id} className="card">
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#e0e0f0", marginBottom: "0.2rem" }}>{trabajo.puesto}</h3>
            <p style={{ fontSize: "0.9rem", color: "#9090c0", marginBottom: "0.15rem" }}>{trabajo.empresa}</p>
            <p style={{ fontSize: "0.82rem", color: "#606080", marginBottom: "0.75rem" }}>{trabajo.fecha}</p>
            <p style={{ fontSize: "0.875rem", color: "#8080a0", lineHeight: 1.6, marginBottom: "0.75rem" }}>{trabajo.descripcion}</p>
            <div className="tags">
              {trabajo.tecnologias.map((tec) => (
                <span key={tec} className="tag">{tec}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trabajos;
