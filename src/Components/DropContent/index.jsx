import "./style.css"
import {getCookie,login} from "../CookiesHandler"
import React,{ useState } from "react";

function DropContent(props){
    let userType
    getCookie("tipo")==null?userType = 0:userType = getCookie("tipo")
    console.log(getCookie("tipo"))
    const [userName,setUsername] = useState("")
    const [senha,setSenha] = useState("")
    
    if(userType===0)
    {
        return(
            <div className="drop-content" id="drop-content">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="usuario" id="email" value={userName} onChange={usuario=>setUsername(usuario.target.value)} placeholder="Digite seu E-mail!" />
                    <label htmlFor="senha">Senha</label>
                    <input type="password" value={senha}  name="senha" id="senha" placeholder="Digite sua Senha!" onChange={senha=>setSenha(senha.target.value)} />
                    <button type="submit"id="logon" onClick={()=>login(userName,senha)}>Entrar</button>
                    <p>Problemas para logar? <a href="contato.html">Clique aqui!</a></p>
                    <p>Ainda não é usuário? <a href="cadastrocliente">Cadastre-se!</a></p>
            </div>
        )
    }
    else{

        return(
            <div className="drop-content" id="drop-content">
                <ul className="menuLogado">
                    <li id="nomeUsuario" className="nomeUsuario">{getCookie("nomeusuario")}</li>
                    <li className="mlItens" id="EditarPerfil">Editar Perfil</li>
                    <li className="mlItens" id="historicoLocacoes">Histórico de locações</li>
                    <li className="mlItens" id="logout" /* onClick={()=>{deleteAllCookies(); window.location.reload()}} */>Sair</li>
                </ul>
            </div>
        )

    }
}
                    
export default DropContent