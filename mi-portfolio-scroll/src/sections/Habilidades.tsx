const SKILLS = [
  { name: "React", level: 70, color: "#61dafb" },
  { name: "TypeScript", level: 60, color: "#3178c6" },
  { name: "JavaScript", level: 75, color: "#f7df1e" },
  { name: "CSS", level: 80, color: "#c4714a" },
  { name: "HTML", level: 85, color: "#e34c26" },
  { name: "SQL", level: 65, color: "#8a9e7a" },
  { name: "Linux", level: 60, color: "#f8981d" },
  { name: "Git", level: 60, color: "#f05032" },
];

const Habilidades = () => {
  return (
    <section id="habilidades" className="section" style={{ background: "rgba(139,92,246,0.03)" }}>
      <h2 className="section__title">Habilidades</h2>
      <p className="section__subtitle">Tecnologias que manejo</p>
      <div className="grid">
        {SKILLS.map((skill) => (
          <div key={skill.name} className="card">
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.9rem" }}>
              <span style={{ fontWeight: 600, color: "#d0d0f0", flex: 1 }}>{skill.name}</span>
              <span style={{ fontSize: "0.85rem", color: "#7070a0" }}>{skill.level}%</span>
            </div>
            <div style={{ height: "6px", background: "rgba(255,255,255,0.06)", borderRadius: "10px", overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${skill.level}%`, background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`, borderRadius: "10px" }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Habilidades;
