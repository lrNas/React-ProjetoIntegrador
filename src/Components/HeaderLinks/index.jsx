import NavigateButton from "../NavigateButton";
import {getCookie} from "../CookiesHandler"

function HeaderLinks(props){
    let userType = getCookie("tipo")
    console.log(userType)

    if(userType===1){
        return(
            <>
                <li><NavigateButton nome="Casdatro de Locadora" pagina="/cadastrolocadora"/></li>
                <li><NavigateButton nome="Casdatro de Veiculos" pagina="/cadastroveiculos"/></li>
                <li><NavigateButton nome="Reservas" pagina="/todasreservas"/></li>
                <li><NavigateButton nome="Cadastro de Cliente" pagina="/cadastrocliente"/></li>
            </>
        )
    }
    else{
        return(
            <>
                <li><NavigateButton nome="Contato" pagina="/contato"/></li>
                <li><NavigateButton nome="Duvidas" pagina="/duvidas"/></li>
                <li><NavigateButton nome="Minhas Reservas" pagina="/minhasreservas"/></li>
            </>
        )
    }
}

export default HeaderLinks


