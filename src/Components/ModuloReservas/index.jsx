import { React, Component, useState, useEffect } from "react";
import garagem from "../../img/garagem.svg";
import seta from "../../img/seta.svg";
import axios from "axios";
import "./style.css";
import Resultados from "../Resultados";

export default function ModuloReservas() {
    const [Loc, setLocadora] = useState('')
    const [renavam, setRenavam] = useState('')
    const [placa, setPlaca] = useState('')
    const [kmRodado, setKmRodado] = useState('')
    const [custoDiaria, setCustoDiaria] = useState('')
    const [status, setStatus] = useState('')
    const [locadoraAtual, setLocadoraAtual] = useState('')
    const [locadoraProprietaria, setLocadoraProprietaria] = useState('')
    const [overlay, setOverlay] = useState(false)
    let nomelocadoras = []

    const removeDoubleElements = (list) => [...list.filter((item, index) => list.indexOf(item) === index)];

    useEffect(() => {
        getReservas()
    }, []);

    async function getReservas() {
        try {
            const resposta = await axios.get("http://localhost:3030/reserva")
            let idlocadoras = []
            resposta.data.map(data => {
                idlocadoras.push(data.fk_id_local_entrega)
                idlocadoras.push(data.fk_id_local_retirada)
            }
            )
            idlocadoras = removeDoubleElements(idlocadoras)
            idlocadoras.map(async (locadora) => {
                const locadoras = await axios.get(`http://localhost:3030/locadora/${locadora}`)
                nomelocadoras.push(locadoras.data[0])
                console.log(nomelocadoras)
            }

            )
        } catch (err) {
            console.log(err)
        }
    }

    if(nomelocadoras){nomelocadoras.map((item) => {
            return (
                <div className="containers" id="reservaFutura">
                    <div>
                        <p>{item.nome} - 31/12/2021 - 15H00</p>
                        <p>FOX 2020 - FXH 0E51</p>
                    </div>
                    <div>
                        <p>
                            <img src={seta} className="seta" alt="seta" />
                        </p>
                        <p>R$ 600,00</p>
                    </div>
                    <div>
                        <p>AG. 05 RJ 05/01/2022 - 15H00</p>
                        <div className="botaoContainer">
                            <button>Alterar</button>
                            <button>Cancelar</button>
                        </div>
                    </div>
                </div>
            )
        })
    }

}




{/* <main className="section">
        <h1>Todas Reservas</h1>
        <div id="formsFiltrar" className="forms formsFiltrar">
            <form id="filtros" name="filtros">
                <div className="formshdivs">
                    <div className="formsvdivs">
                        <h2>Filtrar</h2>
                        <img src={garagem} alt="garagem" id="garagem" />
                    </div>
                    <div className="formsvdivs">
                        <div className="formshdivs">
                            <div className="formsvdivs">
                                <input className="searchbar-item-size3" placeholder="Nome / E-mail do Locatário" type="text" />
                            </div>
                        </div>
                        <div className="formshdivs">
                            <div className="formsvdivs">
                                <input className="searchbar-item-size3" type="text" name="" id=""
                                    placeholder="Digite Aqui o Local de Retirada" />
                                <input className="searchbar-item-size3" type="text" name="" id=""
                                    placeholder="Digite Aqui o Local de Entrega" />
                            </div>
                            <div className="formsvdivs">
                                <input className="searchbar-item" type="date" name="" id="" placeholder="Dia da Retirada" />
                                <input className="searchbar-item" type="date" name="" id="" placeholder="Dia da Devolução" />
                            </div>

                            <div className="formsvdivs">
                                <input className="searchbar-item" type="time" name="" id="" placeholder="Horário da Retirada" />
                                <input className="searchbar-item" type="time" name="" id="" placeholder="Horário da Devolução" />
                            </div>
                        </div>
                        <div className="botaoContainer todasReservas">
                            <input type="checkbox" name="ocultarencerradas" id="ocultarencerradas" />
                            <label for="ocultarencerradas">
                                Ocultar Reservas Encerradas
                            </label>
                            <button onClick={getReservas()}>Buscar</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <section className="containers" id="reservaFutura">
            <div>
                <p>AG. 01 SP - 31/12/2021 - 15H00</p>
                <p>FOX 2020 - FXH 0E51</p>
            </div>
            <div>
                <p>
                    <img src={seta} className="seta" alt="seta" />
                </p>
                <p>R$ 600,00</p>
            </div>
            <div>
                <p>AG. 05 RJ 05/01/2022 - 15H00</p>
                <div className="botaoContainer">
                    <button>Alterar</button>
                    <button>Cancelar</button>
                </div>
            </div>
        </section>
        <section className="containers reservaEmAndamento">
            <div>
                <p>AG. 05 GO - 05/12/2021 - 15H00 </p>
                <p>GOL 2020 - MLK 0875</p>
            </div>
            <div>
                <p>
                    <img src={seta} className="seta" alt="seta" />
                </p>
                <p>R$ 1500,00</p>
            </div>
            <div>
                <p>AG. 01 SP 31/12/2021 - 15H00</p>
                <div className="botaoContainer">
                    <button className="alterar">Alterar</button>
                </div>
            </div>
        </section>

        <section className="containers reservaPassada">
            <div>
                <p>AG. 05 GO - 05/12/2021 - 15H00</p>
                <p>GOL 2020 - MLK 0875</p>
            </div>
            <div>
                <p>
                    <img src={seta} className="seta" alt="seta" />
                </p>
                <p>R$ 700,00</p>
            </div>
            <div>
                <p>AG. 01 SP 31/12/2021 - 15H00</p>
            </div>
        </section>
        <section className="containers reservaPassada">
            <div>
                <p>AG. 05 GO - 05/12/2021 - 15H00</p>
                <p>GOL 2020 - MLK 0875</p>
            </div>
            <div>
                <p>
                    <img src={seta} className="seta" alt="seta" />
                </p>
                <p>R$ 700,00</p>
            </div>
            <div>
                <p>AG. 01 SP 31/12/2021 - 15H00</p>
            </div>
        </section>
    </main> */}