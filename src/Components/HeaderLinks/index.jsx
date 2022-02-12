import NavigateButton from "../NavigateButton";
import {returnUserType} from "../CookiesHandler"

function HeaderLinks(props){
    let userType = returnUserType(props)

    if(userType==2){
        return(
            <>
            <li>
                <li><NavigateButton nome="Casdatro de Locadora" pagina="/CasdatroLocadora"/></li></li>
                <li><NavigateButton nome="Casdatro de Veiculos" pagina="/CasdatroVeiculos"/></li>
                <li><NavigateButton nome="Reservas" pagina="/TodasReservas"/></li>
                <li><NavigateButton nome="Casdatro de Cliente" pagina="/CasdatroCliente"/>
            </li>
            </>
        )
    }
    else{
        return(
            <>
                <li><NavigateButton nome="Contatos" pagina="/Contatos"/></li>
                <li><NavigateButton nome="Duvidas" pagina="/Duvidas"/></li>
                <li><NavigateButton nome="Minhas Reservas" pagina="/MinhasReservas"/></li>
            </>
        )
    }
}

export default HeaderLinks


