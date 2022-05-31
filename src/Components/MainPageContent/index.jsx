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
    //Rank Agencia
    const [topRankAg, setTopRankAg] = useState([])
    //Rank Veiculo
    const [topRankVeiculo, setTopRankVeiculo] = useState([])
      //Rank Veiculo
      const [loading, setLoading] = useState(true)
    

    //Handler
    useEffect(()=> {
        async function load(){
            await functionTopAgencia()
            await functionTopCarros()
            await functionAlugueisAndamento()
            await functionCarrosDisponiveis()
            await functionAluguelMesAno()
            await setLoading(!loading)
        }
        load();
    }, [])

    useEffect(()=>{
        // Fazer um loading
    },[loading])

    //Alugueis em Andamento
    const functionAlugueisAndamento = async()=> {
        const now = new Date()
        let aux = 0
        await axios.get('http://localhost:3030/reserva')
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
    const functionAluguelMesAno = async()=> {
        const now = new Date()
        let auxMes = 0
        let auxAno = 0
        let totalMes = 0
        let totalAno = 0
        let mesAtual = now.getMonth() + 1
        let anoAtual = now.getFullYear()
        await axios.get('http://localhost:3030/reserva')
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
    const functionCarrosDisponiveis = async()=> {
        setVeiculosDisponiveis(0)
        let auxDisponiveis = 0
        await axios.get('http://localhost:3030/veiculo')
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
    const functionTopAgencia = async()=> {
        let rank = []
        let totalReservas = []
        await axios.get('http://localhost:3030/reserva')
            .then(res => res.data)
            .then(res => {
                for (let reserva of res) {
                    totalReservas[parseInt(reserva.fk_id_local_retirada)] = 0
                }
                for (let reserva of res) {
                    totalReservas[parseInt(reserva.fk_id_local_retirada)] += parseFloat(reserva.valor)
                }
                for (let i = 1; i < totalReservas.length; i++) {
                    rank.push({ id: i, valor: totalReservas[i]})
                }

                rank.sort((a, b) => {
                    return a.valor - b.valor;
                })
                return rank
              })
              .then(res=>{
              let top5Agencia = []
              for (let agencia of rank) {
                  axios.get(`http://localhost:3030/locadora/${agencia.id}`)
                              .then(res => {
                                  return res.data})
                              .then(res => {
                                  return res[0]
                              })
                              .then(item=>item.nome)
                              .then(nome=>{
              top5Agencia.push(nome)
            })
                          }
                          setTopRankAg(top5Agencia);
                          /**Tá bugado, arrumar depois  */
            })
        
    }

    //Top Veiculos
    const functionTopCarros = async()=> {
        let totalReservas = []
        let rank = []
        await axios.get('http://localhost:3030/reserva')
            .then(res => res.data)
            .then(res => {
                for (let reserva of res) {
                    totalReservas[parseInt(reserva.fk_id_veiculo)] = 0
                }
                for (let reserva of res) {
                    totalReservas[parseInt(reserva.fk_id_veiculo)] += parseFloat(reserva.valor)
                }
                for (let i = 1; i < totalReservas.length; i++) {
                    rank.push({ id: i, valor: totalReservas[i] })
                }
                rank.sort((a, b) => {
                    return b.valor - a.valor;
                })
                return rank;
            })
            .then(res=>{
                let top5Veiculos = []
                for (let veiculo of res) {
                    axios.get(`http://localhost:3030/veiculo/${veiculo.id}`)
                                .then(res => {
                                    return res.data})
                                .then(res => {
                                    return res[0]
                                })
                                .then(item=>item.modelo)
                                .then(nome=>{
                top5Veiculos.push(nome)
              })
                            }
                            console.log(top5Veiculos)
                            setTopRankVeiculo(top5Veiculos);
                            /**Tá bugado, arrumar depois  */
              })
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
                            <li>{topRankAg[0] }</li>
                            <li>{topRankAg[1] }</li>
                            <li>{ topRankAg[2]}</li>
                            <li>{ topRankAg[3]}</li>
                            <li>{topRankAg[4] }</li>
                        </ol>
                    </div>
                    <div> <h2>Top 5 Veículos</h2>
                        <ol className="overview-list ">
                            <li>{topRankVeiculo[0]}</li>
                            <li>{topRankVeiculo[1]}</li>
                            <li>{topRankVeiculo[2]}</li>
                            <li>{topRankVeiculo[3]}</li>
                            <li>{topRankVeiculo[4]}</li>
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