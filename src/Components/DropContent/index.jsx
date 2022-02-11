import "./style.css"
import Cookies from 'universal-cookie';
import React,{ useState } from "react";
const usuarios = require("../../bancosjson/usuarios.json")
const cookies = new Cookies();


function getArrayAllCookies(){
    let cookieArray = []
    let cookiesStr=cookies.getAll()
    for (let cookie in cookiesStr){
        cookieArray[cookie] = cookiesStr[cookie]
    }
    console.log(cookieArray)
    return cookieArray
}

function deleteAllCookies(){
    let cookieArray = cookies.getAll()
    console.log (cookieArray)
    for (let cookie in cookieArray){
        cookies.remove(cookie)
    }
}


function login(userName,senha){
    const result = usuarios.filter( (usuario)=> usuario.email == userName )
 
    /**Verifica se só tem um resultado */
    if (result.length == 1){
     /**Verifica se a senha bate */
     if (result[0].senha==senha){
         /**Define dados do usuário como o resultado obtido */
         let user = result[0]
         /**Cria um cookie para cada informação do usuário */
         for(var prop in user){
             cookies.set(prop,user[prop],{path:"/"})
         }
     }
     else{
         /*Define usuário como não logado porque senha não bate*/
        deleteAllCookies()
        }
    }
    else{
        deleteAllCookies()
    }
 } 



    /*
        Código de verificação de Cookies. Se não tiver cookies, deslogado.

    let cookieArray = getArrayAllCookies()
    if(cookieArray.length ==0){
        console.log("No cookie")
    }
    
    
    */
    /*
cookies.set("cookie1",1,{path:"/"})
cookies.set("cookie2",2,{path:"/"})
cookies.set("cookie3",3,{path:"/"})
const currentCookies = cookies.getAll()
console.log(currentCookies)*/


/** Varre o array de usuários em busca de um usuário que combine com o e-mail informado 
 const result = usuarios.filter((usuario)=> usuario.email == currentUser.email)
 

 /**Verifica se só tem um resultado 
 if (result.length == 1){
     /**Verifica se a senha bate 
     if (result[0].senha==currentUser.senha){
         /**Define dados do usuário como o resultado obtido 
         let user = result[0]
         /**Cria um cookie para cada informação do usuário 
         for(var prop in user){
             cookies.set(prop,user[prop],{path:"/"})
         }
     }
     else{
         /*Define usuário como não logado porque senha não bate
         cookies.set("tipo",0,{path:"/"})
     }
    }
    else{
        /**Define usuário como não logado porque não achou usuário 
         * ou achou mais de um (não deve acontecer, pra evitar, validar ao cadastrar)*
         console.log("Problema ao localizar usuário!")
         cookies.set("tipo",0,{path:"/"})
 } 

 
/**Verifica o cookie de usuário logado para desenhar o header
 if (Number(cookies.get("tipo")) != 1 && Number(cookies.get("tipo")) != "2"){
 /**Se não for 1 ou 2 define como 0 
 admin = 0
} else{
 /**Se for 1 ou 2 armazena na variável usertype, que vai ser verificada 
 usertype = Number(cookies.get("tipo"))
}

*/


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
                    <input type="email" value={userName} name="usuario" id="email" onChange={usuario=>setUsername(usuario.target.value)} placeholder="Digite seu E-mail!" />
                    <label htmlFor="senha" className="hli" >Senha</label>
                    <input type="password" value={senha}  name="senha" id="senha" placeholder="Digite sua Senha!" onChange={senha=>setSenha(senha.target.value)} />
                    <button id="logon" onClick={()=>login(userName,senha)}>Entrar</button>
                    <p className="contentitem" className="hli">Problemas para logar? <a className="contentitem" href="contato.html">Clique aqui!</a></p>
                    <p className="contentitem" className="hli">Ainda não é usuário? <a className="contentitem" href="cadastrocliente.html">Cadastre-se!</a></p>
                </form>
            </div>
        )
    }
    else{

        return(
            <div className="drop-content" id="drop-content">
                <ul className="menuLogado">
                    <li id="nomeUsuario" className="nomeUsuario">{cookiesFeitos.nomeCompleto}</li>
                    <li class="mlItens" id="EditarPerfil">Editar Perfil</li>
                    <li class="mlItens" id="historicoLocacoes">Histórico de locações</li>
                    <li class="mlItens" id="logout" onClick={()=>{deleteAllCookies(); window.location.reload()}}>Sair</li>
                </ul>
            </div>
        )

    }
}
                    
export default DropContent