import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Contato from './views/Contato'
import CadastroCliente from './views/CadastroCliente'
import MainPage from './views/MainPage'
import Duvidas from './views/Duvidas'


const AppRoutes = () => {
    return(
        <BrowserRouter>   
        <Routes>
        <Route  path= "/"  element = {<MainPage/>} />
        <Route  path= "/Contatos"  element = {<Contato />} />
        <Route  path= "/CadastroCliente"  element = {<CadastroCliente />} />
        <Route  path= "/Duvidas"  element = {<Duvidas />} />
        </Routes>  
        </BrowserRouter>
    )
}

export	default AppRoutes