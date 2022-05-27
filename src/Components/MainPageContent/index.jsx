/**Em progresso */
import Searchbar from "../Searchbar"
import { getCookie } from "../CookiesHandler"
import "./style.css"
import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"

function MainPageContent(props) {
    //Alugueis em Andamento
    const [alugueisAndamento, setAlugueisAndamento] = useState(0)
    //Carros Disponíveis
    const [veiculosDisponiveis, setVeiculosDisponiveis] = useState(0)
    const [quantidadeVeiculo, setQuantidadeVeiculo] = useState(0)
    //Aluguel Mes
    const [aluguelMes, setAluguelMes] = useState(0)

    //Handler
    useEffect(() => {
        functionAlugueisAndamento()
        functionCarrosDisponiveis()
        functionAluguelMes()
    }, [])

    //Alugueis em Andamento
    const functionAlugueisAndamento = () => {
        const now = new Date()
        axios.get('http://localhost:3030/reserva')
            .then(res => res.data)
            .then(res => {
                res.forEach(key => {
                    const data = new Date(key.data_entrega)
                    if (data > now) {
                        setAlugueisAndamento(alugueisAndamento + 1)
                    }
                })
            })
    }

    //Alugueis no Mês ?
    const functionAluguelMes = () => {
        const now = new Date()
        let mesAtual = now.getMonth() + 1
        let anoAtual = now.getFullYear()
        axios.get('http://localhost:3030/reserva')
            .then(res => res.data)
            .then(res => {
                res.forEach(key => {
                    const data = new Date(key.data_entrega)
                    let anoEntrega = data.getFullYear()
                    let mesEntrega = data.getMonth() + 1
                    if (anoEntrega >= anoAtual) {
                        if (mesEntrega > mesAtual) {
                            setAluguelMes(aluguelMes + 1)
                        }
                    }
                })
            })
    }

    //Alugueis no Ano Atual

    //Linha de codigo

    //Carros Disponíveis
    const functionCarrosDisponiveis = () => {
        setVeiculosDisponiveis(0)
        axios.get('http://localhost:3030/veiculo')
            .then(res => res.data)
            .then(res => {
                setQuantidadeVeiculo(res.length)
                res.forEach(veiculo => {
                    if (veiculo.fk_id_status_veiculo == 1) {
                        setVeiculosDisponiveis(veiculosDisponiveis + 1)
                    }
                })
            })
    }


    //Faturamento do Mês Atual

    //Linha de codigo

    //Faturamento do Ano Atual

    //Linha de codigo




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
                        <p className="overview-info ">  {alugueisAndamento}</p>
                    </div>
                    <div className="formshdivs">
                        <p> Alugueis no Mês:</p>
                        <p className="overview-info "> {aluguelMes}</p>
                    </div>
                    <div className="formshdivs">
                        <p> Alugueis no Ano Atual:</p>
                        <p className="overview-info "> {/* noAno.length */}</p>
                    </div>
                    <div className="formshdivs">
                        <p> Carros Disponíveis:</p>
                        <p className="overview-info "> {veiculosDisponiveis}/{quantidadeVeiculo} </p>
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