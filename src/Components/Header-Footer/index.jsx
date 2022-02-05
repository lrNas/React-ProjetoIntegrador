import './styles.css'
import imglogo from '../../img/logo.svg'
import imguser from '../../img/user.svg'
import imgchat from '../../img/chat.svg'
import imgfacebook from '../../img/facebook.svg'
import imgwhats from '../../img/whats.svg'
import imgtwitter from '../../img/twitter.svg'
import imginstagram from '../../img/instagram.svg'

const logo = <img src={imglogo} class="logo" />

function Header(props) {
    if (props.admin == 0) {
        return (
            <div id="header">
                {logo}
                <ul type="none" id="hlinks">
                    <li><a href="contato.html" class="hli"> Contato</a></li>
                    <li><a href="duvidas.html" class="hli"> Dúvidas</a></li>
                    <li><a href="minhasreservas.html" class="hli"> Minhas Reservas</a></li>
                    <div class="dropdown-menu">
                        <li><img class="hli" src={imguser} id="avatar" /></li>
                        <div class="drop-content" id="drop-content">
                            <form>
                                <label for="email" class="hli">E-mail</label>
                                <input type="email" name="usuario" id="email" placeholder="Digite seu E-mail!" />
                                <label for="senha" class="hli">Senha</label>
                                <input type="password" name="senha" id="senha" placeholder="Digite sua Senha!" />
                                <button id="logon">Entrar</button>
                                <p class="contentitem" class="hli">Problemas para logar? <a class="contentitem" href="contato.html">Clique aqui!</a></p>
                                <p class="contentitem" class="hli">Ainda não é usuário? <a class="contentitem" href="cadastrocliente.html">Cadastre-se!</a></p>
                            </form>
                        </div>
                    </div>
                </ul>

            </div>

        )
    } else {
        return (
            <div id="header">
                {logo}
                <ul type="none" id="hlinks">
                    <li><a href="cadastrolocadora.html" class="hli"> Cadastro de Locadora</a></li>
                    <li><a href="cadastroveiculos.html" class="hli"> Cadastro de Veículos</a></li>
                    <li><a href="todasreservas.html" class="hli"> Reservas</a></li>
                    <li><a href="cadastrocliente.html" class="hli"> Cadastro de Cliente</a></li>
                    <div class="dropdown-menu">
                        <li><img class="hli" src={imguser} id="avatar" /></li>
                        <div class="drop-content" id="drop-content">
                            <form>
                                <label for="email" class="hli">E-mail</label>
                                <input type="email" name="usuario" id="email" placeholder="Digite seu E-mail!" />
                                <label for="senha" class="hli">Senha</label>
                                <input type="password" name="senha" id="senha" placeholder="Digite sua Senha!" />
                                <button id="logon">Entrar</button>
                                <p class="contentitem" class="hli">Problemas para logar? <a class="contentitem" href="contato.html">Clique aqui!</a></p>
                                <p class="contentitem" class="hli">Ainda não é usuário? <a class="contentitem" href="cadastrocliente.html">Cadastre-se!</a></p>
                            </form>
                        </div>
                    </div>
                </ul>

            </div>

        )
    }
}

const Footer = () => {
    return (
        <div id="footer">
            <div class="contend">
                <ul id="subend" type="none">
                    <li>Rua Bonifácio Cubas, 116</li>
                    <li>CEP 11410-192</li>
                    <li> Bairro Freguesia do Ó</li>
                    <li> Zona Norte - São Paulo - SP</li>
                    <li> CEP 11410-192</li>
                    <li>{logo}</li>
                </ul>
            </div>
            <div id="details">
                <ul type="none">
                    <strong><li>ATENDIMENTO AO CLIENTE</li>
                    </strong>
                    <li>
                        Dúvidas Frequentes
                    </li>
                    <li>
                        Principais Capitais 4007 2003
                    </li>
                    <li>
                        Demais Localidades 0800 604 6336
                    </li>
                    <li>
                        Internacionais +55 (41) 3152 9700
                    </li>
                    <li>
                        Fale Conosco:
                    </li>
                    <li>
                    <img src={imgchat} class="hli"/>
                    <img src={imgfacebook} class="hli"/>
                    <img src={imginstagram} class="hli"/>
                    <img src={imgtwitter}class="hli"/>
                    <img src={imgwhats}class="hli"/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export {Header, Footer}

