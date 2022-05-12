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


    } catch (err) {
        console.log(err)
    }
    window.location.reload();
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
const deleteCookies = () => {
    if (typeof window === 'undefined') return;
    const decodedCookies = decodeURIComponent(document.cookie);
    const cookies = decodedCookies.split(";");
    for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i];
          const eqPos = cookie.indexOf("=");
          const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;          
        document.cookie = `${name}=${";"} path=/${";"} expires=${new Date(0)}`;
    
  }}


export { login, getCookie, deleteCookies }
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


