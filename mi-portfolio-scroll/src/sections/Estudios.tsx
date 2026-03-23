const ESTUDIOS = [
  {
    id: 1,
    tipo: "FP Superior",
    titulo: "Administracion de sistemas en red",
    centro: "IES Cura Valera",
    fecha: "2025 - 2026",
    descripcion: "Ciclo formativo de grado superior especializado en administracion de redes.",
  },
  {
    id: 2,
    tipo: "Bachillerato",
    titulo: "Bachillerato Humanidades",
    centro: "IES Martin Garcia Ramos",
    fecha: "2022 - 2024",
    descripcion: "Bachillerato con especialidad en Humanidades, con TIC.",
  },
];

const Estudios = () => {
  return (
    <section id="estudios" className="section">
      <h2 className="section__title">Estudios</h2>
      <p className="section__subtitle">Mi formacion academica</p>
      <div className="grid">
        {ESTUDIOS.map((estudio) => (
          <div key={estudio.id} className="card">
            <span style={{ fontSize: "0.72rem", fontWeight: 600, textTransform: "uppercase", color: "#c084fc", letterSpacing: "0.08em" }}>{estudio.tipo}</span>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#e0e0f0", margin: "0.25rem 0" }}>{estudio.titulo}</h3>
            <p style={{ fontSize: "0.9rem", color: "#9090c0", marginBottom: "0.15rem" }}>{estudio.centro}</p>
            <p style={{ fontSize: "0.82rem", color: "#606080", marginBottom: "0.75rem" }}>{estudio.fecha}</p>
            <p style={{ fontSize: "0.875rem", color: "#8080a0", lineHeight: 1.6 }}>{estudio.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Estudios;
