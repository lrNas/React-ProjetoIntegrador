/**Em progresso */
import Searchbar from "../Searchbar"
import {getCookie} from "../CookiesHandler"
import "./style.css"
import React from "react"
import funcFiltros from "../../Controllers/bancoJson"

function MainPageContent(props){
    const reservas = require("../../bancosjson/reservas.json")
    /*
    Mudar as funções de Jsons para axios
    */
    let emAndt = funcFiltros.EmAndamento(reservas)

    let noMes = funcFiltros.NoMes(reservas)
    let lucroMensal=0
    noMes.map(item=>{lucroMensal+=item.valor;return true})

    let noAno = funcFiltros.NoAno(reservas)
    let lucroAnual=0
    noAno.map(item=>{lucroAnual+=item.valor;return true})

    const veiculos = require("../../bancosjson/veiculos.json")
    let disponiveis = veiculos.filter(veiculo=>veiculo.status==="1")
    const filtroCarros = funcFiltros.Top5Carros(reservas,veiculos)

    const agencias = require("../../bancosjson/locadoras.json")

    const topAgencias = funcFiltros.Top5Agencias(reservas,agencias)


const index = 
<main className="section">
    <Searchbar />

    <div className="infobar" id="infobar">
        <div className="infobaritem">
            <p>
                Alugue um veículo e devolva aonde quiser sem taxas adicionais. *confira se está disponível!
            </p>
        </div>
        <div className="infobaritem">
            <p>
                2 horas de cortesia caso você precise retirar o carro depois do horário combinado.
            </p>
        </div>
        <div className="infobaritem">
            <p>
                Faça parte da nossa comunidade, acumule pontos e vantagens para as próximas reservas.
            </p>
        </div>
    </div>
</main>


const overview = 
<main className="section">
<h1>Overview</h1>
{/* div, filedset ou section, o que é corretamente semântico? */}
<div className="forms">
    <div className="ovlabels formsvdivs">
        <div className="formshdivs">
            <p> Alugueis em Andamento:</p>
            <p className="overview-info "> {emAndt.length}</p>
        </div>
        <div className="formshdivs">
            <p> Alugueis no Mês:</p>
            <p className="overview-info "> {noMes.length}</p>
        </div>
    <div className="formshdivs">
            <p> Alugueis no Ano Atual:</p>
            <p className="overview-info "> {noAno.length}</p>
        </div>
        <div className="formshdivs">
            <p> Carros Disponíveis:</p>
            <p className="overview-info "> {disponiveis.length}/{veiculos.length} </p>
        </div>
        <div className="formshdivs">
            <p> Faturamento do Mês Atual:</p>
            <p className="overview-info ">{lucroMensal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </p>
        </div>
        <div className="formshdivs">
            <p> Faturamento do Ano Atual:</p>
            <p className="overview-info "> {lucroAnual.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </p>
            </div>
        </div>
    <div className="overview-div" >
        <div><h2>Top 5 Agências</h2>
            <ol className="overview-list ">
                <li>{topAgencias[0].nomeLocadora}</li>
                <li>{topAgencias[1].nomeLocadora}</li>
                <li>{topAgencias[2].nomeLocadora}</li>
                <li>{topAgencias[3].nomeLocadora}</li>
                <li>{topAgencias[4].nomeLocadora}</li>
            </ol>
        </div>
        <div> <h2>Top 5 Veículos</h2>
            <ol className="overview-list "> 
                <li>{filtroCarros[0].modelo}</li>
                <li>{filtroCarros[1].modelo}</li>
                <li>{filtroCarros[2].modelo}</li>
                <li>{filtroCarros[3].modelo}</li>
                <li>{filtroCarros[4].modelo}</li>
            </ol>
        </div>
    </div>   
</div>
</main>

const userType = getCookie("tipo")
if(userType===1){
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