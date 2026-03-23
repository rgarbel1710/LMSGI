const FORMACION = [
  {
    id: 1,
    titulo: "React - The Complete Guide",
    plataforma: "Openwebinars",
    fecha: "2026",
    descripcion: "Curso completo de React incluyendo Hooks y Context API.",
    certificado: true,
  },
  {
    id: 2,
    titulo: "SQL",
    plataforma: "Openwebinars",
    fecha: "2026",
    descripcion: "Formacion en bases de datos.",
    certificado: true,
  },
  {
    id: 3,
    titulo: "JavaScript",
    plataforma: "Openwebinars",
    fecha: "2026",
    descripcion: "Formacion en Java.",
    certificado: true,
  },
];

const Formacion = () => {
  return (
    <section id="formacion" className="section">
      <h2 className="section__title">Formacion</h2>
      <p className="section__subtitle">Cursos y certificaciones</p>
      <div className="grid">
        {FORMACION.map((item) => (
          <div key={item.id} className="card">
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.25rem" }}>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#e0e0f0" }}>{item.titulo}</h3>
              {item.certificado && (
                <span style={{ fontSize: "0.7rem", fontWeight: 600, padding: "0.15rem 0.55rem", background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: "20px", color: "#34d399", whiteSpace: "nowrap" }}>Certificado</span>
              )}
            </div>
            <p style={{ fontSize: "0.9rem", color: "#9090c0", marginBottom: "0.15rem" }}>{item.plataforma}</p>
            <p style={{ fontSize: "0.82rem", color: "#606080", marginBottom: "0.75rem" }}>{item.fecha}</p>
            <p style={{ fontSize: "0.875rem", color: "#8080a0", lineHeight: 1.6 }}>{item.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Formacion;
