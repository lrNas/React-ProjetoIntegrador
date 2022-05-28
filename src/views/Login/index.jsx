import PageConstructor from '../../Components/PageConstructor';
import { getCookie, login, deleteCookies } from "../../Components/CookiesHandler"
import React, { useState, useEffect } from "react";
import './styles.css'

function Login() {
    const [userName, setUsername] = useState("")
    const [senha, setSenha] = useState("")


    return (
        <PageConstructor>
            <div className='section'>
                <div className='login'>
                    <p id='font'>Ainda não possui cadastro? Realize agora!</p>
                    <label htmlFor="email">E-mail</label>
                    <input autoComplete="off" type="email" name="usuario" id="email" value={userName} onChange={usuario => setUsername(usuario.target.value)} placeholder="Digite seu E-mail!" />
                    <label autoComplete="off" htmlFor="senha">Senha</label>
                    <input type="password" value={senha} name="senha" id="senha" placeholder="Digite sua Senha!" onChange={senha => setSenha(senha.target.value)} />
                    <button type="submit" id="logon" onClick={() => { login(userName, senha); window.location.assign("http://localhost:3000/") }}>Entrar</button>
                    <p id='font1'>Problemas para logar? <a href="contato" id='font1'>Clique aqui!</a></p>
                    <p id='font1'>Ainda não é usuário? <a href="cadastrocliente" id='font1'>Cadastre-se!</a></p>
                </div>
            </div>
        </PageConstructor>
    )
}

export default Login