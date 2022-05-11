import axios from "axios";

async function login(userName, senha) {

    try {
        const usuarioCartao = {
            "email": userName,
            "senha": senha
        }

        const resposta = await axios({ method: "POST", url: "http://localhost:3030/login", data: usuarioCartao })
        document.cookie = `auth=${resposta.data.token}`
        document.cookie = `tipousuario=${resposta.data.tipo}`
        document.cookie = `nomeusuario=${resposta.data.nomeusuario}`
        console.log(getCookie("nomeusuario"))


    } catch (err) {
        console.log(err)
    }
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}



export { login, getCookie }
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


