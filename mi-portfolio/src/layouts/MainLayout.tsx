import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const MainLayout = () => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#0a0a14", color: "#e0e0f0", overflowX: "hidden" }}>
      <NavBar />
      <main style={{ flex: 1, paddingTop: "64px", width: "100%", boxSizing: "border-box", overflowX: "hidden" }}>
        <Outlet />
      </main>
      <footer style={{ padding: "1.5rem", textAlign: "center", fontSize: "0.8rem", color: "#555570", borderTop: "1px solid rgba(139,92,246,0.1)" }}>
        <p>© {new Date().getFullYear()} Rocio Garcia · React + TypeScript</p>
      </footer>
    </div>
  );
};

export default MainLayout;
