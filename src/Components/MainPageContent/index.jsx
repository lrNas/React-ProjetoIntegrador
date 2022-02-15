/**Em progresso */
import Searchbar from "../Searchbar"
import {returnUserType} from "../CookiesHandler"
import "./style.css"
import React from "react"
import funcFiltros from "./funcFiltros"
import Carrossel from "../Carrossel"

function MainPageContent(props){
    const reservas = require("../../bancosjson/reservas.json")
    /**Entender porque não retorna o arrEmAndt.lenght */
    let arrEmAndt = funcFiltros.EmAndamento(reservas)
    let emAndt = 0
    arrEmAndt.map(item=>emAndt+=1)

    let arrNoMes = funcFiltros.NoMes(reservas)
    let noMes = 0
    let lucroMensal=0
    arrNoMes.map(item=>{noMes+=1;lucroMensal+=item.valor;return true})



    let arrNoAno = funcFiltros.NoAno(reservas)
    let noAno = 0
    let lucroAnual=0
    arrNoAno.map(item=>{noAno+=1;lucroAnual+=item.valor;return true})
    
    const veiculos = require("../../bancosjson/veiculos.json")

    let totalVeiculos=0
    veiculos.map(item=>totalVeiculos+=1)
    let arrdisponiveis = veiculos.filter(veiculo=>veiculo.status==1)
    let disponiveis=0
    arrdisponiveis.map(item=>disponiveis+=1)



    const agencias = require("../../bancosjson/locadoras.json")


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
<div className="forms">
    <div className="ovlabels formsvdivs">
        <div className="formshdivs">
            <p> Alugueis em Andamento:</p>
            <p className="overview-info "> {emAndt}</p>
        </div>
        <div className="formshdivs">
            <p> Alugueis no Mês:</p>
            <p className="overview-info "> {noMes}</p>
        </div>
    <div className="formshdivs">
            <p> Alugueis no Ano Atual:</p>
            <p className="overview-info "> {noAno}</p>
        </div>
        <div className="formshdivs">
            <p> Carros Disponíveis:</p>
            <p className="overview-info "> {disponiveis}/{totalVeiculos} </p>
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
                <li>AG- 05 GO</li>
                <li>AG- 01 GO</li>
                <li>AG- 20 SP</li>
                <li>AG- 03 SP</li>
                <li>AG- 02 RJ</li>
            </ol>
        </div>
        <div> <h2>Top 5 Veículos</h2>
            <ol className="overview-list "> 
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