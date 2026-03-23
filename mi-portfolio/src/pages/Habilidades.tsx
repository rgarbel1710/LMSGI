import type { Skill } from "../types";
import skillsData from "../data/skills.json";

const skills: Skill[] = skillsData;

const Habilidades = () => {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "3rem 1.5rem" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: 800, background: "linear-gradient(135deg, #c084fc, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "0.5rem" }}>Habilidades</h1>
      <p style={{ color: "#7070a0", marginBottom: "2rem" }}>Tecnologias que manejo</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 360px), 1fr))", gap: "1rem" }}>
        {skills.map((skill) => (
          <div key={skill.name} style={{ background: "#12121e", border: "1px solid rgba(139,92,246,0.15)", borderRadius: "14px", padding: "1.25rem 1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.9rem" }}>
              <span style={{ fontWeight: 700, color: skill.color, width: "40px" }}>{skill.icon}</span>
              <span style={{ fontWeight: 600, color: "#d0d0f0", flex: 1 }}>{skill.name}</span>
              <span style={{ fontSize: "0.85rem", color: "#7070a0" }}>{skill.level}%</span>
            </div>
            <div style={{ height: "6px", background: "rgba(255,255,255,0.06)", borderRadius: "10px", overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${skill.level}%`, background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`, borderRadius: "10px" }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Habilidades;
