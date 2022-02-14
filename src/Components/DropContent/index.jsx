import "./style.css"
import {getArrayAllCookies,deleteAllCookies,login} from "../CookiesHandler"
import React,{ useState } from "react";

function DropContent(props){
    /** Implementar função de "Lembrar-Me" */
    const cookiesFeitos = getArrayAllCookies()

    let userType=0
    console.log(cookiesFeitos)
    if (Object.keys(cookiesFeitos).length>0){
        console.log("Tem cookies maior que 0")
        userType=cookiesFeitos["tipo"]
    }
    else{
        userType=0
    }
    const [userName,setUsername] = useState("")
    const [senha,setSenha] = useState("")
    
    if(userType===0)
    {
        return(
            <div className="drop-content" id="drop-content">
                <form>
                    <label htmlFor="email" className="hli">E-mail</label>
                    <input type="email" name="usuario" id="email" value={userName} onChange={usuario=>setUsername(usuario.target.value)} placeholder="Digite seu E-mail!" />
                    <label htmlFor="senha" className="hli" >Senha</label>
                    <input type="password" value={senha}  name="senha" id="senha" placeholder="Digite sua Senha!" onChange={senha=>setSenha(senha.target.value)} />
                    <button id="logon" onClick={()=>login(userName,senha)}>Entrar</button>
                    <p className="contentitem hli">Problemas para logar? <a className="contentitem" href="contato.html">Clique aqui!</a></p>
                    <p className="contentitem hli">Ainda não é usuário? <a className="contentitem" href="cadastrocliente.html">Cadastre-se!</a></p>
                </form>
            </div>
        )
    }
    else{

        return(
            <div className="drop-content" id="drop-content">
                <ul className="menuLogado">
                    <li id="nomeUsuario" className="nomeUsuario">{cookiesFeitos.nomeCompleto}</li>
                    <li className="mlItens" id="EditarPerfil">Editar Perfil</li>
                    <li className="mlItens" id="historicoLocacoes">Histórico de locações</li>
                    <li className="mlItens" id="logout" onClick={()=>{deleteAllCookies(); window.location.reload()}}>Sair</li>
                </ul>
            </div>
        )

    }
}
                    
export default DropContent