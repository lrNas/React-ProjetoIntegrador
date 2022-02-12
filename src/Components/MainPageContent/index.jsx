
import Carrossel from "../Carrossel"
import Searchbar from "../Searchbar"
import {returnUserType} from "../CookiesHandler"
import "./style.css"

function MainPageContent(props){
const index = 
<main class="section">
    <Searchbar />
    <Carrossel />
    <div id="resultados">

    </div>

    <div class="infobar" id="infobar">
        <div class="infobaritem">
            <p>
                Alugue um veículo e devolva aonde quiser sem taxas adicionais. *confira se está disponível!
            </p>
        </div>
        <div class="infobaritem">
            <p>
                2 horas de cortesia caso você precise retirar o carro depois do horário combinado.
            </p>
        </div>
        <div class="infobaritem">
            <p>
                Faça parte da nossa comunidade, acumule pontos e vantagens para as próximas reservas.
            </p>
        </div>
    </div>
</main>


const overview = <main class="section">
<h1>Overview</h1>
<div class="forms">
    <div class="ovlabels formsvdivs">
        <div class="formshdivs">
            <p> Alugueis em Andamento:</p>
            <p class="overview-info "> 13 </p>
        </div>
        <div class="formshdivs">
            <p> Alugueis no Mês:</p>
            <p class="overview-info "> 5 </p>
        </div>
    <div class="formshdivs">
            <p> Alugueis no Ano Atual:</p>
            <p class="overview-info "> 48 </p>
        </div>
        <div class="formshdivs">
            <p> Carros Disponíveis:</p>
            <p class="overview-info "> 40/180 </p>
        </div>
        <div class="formshdivs">
            <p> Faturamento do Mês Atual:</p>
            <p class="overview-info "> R$ 25973,00 </p>
        </div>
        <div class="formshdivs">
            <p> Faturamento do Ano Atual:</p>
            <p class="overview-info "> R$ 709802,00 </p>
            </div>
        </div>
    <div class="overview-div" >
        <div><h2>Top 5 Agências</h2>
            <ol class="overview-list ">
                <li>AG- 05 GO</li>
                <li>AG- 01 GO</li>
                <li>AG- 20 SP</li>
                <li>AG- 03 SP</li>
                <li>AG- 02 RJ</li>
            </ol>
        </div>
        <div> <h2>Top 5 Veículos</h2>
            <ol class="overview-list "> 
                <li>Fox 2019</li>
                <li>Celta 2020</li>
                <li>Uno 2020</li>
                <li>Civic 2019</li>
                <li>HB20</li>
            </ol>
        </div>
    </div>   
</div>
</main>

const userType = returnUserType(props.userType)
if(userType===2){
    return(
        overview
        )   
}
else{

    return(
        index
        )
    }
}
    
export default MainPageContent