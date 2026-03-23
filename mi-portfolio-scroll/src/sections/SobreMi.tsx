const SobreMi = () => {
  return (
    <section id="sobre-mi" className="section">
      <h2 className="section__title">Sobre mi</h2>
      <p className="section__subtitle">Un poco sobre quien soy</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <p style={{ color: "#a0a0c0", lineHeight: 1.8 }}>Soy <strong style={{ color: "#c084fc" }}>Rocio Garcia</strong>, estudiante de Administracion de Sistemas en Red.</p>
        <p style={{ color: "#a0a0c0", lineHeight: 1.8 }}>Me interesa el mundo de las redes, la administracion de sistemas y el desarrollo web con <strong style={{ color: "#c084fc" }}>React</strong> y <strong style={{ color: "#c084fc" }}>TypeScript</strong>.</p>
        <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          <p style={{ color: "#8080b0" }}>Ubicacion: Espana</p>
          <p style={{ color: "#8080b0" }}>Email: rocio@ejemplo.com</p>
          <p style={{ color: "#8080b0" }}>Estado: Disponible para practicas</p>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
