import axios from "axios";
import jsonWebTokenService from 'jsonwebtoken';

async function login (userName,senha){

    try {
        const usuarioCartao = {
            "email": userName,
            "senha": senha
        }

            const resposta = await axios({method:"POST",url:"http://localhost:3030/login", data: usuarioCartao})
            document.cookie = `auth=${resposta.data}`
            const jwt = jsonWebTokenService.decode(resposta.data)
            console.log(jwt)


        } catch (err) {
            console.log(err)
        }
    }

    export {login}
    /* const result = usuarios.filter( (usuario)=> usuario.email === userName )
 
    //Verifica se só tem um resultado 
    if (result.length === 1){
     //Verifica se a senha bate 
     if (result[0].senha===senha){
         Define dados do usuário como o resultado obtido 
         let user = result[0]
         Cria um cookie para cada informação do usuário 
         for(var prop in user){
             cookies.set(prop,user[prop],{path:"/"})
         }
         window.location.reload()
     }
     else{
         //Define usuário como não logado porque senha não bate
        deleteAllCookies()
        }
    }
    else{
        deleteAllCookies()
    }
   */


