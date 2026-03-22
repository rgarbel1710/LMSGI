import { BrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/trabajos" element={<Trabajos />} />
                    <Route path="/contacto" element={<Contacto />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
