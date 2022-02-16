import NavigateButton from "../NavigateButton";
import {returnUserType} from "../CookiesHandler"

function HeaderLinks(props){
    let userType = returnUserType(props)

    if(userType==2){
        return(
            <>
                <li><NavigateButton nome="Casdatro de Locadora" pagina="/casdatrolocadora"/></li>
                <li><NavigateButton nome="Casdatro de Veiculos" pagina="/casdatroveiculos"/></li>
                <li><NavigateButton nome="Reservas" pagina="/todasreservas"/></li>
                <li><NavigateButton nome="Casdatro de Cliente" pagina="/cadastrocliente"/></li>
            </>
        )
    }
    else{
        return(
            <>
                <li><NavigateButton nome="Contatos" pagina="/contatos"/></li>
                <li><NavigateButton nome="Duvidas" pagina="/duvidas"/></li>
                <li><NavigateButton nome="Minhas Reservas" pagina="/minhasreservas"/></li>
            </>
        )
    }
}

export default HeaderLinks


