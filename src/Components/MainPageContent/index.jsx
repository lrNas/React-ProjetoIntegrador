/**Em progresso */
import Searchbar from "../Searchbar"
import { getCookie } from "../CookiesHandler"
import "./style.css"
import React from "react"
import { useState, useEffect } from "react"
import funcFiltros from "../../Controllers/bancoJson"
import axios from "axios"

function MainPageContent(props) {
    const [veiculoAndamento, setVeiculoAndamento] = useState([])
    const [quantidadeVeiculo, setQuantidadeVeiculo] = useState(0)

    /*
    Mudar as funções de Jsons para axios
    */

    useEffect(() => {
        let carro = [];
        axios.get('http://localhost:3030/veiculo')
            .then(res => res.data)
            .then(res => {
                setQuantidadeVeiculo(res.length)
                for(const veiculo of res) {
                    if(veiculo.fk_id_status_veiculo == 1){
                     setQuantidadeVeiculo(quantidadeVeiculo+1)
                    }
                }
            })
        setVeiculoAndamento(carro.length)
        }, [])




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
                        <p className="overview-info ">  {/* emAndt.length */}</p>
                    </div>
                    <div className="formshdivs">
                        <p> Alugueis no Mês:</p>
                        <p className="overview-info "> {/* noMes.length */}</p>
                    </div>
                    <div className="formshdivs">
                        <p> Alugueis no Ano Atual:</p>
                        <p className="overview-info "> {/* noAno.length */}</p>
                    </div>
                    <div className="formshdivs">
                        <p> Carros Disponíveis:</p>
                        <p className="overview-info "> {veiculoAndamento}/{quantidadeVeiculo} </p>
                    </div>
                    <div className="formshdivs">
                        <p> Faturamento do Mês Atual:</p>
                        <p className="overview-info ">{/* lucroMensal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) */} </p>
                    </div>
                    <div className="formshdivs">
                        <p> Faturamento do Ano Atual:</p>
                        <p className="overview-info "> {/* lucroAnual.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) */} </p>
                    </div>
                </div>
                <div className="overview-div" >
                    <div><h2>Top 5 Agências</h2>
                        <ol className="overview-list ">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ol>
                    </div>
                    <div> <h2>Top 5 Veículos</h2>
                        <ol className="overview-list ">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ol>
                    </div>
                </div>
            </div>
        </main>

    const userType = getCookie("tipousuario")
    if (userType == 1) {
        return (
            overview
        )
    }
    else {
        return (
            index
        )
    }
}

export default MainPageContent