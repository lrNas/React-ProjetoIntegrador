/**Sem bugs conhecidos */
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const usuarios = require("../../bancosjson/usuarios.json")

function returnUserType(prop){
    let userType = prop
    if(prop!=0){

        if(cookies.get("tipo")){
            userType=parseInt(cookies.get("tipo"))
        }
    }
    return userType
}

function getArrayAllCookies(){
    let cookieArray = []
    let cookiesStr=cookies.getAll()
    for (let cookie in cookiesStr){
        cookieArray[cookie] = cookiesStr[cookie]
    }
    return cookieArray
}

function deleteAllCookies(){
    let cookieArray = cookies.getAll()
    for (let cookie in cookieArray){
        cookies.remove(cookie)
    }
}

function login(userName,senha){
    const result = usuarios.filter( (usuario)=> usuario.email === userName )
 
    /**Verifica se só tem um resultado */
    if (result.length === 1){
     /**Verifica se a senha bate */
     if (result[0].senha===senha){
         /**Define dados do usuário como o resultado obtido */
         let user = result[0]
         /**Cria um cookie para cada informação do usuário */
         for(var prop in user){
             cookies.set(prop,user[prop],{path:"/"})
         }
         window.location.reload()
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


export {getArrayAllCookies,deleteAllCookies,login,returnUserType}