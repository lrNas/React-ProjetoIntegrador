import './styles.css'
import imglogo from '../../img/logo.svg'
import imguser from '../../img/user.svg'
import imgchat from '../../img/chat.svg'
import imgfacebook from '../../img/facebook.svg'
import imgwhats from '../../img/whats.svg'
import imgtwitter from '../../img/twitter.svg'
import imginstagram from '../../img/instagram.svg'
import { Link } from 'react-router-dom'
import DropContent from '../DropContent'
import HeaderLinks from '../HeaderLinks'

const logo = <img src={imglogo} className="logo" alt="Locar - Locação de Veículos" />
function PageConstructor(props) {
    return (
        <>
        
        <div id="header">
            <Link to={"/"} >
            {logo}
            </Link>
            <ul type="none" id="hlinks">
                <HeaderLinks userType={props.admin}/>
                <div className="dropdown-menu">
                <li><img className="hli" src={imguser} id="avatar" /></li>
                    <DropContent userType={props.admin}/>
                </div>
            </ul>
        </div>
    {props.children}
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
                        <img src={imginstagram} className="hli" />
                        <img src={imgtwitter} className="hli" />
                        <img src={imgwhats} className="hli" />
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}




export default PageConstructor

