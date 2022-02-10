import './styles.css'
import imglogo from '../../img/logo.svg'
import imguser from '../../img/user.svg'
import imgchat from '../../img/chat.svg'
import imgfacebook from '../../img/facebook.svg'
import imgwhats from '../../img/whats.svg'
import imgtwitter from '../../img/twitter.svg'
import imginstagram from '../../img/instagram.svg'
import NavigateButton from '../NavigateButton'

const logo = <img src={imglogo} className="logo" />


function Header(props) {

    if (props.admin == 0) {
        return (
            <div id="header">
                {logo}
                <ul type="none" id="hlinks">
                    <li><NavigateButton nome="Contatos" pagina="/Contatos"/></li>
                    <li><NavigateButton nome="Duvidas" pagina="/Duvidas"/></li>
                    <li><NavigateButton nome="Minhas Reservas" pagina="/MinhasReservas"/></li>
                    <div className="dropdown-menu">
                        <li><img className="hli" src={imguser} id="avatar" /></li>
                        <div className="drop-content" id="drop-content">
                            <form>
                                <label for="email" className="hli">E-mail</label>
                                <input type="email" name="usuario" id="email" placeholder="Digite seu E-mail!" />
                                <label for="senha" className="hli">Senha</label>
                                <input type="password" name="senha" id="senha" placeholder="Digite sua Senha!" />
                                <button id="logon">Entrar</button>
                                <p className="contentitem" className="hli">Problemas para logar? <a className="contentitem" href="contato.html">Clique aqui!</a></p>
                                <p className="contentitem" className="hli">Ainda não é usuário? <a className="contentitem" href="cadastrocliente.html">Cadastre-se!</a></p>
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
                    <li> <li><NavigateButton nome="CasdatroLocadora" pagina="/CasdatroLocadora"/></li></li>
                    <li><NavigateButton nome="CasdatroVeiculos" pagina="/CasdatroVeiculos"/></li>
                    <li><NavigateButton nome="Reservas" pagina="/TodasReservas"/></li>
                    <li><NavigateButton nome="CasdatroCliente" pagina="/CasdatroCliente"/></li>
                    <div className="dropdown-menu">
                        <li><img className="hli" src={imguser} id="avatar" /></li>
                        <div className="drop-content" id="drop-content">
                            <form>
                                <label for="email" className="hli">E-mail</label>
                                <input type="email" name="usuario" id="email" placeholder="Digite seu E-mail!" />
                                <label for="senha" className="hli">Senha</label>
                                <input type="password" name="senha" id="senha" placeholder="Digite sua Senha!" />
                                <button id="logon">Entrar</button>
                                <p className="contentitem" className="hli">Problemas para logar? <a className="contentitem" href="contato.html">Clique aqui!</a></p>
                                <p className="contentitem" className="hli">Ainda não é usuário? <a className="contentitem" href="cadastrocliente.html">Cadastre-se!</a></p>
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
            <div className="contend">
                <ul id="subend" type="none">
                    <li id='ft'>Rua Bonifácio Cubas, 116</li>
                    <li id='ft'>CEP 11410-192</li>
                    <li id='ft'> Bairro Freguesia do Ó</li>
                    <li id='ft'> Zona Norte - São Paulo - SP</li>
                    <li id='ft'> CEP 11410-192</li>
                    <li id='ft'>{logo}</li>
                </ul>
            </div>
            <div id="details">
                <ul type="none">
                    <strong><li>ATENDIMENTO AO CLIENTE</li>
                    </strong>
                    <li id='ft'>
                        Dúvidas Frequentes
                    </li>
                    <li id='ft'>
                        Principais Capitais 4007 2003
                    </li>
                    <li id='ft'>
                        Demais Localidades 0800 604 6336
                    </li>
                    <li id='ft'>
                        Internacionais +55 (41) 3152 9700
                    </li>
                    <li id='ft'>
                        Fale Conosco:
                    </li>
                    <li id='ft1'>
                        <img src={imgchat} className="hli" />
                        <img src={imgfacebook} className="hli" />
                        <img src={imginstagram} class="hli" />
                        <img src={imgtwitter} class="hli" />
                        <img src={imgwhats} class="hli" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export { Header, Footer }

