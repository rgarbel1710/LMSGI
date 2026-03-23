import './App.css'
import NavBar from './components/NavBar'
import Hero from './sections/Hero'
import SobreMi from './sections/SobreMi'
import Habilidades from './sections/Habilidades'
import Estudios from './sections/Estudios'
import Trabajos from './sections/Trabajos'
import Formacion from './sections/Formacion'
import Contacto from './sections/Contacto'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <SobreMi />
        <Habilidades />
        <Estudios />
        <Trabajos />
        <Formacion />
        <Contacto />
      </main>
      <footer style={{ padding: "1.5rem", textAlign: "center", fontSize: "0.8rem", color: "#555570", borderTop: "1px solid rgba(139,92,246,0.1)" }}>
        <p>© {new Date().getFullYear()} Rocio Garcia · React + TypeScript</p>
      </footer>
    </>
  )
}

export default App