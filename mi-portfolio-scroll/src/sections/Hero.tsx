const Hero = () => {
  return (
    <section id="inicio" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", textAlign: "center", paddingTop: "64px" }}>
      <div style={{ maxWidth: "600px", width: "100%" }}>
        <p style={{ color: "#a070e0", marginBottom: "0.5rem" }}>Hola! Soy</p>
        <h1 style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: 800, background: "linear-gradient(135deg, #c084fc, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "0.5rem", lineHeight: 1.2 }}>Rocio Garcia</h1>
        <h2 style={{ fontSize: "1.3rem", color: "#8080b0", fontWeight: 400, marginBottom: "1.5rem" }}>Administradora de Redes</h2>
        <p style={{ color: "#9090c0", lineHeight: 1.7, marginBottom: "2rem" }}>Apasionada por crear interfaces bonitas y funcionales con React y TypeScript.</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#contacto" style={{ padding: "0.75rem 1.75rem", borderRadius: "12px", background: "linear-gradient(135deg, #8b5cf6, #ec4899)", color: "white", textDecoration: "none", fontWeight: 600 }}>Contactame</a>
          <a href="#trabajos" style={{ padding: "0.75rem 1.75rem", borderRadius: "12px", border: "1.5px solid rgba(139,92,246,0.4)", color: "#c084fc", textDecoration: "none", fontWeight: 600 }}>Ver trabajos</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
