import Header from "../componentes/main/Header";
import Footer from "../componentes/main/Footer";
import QSomos from "../componentes/sections/QSomos";
import Formacion from "../componentes/sections/Formacion";
export const MainLayout = () => {
  return (
    <div className="min-h-screen w-full bg-slate-900 text-white">
        <Header />
        <main>
          <QSomos />
          <Formacion />
          
        </main>
        <Footer />
    </div>
  )
}