import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contato from './views/Contato'
import CadastroCliente from './views/CadastroCliente'
import CadastroLocadora from './views/CadastroLocadora'
import MainPage from './views/MainPage'
import Duvidas from './views/Duvidas'


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/contatos" element={<Contato />} />
                <Route path="/cadastrocliente" element={<CadastroCliente />} />
                <Route path="/cadastrolocadora" element={<CadastroLocadora />} />
                <Route path="/duvidas" element={<Duvidas />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes