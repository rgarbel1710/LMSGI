const SobreMi = () => {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: 800, background: "linear-gradient(135deg, #c084fc, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "2rem" }}>Sobre mi</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <p style={{ color: "#a0a0c0", lineHeight: 1.8 }}>Soy <strong style={{ color: "#c084fc" }}>Rocio Garcia</strong>, estudio Administracion de Sistemas en Red.</p>
        <p style={{ color: "#a0a0c0", lineHeight: 1.8 }}>Trabajo principalmente con <strong style={{ color: "#c084fc" }}>React</strong> y <strong style={{ color: "#c084fc" }}>TypeScript</strong>. Me gusta el trabajo en equipo y la metodologia agil.</p>
        <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          <p style={{ color: "#8080b0" }}>📍 España</p>
          <p style={{ color: "#8080b0" }}>📧 rociogarciabelmonte28@gmail.com</p>
          <p style={{ color: "#8080b0" }}>💼 Disponible para trabajar</p>
        </div>
      </div>
    </div>
  );
};

export default SobreMi;
