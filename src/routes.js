import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Contatos from './views/Contatos'
import CadastroCliente from './views/CadastroCliente'
import Duvidas from './views/Duvidas'


const AppRoutes = () => {
    return(
        <BrowserRouter>   
        <Routes>
        <Route  path= "/Contatos"  element = {<Contatos />} />
        <Route  path= "/CadastroCliente"  element = {<CadastroCliente />} />
        <Route  path= "/Duvidas"  element = {<Duvidas />} />
        </Routes>  
        </BrowserRouter>
    )
}

export	default AppRoutes