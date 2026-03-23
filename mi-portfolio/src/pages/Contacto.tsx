import { useState } from "react";

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ nombre, email, mensaje });
    setEnviado(true);
    setNombre("");
    setEmail("");
    setMensaje("");
    setTimeout(() => setEnviado(false), 4000);
  };

  const inputStyle = { width: "100%", padding: "0.75rem 1rem", background: "#1a1a2e", border: "1px solid rgba(139,92,246,0.2)", borderRadius: "10px", color: "#e0e0f0", fontSize: "0.95rem", boxSizing: "border-box" as const, outline: "none" };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: 800, background: "linear-gradient(135deg, #c084fc, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "0.5rem" }}>Contacto</h1>
      <p style={{ color: "#7070a0", marginBottom: "2rem" }}>Tienes un proyecto en mente? Hablemos!</p>

      {enviado && (
        <div style={{ padding: "1rem", background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: "10px", color: "#34d399", marginBottom: "1.5rem" }}>
          Mensaje enviado! Me pondre en contacto contigo pronto.
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        <div>
          <label style={{ display: "block", fontSize: "0.875rem", color: "#9090c0", marginBottom: "0.5rem" }}>Nombre</label>
          <input type="text" style={inputStyle} placeholder="Tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </div>
        <div>
          <label style={{ display: "block", fontSize: "0.875rem", color: "#9090c0", marginBottom: "0.5rem" }}>Email</label>
          <input type="email" style={inputStyle} placeholder="tu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label style={{ display: "block", fontSize: "0.875rem", color: "#9090c0", marginBottom: "0.5rem" }}>Mensaje</label>
          <textarea style={{ ...inputStyle, resize: "vertical" }} placeholder="Cuentame tu proyecto..." rows={5} value={mensaje} onChange={(e) => setMensaje(e.target.value)} required />
        </div>
        <button type="submit" style={{ padding: "0.875rem", borderRadius: "12px", background: "linear-gradient(135deg, #8b5cf6, #ec4899)", color: "white", fontWeight: 600, fontSize: "1rem", border: "none", cursor: "pointer" }}>
          Enviar mensaje
        </button>
      </form>
    </div>
  );
};

export default Contacto;
