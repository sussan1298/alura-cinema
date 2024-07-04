import { BrowserRouter, Route, Routes } from "react-router-dom";

import Inicio from "pages/Inicio";
import Favoritos from "pages/Favoritos";
import Player from "pages/Player/Index";
import NotFound from "pages/NotFound";
import PaginaBase from "pages/PaginaBase";



function AppRoutes() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />}></Route>
                    <Route path="favoritos" element={<Favoritos />}></Route>
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Route>
            </Routes>

        </BrowserRouter>
    )
}

export default AppRoutes;