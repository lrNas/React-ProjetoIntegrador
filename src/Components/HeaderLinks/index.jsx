import NavigateButton from "../NavigateButton";
import {getCookie} from "../CookiesHandler";
import React,{ useState, useEffect } from "react";

function HeaderLinks(props){
    useEffect(() => {
        getUser()
        },[])  
    function getUser(){
    return getCookie("tipousuario") == null? 0 : getCookie("tipousuario")}

    if(getUser()==1){
        return(
            <>
                <li><NavigateButton nome="Casdatro de Locadora" pagina="/cadastrolocadora"/></li>
                <li><NavigateButton nome="Casdatro de Veiculos" pagina="/cadastroveiculos"/></li>
                <li><NavigateButton nome="Reservas" pagina="/todasreservas"/></li>
                <li><NavigateButton nome="Cadastro de Cliente" pagina="/cadastrocliente"/></li>
            </>
        )
    }
    else if(getUser()==2){
        return(
            <>
                <li><NavigateButton nome="Contato" pagina="/contato"/></li>
                <li><NavigateButton nome="Duvidas" pagina="/duvidas"/></li>
                <li><NavigateButton nome="Minhas Reservas" pagina="/todasreservas"/></li>
            </>
        )
    }else{
        return(
            <>
                <li><NavigateButton nome="Contato" pagina="/contato"/></li>
                <li><NavigateButton nome="Duvidas" pagina="/duvidas"/></li>
                <li><NavigateButton nome="Minhas Reservas" pagina="/login"/></li>
            </>
        )
    }
}

export default HeaderLinks


