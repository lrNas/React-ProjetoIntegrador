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
    //-------
    //Carros Disponíveis
    const [veiculosDisponiveis, setVeiculosDisponiveis] = useState(0)
    const [quantidadeVeiculo, setQuantidadeVeiculo] = useState(0)
    //-------
    //Aluguel Mes
    const [aluguelMes, setAluguelMes] = useState(0)
    //-------
    //Aluguel Ano
    const [aluguelAno, setAluguelAno] = useState(0)
    //-------
    //Total Mes
    const [valorTotalMes, setValorTotalMes] = useState(0)
    //-------
    //Total Ano
    const [valorTotalAno, setValorTotalAno] = useState(0)
    //-------
    //auxiliar de Rank Agencia
    const [rankAgencias, setRankAgencias] = useState('')
    //Rank Agencia
    const [topRankAgencia, setTopRankAgencia] = useState([])

    //Handler
    useEffect(() => {
        functionAlugueisAndamento()
        functionCarrosDisponiveis()
        functionAluguelMesAno()
        functionTopAgencia()
        functionTopCarros()
    }, [])

    //Alugueis em Andamento
    const functionAlugueisAndamento = () => {
        const now = new Date()
        let aux = 0
        axios.get('http://localhost:3030/reserva')
            .then(res => res.data)
            .then(res => {
                for (let reserva of res) {
                    const data = new Date(reserva.data_entrega)
                    if (data > now)
                        aux++
                }
                setAlugueisAndamento(aux)
            })
    }

    //Alugueis no Mês && Ano
    const functionAluguelMesAno = () => {
        const now = new Date()
        let auxMes = 0
        let auxAno = 0
        let totalMes = 0
        let totalAno = 0
        let mesAtual = now.getMonth() + 1
        let anoAtual = now.getFullYear()
        axios.get('http://localhost:3030/reserva')
            .then(res => res.data)
            .then(res => {
                for (let reserva of res) {
                    const data = new Date(reserva.data_entrega)
                    let anoEntrega = data.getFullYear()
                    let mesEntrega = data.getMonth() + 1
                    if (anoEntrega == anoAtual) {
                        auxAno++
                        totalAno += parseFloat(reserva.valor)
                        if (mesEntrega == mesAtual) {
                            auxMes++
                            totalMes += parseFloat(reserva.valor)
                        }
                    }
                }
                setAluguelMes(auxMes)
                setAluguelAno(auxAno)
                setValorTotalMes(totalMes)
                setValorTotalAno(totalAno)
            })
    }

    //Carros Disponíveis
    const functionCarrosDisponiveis = () => {
        setVeiculosDisponiveis(0)
        let auxDisponiveis = 0
        axios.get('http://localhost:3030/veiculo')
            .then(res => res.data)
            .then(res => {
                setQuantidadeVeiculo(res.length)
                for (const veiculo of res) {
                    if (veiculo.fk_id_status_veiculo == 1) {
                        auxDisponiveis++
                    }
                }
                setVeiculosDisponiveis(auxDisponiveis)
            })
    }

    //Top Agencias
    const functionTopAgencia = () => {
        let totalReservas = []
        let rank = []
        axios.get('http://localhost:3030/reserva')
            .then(res => res.data)
            .then(res => {
                for (let reserva of res) {
                    totalReservas[parseInt(reserva.fk_id_local_retirada)] = 0
                }
                for (let reserva of res) {
                    totalReservas[parseInt(reserva.fk_id_local_retirada)] += parseFloat(reserva.valor)
                }
                for (let i = 1; i < totalReservas.length; i++) {
                    rank.push({ id: i, valor: totalReservas[i] })
                }
                rank.sort((a, b) => {
                    return b.valor - a.valor;
                })
            })
        setRankAgencias(rank)
        //rankAgencias = valor filtrado / id em ordem de valor

        let top5Agencia = []
        for (let key of rankAgencias) {
            console.log(key.id)
            axios.get(`http://localhost:3030/locadora/${key.id}`)
                .then(res => res.data)
                .then(res => {
                })
        }
        //setTopRankAgencia(top5Agencia)
        //console.log(topRankAgencia)
    }

    //Top Veiculos
    const functionTopCarros = () => {
        /* let totalReservas = []
        let rank = []
        axios.get('http://localhost:3030/reserva')
            .then(res => res.data)
            .then(res => {
                for (let reserva of res) {
                    totalReservas[parseInt(reserva.fk_id_local_retirada)] = 0
                }
                for (let reserva of res) {
                    totalReservas[parseInt(reserva.fk_id_local_retirada)] += parseFloat(reserva.valor)
                }
                for (let i = 1; i < totalReservas.length; i++) {
                    rank.push({ id: i, valor: totalReservas[i] })
                }
                rank.sort((a, b) => {
                    return b.valor - a.valor;
                })
            }) */
    }

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
                        <p className="overview-info "> {aluguelAno}</p>
                    </div>
                    <div className="formshdivs">
                        <p> Carros Ociosos:</p>
                        <p className="overview-info "> {veiculosDisponiveis}/{quantidadeVeiculo} </p>
                    </div>
                    <div className="formshdivs">
                        <p> Faturamento do Mês Atual:</p>
                        <p className="overview-info ">R$ {valorTotalMes.toFixed(2)} </p>
                    </div>
                    <div className="formshdivs">
                        <p> Faturamento do Ano Atual:</p>
                        <p className="overview-info ">R$ {valorTotalAno.toFixed(2)} </p>
                    </div>
                </div>
                <div className="overview-div" >
                    <div><h2>Top 5 Agências</h2>
                        <ol className="overview-list ">
                            <li>{ }</li>
                            <li>{ }</li>
                            <li>{ }</li>
                            <li>{ }</li>
                            <li>{ }</li>
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